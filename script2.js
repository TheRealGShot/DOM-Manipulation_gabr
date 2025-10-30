document.getElementById("changeP").innerHTML="1";
document.getElementById("addButton").innerHTML="add value";

//I am selecting the button and adding an event listener for a mouse click that will
//run a function
document.getElementsById("addButton").addEventListener("click" , function () {
    let origin=document.getElementById("changeP").innerHTML;
    console.log(origin);
    //cating to covert string to number
    origin=parseInt(origin)+1;
    document.getElementById("changeP").innerHTML=origin
});

//The card has a counter, the card is functional
//Functional components 
//Function is to incriment by one

document.getElementsByClassName("card")[1].style.backgroundColor="blue";