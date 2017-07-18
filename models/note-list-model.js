(function(exports) {
  function NoteList() {
    this._notes = [];
  };

  NoteList.prototype.showNotes = function () {
    return this._notes;
  };

  NoteList.prototype.createNote = function (text) {
    note = new Note(text);
    (this._notes).push(note)
  };

  exports.NoteList = NoteList;
})(this);
