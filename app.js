const SelectTaskForm = document.querySelector("#task-form");

// console.log(SelectTaskForm, 'SelectTaskForm');

SelectTaskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // console.log(event, "submit form");

    const selectTaskInputField = document.querySelector("#task");
    // console.log(selectTaskInputField, "selectTaskInputField");
    const taskInputValue = selectTaskInputField.value;
    // console.log("working good")

    if(!taskInputValue){
        alert("please fill the input field");
        return
    }    
    // console.log(taskInputValue, "taskInputValue");

    // return;
    const collection = document.querySelector(".collection");
    //   console.log(collection, "collection");
    
    const createLiElement = document.createElement("li");
    createLiElement.className = "collection-item";
    createLiElement.innerHTML = ` ${taskInputValue}
        <a href="#" class="delete-item secondary-content">
        <i class="fa fa-remove"></i>
        </a>`;
    
    collection.append(createLiElement);
    
    const taskClearTxt = document.querySelector("#task-title");
    if(createLiElement.innerHTML = ` ${taskInputValue}
    <a href="#" class="delete-item secondary-content">
    <i class="fa fa-remove"></i>
    </a>`){
        taskClearTxt.innerText = "Tasks";
    }

    selectTaskInputField.value = "" ;
    // console.log(createLiElement, "createLiElement");
    
});

    const collectionItem = document.querySelector(".collection");
    // console.log(collectionItem, "collectionItem");

collectionItem.addEventListener("click", function(event){
    event.preventDefault();
    if(event.target.className === "fa fa-remove"){
         // console.log("task is delete");
        if(confirm("Are You Sure")) {
            event.target.parentElement.parentElement.remove();
        }
    }
});

const clearTaskBtn = document.querySelector(".clear-tasks");
// console.log(clearTaskBtn, "clearTaskBtn");

clearTaskBtn.addEventListener("click", function(){
    // console.log("its working");
    const taskClearTxt = document.querySelector("#task-title")
    const collection = document.querySelector(".collection");
    if(confirm("Are you Sure")){
        collection.innerHTML = "" ;
    
        taskClearTxt.innerText = "*All Tasks Are Cleared*";
    }
    
    // const liCollection = document.querySelector(".collection-item");    
        
    // else if()
    // {
    //    
    // }


    // const taskClearTxt = document.querySelector("#task-title")
    // // console.log(taskClearTxt, "taskClearTxt")
    // taskClearTxt.innerText = "All Task Are Cleared";
})

const taskFilter = document.querySelector("#filter");
// console.log(taskFilter, "taskFilter");

taskFilter.addEventListener("keyup", function(event){
    const currentElement = event.target;
    const filterInputValue = currentElement.value;
    const allLiSelect = document.querySelectorAll(".collection-item");
    console.log(allLiSelect, "allLiSelect")
    // console.log(filterInputValue,"filterInputValue")   

    allLiSelect.forEach( function (singleLiElement) {
        

        if (
            singleLiElement.innerText.toLowerCase().indexOf(filterInputValue.toLowerCase()) === -1   
          )
        
          {
            singleLiElement.style.display = "none";
          } 
          else {
            singleLiElement.style.display = "block";
          }
        
    });
});



