let parola1 = prompt('scrivi una parola');
let parola2 = prompt('scrivi una parola');

if(parola1.lenght > parola2.lenght){
    document.writeln(parola1 + parola2);

}else if(parola1.lenght == parola2.lenght){
    document.writeln(parola1 + parola2);

}else{
    document.writeln(parola2 + parola1);
}