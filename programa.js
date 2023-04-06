let botonAlmacenar = document.getElementById("btnAlmacenar");
botonAlmacenar.addEventListener('click', ()=>{
    //Almacenar  un dato en sessionStorage
    sessionStorage.setItem('nombre', 'Harold');
    sessionStorage.setItem('apellido','Ramirez');
    localStorage.setItem('nombre','Harold');
    localStorage.setItem('apellido','Ramirez');
});

let botonBorrar = document.getElementById("btnBorrar");
botonBorrar.addEventListener('click', function(){
    //Borrar datos en el sessionStorage 
    //localStorage
    sessionStorage.clear();
    localStorage.clear();

})

//Recorrer el sessionStorage y el localStorage
//Mostrando las variables como una fila en la tabla del DOM

function construirFilas(){

    //Crear un arreglo con las fuentes de datos
    let fuentes = [localStorage, sessionStorage];
    for (let k = 0; k<fuentes.length; k++){

    let miFuente = fuentes[k];
    for(let i = 0; i<miFuente.length; i++){
    let cuerpoTabla = document.getElementById("cuerpoTabla");
    let fila = document.createElement("tr");
    let celda = document.createElement("td");
    //Crear un nodo de texto 
    let texto = document.createTextNode(miFuente.key(i));
    celda.appendChild(texto);
    fila.appendChild(celda);

    celda = document.createElement("td");
    let valor = miFuente.getItem(miFuente.key(i));
    texto = document.createTextNode(valor);
    celda.appendChild(texto);
    fila.appendChild(celda);

    cuerpoTabla.appendChild(fila);
    }
    }
}

construirFilas();