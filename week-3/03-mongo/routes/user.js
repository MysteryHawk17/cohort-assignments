const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const z = require("zod");
const { User, Course } = require("../db");
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
        const findUser = await User.findById({ _id: req.user._id });
        findUser.coursesId.push(courseId);
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
        const userId = req.user._id;
        const findUser = await User.findById({ _id: userId });
        console.log(findUser);
        const arr=[];
        findUser.coursesId.map((e)=>{
            arr.push(e.toString())
        })
        console.log(arr);
        const findCourses = await Course.find({ _id: { $in: arr } });
        return res.status(200).json({ purchasedCourses: findCourses });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured" });
    }
});

module.exports = router