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

const toggle = document.getElementById("theme-toggle");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.replace("bx-moon", "bx-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("bx-sun", "bx-moon");
    localStorage.setItem("theme", "light");
  }
});

// manter o tema salvo
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  icon.classList.replace("bx-moon", "bx-sun");
}
