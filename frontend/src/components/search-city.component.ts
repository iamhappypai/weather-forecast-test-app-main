import eventBus from '@/shared/event-bus';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {}
})
export default class SearchCity extends Vue {

  selectedPlace: { lat: number; lng: number, name?: string} | null = null;
  markers: any = [];

  placeChanged(place: any) {

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng()
    this.selectedPlace = {
      lat,
      lng,
      name: place.formatted_address
    };

    this.markers = [
      {
        id: `${Date.now().toString(36)}-${place.formatted_address}`,
        position: {
          lat,
          lng
        }
      }
    ]

    eventBus.emit('onPlaceSelect', this.selectedPlace);
  }


}