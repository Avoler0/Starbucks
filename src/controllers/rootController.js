let todoList = ["1"];
//이 변수 있지? 이변수에 추가를 하는건데 아직 DB가 없으니까 서버를 재시작(저장)하거나 하면 초기화 될거야 DB가 아니기때문에


export const home = (req, res) => {
    const pageTitle = "HOME";
  res.render("home",{ pageTitle });
};

export const todoGet = (req, res) => {
  const pageTitle = "To Do";
  res.render("todo", { pageTitle, todoList });
};

export const todoPost = (req, res) => {
  let { content } = req.body;
  todoList.push(content);
  res.redirect("todo");
};


export const note = (req, res) => {
  const pageTitle = "Note";
  res.render("note", { pageTitle });
};