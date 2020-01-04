var nav = document.getElementById('tpp');
var check = document.getElementById('scrn');
var hd = document.getElementById('headd');
window.onscroll = function(){
    if (window.pageYOffset > 200){
        nav.style.background = "black";
        nav.style.opacity = 1;
        check.style.background= "transperant";
        check.style.opacity = 0;
        hd.style.backgroundImage = "none";
    }
    else if (window.pageYOffset > 20){
        check.style.background = "black";
        check.style.opacity = 0.5;
        hd.style.backgroundImage = URL("wp3375820.jpg");

    }else {
        nav.style.background = "transperant";
        nav.style.opacity = 0;
        check.style.background= "transperant";
        check.style.opacity = 0;
        hd.style.backgroundImage = URL("wp3375820.jpg");
    }
}