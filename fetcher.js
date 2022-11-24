///TERMINAL INPUT: node fetcher.js http://www.example.edu/ ./index.html

const URL = process.argv[2];  // URL from argv index 2
const filePath = process.argv[3]; // URL from argv index 3
const fs = require('fs');
const request = require('request');


request(URL, (error, response, body) => {
  let data = error + response + body; // Adding webpage elements to text file.
    
  fs.writeFile(filePath, data, (err) => { // Create text file
      
    if (err)
      console.log(err); //display if error in page
  
    else {
      fs.readFile(filePath, 'utf8', (error, data) => { // Read new file for purpose of getting data.length === size in bytes
        if (!error) {
          console.log(`Downloaded and saved ${data.length} bytes to ${filePath}`); //Output print to display filesize and path
        }
      });
    }
  });
});

//  OUTPUT EXAMPLE: Downloaded and saved 1275 bytes to ./index.html