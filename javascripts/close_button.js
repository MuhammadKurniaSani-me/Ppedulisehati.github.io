function close_button() {
    const close = document.getElementById("close-button");
  
    close.addEventListener("click", () => {
      document.getElementById("window-alert").style.display = "none";
    });
  }

//   Run functions
close_button();