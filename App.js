

// function insert(){
//     var tas = document.getElementById("task").value;
//     console.log(tas);
//     var card1 = document.getElementById("open");
//     // console.log(card1);
//     var element = document.createElement("div");
//     element.innerHTML = tas;
//     console.log("line 10"+element.innerHTML);
//     card1.appendChild(element);
//     element.setAttribute("id","ele1");
//     element.setAttribute("onClick","pop1()");
// }
// function pop1(){
//         console.log("line 16");
// }

var newTask = document.querySelector("#create-task");
var modal = document.querySelector(".modal");
var closeSpan = document.querySelector(".close");
var btn = document.querySelector("#add-task");
let count = 1;


newTask.addEventListener('click', () => {
    modal.style.display = "block";
});

closeSpan.addEventListener('click', () => {
    modal.style.display = "none";
});

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

function allowDrop(e){
    e.preventDefault();
}

function drag(e){
    e.dataTransfer.setData("task-card", e.target.id);
}

function drop(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("task-card");
    if(e.target.id === "card-contents"){
        e.target.appendChild(document.getElementById(data));
    }
}

function deleteTask(event){
    let delNode = event.currentTarget.parentNode.parentNode;
    delNode.removeChild(event.currentTarget.parentNode);
}

btn.addEventListener('click', () => {
    var openTasks = document.querySelector(".append-task");
    let taskName = document.querySelector("#task-name");
    let taskDesc = document.querySelector("#task-description");
    if(taskName.value === ""){
        alert("Please enter a task name!");
        return;
    }
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("id", count);
    taskDiv.draggable = "true";
    taskDiv.ondragstart = drag;

    let taskHead = document.createElement("div");
    taskHead.classList.add("task-heading");

    taskHead.textContent = count +".    "+ taskName.value;
    taskName.value = "";
    
    let taskBody = document.createElement("div");
    taskBody.classList.add("task-body");

    taskBody.textContent = taskDesc.value;
    taskDesc.value = "";

    let delBin = document.createElement("span");
    delBin.classList.add("bin-img");
    delBin.classList.add("button-49");
    delBin.onclick = deleteTask;
    delBin.setAttribute("id", count);
    delBin.textContent = 'X';

    taskDiv.appendChild(delBin);
    taskDiv.appendChild(taskHead);
    taskDiv.appendChild(taskBody);

    openTasks.appendChild(taskDiv);
    modal.style.display = "none";
    count++;
});