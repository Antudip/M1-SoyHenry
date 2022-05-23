'use strict'

function BinarioADecimal(num) {

  // tu codigo aca


  //creo un array vacia, separo, e invierto los 1s y 0s del valor binario
  let binaryArray = num.toString().split("").reverse();
  

  //creo la funcion callback con la formula para decimal binario 

  function cb(num,i){
    let decimal =  num*Math.pow(2,i);
    return decimal;
  }
 

  //cambio los valores de binario a decimal usando map y luego lo sumo usando reduce.
  let decimalArray = binaryArray.map(cb);
  let decimalNumber = decimalArray.reduce((an,ac) =>an + ac);
  return decimalNumber;

  


}

function DecimalABinario(num) {
  // tu codigo aca

  //creo un array vacio, una copia del numero y un index en 0.
  let binaryArray = [];
  let decimalNumber = num;
  let index = 0;


  //paso los valores a binario y los almaceno en el array vacio que cree. Usando la formula decimal a Binario.
  while(decimalNumber >= 1){
    binaryArray[index] = decimalNumber%2;
    decimalNumber= Math.floor(decimalNumber / 2);
    index +=1;
  };

  //doy vuelta el array y lo uno.
  let binaryNumber = binaryArray.reverse().join("");
  return binaryNumber;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}