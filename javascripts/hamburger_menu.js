const toggle_button = document.getElementsByClassName('toggle-button')[0];
const navbar_links = document.getElementsByClassName('navbar-links')[0];

toggle_button.addEventListener("click", ()=> {
   navbar_links.classList.toggle('active'); 
})