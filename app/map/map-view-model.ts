import { Observable } from "tns-core-modules/data/observable";
import { Directions } from "nativescript-directions";

export class MapViewModel extends Observable {
    private directions: Directions;

    constructor() {
        super();
        this.directions = new Directions();
    }

    public doCheckAvailable() {
        this.directions.available().then((avail) => {
            console.log("Avail? " + avail);
            alert(avail);
        }, (err) => {
            alert(err);
        });
    }

    public doCurrentLocationToAddress() {
        this.directions.navigate({
            to: {
                address: "Hof der Kolommen 34, Amersfoort, Netherlands"
            },
            type: "transit"
        }).then(() => {
            console.log("Current location to address directions launched!");
        }, (err) => {
            alert(err);
        });
    }

    public doAddressToAddressToAddress() {
        this.directions.navigate({
          from: {
            address: "Hof der Kolommen 34, Amersfoort, Netherlands"
          },
          type: "walking",
          to: [
            {
              address: "Middenstraat 21, Loppersum, Netherlands"
            },
            {
              address: "Aak 98, Wieringerwerf, Netherlands"
            }],
          ios: {
            allowGoogleMapsWeb: true
          }
        }).then(() => {
          console.log("Address to address directions launched!");
        }, (err) => {
          alert(err);
        });
      }
    
      public doAddressToCoordinate() {
        this.directions.navigate({
          from: {
            address: "Hof der Kolommen 34, Amersfoort, Netherlands"
          },
          to: [{
            lat: 52.215987,
            lng: 5.282764
          }],
          type: "walking",
          ios: {
            allowGoogleMapsWeb: true,
            preferGoogleMaps: true
          }
        }).then(() => {
          console.log("Address to coord directions launched!");
        }, (err) => {
          alert(err);
        });
      }
    
      public doCoordinateToCoordinate() {
        this.directions.navigate({
          from: {
            lat: 52.215987,
            lng: 5.282764
          },
          to: {
            lat: 52.515987,
            lng: 5.382764
          }
        }).then(() => {
          console.log("Coord to coord directions launched!");
        }, (err) => {
          alert(err);
        });
      }

}

// var geolocation = require("nativescript-geolocation");

// function createViewModel() {
//     var viewModel = new Observable();
//     var watchId; // stores the ID of the location watcher so we can stop it later
//     var start_location; // stores the location of the user when they first started tracking
//     var current_location; // stores the current location of the user
    
//     viewModel.is_tracking = false; // whether the user's location is currently being tracked or not
//     //viewModel.latitude = 15.447819409392789;
//     //viewModel.longitude = 120.93888133764267;
//     //viewModel.zoom = 20;
 
//     var total_distance = 0;
//     var total_steps = 0;
 
//     var locations = []; // array which will store the locations
 
//     //var mapView;
//     //var marker = new mapsModule.Marker();
 
//     if (!geolocation.isEnabled()) { // check if geolocation is not enabled
//         geolocation.enableLocationRequest(); // request for the user to enable it
//     } 
 
//     // next: add code for getting the user's current location
// }