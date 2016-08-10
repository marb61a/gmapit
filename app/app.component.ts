import {Component} from '@angular/core';
import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps/core';

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
    lat: number = 42.858217;
    lng: number = -70.929990;
}