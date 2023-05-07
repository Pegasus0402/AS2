function getHolidays() {
	const country = document.getElementById("country").value;
	
	// Make API call to get holidays
	// Replace API_KEY and API_URL with your own API key and URL
	fetch(`API_URL/holidays?api_key=API_KEY&country=${country}`)
		.then(response => response.json())
		.then(data => {
			let holidays = data.holidays;
			let output = "";
			holidays.forEach(holiday => {
				output += `<p>${holiday.name} - ${holiday.date}</p>`;
			});
			document.getElementById("output").innerHTML = output;
		})
		.catch(error => console.log(error));
}
