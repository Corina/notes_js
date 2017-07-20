(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };
  
  NoteListView.prototype.createHtmlList = function () {
    return (this.noteList.showNotes().length >= 1) ? ("<ul>" + this.htmlForEachNote() + "</ul>") : "";
  };
  
  NoteListView.prototype.htmlForEachNote = function () {
    var array = [];
    this.noteList.showNotes().forEach(function(note) {
      array.push(createHtmlForOneNote(note))
    });
    return array.join("");
  };
  
  function createHtmlForOneNote(note) {
    return "<li><div><a href=\"#" + note.id.toString() + "\">" + note.showText().substring(0, 20) + "</a></div></li>"
  }
  
  exports.NoteListView = NoteListView;
})(this);
