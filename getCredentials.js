const { VercelRequest, VercelResponse } = require('@vercel/node');

export default async function (req: VercelRequest, res: VercelResponse) {
  try {
    const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;

    // Implement any additional authentication/authorization logic here

    if (!accessKeyId || !secretAccessKey) {
      throw new Error("Missing AWS credentials in environment variables");
    }

    const credentials = { accessKeyId, secretAccessKey };
    res.status(200).json(credentials);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to retrieve credentials");
  }
}