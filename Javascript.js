var button = document.querySelector("button");
var button_after = window.getComputedStyle(button, "::after");

width = 0

button.addEventListener("click", function (){
    setInterval(function (){
        if (width <= 100){
            document.getElementById("dl-icon").style.display = "none"
            document.getElementById("btn-text").style.display = "none"
            document.getElementById("spiner").style.display = "flex"
            document.getElementById("spiner").style.animation = "rotate 1s infinite"
            button.style.setProperty('--w' ,width+'%');
            width+= 0.2;
        }else {
            document.getElementById("spiner").style.display = "none"
            document.getElementById("btn-text").style.display = "flex"
            document.getElementById("btn-text").innerText = "دانلود با موفقیت انجام شد "
            button.style.setProperty('--w','0%');
            button.style.background = "green"
            clearInterval();
        }
    }, 5)
})