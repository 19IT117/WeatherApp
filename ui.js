class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.humidity = document.getElementById('w-humidity');
    this.feels_like = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }
  paint(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main ;
    this.string.textContent = weather.weather[0].description;
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    //this.details.textContent ;
    this.humidity.textContent = "Humidity : "+weather.main.humidity;
    this.feels_like.textContent ="Feels like : "+ weather.main.feels_like + " Kelvin";
    this.wind.textContent = "Winds Speed : "+ weather.wind.speed + " KMpH";
  }
}