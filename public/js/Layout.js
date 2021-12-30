
const inner = {
  $gnbNav01: document.querySelector(".gnb_nav01"),
  $gnbNav01a: document.querySelector(".gnb_nav01 a"),
  $gnbSubWrap: document.querySelector(".gnb_sub_wrap"),
  $subGnbNavInner:document.querySelector(".sub_gnb_nav_inner"),
};


inner.$subGnbNavInner.addEventListener('mouseover',() =>{
  inner.$gnbNav01a.classList.add('on');
  inner.$gnbSubWrap.style.display="block";
});
inner.$subGnbNavInner.addEventListener('mouseout',() =>{
  inner.$gnbNav01a.classList.remove('on');
  //inner.$gnbSubWrap.style.display="none";
});
