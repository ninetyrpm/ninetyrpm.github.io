var imagekit = require('imagekit');

const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;

console.log("Public Key:", process.env.IMAGEKIT_PUBLIC_KEY);
console.log("Private Key:", process.env.IMAGEKIT_PRIVATE_KEY);

if (!process.env.IMAGEKIT_PUBLIC_KEY || !process.env.IMAGEKIT_PRIVATE_KEY) {
  console.error("Missing ImageKit Credentials in Environment Variables");
  return { error: "Failed to retrieve ImageKit credentials" };
}

imagekit.config({
  publicKey: publicKey,
  privateKey: privateKey,
  // urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT, // Optional, if using a custom endpoint
});

// Default Export
async function handler(req, res, imagePath) {
  const path = imagePath;
  const transformation = [{ height: 300, width: 400 }]; // Optional
  const signed = true;
  const expireSeconds = 300;

  try {
    var imageURL = imagekit.url({
      path,
      transformation,
      signed,
      expireSeconds
    });
    res.status(200).json({ imageURL });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate signed URL" });
  }
};
