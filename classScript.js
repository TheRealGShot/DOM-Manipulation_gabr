document.getElementById("changeP").innerHTML="3";
document.getElementById("addButton").innerHTML="add x";


document.getElementsById("addButton").addEventListener("click" , function () {
    let origin=document.getElementById("changeP").innerHTML;
    origin=parseInt(origin)+1;
    document.getElementById("changeP").innerHTML=origin
});



document.getElementsByClassName("card")[1].style.backgroundColor="blue";