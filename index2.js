

let ingresar = prompt ("Ingresar a la pagina\nsi\nno");

if(ingresar === "si"){
  nombre();
}

function nombre(){
  let nombre = prompt ("Ingrese su nombre");

  let nombrePersona = document.createElement("h1");
nombrePersona.innerHTML = "Nombre : " + nombre;
document.body.append(nombrePersona);
apellido()
};

function apellido(){
  let apellido = prompt ("Ingrese su apellido");

  let apellidoPersona = document.createElement("h2");
apellidoPersona.innerHTML = "Apellido : " + apellido;
document.body.append(apellidoPersona);
edad()
};

function edad(){
  let edad = prompt ("Ingrese su edad");

  let edadPersona = document.createElement("h3");
edadPersona.innerHTML = "Edad : " + edad;
document.body.append(edadPersona);
altura()
};

function altura(){
  let altura= prompt ("Ingrese su altura");

  let alturaPersona = document.createElement("h4");
alturaPersona.innerHTML = "Altura : " + altura;
document.body.append(alturaPersona);
otraPersona()
};


function otraPersona (){
  let nuevaPersona = prompt ("¿Quiere ingresar a una nueva persona?\nsi\nno");
  if (nuevaPersona === "si"){
    nombre()
  };

}

