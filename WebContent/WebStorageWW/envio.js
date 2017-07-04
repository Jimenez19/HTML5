self.onmessage = function(event) {

	var json = JSON.parse(event.data);
	var cadena = "Detalle producto \n";
	cadena = cadena + "ID:" + json.id + "\n";
	cadena = cadena + "Nombre:" + json.nombre + "\n";
	cadena = cadena + "Precio:" + json.precio + "\n";
	cadena = cadena + "Cantidad:" + json.cantidad + "\n";
	cadena = cadena + "Disponible:" + json.disponible + "\n";
	self.postMessage(cadena);
};