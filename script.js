function checkCombination() {
  const input = document.getElementById("combination-input").value;
  const content = document.getElementById("content");

  if (input === "123-456") {
    content.innerHTML = "Un mensaje antiguo aparece: 'La primera pista está en el río escondido...'";
  } else if (input === "789-101") {
    content.innerHTML = "Aparece un video en la pantalla...";
    content.innerHTML += `<video src="video.mp4" controls autoplay></video>`;
  } else if (input === "666-666") {
    content.innerHTML = "⚠️ Error... mensaje corrompido ⚠️"; // Efecto de error o fallo
  } else {
    content.innerHTML = "Nada sucede... Prueba con otra combinación.";
  }

  content.classList.add("glitch-text");
}
