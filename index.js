// Establishing elements
var searchHistoryList = $('#search-history-list');
var searchCityInput = $("#search-city");
var searchCityButton = $("#search-city-button");
var clearHistoryButton = $("#clear-history");
var currentCity = $("#current-city");


var currentTemp = $("#current-temp");
var currentHumidity = $("#current-humidity");
var currentWindSpeed = $("#current-wind-speed");
var UVindex = $("#uv-index");

var weatherContent = $("#weather-content")

// Get access to the OpenWeather API
var APIkey = "a17e1499228be1f9c294ac18b234c7d7";
// Easy access to data
var cityList = [];
// Find current date and display in title
var currentDate = moment().format('L');
$("#current-date").text("(" + currentDate + ")");
// Check if search history exists when page loads
initalizeHistory();
showClear();
// Hitting enter while input is focused will trigger
// value added to search history
$(document).on("submit", function () {
    event.preventDefault();
    // Grab value entered into search bar
    var searchValue = searchCityInput.val().trim();
    currentConditionsRequest(searchValue)
    searchHistory(searchValue);
    searchCityInput.val("");
});
// Clicking the search button will trigger
// value added to search history
searchCityButton.on("click", function (event) {
    event.preventDefault();
    // Grab value entered into search bar
    var searchValue = searchCityInput.val().trim();
    currentConditionsRequest(searchValue)
    searchHistory(searchValue);
    searchCityInput.val("");
});
// Clears the sidebar of prior searches
clearHistoryButton.on("click", function () {
    // Empty out the  city list array
    cityList = [];
    // Update city list history in local storage
    listArray();
    $(this).addClass("hide");
});
// Clicking on a button in the search history sidebar
// will populate the dashboard with info on that city
searchHistoryList.on("click", "li.city-btn", function (event) {
    // console.log($(this).data("value"));
    var value = $(this).data("value");
    currentConditionsRequest(value);
    searchHistory(value);
});
