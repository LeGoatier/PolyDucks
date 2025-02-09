// script.js

// Function to fetch JSON data, extract it into an array, and return the array
function fetchData(year) {
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
        data.Update2024.forEach(pt => {
            if(pt.year == year){
                extractedData.push({
                    longitude: pt.longitude,
                    latitude: pt.latitude,
                    p10: pt.p10_concentration,
                    p25: pt.p25_concentration,
                    n02: pt.n02_concentration,
                  });
            }
        });
  
        // Return the array of extracted data
        return extractedData;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  // Calling the fetchData function and using the returned array
  fetchData(2018).then(extractedData => {
    console.log(extractedData);
    // You can do further processing here with the extracted data
  });