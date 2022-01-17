const form = document.getElementById('form');
const listGroup = document.getElementById('list-group');
const errorMessage = document.getElementById('error-message');


//add Items
 form.addEventListener('submit', addForm);

 function addForm(d){
     d.preventDefault();

     //get Input value from input
     let inputValue = document.getElementById('input-value').value;
    
     //don't add anything if the input value is empty
     if(inputValue===''){
         errorMessage.style.display ='block';
         return;
     }else{
         errorMessage.style.display ='none';
     }
         

     //create new Li
     let newLi = document.createElement('li');
     newLi.className = 'group-list';

     //append textnode to li
     newLi.appendChild(document.createTextNode(inputValue));

     //append li to listGroup
     listGroup.appendChild(newLi);

     //create del button
     let delBtn = document.createElement('button');
     delBtn.className = 'delete-btn';
     delBtn.appendChild(document.createTextNode('X'));
     newLi.appendChild(delBtn);

     //remove list items
     delBtn.addEventListener('click',del);
     function del(){
         if(confirm('Are you sure?')){
             listGroup.removeChild(newLi);
         }
     }
    //reset form after submission
    form.reset();
 }

