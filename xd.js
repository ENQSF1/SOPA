var palabra="";
/*creacion de letras aleatorias para llenar la sopa de letras*/
function asignacionDeLetra(){

  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  const indiceAleatorio = Math.floor(Math.random() * alfabeto.length);
  return alfabeto.charAt(indiceAleatorio);

}

/*creando el numero de casillas con su respectivo numero de id y la misma clase*/ 
function creacionDeCasillas(x){

  var lista= document.getElementById("grid");
  var nuevoElemento=document.createElement("div");
  nuevoElemento.textContent=asignacionDeLetra();
  lista.appendChild(nuevoElemento);
  nuevoElemento.className="boton";
  nuevoElemento.id=`${"b"+(x)}`;

}

/*implementando eliminacion de casillas "REINICIO" */

function eliminacionDeCasillas(x){
  var divParaEliminar = document.getElementById(`${"b"+(x)}`);
  divParaEliminar.remove();
}


  var eliminar=document.getElementById("reiniciar")
  eliminar.addEventListener("click",() =>{
  
  for(var i=0;i<200;i++){
    eliminacionDeCasillas(i);}
  
  });


/*creando la funcion que introducira los datos a las sopas de letras*/
function introducir(x,y,z,a){
var i=0;
while(i<1){
  
palabra= prompt(`Ingrese una palabra de 5 letras`)
palabras=palabra.toLowerCase();

if(palabra.length==5){
     i++
 }else{ alert("no tiene la longitud correcta,ingrese la palabra de nuevo")}
} 
    
    var b1 = document.querySelector(`#${"b"+(x)}`);
    b1.innerText =palabras[y] ;
    b1.classList.add("casilla")

    var b2 = document.querySelector(`#${"b"+(x+(a))}`);
    b2.innerText =palabras[y+z] ;
    b2.classList.add("casilla")

    var b3 = document.querySelector(`#${"b"+(x+(2*a))}`);
    b3.innerText = palabras[y+(2*z)] ;
    b3.classList.add("casilla")

    var b4 = document.querySelector(`#${"b"+(x+(3*a))}`);
    b4.innerText =palabras[y+(3*z)] ;
    b4.classList.add("casilla")

    var b5 = document.querySelector(`#${"b"+(x+(4*a))}`);
    b5.innerText = palabras[y+(4*z)] ;
    b5.classList.add("casilla")
  }
      
/*mostrando las respuestas*/

var mostrar=document.getElementById("perro");
mostrar.addEventListener("click", ()=>{

    var elementos = document.querySelectorAll(".boton");
    elementos.forEach((elemento) => {
    elemento.classList.remove("azul");
    }
    )
  
    var elementos = document.querySelectorAll(".casilla");
    elementos.forEach((elemento) => {
    elemento.classList.toggle("azul");
    })})

   /*dandole la propiedad de seleccionar casillas */
  
  function cambioDeColor(){
  var elementos = document.querySelectorAll(".boton");
  elementos.forEach((elemento) => {
  elemento.addEventListener("click", () => {
  elemento.classList.toggle("azul");
      });
    })}

/*creando funcion para definir el # de columnas y filas de grid */

function nM(x){
  var nuevaMatriz=document.querySelector("#grid");
  nuevaMatriz.style.gridTemplateColumns =`repeat(${x} , 1fr)`;
  nuevaMatriz.style.gridTemplateRows = `repeat(${x} , 1fr)`;
}

var facil = document.querySelector("#A");
facil.addEventListener("click", () => {
    nM(8);
    for(var i=0;i<64;i++){
    creacionDeCasillas(i);}
    cambioDeColor();
    introducir(0,0,1,1);
    introducir(57,4,-1,1);
    introducir(24,0,1,8);
    introducir(7,4,-1,8);
    introducir(19,0,1,9);
    introducir(6,4,-1,7);
    mostrar();
    });

var medio = document.querySelector("#B");
  medio.addEventListener("click", () => {
    nM(10);/*preguntar  porque aca si agarra */
    for(var i=0;i<100;i++){
    creacionDeCasillas(i);}
    cambioDeColor();
    introducir(10,0,1,1);
    introducir(20,4,-1,1);
    introducir(9,0,1,10);
    introducir(8,4,-1,10);
    introducir(41,0,1,11);
    introducir(42,4,-1,11);
   
  });

  var dificil = document.querySelector("#C");
  dificil.addEventListener("click", () => {
    nM(12);
    for(var i=0;i<144;i++){
    creacionDeCasillas(i);}
    cambioDeColor();
    introducir(15,0,1,1);
    introducir(67,4,-1,1);
    introducir(84,4,-1,12);
    introducir(49,0,1,12);
    introducir(62,4,-1,13);
    introducir(0,0,1,13);
  
  });
  
  
