const addTaskBtn = document.querySelector("#addIcon");
const displayTask = document.querySelector("#displayTaskListContainer ul");
let inputTask = document.querySelector("#taskInputField");

// Function to add Task
function addTask() {
    if(inputTask.value === "") {
        alert("You must write something");
    }
    else{
        const list = document.createElement("li");
        list.innerHTML = `<input type="checkbox" id="check" class="todoCheck"><label for="" class="todoTask">${inputTask.value}</label><span class="cross">&#10005;</span>`;
        displayTask.appendChild(list);
        inputTask.value = "";
    }
}

addTaskBtn.addEventListener("click", ()=>{
    addTask();
});

// Feature to Mark Task as Checked
displayTask.addEventListener("click", (e)=>{
    if(e.target.type === "checkbox") {
        const label = e.target.nextElementSibling;
        label.classList.toggle("checkedList");
    }
}, false);