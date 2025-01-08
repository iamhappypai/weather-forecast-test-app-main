import * as backendApi from '../shared/backend-api';

export interface ForecastModel {
  latitude: number,
    longitude: number,
    elevation: number,
    generationtime_ms: number,
    timezone: string,
    timezone_abbreviation: string,
    utc_offset_seconds: string,
    current_weather: {
        temperature: number,
        windspeed: number,
        winddirection: number,
        weathercode: number,
        time: Date
    },
    current_weather_units: {
        time: string,
        interval: string,
        temperature: string,
        windspeed: string,
        winddirection: string,
        is_day: string,
        weathercode: string
    }
}
export default class WeatherService {
  constructor() {}

  getWeatherForecast(lat: number, lng: number): Promise<ForecastModel> {
    return backendApi.get('weather/forecast', {lat, lng});
  }

}
