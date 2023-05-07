function getAccommodation() {
	const location = document.getElementById("location").value;
	
	// Make API call to get accommodation
	// Replace API_KEY and API_URL with your own API key and URL
	fetch(`API_URL/accommodation?api_key=API_KEY&location=${location}`)
		.then(response => response.json())
		.then(data => {
			let accommodation = data.accommodation;
			let output = "";
			accommodation.forEach(acc => {
				output += `<p>${acc.name} - ${acc.price}</p>`;
			});
			document.getElementById("output").innerHTML = output;
		})
		.catch(error => console.log(error));
}
