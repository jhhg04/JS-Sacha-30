const numeros = [3, 10, 20, 50];
const dobles = numeros.map(function (numero) {
  return numero * 2;
});
const triples = numeros.map((numero) => numero * 3);
// console.log(numeros);
// console.log(dobles);
// console.log(triples);

const productos = [
  { id: 'VjEtKLJvEmlsZ25xOTAzUT', nombre: 'Camiseta', precio: 500 },
  { id: 'VKeL198JxvMr04gQMnZb03', nombre: 'Zapatos', precio: 2000 },
  { id: 'VjEtKLJvEmlsZ25x0TAzUT', nombre: 'Pantalon', precio: 1500 },
];

// const productosConDescuento = productos.map(function (producto) {
//   if (producto.precio < 1000) return producto; // Retorno Temprano
//   producto.precio = producto.precio * 0.9;
// });
// console.log(productos); // Modifica el array original y no retorna un valor de la funcion transformadora

const productosConDescuento2 = productos.map(function (producto) {
  if (producto.precio < 1000) return producto; // Retorno Temprano
  return {
    ...producto,
    precio: producto.precio * 0.9,
  };
});
// console.log(productos);
// console.log(productosConDescuento2);

const idProductos = productos.map(function (producto) {
  return producto.id;
});
const idProductos2 = productos.map((producto) => producto.id);
const idProductos3 = productos.map(({ id }) => id);
console.log(idProductos);
console.log(idProductos2);
console.log(idProductos3);
