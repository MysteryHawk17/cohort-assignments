const jwt=require("jsonwebtoken")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    if(token==undefined){
        return res.status(400).json({message:"Invalid token"});
    }
    const text=token.split(" ")[1];
    const resposne = jwt.verify(text, process.env.jwt_secret);
    if (resposne) {
        const data = jwt.decode(text);
        req.username = data.username;
        next();
    }
    else {
        return res.status(400).json({ message: "Unauthorized" });
    }
}

module.exports = userMiddleware;
