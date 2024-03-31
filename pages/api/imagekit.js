const imagekit = require('imagekit');

const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;

imagekit.config({
  publicKey: publicKey,
  privateKey: privateKey,
  // urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT, // Optional, if using a custom endpoint
});

// Default Export
export default async function handler(req, res) {
  // Rest of your function logic using imagekit with retrieved credentials
  const path = "/default-image.jpg";
  const transformation = [{ height: 300, width: 400 }];
  const signed = true;
  const expireSeconds = 300;

  try {
    const imageURL = imagekit.url({ path, transformation, signed, expireSeconds });
    res.status(200).json({ imageURL });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate signed URL" });
  }
};
