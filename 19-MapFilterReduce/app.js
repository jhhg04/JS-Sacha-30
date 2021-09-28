// Filtar numeros en un Array con for
const numeros = [3, 10, 20, 50, 60 , 70 , 80 ,90];
function filtarMenoresQue50(arrNumeros){
  const menoresQue50=[]
  for (let i = 0; i < arrNumeros.length; i++) {
    if (arrNumeros[i] <= 50) {
      menoresQue50.push(arrNumeros[i])
    }
  }
  return menoresQue50
}

console.log(filtarMenoresQue50(numeros))