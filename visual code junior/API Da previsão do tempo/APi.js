const apikey='45eeee0ee0d6c57caab5d15843fc6d73';
async function getweather(){
const cityInput=document.getElementById 
('city');
const city= cityInput.value;    
// chamada da api
const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=pt_br`);   
// resposta da API transformada em jason
const data=await response.json();

    if (data.cod===200) { //200 indica uma resposta bem-sucedida cidade encontrada na API
        const divVazia = document.getElementById('weatherInfo');
        const descricaoTempo= data.weather[0].description;
        const temperature = (data.main.temp - 273.15).toFixed(1);
        const umidade = (data.main.humidity);
        const tempMin = (data.main.temp_min - 273.15).toFixed(1);
        const tempmax = (data.main.temp_max - 273.150).toFixed(1);
        // a chamada tem que ser igual a documentação
        divVazia.innerHTML=`
        <h2> previsão para ${city}</h2>
        <p> Descrição do tempo: ${descricaoTempo}</p>
        <p>Temperatura: ${temperature} c</p>
        <p>umidade: ${umidade}%temp<p>
        <p>Temperatura Minima:${tempMin}%<p>
        <p>Temperatura Maxima;${tempmax}%<p>`

        

    }
    

}



