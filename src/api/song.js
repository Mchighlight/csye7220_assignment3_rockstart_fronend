const axios = require('axios');

async function getSong(songName){
    // get data from cache
    var songLink = 'http://localhost:5000/Music/' + songName ;

    const config = {
        method: 'get',
        url: songLink
    }

    let res = await axios(config)
    
    

    return res.data;
}

export default getSong ;

