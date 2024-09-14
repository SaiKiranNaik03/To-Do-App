let addTask = document.querySelector('.add');
let input = document.querySelector('input');
let Allul = document.querySelectorAll('ul')
let sel = document.querySelector('select');
let hi = document.querySelector('.high');
let mo = document.querySelector('.moderate');
let lo = document.querySelector('.low');
console.dir(lo);
addTask.addEventListener("click",function(){
    let task = input.value;
    task.trim();
    if(task==""){
        alert("Task can't be empty!");
    }
    else{
        input.value="";
        let addtsk =  document.createElement('li');
        addtsk.innerHTML=`${task} <button class='delBtn'>X</button>`;
        if(sel.value == 'high'){
            let tarHi = hi.firstChild.nextSibling;
            tarHi.appendChild(addtsk);
        }
        else if(sel.value == 'moderate'){
            let tarMo = mo.firstChild.nextSibling;
            tarMo.appendChild(addtsk);
        }
        else if(sel.value == 'low'){
            let tarLo = lo.firstChild.nextSibling;
            tarLo.appendChild(addtsk);
        }
        
    }
})

for(ul of Allul){
    ul.addEventListener("click",function(event){
        if(event.target.nodeName == 'BUTTON'){
            let ptr = event.target.parentElement;
            ptr.remove();
        }
    })
}
