let boutton = document.querySelector('#mode');
let span = document.querySelector('span');


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

function modeSombre() {
    document.body.className = 'dark';
    span.textContent = 'Thème Clair';
    localStorage.setItem('theme', 'sombre');
}
