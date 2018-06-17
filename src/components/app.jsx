import React from 'react';
import axios from 'axios';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';

import '../styles/app.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      location: {
        city: '',
        country: '',
      },

    };
    this.selectedDate = 0;
    // this.selectedLocation = [];
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://mcr-codes-weather.herokuapp.com/forecast')
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          selectedDate: response.data.forecasts[0].date,
        });
      }).catch((err) => {
        console.log(err);
      });
  }


  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }
  handleSubmit(city) {
    
    axios.get(`http://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          selectedDate: response.data.forecasts[0].date,

        });
      }).catch((err) => {
        console.log(err);
      });
  }


  render() {
    const selectedForecast = (
      this.state.forecasts.find(forecast =>
        forecast.date === this.state.selectedDate)
    );
    console.log(selectedForecast);
    
    return (
      <React.Fragment>
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm
          // location={locationSelect}
          handleSubmit={this.handleSubmit}
        />

        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {
   selectedForecast && <ForecastDetails forecast={selectedForecast} />
}

      </React.Fragment>
    );
  }
}

export default App;
