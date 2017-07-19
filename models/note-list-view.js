(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };
  
  NoteListView.prototype.createHtmlList = function () {
    return this.htmlForEachNote() ? ("<ul>" + this.htmlForEachNote() + "</ul>") : "";
  };
  
  NoteListView.prototype.htmlForEachNote = function () {
    return this.noteList.showNotes().map(function(note) {
      return "<li><div>" + note.showText() + "</div></li>"
    }).join("");
  };
  
  exports.NoteListView = NoteListView;
})(this);
