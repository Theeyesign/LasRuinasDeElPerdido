document.querySelector("button").addEventListener("click", function() {
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
