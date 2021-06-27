var button = document.querySelector('.btn');
var inputValue = document.querySelector('#searchInput');
var place = document.querySelector('.place');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var feelsLike = document.querySelector('.feels');
var max = document.querySelector('.max');
var min = document.querySelector('.min');

button.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=3585136ad7ccdb340a7889ac49a7d1cb')
  .then(response => response.json())
  .then(data => {
    var placeValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var feelsValue = data['main']['feels_like'];
    var maxValue = data['main']['temp_max'];
    var minValue = data['main']['temp_min'];

    place.innerHTML = "<u>" + placeValue + "</u>";
    desc.innerHTML = descValue;
    temp.innerHTML = "Current Temp: "+ Math.round(tempValue) + '&#x2109;';
    feelsLike.innerHTML = "Feels like: " + Math.round(feelsValue) + '&#x2109;';
    max.innerHTML = "High for today: " + Math.round(maxValue)  + '&#x2109;';
    min.innerHTML = "Low for today: " + Math.round(minValue) + '&#x2109;';
  })

.catch(err => alert("Wrong City Name!"))
})