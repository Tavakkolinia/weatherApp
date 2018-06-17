import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import '../styles/forecast-details.scss';


const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="forecastDetails__date">
      <span>{Moment(props.forecast.date).format('ddd Do MMM')}</span>
    </div>
    <div className="forecastDetails__maxTemp">
      
      <span>Max Temp: {props.forecast.temperature.max} C</span>
    </div>
    <div className="forecastDetails__minTemp">
      <span>Min Temp: {props.forecast.temperature.min} C</span>
    </div>
    <div className="forecastDetails__humidity">
      <span>Humidity: {props.forecast.humidity} %</span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
};


export default ForecastDetails;
