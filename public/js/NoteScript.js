const noteField = document.querySelector(".Note-Edit-Field"); // 메모장 에디터
const noteDataList = document.querySelector(".List-Note-Data");
let NoteCount = 0;
let SaveCount = 0;

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
  let noteTitleDiv = document.createElement('div');
  let noteDiv = document.createElement('div');
  noteTitleDiv.className="EditNoteTitle";
  noteTitleDiv.innerHTML="새로운 메모"+NoteCount;
  noteDiv.className ="EditNote";
  noteDiv.setAttribute('contenteditable','true');
  noteDiv.setAttribute('onkeydown','KeyEvent(event)');
  noteField.appendChild(noteTitleDiv);
  noteField.appendChild(noteDiv);
}


function ReNote(){
  let OkNo = confirm("새로 만드시겠습니까?");
  if(OkNo)
  {
    if(NoteCount!==0)
      NoteCount--;
    while(noteField.hasChildNodes()) // 남아있는 메모장 정리
      {
        noteField.removeChild(noteField.firstChild);
     }
    CreateNote();
    
  }else{
    alert("안실행");
  }
}
function NoteSave(){
  
  ++NoteCount;
  if(confirm("저장하시겠습니까"))
  {
    
  let editNoteData = document.querySelector(".EditNote");
  let noteDataName = document.createElement('div');
  let temp = editNoteData.innerHTML.split('<div>',1);
    if(editNoteData.innerHTML.length > 2)
    {
      localStorage.setItem('saveEditData'+NoteCount,editNoteData.innerHTML); // 메모 내용 저장
      noteDataName.setAttribute("id","listSave"+NoteCount); // 리스트에 저장할 아이디 설정
      noteDataName.className="showTag";               // 리스트에 저장할 클래스 설정
      noteDataName.innerHTML = "<a href ='#' onclick='ShowNote("+NoteCount+")'></a>"; // 리스트에 저장된 메모 태그추가
      let aTag = noteDataName.querySelector("a");
      aTag.innerHTML = temp;
      
      noteDataList.appendChild(noteDataName);
      //localStorage.setItem('listCount',NoteCount);
      while(noteField.hasChildNodes()) // 남아있는 메모장 정리
      {
        noteField.removeChild(noteField.firstChild);
      }
    }
    else{
      alert("저장할 것이 없습니다.");
      return;
    }
  //let temp = editNoteData.textContent;

  
  
  }
  else{
    return;
  }
}

function ShowNote(count){
  while(noteField.hasChildNodes()) // 남아있는 메모장 정리
  {
    noteField.removeChild(noteField.firstChild);
  }
  let showData = localStorage.getItem('saveEditData'+count);
  let NoteTitleDiv = document.createElement('div');
  let NoteDiv = document.createElement('div');

  NoteTitleDiv.className="EditNoteTitle";
  NoteTitleDiv.innerHTML="새로운 메모"+NoteCount;
  NoteDiv.className ="EditNote";
  NoteDiv.setAttribute('contenteditable','true');
  NoteDiv.innerHTML = showData;
  //NoteDiv.setAttribute('onkeydown','KeyEvent(event)');
  //NoteDiv.innerHTML = localStorage.getItem
  noteField.appendChild(NoteTitleDiv);
  noteField.appendChild(NoteDiv);
  
  saveNoteData = document.querySelector("#NoteData"+count)
  noteField.appendChild(saveNoteDiv);
}
/*function KeyEvent(Event){
  
  if(Event.keyCode==13){
    NoteSave();
  }
}*/