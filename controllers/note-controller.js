(function(exports) {
  function NoteController(noteList) {
    noteList.createNote("something");
    this.noteListView = new NoteListView(noteList);
  };
  
  NoteController.prototype.insertTextToApp = function(element) {
    element.innerHTML = this.noteListView.createHtmlList();
  };
  
  exports.NoteController = NoteController;
})(this);
