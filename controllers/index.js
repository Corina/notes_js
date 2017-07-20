
window.onload = function() {
  var list = document.getElementById('app')
  var noteList = new NoteList();
  noteList.createNote("something");
  var noteController = new NoteController(noteList);
  noteController.insertTextToApp(list)
  
  makeUrlChange();
  
  function makeUrlChange() {
    window.addEventListener("hashchange", showNoteForCurrentPage)
  };
  
  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };
  
  function getNoteFromUrl(location) {
    return location.hash.split("#")[1];
  };
  
  function showNote(note_id) {
    console.log((new NoteView(noteList.showNotes()[note_id])).getHtml());
    var note = noteList.showNotes()[note_id]
    var noteView = new NoteView(note);
    document
    .getElementById("note")
    .innerHTML = noteView.getHtml();
  };
  
}
