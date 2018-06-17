import React from 'react';
import { shallow } from 'enzyme';
import WeatherIcon from 'react-icons-weather';
import ForecastSummary from '../../src/components/forecast-summary';


it('renders the date', () => {
  const testDate = (1526106890000);
  const wrapper = shallow((
    <ForecastSummary
      date={testDate}
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.forecastDate').text()).toEqual('Sat 12th May');
});

it('renders the temperature', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.forecastTemperature').text()).toEqual('mockTemperature');
});

it('renders the description', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));

  expect(wrapper.find('.forecastDescription').text()).toEqual('mockDescription');
});

it('renders the icon', () => {
  const wrapper = shallow((
    <ForecastSummary
      date="mockDate"
      temperature="mockTemperature"
      description="mockDescription"
      icon="mockIcon"
    />
  ));
  expect(wrapper.find(WeatherIcon).prop('iconId')).toEqual('mockIcon');
});
