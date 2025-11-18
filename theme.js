let boutton = document.querySelector('#mode');
let span = document.querySelector('span');
let image = document.querySelector('#mode .fas');

//1.Ecoute du boutton
boutton.addEventListener('click', () => {
    if(document.body.classList.contains('dark')) {
        
        //Mode clair
        document.body.className = '';
        image.classList.remove('fa-sun');
        image.classList.add('fa-moon');
        span.textContent = 'Thème Sombre';
        localStorage.setItem('theme', 'clair');
    } else {
        //Mode sombre
        modeSombre();
    }
});

//2.Création de la fonction modeSombre
function modeSombre() {
    document.body.className = 'dark';
    image.classList.remove('fa-moon');
    image.classList.add('fa-sun');
    span.textContent = 'Thème Clair';
    localStorage.setItem('theme', 'sombre');
}

//3.Sauvegarde du dernier réglage de l'user
if(localStorage.getItem('theme')) {
    if(localStorage.getItem('theme') == 'sombre') {
        modeSombre();
    }
}
