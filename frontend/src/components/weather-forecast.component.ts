import WeatherService, { ForecastModel } from '@/services/weather-service.service';
import eventBus from '@/shared/event-bus';
import { ref } from 'vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})
export default class WeatherForecast extends Vue {

  weatherService = new WeatherService();
  weatherForecast = ref(null as unknown as ForecastModel);
   
  mounted() {
    // TODO - use the latitude and longitude from the search city component
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    console.log('on mount');
    eventBus.on('onPlaceSelect', this.handleEvent.bind(this));
  }

  handleEvent = (data: any) => {
    console.log('this is from sibling', data, data.lat, this.weatherService);
    this.weatherService?.getWeatherForecast(data.lat, data.lng)
    .then((res) => {
      console.log('weather reportr', res);
      this.weatherForecast = res as any;
    })
    .finally(() => console.log('finished'));
  };
  
  // beforeUnmount() {
  //   eventBus.off('onPlaceSelect', this.handleEvent);
  // };

}


