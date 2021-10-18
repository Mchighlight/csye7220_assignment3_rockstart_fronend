const axios = require('axios');

function getSong(songName){
    // get data from cache
    var songLink = 'http://172.17.0.5/:5000/Music/' + songName ;
    
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", songLink, false); 
    xmlHttpReq.send(null);
    return xmlHttpReq.responseText;
}

export default getSong ;

