(function(exports) {
  
  function NoteView(note) {
    this.note = note
  };
  
  NoteView.prototype.getHtml = function () {
    return "<div>" + this.note.showText() + "</div>"
  };
  
  exports.NoteView = NoteView;
  
})(this);
