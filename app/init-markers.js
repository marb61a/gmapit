"use strict";
var Init = (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
            console.log('Creating markers as none were found...');
            var markers = [
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
            localStorage.setItem('markers', JSON.stringify(markers));
            return;
        }
        else {
            console.log('Loading markers ....');
        }
    };
    return Init;
}());
exports.Init = Init;
//# sourceMappingURL=init-markers.js.map