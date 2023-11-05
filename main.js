function getWeather() {
    const city = document.getElementById("ville").value;
    const apiKey = "7cc597f71832ee69af93d0ef455ba864"; 
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=fr`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("info");
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherInfo.textContent = `Temperature: ${temperature}°C Description: ${description}`;
            } else {
                weatherInfo.textContent = "pays/ville non trouvé";
            }
        })
        .catch(error => {
            console.error("Error fetching weather data: ", error);
        });
  }
  