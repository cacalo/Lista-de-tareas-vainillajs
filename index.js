const listaTareasElement = document.getElementById("tareasContainer");
const tareaNuevaText = document.getElementById("tareaNuevaText");
const agregarTareaBoton = document.getElementById("agregarTarea");

document
  .getElementById("nuevaTareaContainer")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const tarea = new FormData(event.target).get("tarea");
    console.log(tarea);
    if (tarea === "") return;
    agregarTarea(tarea);
  });

tareaNuevaText.addEventListener("input", () => {
	console.log(tareaNuevaText.value)
  agregarTareaBoton.disabled = tareaNuevaText.value === "";
});

function agregarTarea(tarea) {
  const divTarea = document.createElement("li");
  divTarea.classList.add("tarea")
  const divCirculoYTexto = document.createElement("div");
  const spanCirculo = document.createElement("span");
  spanCirculo.innerText = "O";
  divCirculoYTexto.appendChild(spanCirculo);
  const spanTexto = document.createElement("span");
  spanTexto.innerText = tarea;
  divCirculoYTexto.appendChild(spanTexto);
  divCirculoYTexto.addEventListener("click", clickTarea);
  divTarea.appendChild(divCirculoYTexto);
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "X";
  botonBorrar.addEventListener("click", borrarTerea)
  divTarea.appendChild(botonBorrar);
  listaTareasElement.appendChild(divTarea);
  tareaNuevaText.value = "";
  agregarTareaBoton.disabled = true;
}

function borrarTerea(evento){
  console.log("BORRAR",evento)
  evento.target.parentNode.remove();
}
function clickTarea(evento){
  console.log("TOGGLE",evento);
  console.log(evento.target.parentNode);
  evento.target.parentNode.classList.toggle("finalizada");
}

const templateTarea = (tarea)=> `
<div onclick="clickTarea(event)">
  <span>⃝</span>
  <span>${tarea}</span>
</div>
<button onclick="borrarTarea(event)"> X </button>
`;
