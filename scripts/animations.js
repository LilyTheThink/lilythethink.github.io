function stopAnimation() {
    var element = document.getElementById("home");
    element.classList.toggle("background-scroll");
}  
  
function shakeFunction() { 
    var myLayout = document.getElementById('layout');
    myLayout.addEventListener("animationend", () => myLayout.classList.remove('shake'));
    myLayout.classList.add('shake'); 
}