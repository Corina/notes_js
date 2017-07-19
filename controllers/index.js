var noteList = new NoteList();
var noteController = new NoteController(noteList);
noteList.createNote("Favourite drink: seltzer");

window.onload = function() {
  element = document.getElementById("app");
  console.log(element);
  noteController.setHtml(element);
};
