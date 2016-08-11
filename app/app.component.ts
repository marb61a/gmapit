import {Component} from '@angular/core';
import {
    ANGULAR2_GOOGLE_MAPS_DIRECTIVES,
    MapsAPILoader,
    NoOpMapsAPILoader,
    MouseEvent
} from 'angular2-google-maps/core';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
    styles: [`
        .sebm-google-map-container{
            height:300px;
        }
    `]
})

export class AppComponent { 
        // Zoom Level
        zoom: number = 10;
        
        // Starting Position
        lat: number = 42.858217;
        lng: number = -70.929990;
        markers: marker[] = [
        {
            name: 'Company One',
            lat: 42.825588,
            lng: -71.018029,
            draggable: true
        },
        {
            name: 'Company Two',
            lat: 42.868164,
            lng: -70.889071,
            draggable: true
        },
        {
            name: 'Company Three',
            lat: 42.858279,
            lng: -70.930498,
            draggable: false
        }
    ];
}