"use strict";
let light = document.getElementsByClassName('light');
let redLight = document.querySelector('#red');
let yellowLight = document.querySelector('#yellow');
let greenLight = document.querySelector('#green');


let changeColor = (color) => {
    // console.log(color.style.background);
    // console.log(light);
 
    // for(let i=0; i< light.length; i++){
    //     light[i].style.background = 'gray';
    // }

    if(color.id == "red"){
        color.style.background = color.id;
        yellowLight.style.background = "gray";
        greenLight.style.background = "gray";
    } else if(color.id == "yellow" && redLight.style.background == "red") {
        color.style.background = color.id;
    } else if(color.id == "green"){
        color.style.background = color.id;
        yellowLight.style.background = "gray";
        redLight.style.background = "gray";
    } else if (color.id == "yellow" && greenLight.style.background == "green"){
        color.style.background = color.id;
        greenLight.style.background = "gray";
        redLight.style.background = "gray";
    }

}

