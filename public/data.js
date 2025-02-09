// script.js

// Function to fetch JSON data, extract it into an array, and return the array
async function fetchData(year, _type) {
    return fetch('localization.json') // Path to your JSON file
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  // Parse the JSON data
        })
        .then(data => {
            // Create an array to store the extracted data
            const extractedData = [];

            // Loop through each item in the JSON array and push to the extractedData array
            data.forEach(pt => {
                if (pt.year == year) {
                    var type = _type == 'p10_concentration' ? pt.p10_concentration :
                        _type == 'p25_concentration' ? pt.p25_concentration :
                            pt.no2_concentration;
                    if (type != 'NA') {
                        extractedData.push({
                            location: new google.maps.LatLng(pt.latitude, pt.longitude),
                            weight: type
                        });
                    }
                }
            });

            // Return the array of extracted data
            return extractedData;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}