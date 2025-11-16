<script>
  // Escolha o tempo em segundos onde a música deve começar
  const inicio = 0; // exemplo: começar aos 42 segundos

  const musica = document.getElementById("musica");

  // Garantir que o áudio carregue os metadados antes de mudar currentTime
  musica.addEventListener("loadedmetadata", () => {
    musica.currentTime = inicio;
  });

  // Chrome só permite tirar mute após interação
  document.addEventListener("click", () => {
    musica.muted = false;
    musica.currentTime = inicio; // garantir o início correto
    musica.play();
  }, { once: true });
</script>
