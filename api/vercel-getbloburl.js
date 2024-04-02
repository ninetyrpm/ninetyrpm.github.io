const { createSignedUrl } = require('@vercel/storage');

exports.handler = async (req, res) => {
  try {
    // Per Vercel regarding SDK authorization:
    // A read-write token is required to interact with the Blob SDK.
    // When you create a Blob store in your Vercel Dashboard, an environment variable with the value of the token is created for you.
    // If you deploy your application in the same Vercel project where your Blob store is located,
        // you do not need to specify the token parameter, as it's default value is equal to the store's token environment variable

    // Retrieve image information
    const imagePath = req.query.filePath; // Assuming image ID is sent in the query string
    const imageData = await yourDataStoreLogic(imagePath); // Fetch image details from your data store

    if (!imageData) {
      return res.status(404).json({ message: "Image not found" });
    }

    const blob = imageData.blob; // Assuming the data store entry has a 'blob' property
    const signedUrl = await createSignedUrl(blob.url, {
      expiresAt: Date.now() + 60 * 60 * 1000, // 1 hour in milliseconds
    });

    res.status(200).json({ url: signedUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to generate signed URL" });
  }
};
