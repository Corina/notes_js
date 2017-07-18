

window.onload = function() {
  var list = document.getElementById('app')
  noteList = new NoteList();
  noteController = new NoteController(noteList);
  noteController.insertTextToApp(list)
}
