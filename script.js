// Al inicio, oculta las secciones de la historia
document.getElementById("storySections").classList.add("hidden");

document.getElementById("startButton").addEventListener("click", function() {
    const input = document.querySelector("input[type='text']");
    const contentDiv = document.getElementById("content");
    
    if (input.value) {
        const newNote = document.createElement("div");
        newNote.textContent = `Nota: ${input.value}`;
        contentDiv.appendChild(newNote);
        input.value = ""; // Limpia el campo de entrada
    } else {
        alert("Por favor, ingresa un texto.");
    }
});

// Funcionalidad para abrir la carta
document.getElementById("openCardButton").addEventListener("click", function() {
    const codeInput = document.getElementById("codeInput").value;
    const card = document.getElementById("card");
    const cardContent = document.getElementById("cardContent");

    if (codeInput === "Theringiswatching") {
        // Oculta el contenido original
        document.getElementById("center-box").classList.add("hidden");
        // Muestra las secciones de historia
        document.getElementById("storySections").classList.remove("hidden");

        cardContent.textContent = "¡Has abierto la carta!";
        card.classList.remove("hidden");
    } else {
        alert("Código incorrecto. Intenta de nuevo.");
    }
});

// Funcionalidad para cerrar la carta
document.getElementById("closeCardButton").addEventListener("click", function() {
    const card = document.getElementById("card");
    card.classList.add("hidden");
});
