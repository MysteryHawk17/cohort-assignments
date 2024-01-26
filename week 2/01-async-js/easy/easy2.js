let c=0;
function counter(c){
    c=c+1;
    console.log(c);
    
    setTimeout(()=>{
        counter(c)
    },1000);
}
counter(c);