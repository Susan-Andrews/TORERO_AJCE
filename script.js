function changebg(){
    var navbar=document.getElementById('nav');
    var scrollvalue=window.scrollY;
    if(scrollvalue<150){
        navbar.classList.remove('bgcolor');
    }else{
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll',changebg)