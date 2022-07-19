
const weatherForm = document.querySelector("form");
const latitude = document.getElementById("latitudeInput").value;
const messageOne  = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const latitude = document.getElementById("latitudeInput").value;
    const longitude = document.getElementById("longitudeInput").value;
    
    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";
    fetch("/weather?latitude=" + latitude + "&longitude=" + longitude).then((response, error) => {

        response.json().then((data) => {
        if (data.error){
            console.log(data.error);
            messageOne.textContent = data.error;
        }else {
            console.log(data.forecast.temperature, data.forecast.description);
            messageOne.textContent = "";
            messageTwo.textContent = "It is " + data.forecast.description + ". The temperature is " + data.forecast.temperature + "° F. The wind speed is " + data.forecast.windSpeed + " mph.";
        }
        })
    })
    console.log(latitude, longitude);
})