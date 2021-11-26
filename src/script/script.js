let imageFond = document.getElementById('imageFond');
    
window.addEventListener('scroll', function() {
    let value = this.window.scrollY;    
    imageFond.style.top = value * 0.8 + 'px';

})

// Scroll Reveal
ScrollReveal().reveal('.revealGauche', {
    origin: 'left',
    distance: '200px'
});

ScrollReveal().reveal('.img', {
    origin: 'left',
    distance: '400px'
});

ScrollReveal().reveal('.txt', {
    origin: 'right',
    distance: '400px'
});

ScrollReveal().reveal('.revealDroit', {
    origin: 'right',
    distance: '200px'
});

ScrollReveal().reveal('.contentTitre', {
    origin: 'bottom',
    distance: '200px'
});


const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

document.addEventListener('click', e => {
    cursor.classList.add('cursorClick');
    /* On met un delay pour enlever l'animation */
    setTimeout(()=>{
        cursor.classList.remove("cursorClick");
    }, 500);
})

/* ==== ANIMATION DES POURCENTAGES DES COMPETENCES EN LANGUAGES DE PROGRAMMATIONS ==== */
