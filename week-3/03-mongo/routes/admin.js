const { Router, response } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const z = require("zod");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const adminCheck = z.object({
        username: z.string(),
        password: z.string()
    })
    try {

        const checkResponse = adminCheck.safeParse(req.body)
        if (checkResponse.success == false) {
            return res.status(400).json({ message: "Invalid Inputs" });
        }
        const { username, password } = req.body;
        const findAdmin = await Admin.findOne({ username: username });
        if (findAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }
        const newAdmin = await Admin.create({
            username: username,
            password: password
        });
        return res.status(200).json({ message: 'Admin created successfully' })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occured" });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {

    try {
        const courseCheck = z.object({
            title: z.string(),
            description: z.string(),
            imageLink: z.string().url(),
            price: z.number()
        })
        const checkResponse = courseCheck.safeParse(req.body)
        if (checkResponse.success === false) {
            return res.status(400).json({ message: "Invalid Inputs" });
        }
        const { title, description, price, imageLink } = req.body;
        const newCourse = await Course.create({
            title,
            description,
            imageLink,
            price
        })
        res.status(200).json({ message: 'Course created successfully', courseId: newCourse._id })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured" });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const allData = await Course.find();
        res.status(200).json({ course: allData })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error Occured" });
    }

});

module.exports = router;