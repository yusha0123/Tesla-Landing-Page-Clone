let menu_btn=document.getElementById('menubtn');
let menu=document.getElementById('mobile-menu');

menu_btn.addEventListener("click", function(){
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
    if(isMobile){
        menu.style.display='inline';
    }else{
       menu.style.display='none';
    }
});
