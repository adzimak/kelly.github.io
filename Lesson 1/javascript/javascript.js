funtion todayDate(){
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
    var hour = d.getHours();
    var minute = d.getMinutes();

    output = dayOfWeek + dayOfMonth + "@" + hour + ":" + minutes;
    document.getElementById("output").innerHTML = output;
}