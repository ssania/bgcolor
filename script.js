const button =document.getElementById("btn");
const body =document.body;
const colors =['blue','lightgreen','babypink','maroon']
body.style.backgroundColor= colors[0]
button.addEventListener('click',changebackground)
function changebackground(){
    const colorsIndex=Math.floor(Math.random()*colors.length);
    body.style.backgroundColor =colors[colorsIndex]
}