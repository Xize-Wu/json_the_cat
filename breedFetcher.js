const request = require("request");
const url =  " https://api.thedcatapi.com/v1/breeds/search?q=sib";

//console.log(url}
request(url, (error, response, body) => {
  if (error) {
    return console.log(`There is an error!\nDetails: ${error}`);
  }
  
  
  const data = JSON.parse(body);
  console.log(typeof data);
  console.log(data);
});
