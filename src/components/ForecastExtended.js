import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';



const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
    <ForecastItem 
        key= {`${forecast.weekDay}${forecast.hour}`} 
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}>
        </ForecastItem>));

}

const renderProgress = () => {
    return "Cargando Pronostico Extendido . ."
}

const ForecastExtended = ({city, forecastData}) => (
            <div className='forecast-title'>
                <h3>Pronóstico Extendido para {city}</h3>
                {forecastData ? 
                renderForecastItemDays(forecastData) :
                renderProgress()}
            </div>        
    );

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;