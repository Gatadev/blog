function myFunction() {
    document.getElementById("menuDesplegable").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.menuboton')) {
      var dropdowns = document.getElementsByClassName("menu-contenido");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }