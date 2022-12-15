function accesskey() {
        const inputLocation = document.getElementById("location");
        const acesskey = document.getElementById("accesstoken");
      
        if (inputLocation.value !== "" && acesskey.value !== "") {
          const loc = document.getElementById("location").value;
          const token = "NCB8JKE9S4EUUS4ZBUL7T8QZS";
      
          const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=us&key=${token}&contentType=json`;
          console.log(url);
          async function getData() {
            const response = await fetch(url);
           if(response.status===200)
            {
            const data = await response.json();
            console.log(data);
            document.getElementById('one').innerText=`Location: ${data.address}`
            document.getElementById('two').innerText=`Lat: ${data.latitude}`
            document.getElementById('three').innerText=`TimeZone: ${data.timezone}`
            document.getElementById('four').innerText=`Wind Speed: ${data.currentConditions.windspeed}`
            document.getElementById('five').innerText=`Pressure: ${data.currentConditions.pressure}`
            document.getElementById('six').innerText=`Humidity: ${data.currentConditions.humidity}`
            document.getElementById('seven').innerText=`Wind Direction: ${data.currentConditions.winddir}`
            document.getElementById('eight').innerText=`UV Index: ${data.currentConditions.uvindex}`
            document.getElementById('nine').innerText=`Feels Like: ${data.currentConditions.feelslike}`
            document.getElementById('ten').innerText=`Long: ${data.longitude}`
          }
        
          else{
            alert("Invalid Location")
          }
     }
          getData();
        
        } else if (inputLocation.value == "") {
          alert("Please Enter Valid Location");
        } else if (acesskey.value == "") {
          alert("Please Enter Valid Acess Token");
        }
    }
