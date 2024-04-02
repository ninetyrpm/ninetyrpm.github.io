const ImageKit = require('imagekit');

const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;

if (!process.env.IMAGEKIT_PUBLIC_KEY || !process.env.IMAGEKIT_PRIVATE_KEY) {
  console.error("Missing ImageKit Credentials in Environment Variables");
  return { error: "Failed to retrieve ImageKit credentials" };
}

var imagekit = new ImageKit({
  publicKey : publicKey,
  privateKey : privateKey,
  urlEndpoint : "https://ik.imagekit.io/bcbbiketag/",
  // authenticationEndpoint: "/api/vercel-imagekit.js"
});

console.log("POINT A");

// Default Export
export default async function handler(request, response) {
  const { imagePath } = request.body;

  try {
    var imageURL = imagekit.url({
      path: "/tag-photos/Waves.jpg",
      queryParameters : {
        "v" : "123"
      },
      transformation : [{
        height: 300,
        width: 400
      }],
      signed : true,
      expireSeconds : 300
    });
    console.log("POINT C");
    res.status(200).json({ imageURL });

  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Failed to generate signed URL" });
    console.log("POINT FAIL");
  }
};
