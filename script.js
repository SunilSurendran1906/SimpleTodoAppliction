
const tasks=[];
function handleTask(){
    const task=document.getElementById('task')
     tasks.push(task.value)
     renderTask(tasks)
     task.value='';
 
 }

 function renderTask(tasks=[]){
   const multipleTodoList=document.getElementById('todo-listing')
   multipleTodoList.innerHTML='';
  const todoCard=[];
   if(tasks.length > 0){
     tasks.forEach((_t) => {
        const nodeCard=document.createElement('div')
         nodeCard.setAttribute('class','col-2')
          nodeCard.innerHTML=`
        <div class="card">
          <div class="card-body">${_t}</div>
         </div>`;
        todoCard.push(nodeCard);
      
        
    });
  }
  multipleTodoList.append(...todoCard);
 }