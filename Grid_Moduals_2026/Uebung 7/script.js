/*window.alert("hello there, your useing java script now!");*/

let schritt = 0;

//console.log (document);

function changeColor(){
    let titel = document.getElementById("titel");
      
        titel.style.color = "blue";

}

function create(){
    let element = document.createElement("div");
    element.textContent = "Neues Element";

    element.style.fontSize = "3vw";
    element.style.textAlign = "center";

    document.body.appendChild(element);

}
