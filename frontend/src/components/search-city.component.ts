import eventBus from '@/shared/event-bus';
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {}
})
export default class SearchCity extends Vue {

  selectedPlace: { lat: number; lng: number, name?: string} | null = {lat: 0, lng: 0};
  markers: any = [];
  error: any = '';

  mounted(): void {
    this.fetchUserLocation();
  }

  /*
    Function to fetch current location of the user
    Browser location is fetched using the navigator API
    User needs to grant location permission when prompted for this to work
  */
  fetchUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( 
        this.handleLocationAccessSuccess,
        this.handleAccessError
      );
    } else {
      this.error = "Geolocation is not supported by this browser.";
    }
  }

  handleLocationAccessSuccess(position: any) {
    const { latitude, longitude } = position.coords;
    this.selectedPlace = { lat: latitude, lng: longitude };
    this.updateMarker(latitude, longitude, '');
    this.error = null;
  }

  handleAccessError(error: any) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.error = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        this.error = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        this.error = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        this.error = "An unknown error occurred.";
        break;
      default:
        this.error = "An error occurred while retrieving location.";
    }
    this.selectedPlace = {lat: 0, lng: 0};
  }

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