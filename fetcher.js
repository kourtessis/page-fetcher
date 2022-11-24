///TERMINAL INPUT: node fetcher.js http://www.example.edu/ ./index.html

const URL = process.argv[2];  // Grab varaibles: Index 0 = website, index 1 = filepath
const filePath = process.argv[3];
const fs = require('fs');
const request = require('request');
//downloading website



request(URL, (error, response, body) => {
  let data = error + response + body;
    
  fs.writeFile(filePath, data, (err) => {
      
    if (err)
      console.log(err);
  
    else {
      fs.readFile(filePath, 'utf8', (error, data) => {
        if (!error) {
          console.log(`Downloaded and saved ${data.length} bytes to ${filePath}`);
        }
      });
    }
  });
});
