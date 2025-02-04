// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombresAmigos = [];



function mostrarListaNombres() {
    let listaNombres = document.getElementById("listaAmigos"); // Obtener la lista del HTML
    listaNombres.innerHTML = ""; // Limpiar la lista antes de actualizarla
  
    for (let i = 0; i < listaNombresAmigos.length; i++) {
      let nombre = listaNombresAmigos[i];
      let elementoLista = document.createElement("li");
      elementoLista.textContent = nombre;
      listaNombres.appendChild(elementoLista);
    }
  }


function agregarAmigo() {
  let nombre = document.getElementById("nombreAmigo").value;

  // Validar que el campo no esté vacío
  if (nombre.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return; // Salir de la función si el campo está vacío kjhaskhjds
  }

  listaNombresAmigos.push(nombre); // Agregar el nombre al array
  console.log(listaNombresAmigos); // Mostrar el array en la consola
  console.log(listaNombresAmigos.length); // Mostrar la cantidad de nombres

  document.getElementById("nombreAmigo").value = ""; // Limpiar el campo de texto

  mostrarListaNombres(); // Actualizar la lista en la página
}


function sortearAmigo() {
  if (listaNombresAmigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaNombresAmigos.length);
  const amigoSecreto = listaNombresAmigos[indiceAleatorio];

  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}