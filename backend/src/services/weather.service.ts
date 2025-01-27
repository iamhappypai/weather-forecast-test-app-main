import axios from 'axios';

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


export async function getWeatherForecast(lat: number, lng: number): Promise<any> {

    try {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
          params: {
            latitude: lat,
            longitude: lng,
            current_weather: true
          }
        });
    

        return response.data;
      } catch (error: any) {
        console.log(error);
        if (error.code === 'ECONNABORTED') {
          console.error('Request timed out.');
        } else if (error.response) {
          console.error('Error Response:', error.response.status, error.response.data);
        } else {
          console.error('Error:', error.message);
        }
      }
}
