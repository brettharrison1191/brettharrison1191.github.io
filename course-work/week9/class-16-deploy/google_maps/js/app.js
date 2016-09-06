


$(document).ready(function() {
	var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7228, lng: -73.9983},
          zoom: 15
        });
        


      	$.ajax({
      		url: "http://api.citybik.es/citi-bike-nyc.json",
      		type: 'GET',
      		success: function (res) {
      			res.forEach(function (station) {
			
      				// MUCH MORE COMPLICATED WAY OF DOING IT - my original way
									// var lat = [];
									// var long = [];
									// long.push(station.lng / 1000000);
									// lat.push(station.lat / 1000000);
									// var marker2 = new google.maps.Marker({
									// 	position: {lat: lat[0], lng: long[0]},
									// 	map: map,
									// 	title: 'New York, NY'
				     //  				})

				// Way easier way to do it
					var lats = station.lat / 1000000;
					var longit = station.lng / 1000000;
					console.log(station);
					
					var bikes = station.bikes;
					var free = station.free;
					var name = station.name;

					var marker = new google.maps.Marker({
						position: {lat: lats, lng: longit},
						map: map,
						title: 'New York, NY'
					    })

			    	var message = '<div id = "content">' + '<b>'+ name +  '</b>'+ '<p>' + bikes +' bikes '+ '<br>' + free +' docks ' + '<br>'+'</p>' + '</div>';
			    	var infowindow = new google.maps.InfoWindow({
			    		content: message
			   		 });

			   		marker.addListener('click', function(){
			    		infowindow.close()
		    			infowindow.open(map, marker)
					})
				})},
      			error: 	function (xhr) {
				}
			})

    }
      initMap();

// END documen.ready
})


