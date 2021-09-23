const numeros = [3, 10, 20, 50];

let total = 0;
for (let numero of numeros) {
  total += numero;
}
// console.log(total);

let totalRedu = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);
// console.log(totalRedu);

let totalRedu2 = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(totalRedu2);

const acumular = (acumulador, numero) => acumulador + numero;
let totalRedu3 = numeros.reduce(acumular, 0);
// console.log(totalRedu3);

let totalRedu4 = numeros.reduce(acumular);
// console.log(totalRedu4);

const numeros2 = [71, 41, 19, 83, 3, 65];

const acumularDobles = (acumulador, numero) => [...acumulador, numero * 2];
const dobles = numeros2.reduce(acumularDobles, []);
// console.log(dobles);

const productos = [
  { id: 'VjEtKLJvEmlsZ25xOTAzUT', nombre: 'Camiseta', precio: 500 },
  { id: 'VjEtKLJvEmlsZ25xOTAzJH', nombre: 'Medias', precio: 700 },
  { id: 'VKeL198JxvMr04gQMnZb03', nombre: 'Zapatos', precio: 2000 },
  { id: 'VjEtKLJvEmlsZ25x0TAzUT', nombre: 'Pantalon', precio: 1500 },
];

/** 
  COMBINACION DE METODOS -> SAber cuanto valen los productos baratos
*/

const esBarato = (producto) => producto.precio < 1000;
const esCaro = (producto) => !esBarato(producto);
const obtenerPrecio = (producto) => producto.precio;

const precioTotalProductosBaratos = productos
  .filter(esBarato)
  .map(obtenerPrecio)
  .reduce(acumular);
console.log(precioTotalProductosBaratos);

const precioTotalProductosCaros = productos
  .filter(esCaro)
  .map(obtenerPrecio)
  .reduce(acumular);
console.log(precioTotalProductosCaros);
