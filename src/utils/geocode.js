const request = require('request')

const geocode = (address,callback) => {
    const  url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address)  + '.json?access_token=pk.eyJ1Ijoic2hydXRpc2luZ2g2NzgiLCJhIjoiY2tuMDFlOXh5MGppcDJ2bzNnbWhxMXhpeSJ9.9JUngzLGjI7xkWAETBSLxw&limit=1'
    request({ url, json: true}, (error,{body}) => {
       if(error)
       callback("Unablel to connect to the internet")
       else if(body.features.length == 0)
       callback("Unable to find location")
       else{ callback(undefined, {
        lat : body.features[0].center[1],
        long : body.features[0].center[0],
        loc : body.features[0].place_name
       })
       }
 })
 }
 module.exports = geocode