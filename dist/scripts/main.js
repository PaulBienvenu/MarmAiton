let divBouton = document.querySelector('.scrollButton')


divBouton.addEventListener('click', function(){
    window.scrollTo({top: 800, behavior: 'smooth'});
})
