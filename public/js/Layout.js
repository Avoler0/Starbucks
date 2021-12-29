
const inner = {
  $gnbNav01: document.querySelector(".gnb_nav01"),
  $gnbNav01a: document.querySelector(".gnb_nav01 a")


};


inner.$gnbNav01.addEventListener('mouseover',() =>{
  inner.$gnbNav01a.classList.add('on');
});
inner.$gnbNav01.addEventListener('mouseout',() =>{
  inner.$gnbNav01a.classList.remove('on');
});
