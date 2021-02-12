
const eventstURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


if (document.getElementById("preston")) {
    townName = "Preston";
} else if (document.getElementById("sodasprings")) {
    townName = "Soda Springs";
} else if (document.getElementById("fishhaven")) {
    townName = "Fish Haven";
}


fetch(eventstURL)
      .then(function (response) {
        return response.json(); 
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  
        const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++){
        if (towns[i].name == townName) { 

        let boxevent = document.createElement('section');
        let h3 = document.createElement('h3');

        
        h3.textContent = towns[i].name + " Events:";

        
        boxevent.appendChild(h3);

        
        for (let e = 0; e < towns[i].events.length; e++) {
        let p = document.createElement('p');
        p.textContent = towns[i].events[e];
        boxevent.appendChild(p);
        }

        document.querySelector('div.events').appendChild(boxevent);
        }
    }
});