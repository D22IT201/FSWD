const url = require('url');


function resolveAbsoluteURL(baseURL, relativePath) {
  const absoluteURL = url.resolve(baseURL, relativePath);
  console.log('Absolute URL:', absoluteURL);
}


// Example usage:
const baseURL = 'https://www.flipkart.com/oppo-reno-10-5g-ghj68-store?param=749';
const relativePath = '/page/subpage';


resolveAbsoluteURL(baseURL, relativePath);
