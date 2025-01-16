import WeatherService, { ForecastModel } from '@/services/weather-service.service';
import eventBus from '@/shared/event-bus';
import { Ref, ref } from 'vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {}
})
export default class WeatherForecast extends Vue {

  weatherService = new WeatherService();
  weatherForecast: Ref<ForecastModel | null> = ref(null);
   
  mounted() {
    // TODO - display the weather forecast in the template
    // TODO - Error handling, if the API call fails we should display an error message
    eventBus.on('onPlaceSelect', this.handleEvent.bind(this));
  }

  handleEvent = (data: any) => {
    console.log(data)
    eventBus.emit('showLoader', true);
    this.weatherService?.getWeatherForecast(data.lat, data.lng)
    .then((res) => {
      res.locationName = data.name;
      this.weatherForecast = ref(res);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => eventBus.emit('showLoader', false));
  };
  
  beforeUnmount() {
    eventBus.off('onPlaceSelect', this.handleEvent.bind(this));
  };

}


