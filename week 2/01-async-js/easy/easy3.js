const fs=require("fs");

//reading file
fs.readFile('easy3file.txt',"utf-8",(err,data)=>{
    console.log(data);
})

//adding expensive operation
for(let i=1;i<1000000000;i++){}
console.log("after expensive operation");

//readFile being an async function executes seperatly while the thread continues the 
//execution of the js program . Even when the readFile is resolved it waits in the callback queue
//for the thread to become free after the execution of the expensive operation.