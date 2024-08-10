const cron = require('node-cron');
const axios = require('axios');

// Function to make the API call
async function callApi() {
  try {
    const response = await axios.post(
      'https://weather-hub-five.vercel.app/api/send-email',
      {
        // Add headers if needed
        // headers: { 'Content-Type': 'application/json' },
      }
    );
    console.log('API call successful:', response.data);
  } catch (error) {
    console.error('Error calling API:', error.message);
  }
}

// Schedule the API call every 5 minutes
cron.schedule('*/5 * * * *', () => {
  console.log('Running scheduled task');
  callApi();
});


console.log('Scheduled task started');