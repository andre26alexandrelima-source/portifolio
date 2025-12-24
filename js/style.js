const words = ["Graphic Designer","Front-end Developer","Full Stack"];
let i=0,j=0;
const typed=document.querySelector(".typed");

function type(){
  if(j<words[i].length){
    typed.textContent+=words[i][j++];
    setTimeout(type,100);
  }else{
    setTimeout(erase,1500);
  }
}

function erase(){
  if(j>0){
    typed.textContent=words[i].substring(0,--j);
    setTimeout(erase,60);
  }else{
    i=(i+1)%words.length;
    setTimeout(type,400);
  }
}

type();
