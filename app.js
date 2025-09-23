// -----------------------------
// Crear un array para almacenar los nombres
// -----------------------------
let amigos = [];

// -----------------------------
// Función para agregar amigos
// -----------------------------
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // eliminamos espacios en blanco

    // 2. Validar la entrada (no debe estar vacío)
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 3. Agregar el nombre al array
    amigos.push(nombre);

    // 4. Mostrar la lista actualizada en el HTML
    mostrarAmigos();

    // 5. Limpiar el campo de entrada
    input.value = "";          // ✅ limpia el campo
    input.focus();             // opcional: vuelve a enfocar el input
}

// -----------------------------
// Función para actualizar la lista de amigos
// -----------------------------
function mostrarAmigos() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
    lista.innerHTML = "";       // ✅ vacía la lista antes de volver a pintarla

    // 3. Recorrer el array amigos y crear elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// -----------------------------
// Función para sortear los amigos
// -----------------------------
function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
