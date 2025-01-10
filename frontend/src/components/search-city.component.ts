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
    
    this.updateMarker(lat, lng, place.formatted_address);
  }

  onMapClick(place: any) {
    console.log(place);
    const lat = place.latLng.lat();
    const lng = place.latLng.lng();
    this.updateMarker(lat, lng, '');
  }

  updateMarker(lat: number, lng: number, placeName: string): void {

    this.selectedPlace = {
      lat,
      lng,
      name: placeName
    };

    this.markers = [
      {
        id: `${Date.now().toString(36)}-${placeName}`,
        position: {
          lat,
          lng
        }
      }
    ];

    eventBus.emit('onPlaceSelect', this.selectedPlace);

  }


}