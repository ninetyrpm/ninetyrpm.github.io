async function getSignedImageUrl(imagePath) {
  // Vercel function endpoint
  const endpoint = '/api/imagekit.js';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: imagePath,
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