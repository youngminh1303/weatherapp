const apiKey = "f54120370a6e98c099df2e323705992e";

const searchBar = document.getElementById("searchbar");

async function getTheWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    const weather = await response.json();
    return {
        city: weather.city.name,
        temp: weather.list[0].main.temp,
        main: weather.list[0].weather[0].main,
        description: weather.list[0].weather[0].description,
    }
}


function displayWeather(weather) {
    const cityDisplay = document.getElementById("city");
    const tempDisplay = document.getElementById("temp");
    const mainDisplay = document.getElementById("main");
    const descriptionDisplay = document.getElementById("description");

    cityDisplay.innerText = weather.city;
    tempDisplay.innerText = `${weather.temp} °C`;
    mainDisplay.innerText = weather.main;
    descriptionDisplay.innerText = weather.description;
}


searchBar.addEventListener("keypress", async (event) => {
    if (event.key === "Enter") {
        const weather = await getTheWeather(searchBar.value);
        displayWeather(weather);
    }
});

