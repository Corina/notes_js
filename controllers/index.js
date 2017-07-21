
window.onload = function() {
  var list = document.getElementById('app')
  var noteList = new NoteList();
  // noteList.createNote("This is a long line, sooooooo long");
  // noteList.createNote("TGI Friday, yeahhhhhh!");
  // noteList.createNote("Buy more ice cream, BUY ALL THE ICE CREAM!");
  var noteController = new NoteController(noteList);
  noteController.setHtml(list)
  
  
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
  
  
  function getNoteMatchingId(noteId) {
    var noteMatching;
    noteList.showNotes().forEach(function(note) {
      if (note.id == noteId) {
        noteMatching = note;
      }
    });
    return noteMatching;
  };
  
  function showNote(noteId) {
    var note = getNoteMatchingId(noteId);
    var noteView = new NoteView(note);
    document
    .getElementById("app")
    .innerHTML = noteView.getHtml();
  };
  
  submitForm();
  
  function submitForm() {
    window.addEventListener("submit", function(event) {
      var textInput = document.getElementById("input-text").value;
      noteList.createNote(textInput);
      noteController.setHtml(list)
      document.getElementById("input-text").value = '';
      // console.log(event.target["note-text"].value);
      event.preventDefault();
      
    })
  };
  
}
