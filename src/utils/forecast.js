const request = require('request')

const forecast = (long,lat,callback) => {
    const  url = 'http://api.weatherstack.com/current?access_key=be621d906efe71a95074412e0bf827f0&query='+long  + ',%'+lat
    request({ url, json: true}, (error , { body }) => {
       if(error)
       callback("Unablel to connect to the internet")
       else if(body.error)
       callback("Unable to find location")
       else {
            
           callback(undefined,'It is currently ' + body.current.temperature+ ' but it feels like '+body.current.feelslike+' and the humidity is '+body.current.humidity )
       }  
 })
 }
 module.exports = forecast