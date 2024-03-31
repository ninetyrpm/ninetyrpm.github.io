exports.handler = async (event, context) => {
    // Retrieve AWS credentials from Vercel environment variables
    const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
  
    // Validate if credentials are present
    if (!accessKeyId || !secretAccessKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Missing AWS credentials in environment variables' }),
      };
    }
  
    // Configure AWS SDK with retrieved credentials
    AWS.config.update({
      accessKeyId,
      secretAccessKey,
    });
  
    // You can optionally perform additional logic here, 
    // such as retrieving specific data from AWS services
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully retrieved AWS credentials' }),
    };
  };
  
  module.exports = { handler }; // Export the handler function explicitly
  