

const inputbox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')

const saveData = ()=>{
    localStorage.setItem('data',listContainer.innerHTML)
}

const showTask = ()=>{
    listContainer.innerHTML = localStorage.getItem('data');
}

const handleListContainer = ()=>{
    if(inputbox.value===''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputbox.value="";
}

document.querySelector('button').addEventListener('click',()=>{
    handleListContainer();
})

document.querySelector('input').addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
        handleListContainer();  
    }
})

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
},false);


showTask();
