const addTaskBtn = document.querySelector("#addIcon");
const displayTask = document.querySelector("#displayTaskListContainer ul");

// Function to add Task
function addTask() {
    let inputTask = document.querySelector("#taskInputField");
    const list = document.createElement("li");
    list.innerHTML = `<input type="checkbox" class="todoCheck"><span class="todoTask">${inputTask.value}</span><span class="cross">&#10005;</span>`;
    displayTask.appendChild(list);
    inputTask.value = "";
}

addTaskBtn.addEventListener("click", ()=>{
    addTask();
});