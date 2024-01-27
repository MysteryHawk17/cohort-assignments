const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const userName = req.headers.username;
        const password = req.headers.password;
        const findAdmin = await Admin.findOne({ username: userName, password: password });
        if (!findAdmin) {
            return res.status(400).json({ message: "Not allowed" })
        }
        req.admin = findAdmin;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occured" })
    }

}

module.exports = adminMiddleware;