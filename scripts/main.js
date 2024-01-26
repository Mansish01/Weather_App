const apiKey ="70b9b51512c0d01a18381e55d1549f50";
// const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=kathmandu";
const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


async function checkWeather (city){

    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.info').style.display = "none";

    }
    else{
        var data = await response.json();

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        // document.querySelector('.city').innerHTML = city;
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    
    
        const weather  = document.querySelector('.info img')
        console.log(data.weather[0].main)
        // console.log(`"images/${data.weather[0].main}.png"`);
    
        // weather.src = `"images/${data.weather[0].main}.png"`;
    
        // console.log(data);
        if (data.weather[0].main === 'Clouds'){
            weather.src = "images/Clouds.png";
        }
    
        else if (data.weather[0].main === 'Clear'){
            weather.src = "images/clear.png";
        }
    
        else if (data.weather[0].main === 'Drizzle'){
            weather.src = "images/drizzle.png";
        }
    
        else if (data.weather[0].main === 'Mist'){
            weather.src = "images/Mist.png";
        }
        else if (data.weather[0].main === 'Rain'){
            weather.src = "images/rain.png";
        }
        else if (data.weather[0].main === 'Snow'){
            weather.src = "images/snow.png";
        }
    
        document.querySelector('.info').style.display = 'block';
        document.querySelector('.error').style.display = "none";

    }

}
const inputElement = document.querySelector('.city-input');
const buttonElement = document.querySelector('.search-btn');

buttonElement.addEventListener('click', () => {
   //yaha bata value return garne haina , aru kunai function run garne ho 
    checkWeather(inputElement.value);
    inputElement.value = '';
});


