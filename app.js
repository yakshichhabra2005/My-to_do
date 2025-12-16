let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=input.value;

  let deleteBtn=document.createElement("button");
  deleteBtn.innerText="delete";
  deleteBtn.classList.add("delete");

  item.appendChild(deleteBtn);
  ul.appendChild(item);
 
  input.value="";
});


ul.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON"){
   let listItem= event.target.parentElement;
   listItem.remove();
   alert("Deleting");
  };

})
