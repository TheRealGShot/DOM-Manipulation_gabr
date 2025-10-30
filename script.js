document.getElementById("taskname1").innerHTML="Complete the project documentation";
//what is the difference between Document and document in DOM

//In the Document Object Model (DOM), "Document" refers top teh interface that represents

document.getElementById("compl1").innerHTML="Remove";
document.getElementById("taskname2").innerHTML="Review code for bugs";

// i declared a variab;e and added something to print to the console
let task = document.getElementById("taskname2").innerHTML;
console.log(task+" "+"is selected");
//I added functionality to the remove button to cross out the task and change its color to
document.getElementById("compl1").addEventListener("click",function(){
    document.getElementById("taskname2").style.textDecoration="line-through";
    document.getElementById("taskname1").style.color="red";
});


document.getElementById("addTask").addEventListener("click", function (){
    event.preventDefault();
    let newTask = document.getElementById("new-task").value; //fixed typo
    console.log(newTask);
    document.getElementById("taskname3").innerHTML = newTask;
});

document.getElementById("addTask").addEventListener("click", function (){
    event.preventDefault();
    let newTask= document.getElementById("new-task").value; //Fixed typo
    console.log(newTask);
    document.getElementById("taskname3").innerHTML = newTask;
});