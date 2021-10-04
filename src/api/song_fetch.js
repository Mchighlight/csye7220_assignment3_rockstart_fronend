const axios = require('axios');
const fs = require('browserify-fs');

async function getSong(songName){
    // get data from cache
    var songLink = 'http://localhost:5000/Music/' + songName ;

    const config = {
        method: 'get',
        url: songLink
    }

    let res = await axios(config)
    let data = res.data;

    fs.writeFile(songName+'.txt', data, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log(songName+'.txt');
        console.log("Writeen song succesfully");
        //file written successfully
    })

    fs.readFile(songName+'.txt', (err, data) => {
        // error handling using throw
        if (err) {
          console.error(err)
          return
        }
        // showing fetched data from the file onto the console 
        console.log(data.toString()); 
    })
    return data;
}

export default getSong ;

