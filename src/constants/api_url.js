const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d"
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"
const location = "Montevideo,uy"

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`