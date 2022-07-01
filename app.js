const storage = new Storage();

const weatherLocation = storage.getLocationData();
console.log(weatherLocation);
// Init weather object
const weather = new Weather(weatherLocation);
document.addEventListener('DOMContentLoaded', getWeather);
const ui = new UI();

document.getElementById('w-change-btn').addEventListener('click',(e)=>{
const city = document.getElementById('city').value;
weather.changeLocation(city);
storage.setLocationData(city);
getWeather();
$('#locModal').modal('hide');
})
document.addEventListener('DOMContentLoaded',getWeather);
function getWeather(){
  weather.getWeather()
  .then(result =>{
    console.log(result);
    ui.paint(result);
  } )
  .catch(err => console.log(err));
}
