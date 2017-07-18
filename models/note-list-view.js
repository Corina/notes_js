(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.createHtmlList = function () {
    return "<ul>" + this.htmlForEachNote() + "</ul>";
  };

  NoteListView.prototype.htmlForEachNote = function () {
    var array = [];
    this.noteList.showNotes().forEach(function(note) {
      array.push("<li><div>" + note.showText() + "</div></li>")
    });
    return array.join("");
  };

  exports.NoteListView = NoteListView;
})(this);
