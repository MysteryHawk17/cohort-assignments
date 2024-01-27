const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB=async()=>{
    const mongoURI=process.env.MONGO_URI;
    mongoose.connect(mongoURI).then(()=>{
        console.log("Database connected");
    }).catch((e)=>{
        console.log("Failed to connect to the database");
        console.log(e);
    })
}

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    coursesId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imageLink:{
        type:String,
    },
    published:{
        type:Boolean,
        default:true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course,
    connectDB
}