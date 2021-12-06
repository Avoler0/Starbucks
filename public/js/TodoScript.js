const Todo_Text = document.querySelector(".todoText"); // 할일 적는 input
const Todo_ListUl = document.querySelector(".TodoList"); // ul 리스트 클래스
const Timer = document.querySelector(".timer");
let TodoData = new Array();
let cnt = 0;
let time;
let hour;
let min;
let sec;
let ap;
//hour = hour > 12 ? hour - 12 : hour;
/*horu = horu < 10 ? "0" + horu : hour;
min = min < 10 ? "0"+min : min;
sec = sec < 10 ? "0"+sec : sec;*/
//https://velog.io/@hyerimiya/JavaScript-Timer-localStorage-ToDoList 참고

var timer1 = setInterval(function(){
  time = new Date();
  hour = time.getHours();
  min = time.getMinutes();
  sec = time.getSeconds();
  ap = hour > 12 ? "오후" : "오전";
  hour = hour > 12 ? hour - 12 : hour;
  Timer.textContent = ap+" "+hour+"시 "+min+"분 "+sec+"초";
}, 1000)

function CreateTodo(){
  if(Todo_Text.value === ""){
    alert("내용을 입력하세요")
    return;
  }else{
  let lis = document.createElement('li'); // li 생성
  localStorage.setItem("TodoData"+cnt,Todo_Text.value);
  TodoData[cnt] = localStorage.getItem("TodoData"+cnt);
  lis.setAttribute("class","list-group-item"); // 새로 생성된 태그에 class 추가
  lis.setAttribute("id","li"+cnt); // 새로 생성된 태그에 id 추가
  lis.innerHTML = TodoData[cnt]; // 새로 생성된 현재 값에 value값 추가
  lis.innerHTML += "<a href='#' class ='RemoveBtn' onclick='RemoveTodo("+cnt+")'><i class='bx bx-trash'></i></a>"
  lis.innerHTML += "<a href='#' class ='CheckTodo' onclick='CheckTodo("+cnt+")'><i class='bx bx-check'></i></a>"
  Todo_ListUl.appendChild(lis);
  Todo_Text.value = "";
  localStorage.setItem("ListCnt",parseInt(cnt));
  cnt++; // 몇번 입력했는지 
  }
}
function init(){
  const Temp_ListCnt = localStorage.getItem('ListCnt');

  if(Temp_ListCnt == null){
    return;
  }else{
  for(let i=0; i<=Temp_ListCnt; i++){
    let lis = document.createElement('li'); // li 생성
    const Temp_Check = localStorage.getItem("CheckTodo"+i);
    const Temp_Data = localStorage.getItem("TodoData"+i);
    if(!Temp_Data){
      break;
    }
    
    lis.setAttribute("class","list-group-item"); // 새로 생성된 태그에 class 추가
    lis.setAttribute("id","li"+i); // 새로 생성된 태그에 id 추가
    lis.innerHTML = Temp_Data;// 새로 생성된 현재 값에 value값 추가
    lis.innerHTML += "<a href='#' class ='RemoveBtn' onclick='RemoveTodo("+cnt+")'><i class='bx bx-trash'></i></a>"
    lis.innerHTML += "<a href='#' class ='CheckTodo' onclick='CheckTodo("+cnt+")'><i class='bx bx-check'></i></a>"
    Todo_ListUl.appendChild(lis);
    if(Temp_Check){
      //CheckTodo(i);
      lis.style.textDecoration="line-through";
      lis.classList.toggle("Enable");
    }
    cnt++; // 입력한게 몇개인지
      }
    }
  }

/*function RemoveLocal(){
  localStorage.clear();
  //localStorage.setItem('ListCnt',0);
}*/
function RemoveTodo(count){
  if(count === cnt+1){
    count--;
  }
  const lis = document.querySelector("#li"+count);
  Todo_ListUl.removeChild(lis);
  localStorage.setItem('ListCnt',count);
  localStorage.removeItem("TodoData"+count);
  localStorage.removeItem("CheckTodo"+count);
  console.log(count);
  if(cnt == 0 || count == 0){
    localStorage.clear();
  }
  
}
function CheckTodo(cnt){
  let lis = document.querySelector("#li"+cnt);
  if(lis.style.textDecoration == "line-through"){
    lis.style.textDecoration="none";
    localStorage.removeItem("CheckTodo"+cnt);
  }
  else{
    localStorage.setItem("CheckTodo"+cnt,true);
    lis.style.textDecoration="line-through";
    lis.classList.toggle("Enable");
  }
}

function KeyEvent(e) {
  if(Todo_Text.value === ""){
   if(e.keyCode == 32){
     e.returnValue = false;
    }
  }
    if(e.keyCode==13){
      CreateTodo();
    }
}
