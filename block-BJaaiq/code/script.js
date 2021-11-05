function scrollMe(){
  while(true){
    let bottom = document.documentElement.getBoundingClientRect().bottom;
    if(bottom > document.documentElement.clientHeight + 100){
      break;
    }
    document.body.insertAdjacentHTML("beforeend", `<p> Date: ${new Date()} </p>`);
  }
}
window.addEventListener('scroll',scrollMe);
scrollMe();

let arrow = document.getElementById('icon');
function scrollMe(){
  let bottom = document.documentElement.clientHeight;
  if(window.pageYOffset > bottom){
    icon.style.display = 'block';
  }else{
    icon.style.display = 'none';
  }
}
for(let i = 0 ; i < 5000; i++){
  document.body.insertAdjacentHTML("beforeend", `<p> ${i} </p>`);
}
window.addEventListener('scroll', scrollMe);
scrollMe();
arrow.addEventListener('click', function(){
  window.scrollTo(pageYOffset, 0);
})
