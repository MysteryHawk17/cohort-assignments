const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const userName = req.headers.username;
        const password = req.headers.password;
        const findUser = await User.findOne({ username: userName, password: password });
        if (!findUser) {
            return res.status(400).json({ message: "Not allowed" })
        }
        req.user = findUser;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occured" })
    }
}

module.exports = userMiddleware;