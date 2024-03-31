async function getSignedImageUrl(imagePath) {
  // Assuming you have your Vercel function endpoint URL stored in a variable
  const endpoint = 'YOUR_VERCEL_FUNCTION_ENDPOINT';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ imagePath }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch signed URL: ${response.statusText}`);
    }

    const data = await response.json();
    return data.imageURL;
  } catch (error) {
    console.error('Error fetching signed URL:', error);
    // Handle error gracefully in your application (e.g., display an error message)
    return null; // Or throw an error for further handling
  }
}

// Example usage (assuming you have a Leaflet map and a marker)
const marker = L.marker([LATITUDE, LONGITUDE]);

async function displayImageOnMarker() {
  const imagePath = "/path/to/your/image.jpg";  // Replace with your actual image path
  const imageUrl = await getSignedImageUrl(imagePath);

  if (imageUrl) {
    const imageIcon = L.icon({
      iconUrl: imageUrl,
      iconSize: [50, 50], // Adjust icon size as needed
    });
    marker.setIcon(imageIcon);
    marker.addTo(map);
  } else {
    // Handle cases where image URL retrieval fails (e.g., display a default icon)
    console.error('Failed to retrieve image URL');
    // You can add code to display a default icon here
  }
}

displayImageOnMarker(); // Call the function to display the image on the marker