var map = L.map('mapid').on('load', onMapLoad).setView([41.400, 2.206], 12);
//map.locate({setView: true, maxZoom: 17});
	
var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

//en el clusters almaceno todos los markers
var markers = L.markerClusterGroup();
let data_markers = [];

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
				var tipos_comida = [];
				var select = document.getElementById('kind_food_selector');

				for (let i = 0; i < datos.data.length; i++) {
					data_markers.push(datos.data[i]);
					
					
					// tipos de comida para el select
					var a = data_markers[i];
					let separar = a.kind_food.split(','); // separo los que tienen multiples tipos
					separar.forEach(function(obj){ // push de cada uno de los elementos (por si al hacer split hay mas de 1)
						tipos_comida.push(obj);
				 	});
					var unique = tipos_comida.filter((v, i, a) => a.indexOf(v) === i); // elimina los repetidos
				}

				// Añado de forma dinámica en el select los tipos de restaurantes
				for (let x = 0; x < unique.length; x++) {
					var opt = document.createElement('option');
					opt.value = unique[x];
					opt.innerHTML = unique[x];
					select.appendChild(opt);
				}
				render_to_map(data_markers, 'all');

			}else{
				alert("No se encontraron restaurantes");
			}
			
		}
	});

}
  

// llama al select del HTML y en cada cambio ejecuta la funcion render_to_map con le value del select
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

	markers.remove();
	markers.clearLayers();

	data_markers.forEach(function (restaurante) {
		if ( ((restaurante.kind_food).includes(filter)) || filter == 'all') {
			var marker = L.marker(new L.LatLng(restaurante.lat, restaurante.lng));	// , { title: title }).addTo(map);
			marker.bindPopup(popup(filter));
			markers.addLayer(marker);
			map.addLayer(markers);
		}

		function popup(filter) {
			var titleRestaurant = restaurante.name;
			var addressRestaurant = restaurante.address;
		
			if (filter == 'all') {
				return titleRestaurant+"<br/>"+addressRestaurant;
			} else {
				return "<b>Este es uno de los restaurantes con comida "+filter+":</b><br>"+titleRestaurant+"<br/>"+addressRestaurant;
			}
		};

	});

	
			
}


