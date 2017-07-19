(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.setHtml = function (element) {
    element.innerHTML = this.noteListView.createHtmlList();
  };

  exports.NoteController = NoteController;
})(this);
