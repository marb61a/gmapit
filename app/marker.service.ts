import {Injectable} from '@angular/core';
import {Init} from './init-markers';

@Injectable()

export class MarkerService extends Init {
    constructor(){
        super();
        console.log('MarkerService Initialized...');
        this.load();
    }
    
    getMarkers(){
        var markers = JSON.parse(localStorage.getItem(markers));
        return markers;
    }
    
    addMarker(){
        // Fetch markers
        var markers = JSON.parse(localStorage.getItem(markers));
        // Add a new marker to set
        markers.push(marker);
        // Set markers again
        localStorage.setItem('markers', JSON.stringify(markers));
    }
}