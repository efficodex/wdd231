// -----------------forecast------------
const urlForecast = "https://api.openweathermap.org/data/2.5/forecast?q=Lima&appid=6ba33a6b5a98aa92151ac10ed19afe82&units=imperial"

const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");

const forecast1 = document.querySelector(".forecast1");
const forecast2 = document.querySelector(".forecast2");
const forecast3 = document.querySelector(".forecast3");

async function apiFetch2() {
    try {
      const response2 = await fetch(urlForecast);
      if (response2.ok) {
        const data2 = await response2.json();
        console.log(data2); // this is for testing the call
        displayResults2(data2);
      } else {
          throw Error(await response2.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch2();

function displayResults2 (weatherData){
  let dia = weatherData.list[4].dt_txt;
  var date1 = Date.parse(dia);
  var finalDate1 =new Date(date1).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) 
  day1.innerHTML = finalDate1;

  let dia2 = weatherData.list[12].dt_txt;
  var date2 = Date.parse(dia2);
  var finalDate2 =new Date(date2).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) 
  day2.innerHTML = finalDate2;

  let dia3 = weatherData.list[19].dt_txt;
  var date3 = Date.parse(dia3);
  var finalDate3 =new Date(date3).toLocaleDateString('en-us', { weekday:"long", month:"short", day:"numeric"}) 
  day3.innerHTML = finalDate3;

  forecast1.innerHTML = `${weatherData.list[4].main.temp} F°`
  forecast2.innerHTML = `${weatherData.list[12].main.temp} F°`
  forecast3.innerHTML = `${weatherData.list[19].main.temp} F°`
}