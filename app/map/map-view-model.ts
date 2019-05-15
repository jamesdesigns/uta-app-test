import { Observable } from "tns-core-modules/data/observable";

export class MapViewModel extends Observable {
    constructor() {
        super();
    }
}

var geolocation = require("nativescript-geolocation");

function createViewModel() {
    var viewModel = new Observable();
    var watchId; // stores the ID of the location watcher so we can stop it later
    var start_location; // stores the location of the user when they first started tracking
    var current_location; // stores the current location of the user
    
    viewModel.is_tracking = false; // whether the user's location is currently being tracked or not
    //viewModel.latitude = 15.447819409392789;
    //viewModel.longitude = 120.93888133764267;
    //viewModel.zoom = 20;
 
    var total_distance = 0;
    var total_steps = 0;
 
    var locations = []; // array which will store the locations
 
    //var mapView;
    //var marker = new mapsModule.Marker();
 
    if (!geolocation.isEnabled()) { // check if geolocation is not enabled
        geolocation.enableLocationRequest(); // request for the user to enable it
    } 
 
    // next: add code for getting the user's current location
}