import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

/*
import transformWeather from './../../services/transformWeather';
import {getUrlWeatherByCity} from './../../services/getUrlWeatherByCity';
componentDidMount(){
    const {city}= this.state;
    const api_weather = getUrlWeatherByCity(city);
    fetch(api_weather).then(resolve => {
               
        return resolve.json();
    }).then(data => {
        const newWeather = transformWeather(data);
        this.setState({
            data: newWeather,
            city: newWeather.city,
        });
    });


}
*/

const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city} /> 
                {data ? 
                <WeatherData data={data} />:
                <CircularProgress size={60} thickness={7}/>}
            </div>
)
   
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}


export default WeatherLocation;