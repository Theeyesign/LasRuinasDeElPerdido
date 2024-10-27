function checkCombination() {
  const input = document.getElementById("combination-input").value;
  const content = document.getElementById("content");

  if (input === "123-456") {
    content.innerHTML = "Un mensaje antiguo aparece: 'La primera pista está en el río escondido...'";
  } else if (input === "789-101") {
    content.innerHTML = "Aparece un video en la pantalla...";
    content.innerHTML += `<video src="video.mp4" controls autoplay></video>`; // Enlace a un video
  } else {
    content.innerHTML = "Nada sucede... Prueba con otra combinación.";
  }
}
