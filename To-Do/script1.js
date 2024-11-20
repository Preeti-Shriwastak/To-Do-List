// const enterTask = document.getElementById('enter-task');
// const cardTask = document.getElementById('card');
document.getElementById("add-to-do").onclick = function() {
    addTask();
  };

function addTask(){
    const enterTask = document.getElementById('enter-task');
    const cardTask = document.getElementById('card');
    
    console.log("button clicked")
    if(enterTask.value === ""){
        alert("Enter some task");
    } else {
        let p = document.createElement('p');
        p.id="para"
        p.innerHTML = enterTask.value;
        cardTask.appendChild(p);

        //Creating remove btn------------------
        let remBtn = document.createElement('button');
        remBtn.id = "remove";
        remBtn.innerHTML = "\u00d7";

        //--------------Calling removeToDo function 
        remBtn.onclick = removeTodo;
        p.appendChild(remBtn);

        //Creating Edit button------------------------------
        let editBtn = document.createElement('button');
        editBtn.id = "btnEdit";
        editBtn.innerHTML = "&#x270D";

        editBtn.onclick = editToDo; 
        p.appendChild(editBtn);
    }
    enterTask.value= " ";
    saveData() 
}
function removeTodo(evt){
    evt.preventDefault();
    var rmCard = evt.target.parentElement;
    rmCard.remove();
    // saveData();
}
// function editToDo(evt){
//     evt.preventDefault();
//     currentElement = evt.currentTarget.parentElement.querySelector("p");
//     editTodoInput = document.getElementById("enter-task");
//     editTodoInput.value = currentElement.innerText;
//     // document.querySelector(".edit_form").style.display = "block";

// }

function editToDo(evt) {
  evt.preventDefault();
  document.querySelector(".form-edit").style.display = "block";

  currentElement = evt.target.parentElement.childNodes[0];
  editTodoInput = document.getElementById("edit-todo");
  editTodoInput.value = currentElement.nodeValue;

  //console.log(evt.target.parentElement.childNodes)
  //console.log(currentElement.nodeValue)
  //currentElement = evt.currentTarget.parentElement.querySelector("p");
  // document.querySelector(".form-edit").style.display = "block";
} 
document.querySelector(".form-edit").addEventListener("click", (evt) => {
    evt.preventDefault();
    console.log(currentElement)
    currentElement.nodeValue = editTodoInput.value;
})






function saveData(){
    localStorage.setItem("data", card.innerHTML);
}

function showData(){
    card.innerHTML = localStorage.getItem("data");
}
