var weather = {
    "apiKey": "bbb26cb7f4b0fb99ad7ec337dc6bb568",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=pl&units=metric&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        

        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed } = data.wind;
        const { pressure } = data.main;

        
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = name + ", ";
        document.querySelector(".country").innerText = country;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerHTML ="<img class=\"icon-weather\" src=\"/img/humidity.png\">" + "Wilgotność: " + humidity +"%";
        document.querySelector(".wind").innerHTML ="<img class=\"icon-weather\" src=\"/img/wind (1).png\">" + "Prędkość wiatru: " + (Math.round(speed * 10) / 10).toFixed(1) + " km/h";
        document.querySelector(".pressure").innerHTML ="<img class=\"icon-weather\" src=\"/img/blood-pressure.png\">" + "Ciśnienie: " + pressure + " hPa";

    },
    

    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    },

    

};

// wyszukiwarka //
var info = document.querySelector('.info');
document.querySelector('.search button').addEventListener("click",function(){
    document.querySelector('.box-main').classList.add('box-block')
    weather.search();
    info.remove();
})

document.querySelector('.search-bar').addEventListener("keyup", function(event){
    if(event.key== "Enter"){
        weather.search();
    };
})

