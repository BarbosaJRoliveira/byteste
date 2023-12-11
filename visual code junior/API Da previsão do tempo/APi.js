const apikey='45eeee0ee0d6c57caab5d15843fc6d73';
async function getweather(){
const cityInput=document.getElementById 
('city');
const city= cityInput.value;    
// chamada da api
const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=pt_br`);   


}