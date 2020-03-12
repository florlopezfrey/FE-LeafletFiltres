var map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 9);
//map.locate({setView: true, maxZoom: 17});
	
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
var markers = L.markerClusterGroup();
var data_markers = [];

function onMapLoad() {

	console.log("Mapa cargado");
    /*
	FASE 3.1
		1) Relleno el data_markers con una petición a la api
		2) Añado de forma dinámica en el select los posibles tipos de restaurantes
		3) Llamo a la función para --> render_to_map(data_markers, 'all'); <-- para mostrar restaurantes en el mapa
	*/

	// Relleno el data_markers con una petición a la api
	$.ajax({
		type:'GET',
		url: 'http://192.168.64.2/mapa/api/apiRestaurants.php',
		dataType:'json',
		success: function (datos) {
			if(datos.type == 'success'){
				data_markers.push(datos.data);				
				console.log(data_markers);
			}else{
				alert("No se encontraron restaurantes");
			}
		}
	});


}

console.log(data_markers);

// for (var i = 0; i < data_markers.length; i++) {
// 	var a = data_markers[i];
// 	console.log('a var: '+a);
// 	var title = a[1];
// 	var marker = L.marker(new L.LatLng(a[3], a[4]), {
// 		title: title
// 	});
// 	marker.bindPopup(title);
// 	markers.addLayer(marker);
// }

// map.addLayer(markers);
// console.log(data_markers);


  

  
$('#kind_food_selector').on('change', function() {
  console.log(this.value);
  render_to_map(data_markers, this.value);
});



function render_to_map(data_markers,filter){
	
	/*
	FASE 3.2
		1) Limpio todos los marcadores
		2) Realizo un bucle para decidir que marcadores cumplen el filtro, y los agregamos al mapa
	*/	
			
}