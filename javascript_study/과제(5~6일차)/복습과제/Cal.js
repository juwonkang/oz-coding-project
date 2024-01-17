const button1 = document.querySelector(".button1")
const screen = document.getElementById(("screen"))




button1.addEventListener("click" , function(){
    const number = button1.value;
    

    const p = document.createElement("p");
    p.textContent = number;
    screen.appendChild(p);
})