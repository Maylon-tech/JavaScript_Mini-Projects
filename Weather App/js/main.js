const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector(".weather-details")
const error404 = document.querySelector(".not-found")

search.addEventListener("click", () => {

    const APIKey = "b96872ef762895b956f8d86448364361"
    const city = document.querySelector(".search-box input").value

    if (city === "") 
        return

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`)
        .then(response => response.json())
        .then(json => {

            if (json.code === '404') {
                container.style.height = '400px'
                weatherBox.style.display = 'none'
                weatherDetails.style.display = 'none'
                error404.style.display = 'block'
                error404.classList.add('fadeIn')
                return
            }

            error404.style.display = 'none'
            error404.classList.remove('fadeIn')

            const image = document.querySelector('.weather-box img')
            const temperature = document.querySelector('.weather-box temperature')
            const description = document.querySelector('.weather-box description')
            const humidity = document.querySelector('.weather-box humidity')
            const wind = document.querySelector('.weather-box wind')

            switch (json.weather[0].main) {
                
            }
        })
})