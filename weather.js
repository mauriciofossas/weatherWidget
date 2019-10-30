function fetchWeather(){
    
    const pathToPhpFile = 'https://classes.engineering.wustl.edu/cse330/content/weather_json.php';
    const xmlHttp = new XMLHttpRequest;
    xmlHttp.open("GET", pathToPhpFile, true);
    xmlHttp.addEventListener("load", myCallback, false);
    xmlHttp.send(null);
    function myCallback(event){
        let ourText = event.target.responseText;
        let parsedJSON = JSON.parse(ourText);
        let city = parsedJSON.location.city;
        let state = parsedJSON.location.state;
        //const divElements = document.getElementById("weatherWidget").childNodes;
        const divElements = document.getElementsByTagName("div");
        divElements[1].innerHTML = "<strong>" + city + "</strong>" + " " + state;
        let humidity = parsedJSON.atmosphere.humidity;
        divElements[2].textContent = humidity;
        let temperature = parsedJSON.current.temp;
        divElements[3].textContent = temperature;

        const imgElements = document.getElementsByTagName("img");
        let tomorrowsCode = parsedJSON.tomorrow.code;
        let dayAfterTomorrowsCode = parsedJSON.dayafter.code;
        imgElements[0].src = "http://us.yimg.com/i/us/nws/weather/gr/"+ tomorrowsCode +"ds.png";
        imgElements[1].src = "http://us.yimg.com/i/us/nws/weather/gr/"+ dayAfterTomorrowsCode +"ds.png";
    }
}
document.addEventListener("DOMContentLoaded", fetchWeather, false);
document.getElementById("refresh").addEventListener("click", fetchWeather, false);