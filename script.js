const apiKey="7c1b7eb77bc14a75f80f11ae208f7501";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=`;
// console.log(apiUrl);

const cityEl=document.querySelector(".city");
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const WindSpeed=document.querySelector(".Wind");
const searchBox= document.querySelector(".search input")
const searchBtn= document.querySelector(".search button")
 const errorMessage=document.querySelector(".error");
const weather=document.querySelector(".weather")



async function checkWeather(city){

    try{
        if(!city) return
        const response=await fetch(apiUrl+ city);
        const data=await response.json();


        if(!response.ok){
         document.querySelector(".error").textContent ="Invalid city name";
         errorMessage.style.display="block"
         weather.style.display="none";
        return;
        }
       
         console.log(data);
         cityEl.textContent=data.name;
        temp.textContent=`${Math.round(data.main.temp)}°c`;
        humidity.textContent=`${data.main.humidity}%`
        WindSpeed.textContent=`${data.wind.speed}km/h`
        weather.style.display="block"
    }catch(error){
        console.log(error)
     
    }
   

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});


checkWeather();