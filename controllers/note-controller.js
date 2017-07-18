(function(exports) {
  function NoteController() {
    var newNoteList = new NoteList();
    noteList.createNote("something");
    var noteListView = new NoteListView(newNoteList);
  };

  NoteController.prototype.insertTextToApp = function() {
    return noteListView.createHtmlList();
  };

  exports.NoteController = NoteController;
})(this);

window.onload = function() {
  var list = document.getElementById('app')
  noteController = new NoteController();
  list.innerHTML = noteController.insertTextToApp();
}
