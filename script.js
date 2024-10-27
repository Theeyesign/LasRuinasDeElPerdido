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
