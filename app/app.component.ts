import {Component} from '@angular/core';
import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';
import {MarkerService} from './marker.service';
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
    providers: [MarkerService],
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
        markerForm: ControlGroup;
        markers: marker[];
    
    constructor(private _markerService : MarkerService){
        let fb = new FormBuilder();
        
        this.markerForm = fb.group({
            name: ['',Validators.required],
            lat: ['',Validators.required],
            lng: ['',Validators.required],
            draggable: [false]     
        });
        
        this.markers = this._markerService.getMarkers();
    }
    
    clickedMarker(marker : marker, index : number){
        console.log('Clicked marker: '+marker.name+' at index '+index);
    }
    
    mapClicked($event : MouseEvent){
        var newMarker = {
            name: "Untitled",
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        }
        
        this.markers.push(newMarker);
    }
    
    markerDragEnd(marker: any, $event: MouseEvent){
        console.log('dragEnd', marker, $event);
        
        var updMarker = {
            name: marker.name,
            lat: parseFloat(marker.lat),
            lng: parseFloat(marker.lng),
            draggable: false
        }
        
        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
        
        this._markerService.updateMarker(updMarker, newLat, newLng);
    }
}

// The Marker type
interface marker {
    name?: string,
    lat: number,
    lng: number,
    draggable: boolean
}