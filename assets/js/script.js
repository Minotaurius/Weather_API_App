var btn = document.querySelector(".search");
var searchBar = document.querySelector(".search-bar");
// var dateTarget = document.querySelector(".current-date")
var today = moment().format('l');
var tomorr = moment().add(1, 'days').format('l');
var threeDays = moment().add(2, 'days').format('l');
var fourDays = moment().add(3, 'days').format('l');
var fiveDays = moment().add(4, 'days').format('l');
var sixDays = moment().add(5, 'days').format('l');
var currentCity;

$('.current-date').text(today)
$('.day1').text(tomorr)
$('.day2').text(threeDays)
$('.day3').text(fourDays)
$('.day4').text(fiveDays)
$('.day5').text(sixDays)



// function searchHistory() {

// }

btn.addEventListener('click', function(event){
    event.preventDefault()
    currentCity = searchBar.value;
    console.log(currentCity);
    $('.current-city').text(currentCity)
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=5&appid=813d1ce96b3d7fd78ff4cce567bf840d`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            // console.log(data)
            var currCityLon = data[0].lon;
            var currCityLat = data[0].lat;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currCityLat}&lon=${currCityLon}&appid=813d1ce96b3d7fd78ff4cce567bf840d`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(data)
        })
        })
});



// btn.addEventListener('click', function(event) {
//     event.preventDefault()
//     console.log($(this.input));
// })

// fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=813d1ce96b3d7fd78ff4cce567bf840d")
// .then (function(res) {
//     return res.json();
// });