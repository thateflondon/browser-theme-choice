let boutton = document.querySelector('#mode');
let span = document.querySelector('span');

//3.Sauvegarde du dernier réglage de l'user
if(localStorage.getItem('theme')) {
    if(localStorage.getItem('theme') == 'sombre') {
        modeSombre();
    }
}

//Autre manière de mettre en place la fonctionnalité de sauvegarde
// if (localStorage.getItem('theme') == 'sombre') {
//     modeSombre();
// }else{
//     localStorage.getItem('theme') == 'clair';
// }

//1.Ecoute du boutton
boutton.addEventListener('click', () => {
    if(document.body.classList.contains('dark')) {
        //Mode clair
        document.body.className = '';
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
    span.textContent = 'Thème Clair';
    localStorage.setItem('theme', 'sombre');
    // if (localStorage.getItem('theme') == 'sombre') {
    //     modeSombre();
    // }else{
    //     localStorage.setItem('theme') == 'clair';
    // }
}

//Suggestions d'améliorations
// Géolocalisation automatique de l'utilisateur

