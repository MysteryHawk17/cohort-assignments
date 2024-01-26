function clock1() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    console.log(timeString);
}

setInterval(clock1,1000)


function clock2(){
    const date=new Date();
    let hours = date.getHours()
    if (hours > 12) {
        hours -= 12;
        flag = 'PM';
    } else if (hours === 0) {
        hours = 12;
    }
    hours=String(hours).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    let flag="AM";
    hours=String(hours)
    const timeString = `${hours}:${minutes}:${seconds} ${flag}`;
    console.log(timeString);
}

setInterval(clock2,1000)