'use strict';
const images=document.querySelectorAll('.image');
const btns=document.querySelectorAll('.mini')
console.log(images);
console.log(btns);

let current=0;


const show=function(){
  images.forEach(image=>{
    image.classList.add('hidden')
    images[current].classList.remove('hidden')
 
    })
  btns.forEach(btn=>{
 btn.classList.remove('orange')
  btns[current].classList.add('orange')

})
}


show()

const right=document.querySelector('.right')
const left=document.querySelector('.left')
const toRight=function(){
  current++;
  if (current>images.length-1)current=0
  
  show()
  
}
const toLeft=function(){
  current--;
  if (current<0)current=images.length-1
  
  show()
  
}



right.addEventListener('click',toRight)

left.addEventListener('click',toLeft)

btns.forEach((btn,idx)=>{
  btn.addEventListener('click',function(){
    current=idx
   show()

  })
})
