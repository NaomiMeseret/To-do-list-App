const inputBox=document.getElementById("additem")
const listContainer = document.getElementById("listcontainer");
function AddEvent(){
    if(inputBox.value===''){
        alert("please write something!");
    }
    else{
        var li =document.createElement("li");
        li.textContent=inputBox.value
        listContainer.appendChild(li)
        var span=document.createElement("span")
        span.textContent="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=""
   }
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
    }
    
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }

} , false)
function saveData() {
  localStorage.setItem("data", listContainer.textContent);
}

function showTasks() {
  listContainer.textContent = localStorage.getItem("data");
}
showTasks();

