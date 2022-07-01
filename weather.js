
class Weather{
  constructor(city){
    this.apiKey = "Insert_API_Key";
    this.city=city;
    
  }
  async getWeather(){
    console.log(this.city);
    const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
    const responseData =await response.json();
    return responseData;
  }
  changeLocation(city){
    this.city = city;
  }
}