import http from 'k6/http';
import { check } from 'k6';

// Define the URL of the API that returns the list of products (used by the landing page)
const url = 'https://api.150.lebondeveloppeur.net/api/products';

export const options = {
  stages: [
    { duration: '15m', target: 10000 },
  ],
};

export default function () {
  // Send the GET request
  const res = http.get(url);

  // Log the response status code for each request
  console.log(`Response code: ${res.status}`);

  // Check if the response status is 200 OK
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}


//k6 run stress_test_get.js
