import WeatherService, { ForecastModel } from '@/services/weather-service.service';
import eventBus from '@/shared/event-bus';
import { Ref, ref } from 'vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {}
})
export default class WeatherForecast extends Vue {

  public weatherService = new WeatherService();
  public weatherForecast: Ref<ForecastModel | null> = ref(null);

  public apiErrorMessage = '';
   
  mounted() {
    eventBus.on('onPlaceSelect', this.handleEvent.bind(this));
  }

  handleEvent = (data: any) => {
    eventBus.emit('showLoader', true);
    this.weatherService?.getWeatherForecast(data.lat, data.lng)
    .then((res) => {
      res.locationName = data.name;
      this.weatherForecast = ref(res);
      this.apiErrorMessage = '';
    })
    .catch(() => {
      this.apiErrorMessage = 'We are not able to fetch the latest weather forecast for the requested location. Please try after sometime.';
      this.weatherForecast = ref(null);
    })
    .finally(() => eventBus.emit('showLoader', false));
  };
  
  beforeUnmount() {
    eventBus.off('onPlaceSelect', this.handleEvent.bind(this));
  };

}


