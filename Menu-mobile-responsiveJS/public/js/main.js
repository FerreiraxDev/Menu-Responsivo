function btnShow(){
    let menuShow = document.querySelector('.menu-responsivo');
    if(menuShow.classList.contains('open')){
        menuShow.classList.remove('open');
    }else{
        menuShow.classList.add('open');
    }
    
}