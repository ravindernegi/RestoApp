mapApp.controller('HomeController', function($scope, $ionicLoading, $location, $state) {

    $scope.go = function (URL){

       $state.go( URL );
    };

});

mapApp.controller('FindRestoController', function($scope, $ionicLoading,$ionicPlatform, $location, $state) {




    $scope.mapObj = {};
    $scope.displayOptionObj = {};
    $scope.mapObj.price_range = 10;
    $scope.mapObj.mile_range = 4;
    $scope.LocationBox = 'activated';
    $scope.GPSLocation = '';
    $scope.resto = {};


    $scope.go = function (URL){

       $state.go( URL );
    };

    $scope.openLocationBox = function(){
        //$scope.LocationBox = 'activated';
        $scope.GPSLocation = 'activated';
        
        $scope.mapObj.Location= '';
        $scope.BoxLocationDisabled = false;
        
       
    };

    $scope.openGPSLocation = function(){
        $scope.LocationBox = '';
        $scope.GPSLocation = 'activated';

        $scope.mapObj.Location = '';
        $scope.BoxLocationDisabled = true;

            
    };

    $scope.findResto = function(){

         
        /* $scope.isMapShown = '';
         $scope.isRestaurantsBoxShown = false;
         $scope.funnelCls = '';

          var pyrmont = new google.maps.LatLng(36.120084,-115.171755);
       

          map = new google.maps.Map(document.getElementById('map'), {
            center: pyrmont,
            zoom: 15
          });

          var request = {
            location: pyrmont,
            radius: 500,
            types: ['food']
          };
          infowindow = new google.maps.InfoWindow();
          var service = new google.maps.places.PlacesService(map);
          service.nearbySearch(request, callback);*/
       
		 $state.go( 'map');

    };

    $scope.openFilter = function(){



    };

    $scope.openDetailPage = function (){


    };

    $scope.BackONResto = function (){



    };    



    //For Map 
    $ionicPlatform.ready(function() {
      navigator.geolocation.getCurrentPosition(function(position) {
              
              $scope.position=position;
              var c = position.coords;
     
              var pyrmont = new google.maps.LatLng(c.latitude,c.longitude);
                 console.log(c.latitude +' ' +c.longitude) ;

                map = new google.maps.Map(document.getElementById('map'), {
                  center: pyrmont,
                  zoom: 15
                });

      },function(e) { 

          console.log("Error retrieving position " + e.code + " " + e.message) 

      });
    });  
      

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
           // infowindow.setContent(place.name);
           // infowindow.open(map, this);
           $scope.isRestaurantsDetailPopupShown=true;

           console.log(place);
           $scope.displayOptionObj = place;
			
		  $scope.resto.name  =  place.name;
		  $scope.resto.address  = place.vicinity;
		  
		  
		  var restoTypes = '';
		  for(var ct = 0; ct < place.types.length;ct++){
		  
		  		var restoTypesName = place.types[ct];
				restoTypes += restoTypesName+', ';
		  }
		  
		  $scope.resto.types  = restoTypes.replace(/,\s*$/, "");;
		  
		  //.toUpperCase()
		  
		
		  
		  $scope.resto.picture  = place.photos;
		  
		  var totalRating = (parseInt(place.rating)/5) * 100;
			  
			  $scope.resto.rating_value  = totalRating;
			  var priceLevelCt = '';
			  for(var ct = 0; ct < place.price_level;ct++){
			  		priceLevelCt += '$';
			  }
			  $scope.resto.price_level  = 	priceLevelCt;
			
            $scope.$apply();
        });
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
        }
    }

    function distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var radlon1 = Math.PI * lon1/180;
        var radlon2 = Math.PI * lon2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 ;}
        if (unit=="N") { dist = dist * 0.8684; }
        return dist;
    }
    
    
   

    //console.log(distance(30.748881900000000000, 76.641358099999930000, 30.900965,75.857276,'K' ));
    //End Map API
    

});

mapApp.controller('MapCtrl', function ($scope) {

     $scope.isRestaurantsDetailPopupShown=false; 
      
    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

      map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
      });

      var request = {
        location: pyrmont,
        radius: 500,
        types: ['store']
      };
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);

    // $scope.map = map;
    
    function createMarker(place) {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });

          google.maps.event.addListener(marker, 'click', function() {
           // infowindow.setContent(place.name);
           // infowindow.open(map, this);
          // alert('ss');
             $scope.isRestaurantsDetailPopupShown=true;
             $scope.displayOptionObj = place;
            	  $scope.$apply();
          });
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }


    $scope.openInfoWindow = function(mapObj){

        console.log(mapObj);
       
       // google.maps.event.trigger(selectedMarker, 'click');
       var pyrmont = new google.maps.LatLng(30.900965,75.857276);
       // var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);

      map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
      });

      var request = {
        location: pyrmont,
        radius: 500,
        types: ['store']
      };
      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);

     //$scope.map = map;

           
    };
    
    
    
    

});