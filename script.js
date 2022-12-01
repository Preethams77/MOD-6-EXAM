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


            document.getElementById('success').innerText = "Scroll Down To see the data"
            document.getElementById('success').style.color = "green"
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
function makingValuesEmpty() {
    document.getElementById('success').innerText = "Unable to get Data"
    document.getElementById('success').style.color = "red"
    document.getElementById('one').innerText = " "
    document.getElementById('two').innerText = " "
    document.getElementById('long').innerText = " "

    document.getElementById('three').innerText = " "
    document.getElementById('four').innerText = " "
    document.getElementById('five').innerText = " "
    document.getElementById('six').innerText = " "

    document.getElementById('seven').innerText = " "
    document.getElementById('eight').innerText = " "
    document.getElementById('nine').innerText = " "
    document.getElementById('ten').innerText = " "
}