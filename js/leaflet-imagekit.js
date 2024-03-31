// Assuming you have a function to make API requests
const imagePath = "/path/to/your/image.jpg";

fetch('/your-vercel-function-endpoint', {
  method: 'POST',
  body: JSON.stringify({ imagePath }),
})
.then(response => response.json())
.then(data => {
  // Use the data.imageURL in your Leaflet code
})
.catch(error => {
  console.error(error);
});