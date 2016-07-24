// Note: This example requires that you consent to location sharing when
        // prompted by your browser. If you see the error "The Geolocation service
        // failed.", it means you probably did not give permission for the browser to
        // locate you.

//        var marker = false;
//
//        function initMap() {
//            var map = new google.maps.Map(document.getElementById('map'), {
//                center: {lat: -34.397, lng: 150.644},
//                zoom: 14
//            });
//            var infoWindow = new google.maps.InfoWindow({map: map});
//
//            // Try HTML5 geolocation.
//            if (navigator.geolocation) {
//                navigator.geolocation.getCurrentPosition(function(position) {
//                    var pos = {
//                        lat: position.coords.latitude,
//                        lng: position.coords.longitude
//                    };
//
//                    infoWindow.setPosition(pos);
//                    infoWindow.setContent('Location found.');
//                    map.setCenter(pos);
//                    //Add lat and lng values to a field that we can save.
//                    document.getElementById('lat').value = pos.lat; //latitude
//                    document.getElementById('lon').value = pos.lng; //longitude
//                }, function() {
//                    handleLocationError(true, infoWindow, map.getCenter());
//                });
//            } else {
//                // Browser doesn't support Geolocation
//                handleLocationError(false, infoWindow, map.getCenter());
//            }
//
//            //Listen for any clicks on the map.
//            google.maps.event.addListener(map, 'click', function(event) {
//                //Get the location that the user clicked.
//                var clickedLocation = event.latLng;
//                //If the marker hasn't been added.
//                if(marker === false){
//                    //Create the marker.
//                    marker = new google.maps.Marker({
//                        position: clickedLocation,
//                        map: map,
//                        draggable: true //make it draggable
//                    });
//                    //Listen for drag events!
//                    google.maps.event.addListener(marker, 'dragend', function(event){
//                        markerLocation();
//                    });
//                } else{
//                    //Marker has already been added, so just change its location.
//                    marker.setPosition(clickedLocation);
//                }
//                //Get the marker's location.
//                markerLocation();
//            });
//        }
//
//        //This function will get the marker's current location and then add the lat/long
//        //values to our textfields so that we can save the location.
//        function markerLocation(){
//            //Get location.
//            var currentLocation = marker.getPosition();
//            //Add lat and lng values to a field that we can save.
//            document.getElementById('lat').value = currentLocation.lat(); //latitude
//            document.getElementById('lon').value = currentLocation.lng(); //longitude
//        }
//
//        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//            infoWindow.setPosition(pos);
//            infoWindow.setContent(browserHasGeolocation ?
//                    'Error: The Geolocation service failed.' :
//                    'Error: Your browser doesn\'t support geolocation.');
//        }
//
//        google.maps.event.addDomListener(window, 'load', initMap);