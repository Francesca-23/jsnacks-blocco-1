let array = [] 

for(let i=0; i < 6; i++){
    let numero = parseFloat (prompt('inserisci un numero'));

    if(numero % 2 !=0){
        array.push(numero);
    }
}

console.log(array);
