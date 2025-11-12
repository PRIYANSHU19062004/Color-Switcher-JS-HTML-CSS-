const buttons=document.querySelectorAll('.button') //buttons will store all the buttons as console.
const body=document.querySelector("body")
buttons.forEach(function(button){
  console.log(button);
  //We will apply even listener on each button.
  button.addEventListener('click',function(e){   //e is an even object.
    console.log(e)
    console.log(e.target)   //will print the target from which this event has occured.
   if(e.target.id==='grey'){
     body.style.backgroundColor=e.target.id
   }
   if(e.target.id==='white'){
     body.style.backgroundColor=e.target.id
   }
   if(e.target.id==='blue'){
     body.style.backgroundColor=e.target.id
   }
   if(e.target.id==='yellow'){
     body.style.backgroundColor=e.target.id
   }
   
   if(e.target.id==='purple'){
     body.style.backgroundColor=e.target.id
   }
   

});
});
 

