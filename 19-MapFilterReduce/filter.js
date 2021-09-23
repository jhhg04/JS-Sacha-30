const numeros = [3, 10, 20, 50];
const menores = numeros.filter(function (numero) {
  return numero < 11;
});
const menoresArrow = numeros.filter((numero) => numero < 10);
// console.log(numeros);
// console.log(menores);
// console.log(menoresArrow);

// Sacar elementos repetidos
const numerosRep = [1, 2, 3, 4, 3, 1];
const numerosUnicos = numerosRep.filter((numero, posicion, numerosRep) => {
  return posicion === numerosRep.indexOf(numero);
});
console.log(numerosRep);
console.log(numerosUnicos);

const productos = [
  { id: 'VjEtKLJvEmlsZ25xOTAzUT', nombre: 'Camiseta', precio: 500 },
  { id: 'VjEtKLJvEmlsZ25xOTAzJH', nombre: 'Medias', precio: 700 },
  { id: 'VKeL198JxvMr04gQMnZb03', nombre: 'Zapatos', precio: 2000 },
  { id: 'VjEtKLJvEmlsZ25x0TAzUT', nombre: 'Pantalon', precio: 1500 },
];

let productosBaratos = [];
for (let i = 0; i < productos.length; i++) {
  const element = productos[i].precio;
  if (element < 1000) {
    productosBaratos.push(element);
  }
}
// console.log(productosBaratos);

const productosBaratosFunc = productos.filter(function (producto) {
  return producto.precio < 1000;
});
// console.log(productosBaratosFunc);

const productosBaratosArrow = productos.filter(
  (producto) => producto.precio < 1000 // Se puede convirtir en ->
);
// console.log(productosBaratosArrow);

const esBarato = (producto) => producto.precio < 1000;
const esCaro = (producto) => !esBarato(producto);
const productosBaratosArrow2 = productos.filter(esBarato);
const productosCarosArrow = productos.filter(esCaro);
// console.log(productosBaratosArrow2);
// console.log(productosCarosArrow);
