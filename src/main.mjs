function mostrarCarro() {
	const mostrar = "block";
	const carrito = document.querySelector(".carrito");

	if (document.querySelector('.inactivo'))
		carrito.className = " carrito activo";
	else carrito.className = "carrito inactivo";
}

let idRepetido;

function like(id) {
	const articulo = document.getElementById("descripcion-" + id).textContent;
	const precio = document.getElementById("precio-" + id).textContent;

	if (id !== idRepetido) {
		showArt(articulo, precio, id);
		idRepetido = id;
	} else {
		borrarArt(id);
	}
}

function showArt(articulo, precio, id) {
	const articulos = document.querySelector(".articulos");
	console.log(articulo, precio, id);

	const art = document.createElement("div");
	art.className = "articuloCompra";
	art.id = id;

	const eliminar = document.createElement("img");
	eliminar.src = "./assets/borrar.svg";
	eliminar.addEventListener("click", () => borrarArt(id));

	const nombre = document.createElement("p");
	nombre.textContent = articulo;
	const precioArt = document.createElement("strong");
	precioArt.textContent = precio;

	const restar = document.createElement("img");
	restar.src = "./assets/restar.svg";
	restar.addEventListener("click", () => restarArt(articulo, id));
	const cantidad = document.createElement("strong");
	cantidad.textContent = "1";
	cantidad.id = "cantidad-" + id;
	const sumar = document.createElement("img");
	sumar.src = "./assets/sumar.svg";
	sumar.addEventListener("click", () => sumarArt(articulo, id));
	const check = document.createElement("img");
	check.src = "./assets/comprar.svg";

	const cantidadTotal = document.getElementById("cantidad-total");
	cantidadTotal.innerText = Number(cantidad);
	const pagoTotal = document.getElementById("pago-total");
	pagoTotal.innerText = sumaPrecio(precio, cantidad);

	console.log(cantidadTotal);

	art.append(eliminar);
	art.append(nombre);
	art.append(precioArt);
	art.append(restar);
	art.append(cantidad);
	art.append(sumar);
	art.append(check);

	articulos.append(art);

	cantidadProductos(id, precio);
	totalPagar();
}

let precioTotal = 0;
function sumaPrecio(precio, cantidad) {
	console.log(cantidad);

	return (precioTotal += Number(precio)).toFixed(2);
}

function cantidadProductos(id, precio) {
	console.log(id, precio);
}

function totalPagar() {}

function borrarArt(id) {
	const art = document.getElementById(id);
	idRepetido = "";

	art.remove();
}

let articuloTotal = 1;

function restarArt(cantidad, id) {
	const $cantidad = document.getElementById("cantidad-" + id).textContent;

	function resta() {
		articuloTotal--;
		$cantidad.textContent = articuloTotal;
		recarga(String(cantidad), articuloTotal, id);
	}

	if (articuloTotal > 1) resta();
}

function sumarArt(cantidad, id) {
	const $cantidad = document.getElementById("cantidad-" + id).textContent;

	function suma() {
		articuloTotal++;
		$cantidad.textContent = articuloTotal;
		recarga(String(cantidad), articuloTotal, id);
	}

	suma();
}

function recarga($cantidad, articuloTotal, id) {
	const cantidad = document.getElementById("cantidad-" + id);

	cantidad.textContent = articuloTotal;
}
