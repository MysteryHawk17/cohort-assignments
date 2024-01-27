const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const z = require("zod")
const jwt = require("jsonwebtoken")
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const userCheck = z.object({
        username: z.string(),
        password: z.string()
    });
    const checkResponse = userCheck.safeParse(req.body);
    if (checkResponse.success === false) {
        return res.status(400).json({ message: "Invalid Inputs" });
    }
    try {
        const { username, password } = req.body;
        const findUser = await User.findOne({ username: username })
        if (findUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = await User.create({
            username: username,
            password: password
        })
        return res.status(200).json({ message: "User created successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured" });
    }

});

router.post('/signin', async (req, res) => {
    // Implement User signup logic
    const loginCheck = z.object({
        username: z.string(),
        password: z.string()
    });
    const checkResponse = loginCheck.safeParse(req.body);
    if (checkResponse.success === false) {
        return res.status(400).json({ message: "Invalid inputs" });
    }
    try {
        const { username, password } = req.body;
        const findUser = await User.findOne({ username: username, password: password });
        if (!findUser) {
            return res.status(404).json({ message: "User not exists" });
        }
        const token = jwt.sign({ username: username }, process.env.jwt_secret);

        res.status(200).json({ token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "ERROR OCCURED" });
    }


});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const allCourses = await Course.find({});
        return res.status(200).json({ courses: allCourses })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured" });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    try {
        const findCourse = await Course.findById({ _id: courseId });
        if (!findCourse) {
            return res.status(404).json({ message: "Failed to find the course" });
        }
        const findUser = await User.findOne({ username: req.username })
        findUser.coursesId.push(courseId.toString());
        await findUser.save();
        return res.status(200).json({ message: 'Course purchased successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured" })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const findUser = await User.findOne({ username: req.username });
        const arr = [];
        findUser.coursesId.map((e) => {
            arr.push(e.toString());
        })
        const findCourses = await Course.find({ _id: { $in: arr} });
        
        return res.status(200).json({ purchasedCourses: findCourses });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured" });
    }
});

module.exports = router