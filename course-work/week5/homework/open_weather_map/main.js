/*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "hummidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image

*/


$(document).ready(function () {
  var apiKey = 'fc234b82da60409ff6d04f49defd596a';
  var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

  $.get(weatherUrl + 'New York City')
    .fail(function (xhr) {
      console.log(xhr);
    })
  	.done(function (response) {
  		console.log(response);
				var temp = response.main.temp;
				var humidity = response.main.humidity;
				var speed = response.wind.speed
				// so you plug that json shit from the http://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=fc234b82da60409ff6d04f49defd596a&units=imperial into Jsonlint.com or whatever and then you'll find the temp information within the object main. So then you just go response.main.temp --> because that's how you access that information within the object.
				$('#nyc-weather')
				.append('<p> the temperature is ' + temp + ' degrees </p>')
				.append('<p> the humidity is ' + humidity + ' percent </p>')
				.append('<p> the wind speed is ' + speed + ' mph </p>')
			});
		
	$('#weather-form').submit(function (event) {
		event.preventDefault();

		//get user input

		var city = $('#city').val();
		var state = $('#state').val();

  		$.ajax({
  			url: weatherUrl + city + ',' + state,
  			type: 'GET',
  			success: function (response) {
  				// pipe AJAX reponse to outside function for cleaner code
  				outputWeather(response);
  			},
  			error: function (xhr) {
  				console.log(xhr);
  			}
  		});
  	  })

  		function outputWeather (response){
  			console.log(response);

  			var city = response.name; // if I delete this, don't I still capture city?
  			var temp = response.main.temp;
			var humidity = response.main.humidity;
			var speed = response.wind.speed
  
  	

  		 $('#weather-output')
  			.empty() // be sure to clear out any data from previous searches!
  			.append('<p>City: ' + city + '</p>')
  			.append('<p>Temperature: ' + temp + '</p>')
  			.append('<p>Humidity: ' + humidity + '</p>')
  			.append('<p>Wind Speed: ' + speed + '</p>')
  		}
		console.log(url);
	});






