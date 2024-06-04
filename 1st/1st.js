function display(n) {
    var slides = document.getElementsByClassName("imgs");
    if (n > slides.length){
        Index = 1
    }else if (n < 1){    
        Index = slides.length
    }
    for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slides[Index-1].style.display = "block";  
}

var Index = 1;
display(Index);

function butt(n) {
    display(Index += n);
}