const apiKey="a75f7e97225653ba7051fb4de4aa0b2d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchcont=document.querySelector(".search button");

async function checkWeather(city){
    const response= await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
   document.querySelector(".city").innerHTML="Weather in "+data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML="Humidity: "+data.main.humidity+"%";
    document.querySelector(".wind").innerHTML="Wind speed: "+data.wind.speed+" km/h";
}
searchcont.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})

