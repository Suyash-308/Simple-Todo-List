const input= document.getElementById("todos-input");
const parent= document.getElementById("todos");

function addPara(){
const  div=document.createElement("div");    
const para=document.createElement("p");
const button= document.createElement("button");

const todoId=Date.now();

div.id=todoId;

button.setAttribute("onclick",`deleteTodo(${todoId})`);

para.innerHTML=input.value ;
button.innerHTML="Delete";

div.append(para,button);

parent.appendChild(div);
}

function deleteTodo(todoId){
    const el=document.getElementById(todoId);

    el.remove();

}
