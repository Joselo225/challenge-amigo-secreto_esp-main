// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//Array que guardará los nombres de las personas agregadas

let listaAmigos = [];
let listaMostrar= document.getElementById("listaAmigos");

//Funcion que agregue un amigo a la lista
function agregarAmigo() {
    //Crea la variable de amigo que se agrega y obtiene el valor del input
    let amigoAgregado;
    amigoAgregado = document.getElementById("amigo").value;
    //console.log(amigoAgregado);
    
    //Valida que el input no esté vacío
    if (amigoAgregado == "") {
        alert("Por favor, inserte un nombre.");
        return;
        //Valida que el input no tenga nombres repetidos
    }else if (listaAmigos.includes(amigoAgregado)) {
        alert("El nombre ya fue ingresado");
        return
        //Agregar el nombre a la lista
    }else{listaAmigos.push(amigoAgregado);
    //console.log(listaAmigos);
    //Vuelve a llamar al imput para dejar el campo en blanco
    document.getElementById("amigo").value = "";

    }
    mostrarAmigos(listaAmigos);
}
function mostrarAmigos(listaAmigos) {
    //Crea la variable que guardará el texto a mostrar
    let textoAmigos = document.getElementById("listaAmigos");
    //Deja en blanco el texto
    textoAmigos.innerHTML = "";
    
    //Recorre el array de amigos y los agrega al texto
    for (let i = 0; i < listaAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = listaAmigos[i];
        textoAmigos.appendChild(itemLista);
        console.log(listaAmigos);
    }
    //Muestra el texto en el div
}

//Funcion que sortea un amigo de la lista
function sortearAmigo(){
    //Recibe el array y lo usa para hacer las verificaciones y la eleccion
    let listaSorteo = listaAmigos.slice();
    //Verifica que haya al menos una persona para sortear
    if(listaSorteo.length === 0){
        //Mensaje en caso de que intente sortear sin personas agregadas
        alert("No hay ninguna persona para sortear");
    }else{
        //Realiza el sorteo de numero aleatorio
        let amigoSorteado = Math.floor(Math.random() * listaSorteo.length);
        //Usa el nombre en el array para sortear un amigo
        let nombreSorteado = listaSorteo[amigoSorteado];
        //Obtiene el campo donde se imprimira el resultado en pantalla
        let nombreMostrado = document.getElementById("resultado");
        //Muestra el mensaje en el resultado en pantalla
        let mensajeRsultado = `El amigo sorteado es: ${nombreSorteado}`;
        //Envia el mensaje al div
        nombreMostrado.innerHTML = mensajeRsultado;
        //Limpia la lista de amigos para mostrar solo el amigo sorteado
        listaMostrar.innerHTML = "";
    }
}