const request = require("request");
const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=b353ddf2532f2d88f17721457a1da7db&query=" + latitude + ", " + longitude + "&units=f";
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback("Unable to connect to location services!", undefined);
        } else if (body.error){
            callback("Unable to find location!", undefined);
        }else{
            callback(undefined, {
                temperature: body.current.temperature,
                description: body.current.weather_descriptions[0]
            })
        }
    })
}
module.exports = {
    forecast: forecast
}