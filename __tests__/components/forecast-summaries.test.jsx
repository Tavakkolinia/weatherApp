import React from 'react';
import Enzyme from 'enzyme';
import ForecastSummaries from '../../src/components/forecast-summaries';
import ForecastSummary from '../../src/components/forecast-summary';

const forecasts = [
  {
    date: '123',
    description: 'date1',
    icon: 'icon1',
    temperature: {
      max: '999',
    },
  },
  {
    date: '456',
    description: 'date2',
    icon: 'icon2',
    temperature: {
      max: '777',
    },
  },
];

it('renders the correct amount of ForecastSummary components', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummaries forecasts={forecasts} />
  ));

  expect(wrapper.find(ForecastSummary).length).toEqual(2);
});
it('each Component receives the correct props', () => {
  const wrapper = Enzyme.shallow((
    <ForecastSummaries forecasts={forecasts} />
  ));
  wrapper.find('ForecastSummary').forEach((forecast, index) => {
    expect(forecast.prop('date')).toEqual(forecasts[index].date);
    expect(forecast.prop('description')).toEqual(forecasts[index].description);
    expect(forecast.prop('icon')).toEqual(forecasts[index].icon);
    expect(forecast.prop('temperature')).toEqual(forecasts[index].temperature.max);
  });
});
