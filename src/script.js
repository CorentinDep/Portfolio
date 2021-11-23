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


ScrollReveal().reveal('.apparition', {
    origin: 'left',
    distance: '200px',
    opacity: '0',
    interval: 200
});

ScrollReveal().reveal('.titrePart', {
    origin: 'right',
    distance: '200px'
})