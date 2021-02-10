var main = document.querySelector('main');
        var article = document.createElement('article');

        var requestURL = "https://'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
        
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
            var weather = request.response;
            weatherInfo(weather);
        }

        function weatherInfo(jsonObj) {
            var townArray = jsonObj["towns"];
            for (var i = 0; i < townArray.length; i++) {
                if (townArray[i].name != "Placerton") {
                    var div = document.createElement("div");
                    var h1 = document.createElement("h1");
                    var p1 = document.createElement("p");
                    var p2 = document.createElement("p");
                    var p3 = document.createElement("p");
                    var p4 = document.createElement("p");
                }
            }
            main.appendChild(article);
        }
    