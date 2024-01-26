const fs=require("fs");

function clearSpaces(s){
    arr=s.split(" ");
    newS="";
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=''){
            newS=newS+arr[i]+" "
        }
    }
    return newS.trim();
}

fs.readFile('sample.txt',"utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    
    newData=clearSpaces(data);
   
    fs.writeFile('sample.txt',newData,'utf-8',(err)=>{
        if(err){
            console.log("Failed to write back");
            console.log(err);
            return;
        }
        console.log("Written back to the file");
    })
})
