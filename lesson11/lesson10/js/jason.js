
        var main = document.querySelector('main');
        var article = document.createElement('article');

        var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
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

                    h1.textContent = townArray[i].name;
                    p1.textContent = "Motto: " + townArray[i].motto;
                    p2.textContent = "Year Founded: " + townArray[i].yearFounded;
                    p3.textContent = "Current Population: " + townArray[i].currentPopulation;
                    p4.textContent = "Average Rain Fall: " + townArray[i].averageRainfall;

                    div.appendChild(h1);
                    div.appendChild(p1);
                    div.appendChild(p2);
                    div.appendChild(p3);
                    div.appendChild(p4);
                    article.appendChild(div);
                }
            }
            main.appendChild(article);
        }
    