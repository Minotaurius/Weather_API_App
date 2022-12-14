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

btn.addEventListener('click', function citySearch(event){
    event.preventDefault()
    currentCity = searchBar.value;
    console.log(currentCity);
    $('.current-city').text(currentCity)
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=5&appid=813d1ce96b3d7fd78ff4cce567bf840d`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            // console.log(data)
            var currCityLon = data[0].lon;
            var currCityLat = data[0].lat;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currCityLat}&lon=${currCityLon}&units=imperial&appid=813d1ce96b3d7fd78ff4cce567bf840d`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(data)
        $('#curr-temp').text('Temperature: ' + data.current.temp + 'F')
        $('#curr-wind').text('Wind: ' + data.current.wind_speed + 'mph')
        $('#curr-hum').text('Humidity: ' + data.current.humidity + '%')
        var UVIndex = $('#curr-uv').text('Current UV Index: ' + data.current.uvi)
        if (UVIndex < 2) {
            $(this).css("backgroud-color", 'green')
        }
        else if (UVIndex > 3 && UVIndex < 5) {
            $(this).css("backgroud-color", "yellow")
        }
        else if (UVIndex > 6 && UVIndex < 7) {
            $(this).css("backgroud-color", "orange")
        }
        else if (UVIndex > 8 && UVIndex < 10) {
            $(this).css("backgroud-color", "red")
        }
        else if (UVIndex > 11) {
            $(this).css("backgroud-color", "violet")
        }

        $('#day1-temp').text('Temp: ' + data.daily[0].temp.max + 'F')
        $('#day1-wind').text('Wind: ' + data.daily[0].wind_speed + 'mph')
        $('#day1-hum').text('Humidity: ' + data.daily[0].humidity + '%')
        var dayOneIcon = data.daily[0].weather[0].icon
        var dayOneURL = 'https://openweathermap.org/img/w/' + dayOneIcon + '.png'
        $('#day1-wi').attr('src', dayOneURL)

        $('#day2-temp').text('Temp: ' + data.daily[1].temp.max + 'F')
        $('#day2-wind').text('Wind: ' + data.daily[1].wind_speed + 'mph')
        $('#day2-hum').text('Humidity: ' + data.daily[1].humidity + '%')
        var dayTwoIcon = data.daily[0].weather[0].icon
        var dayTwoURL = 'https://openweathermap.org/img/w/' + dayTwoIcon + '.png'
        $('#day2-wi').attr('src', dayTwoURL)

        $('#day3-temp').text('Temp: ' + data.daily[2].temp.max + 'F')
        $('#day3-wind').text('Wind: ' + data.daily[2].wind_speed + 'mph')
        $('#day3-hum').text('Humidity: ' + data.daily[2].humidity + '%')
        var dayThreeIcon = data.daily[0].weather[0].icon
        var dayThreeURL = 'https://openweathermap.org/img/w/' + dayThreeIcon + '.png'
        $('#day3-wi').attr('src', dayThreeURL)

        $('#day4-temp').text('Tempe: ' + data.daily[3].temp.max + 'F')
        $('#day4-wind').text('Wind: ' + data.daily[3].wind_speed + 'mph')
        $('#day4-hum').text('Humidity: ' + data.daily[3].humidity + '%')
        var dayFourIcon = data.daily[0].weather[0].icon
        var dayFourURL = 'https://openweathermap.org/img/w/' + dayFourIcon + '.png'
        $('#day4-wi').attr('src', dayFourURL)

        $('#day5-temp').text('Temp: ' + data.daily[4].temp.max + 'F')
        $('#day5-wind').text('Wind: ' + data.daily[4].wind_speed + 'mph')
        $('#day5-hum').text('Humidity: ' + data.daily[4].humidity + '%')
        var dayFiveIcon = data.daily[0].weather[0].icon
        var dayFiveURL = 'https://openweathermap.org/img/w/' + dayFiveIcon + '.png'
        $('#day5-wi').attr('src', dayFiveURL)
        });
        });
});
