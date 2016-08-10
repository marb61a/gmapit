"use strict"

var __decorate = (this && this.__decorate) || function(){
    
};

var __metadata = (this && this.__metadata) || function(k, v){
    
};

var core_1 = require('@angular/core');
var core_2 = require('angular2-google-maps/core');

var AppComponent = (function(){
    function appComponent(){
        this.lat = 0;
        this.long = 0;
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