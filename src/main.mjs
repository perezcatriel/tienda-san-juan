let idRepetido;

function like(id) {
	const articulo = document.getElementById("descripcion-" + id).textContent;
	const precio = document.getElementById("precio-" + id).textContent;

	if (id !== idRepetido) {
		showArt(articulo, precio);
		idRepetido = id;
	}
}

function showArt(articulo, precio) {
	const articulos = document.querySelector(".articulos");

	const art = document.createElement("div");
	art.className = "articuloCompra";
	art.id = articulo;

	const eliminar = document.createElement("img");
	eliminar.src = "./assets/borrar.svg";
	eliminar.addEventListener("click", () => borrarArt(articulo));

	const nombre = document.createElement("p");
	nombre.textContent = articulo;
	const precioArt = document.createElement("strong");
	precioArt.textContent = precio;

	const restar = document.createElement("img");
	restar.src = "./assets/restar.svg";
	restar.addEventListener("click", () => restarArt(articulo));
	const cantidad = document.createElement("strong");
	cantidad.textContent = "1";
	cantidad.id = "cantidad";
	const sumar = document.createElement("img");
	sumar.src = "./assets/sumar.svg";
	sumar.addEventListener("click", () => sumarArt(articulo));
	const check = document.createElement("img");
	check.src = "./assets/comprar.svg";

	art.append(eliminar);
	art.append(nombre);
	art.append(precioArt);
	art.append(restar);
	art.append(cantidad);
	art.append(sumar);
	art.append(check);

	articulos.append(art);

	// console.log(articulo, precio);
}

function borrarArt(articulo) {
	const art = document.getElementById(articulo);

	art.remove();
}

function restarArt(articulo) {
	let cant = document.getElementById("cantidad").textContent;

	if (cant > 1) cant--;

	console.log("restar", articulo, cant);
}

let articuloTotal = 1;

function sumarArt(cantidad) {
	const $cantidad = document.getElementById("cantidad").textContent;

	function suma() {
		articuloTotal++;
		$cantidad.textContent = articuloTotal;
		recarga(String(cantidad), articuloTotal);
	}

	suma();
}

function recarga($cantidad, articuloTotal) {
	const cantidad = document.getElementById("cantidad");

	cantidad.textContent = articuloTotal;
}
