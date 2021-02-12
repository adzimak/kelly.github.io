
function getWindChill() {
    var temp = document.getElementById("temp").textContent;
    var windspeed = document.getElementById("speed").textContent;
    
    var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16));
    
     var windChill= Math.round(windChill);
    
    if (temp <= 50 && windspeed >= 3) {
        document.getElementById("windChill").textContent = windChill;
    } else {
        document.getElementById("windChill").innerHTML = "";
    }
    }