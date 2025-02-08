require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (including index.html)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to send the Google Maps API key to the client
app.get('/api/config', (req, res) => {
  res.json({ googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


//chatgpt