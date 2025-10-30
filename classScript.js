document.getElementById("changeP").innerHTML="3";
document.getElementById("addButton").innerHTML="add x";

document.getElementById("addButton").addEventListener("click",function(){
    let a=parseInt(document.getElementsById("changeP").innerHTML);
    a=a+1;
    document.getElementsById("changeP").innerHTML=a;
});
