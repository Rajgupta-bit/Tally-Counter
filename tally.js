
let box = document.querySelector("#input");
let p=document.getElementById("ad");
let q=document.getElementById("sub");
let reset = document.getElementById("reset");
let startval = document.getElementById("start");
let box2 = document.querySelector(".box2");
let input = document.createElement("input");

input.type = "number";
input.placeholder="Enter your Number";
input.style.cssText = `
  padding:5px;
  border-radius:9px;
`;

box.innerHTML=0;
p.addEventListener("click",function(){  
 box.innerHTML=Number(box.innerHTML)+1;
})
q.addEventListener("click",function(){ 
  if(box.innerHTML>0){ 
      box.innerHTML=Number(box.innerHTML)-1;
  }
})


reset.addEventListener("click",()=>{
  box.innerHTML = 0;
  window.location.href='tallyCounter.html';

})

let enterCount=0;

/*keyboard event is handle!! */
document.addEventListener('keydown',(e)=>{
  if (e.key === 'Enter') {

    enterCount++;

    if (enterCount === 1) {
      box2.appendChild(input);
      input.focus();   // cursor automatically input me aa jaye
    }

    if (enterCount === 2) {
      box.innerHTML = input.value;
      input.remove();   // hide/remove input
      enterCount = 0;   // reset counter
    }
  }
})

/*click event  is handle!! */
startval.addEventListener('click',(e)=>{
  
    enterCount++;

    if (enterCount === 1) {
      box2.appendChild(input);
      input.focus();   // cursor automatically input me aa jaye
    }

    if (enterCount === 2) {
      box.innerHTML = input.value;
      input.remove();   // hide/remove input
      enterCount = 0;   // reset counter
    }
  
})

