
import convert from 'convert-units';

import {
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    THUNDERSTORM,
    DRIZZLE,
} from './../constants/weathers';


    const getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(0));
    }

    const getweatherState = weather => {
        const {id} = weather;

            if(id<300) {
                return THUNDERSTORM;
            }else if (id<400){
                return DRIZZLE;
            }else if (id<600){
                return RAIN;
            }else if (id<700){
                return SNOW;
            }else if (id===800){
                return SUN;
            }else {
                return CLOUDY;
            }
    }

    
    const transformWeather = weather_data => {
        console.log (weather_data);
        const {humidity, temp } = weather_data.main;
        const {speed } = weather_data.wind;
        const weatherState = getweatherState(weather_data.weather[0]);
        const city = weather_data.name;
        const temperature = getTemp(temp);
        const id = weather_data.weather[0].id;
        const data = {
            humidity,
            temperature,
            weatherState, 
            wind: `${speed} m/s`,
            city,
            id,
        }
        return data;
    }

    export default transformWeather;