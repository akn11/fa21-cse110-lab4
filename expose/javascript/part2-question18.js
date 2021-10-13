function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

interval = setInterval(printTime, 1000);

