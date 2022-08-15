
function setNewImage1 (){
    document.querySelector('#coffee1').src='../Photos/coffee-colored/coffee-1.jpg';
}
function setOldImage1 (){
    document.querySelector('#coffee1').src='../photos/coffees-non-color/coffee-1.jpg';
}



function setNewImage2 (){
    document.querySelector('#coffee2').src='../Photos/coffee-colored/coffee-2.jpg';
}
function setOldImage2 (){
    document.querySelector('#coffee2').src='../photos/coffees-non-color/coffee-2.jpg';
}


function setNewImage3 (){
    document.querySelector('#coffee3').src='../Photos/coffee-colored/coffee-3.jpg';
}
function setOldImage3 (){
    document.querySelector('#coffee3').src='../photos/coffees-non-color/coffee-3.jpg';
}

function setNewImage4 (){
    document.querySelector('#coffee4').src='../Photos/coffee-colored/coffee-4.jpg';
}
function setOldImage4 (){
    document.querySelector('#coffee4').src='../photos/coffees-non-color/coffee-4.jpg';
}

const iconFooter = document.querySelectorAll('p')
iconFooter.forEach(icon => {
    if(icon.addEventListener(onmouseover , e => {
        icon.style.color = 'red'
    })){
        icon.style.color = 'green'
    }
})