import React from 'react';

import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    THUNDERSTORM,
    DRIZZLE,
} from '../../../constants/weathers';

import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
    [THUNDERSTORM]: "thunderstorm",
    [DRIZZLE]: "sprinkle",
    
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon="2x";

    if (icon)
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else
    return <WeatherIcons className="wicon" name={SUN} size={sizeIcon} />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature" >{`${temperature}`}</span>
        <span className="temperatureType" >{`°C`} </span>
    </div>
);

WeatherTemperature.propTypes = {
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;