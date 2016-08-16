"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var marker_service_1 = require('./marker.service');
var core_2 = require('angular2-google-maps/core');

var AppComponent = (function(){
    function appComponent(_markerService){
        this._markerService = _markerService;
        // Zoom Level
        this.zoom = 10;
        // Starting Position
        this.lat = 0;
        this.long = 0;
        var fb = new common_1.FormBuilder();
        this.markerForm = fb.group({
            name: ['', common_1.Validators.required],
            lat: ['', common_1.Validators.required],
            lng: ['', common_1.Validators.required],
            draggable: [false]
        });
        this.markers = this._markerService.getMarkers();
    } 
    
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
            styles: ["\n .sebm-google-map-container{\n height:300px;\n }\n "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    
    return AppComponent;
}());

exports.AppComponent = AppComponent;