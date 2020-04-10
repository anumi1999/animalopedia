var nav = document.getElementById('tpp');
var check = document.getElementById('scrn');
var hd = document.getElementById('headd');
var navbar = document.getElementById('nb');
var text = document.getElementById('text');
window.onscroll = function(){
    if (window.pageYOffset > 300){
        nav.style.background = "black";
        nav.style.opacity = 1;
        check.style.background= "transperant";
        check.style.opacity = 0;
        hd.style.height = '700px';
        navbar.style.opacity= 1;
        text.style.display = 'block';

    }
    else if (window.pageYOffset > 20){
        check.style.background = "black";
        check.style.opacity = 0.5;
        hd.style.backgroundImage = URL("wallreindeer.jpg");
        this.navbar.style.text = 0;
    }else {
        nav.style.background = "transperant";
        nav.style.opacity = 0;
        check.style.background= "transperant";
        check.style.opacity = 0;
        hd.style.backgroundImage = URL("wallreindeer.jpg");
        navbar.style.opacity = 0;
        text.style.display = 'none';
        navbar.style.opacity = 0;
    }
}

