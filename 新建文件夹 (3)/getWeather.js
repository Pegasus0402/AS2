function getWeather() {
	const location = document.getElementById("location").value;
	
	// Make API call to get weather
	// Replace API_KEY and API_URL with your own API key and URL
	fetch(`API_URL/weather?api_key=API_KEY&location=${location}`)
		.then(response => response.json())
		.then(data => {
			let weather = data.weather;
			let output = `<p>${weather.location} - ${weather.temperature} degrees Celsius</p>`;
			document.getElementById("output").innerHTML = output;
		})
		.catch(error => console.log(error));
}
