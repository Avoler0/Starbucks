const NoteField = document.querySelector(".Note-Edit-Field"); // 메모장 에디터
const NoteDataList = document.querySelector(".List-Note-Data");
let NoteCount = 0;
let cnt = 0;

function init(){
  
}
function ClickPlusNote(){
  if(!document.querySelector(".EditNote")){
    CreateNote();
}else{
  ReNote();
}
}
function CreateNote(){
  let NoteTitleDiv = document.createElement('div');
  let NoteDiv = document.createElement('div');
  NoteTitleDiv.className="EditNoteTitle";
  NoteTitleDiv.innerHTML="새로운 메모"+NoteCount;
  NoteDiv.className ="EditNote";
  NoteDiv.setAttribute('contenteditable','true');
  NoteDiv.setAttribute('onkeydown','KeyEvent(event)');
  NoteField.appendChild(NoteTitleDiv);
  NoteField.appendChild(NoteDiv);
}
function ReNote(){
  let OkNo = confirm("새로 만드시겠습니까?");
  if(OkNo)
  {
    if(NoteCount!==0)
      NoteCount--;
    while(NoteField.hasChildNodes()) // 남아있는 메모장 정리
      {
    NoteField.removeChild(NoteField.firstChild);
     }
    CreateNote();
    
  }else{
    alert("안실행");
  }
}
function NoteSave(){
  
  
  if(confirm("저장하시겠습니까"))
  {
  let NoteData = document.querySelector(".EditNote");
  let m_ctrlNoteDataList = document.querySelector(".List-Note-Data");
  let m_NoteDataList = document.createElement('div');
  m_NoteDataList.className = "Note-List-Data"+NoteCount;
  let temp = NoteData.innerHTML.split("<div>",1); // 메모장의 첫번째줄 저장
  m_NoteDataList.innerHTML += "<a href ='#' onclick='ShowNote("+cnt+")'></a>"; // 노트 리스트에 저장된 메모 태그추가
  localStorage.setItem('SaveDataNote'+NoteCount,NoteData.innerHTML);
  localStorage.setItem('SaveNoteCnt',NoteCount);
  m_ctrlNoteDataList.appendChild(m_NoteDataList); // 노트리스트에 자식태그로 추가
  let aTag = NoteDataList.querySelector("a"); // 저장된 메모 태그를 받아옴
  aTag.innerHTML = temp;  // 태그의 inner에 메모장의 첫번째 줄 저장
  ++NoteCount;
  while(NoteField.hasChildNodes()) // 남아있는 메모장 정리
  {
    NoteField.removeChild(NoteField.firstChild);
  }
  }
  else{
    return;
  }
}
//SaveIcon.addEventListener("click",ClickPlusNote);
function ShowNote(count){
  let ShowData = localStorage.getItem('SaveDataNote'+count);
  let SaveNoteDiv = document.createElement('div');

  SaveNoteDiv.className = "ShowData"+count;
  SaveNoteDiv.innerHTML = 1234;
  
  NoteField.appendChild(SaveNoteDiv);
}
function KeyEvent(Event){
  if(Event.keyCode==13){
    NoteSave();
  }
}