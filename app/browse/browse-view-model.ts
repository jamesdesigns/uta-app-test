import * as geoLocation from "nativescript-geolocation";
import { ObservableProperty } from "../observable-property-decorator";
import { Observable } from "tns-core-modules/data/observable";


// export class BrowseViewModel extends Observable {
//     constructor() {
//         super();
//     }
// }


export class BrowseViewModel extends Observable {
    @ObservableProperty() currentGeoLocation: any;

    enableLocationServices(): void {
        geoLocation.isEnabled().then(enabled => {
            if (!enabled) {
                geoLocation.enableLocationRequest().then(() => this.showLocation());
            } else {
                this.showLocation();
            }
        });
    }

    private showLocation(): void {
        geoLocation.watchLocation(location => {
            this.currentGeoLocation = location;
        }, error => {
            alert(error);
        }, {
                desiredAccuracy: 3,
                updateDistance: 10,
                minimumUpdateTime: 1000 * 1
            });
    }

    constructor() {
        super();
    }
}