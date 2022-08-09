var btn = document.querySelector(".search");
var searchBar = document.querySelector(".search-bar");
var today = moment().format('l');
var tomorr = moment().add(1, 'days').format('l');
var threeDays = moment().add(2, 'days').format('l');
var fourDays = moment().add(3, 'days').format('l');
var fiveDays = moment().add(4, 'days').format('l');

var currentCity;


btn.onclick = function() {
    currentCity = searchBar.value;
    console.log(currentCity)
};

// btn.addEventListener('click', function(event) {
//     event.preventDefault()
//     console.log($(this.input));
// })

// fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=813d1ce96b3d7fd78ff4cce567bf840d")
// .then (function(res) {
//     return res.json();
// });