const checks = document.querySelectorAll(".todoCheck");
const lists = document.querySelectorAll("li .todoTask");

checks.forEach((check)=>{
    check.addEventListener("click", ()=>{
        lists.forEach((list)=>{
            if(check.checked) {
                list.classList.add("checkedList");
            }
            else{
                list.classList.remove("checkedList");
            }
        });
    });
});