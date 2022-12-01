function submitted(loc, tok) {
   
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=${tok}&contentType=json`

    let weatherData;
    fetch(url)
        .then(data => {
            if (document.getElementById('location').value == " ") {
                alert("Please enter location")
            }
            return data.json()
        }
        )

        .then(json => {
            console.log(json)
            weatherData = json;
            document.getElementById('one').innerText = weatherData.address
            document.getElementById('two').innerText = weatherData.latitude
           
            document.getElementById('three').innerText = weatherData.timezone
            document.getElementById('four').innerText = weatherData.days[0].windspeed
            document.getElementById('five').innerText = weatherData.days[0].pressure
            document.getElementById('six').innerText = weatherData.days[0].humidity

            document.getElementById('seven').innerText = weatherData.days[0].winddir
            document.getElementById('eight').innerText = weatherData.days[0].uvindex
            document.getElementById('nine').innerText = weatherData.days[0].feelslike
            document.getElementById('ten').innerText = weatherData.longitude
    }
    )


        .catch(error => {
            makingValuesEmpty();
           
            alert("Failed to load Weather info");
            throw (error);
        })


}

async function accesskey() {
    const locat = document.getElementById('location').value;

    const token = document.getElementById('accesstoken').value;
    await checkforerror(locat, token)
}
async function checkforerror(location, key) {

    if (location == "") {
        alert("Please Enter Location")
    }
    else if (key == "") {
        alert("Please Enter Access Key")
    }
    else {
        submitted(location, key);
    }
}
