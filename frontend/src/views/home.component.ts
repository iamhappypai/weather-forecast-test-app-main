import { Options, Vue } from 'vue-class-component';
import SearchCity from '@/components/SearchCity.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';
import eventBus from '@/shared/event-bus';

@Options({
  components: {
    SearchCity,
    WeatherForecast,
  },
})
export default class HomeView extends Vue {
  loading: boolean = false;
  mounted(): void {
    eventBus.on('showLoader', (value: boolean) => {
      this.loading = value;
    });
  }
}