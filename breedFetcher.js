const request = require("request");
//console.log(url}
const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request( url , (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (Object.keys(body).length === 2 && body["0"] === "[" && body["1"] === "]") {
      return callback(error,null);
    }
  
    const data = JSON.parse(body);
    // console.log(typeof data);
    if (breedName) {callback(null,data[0]["description"])}; return;
  });
};



module.exports = { fetchBreedDescription };
