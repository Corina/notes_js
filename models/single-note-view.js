(function (exports) {
  function NoteView(singleNote) {
    this.singleNote = singleNote;
  };

  NoteView.prototype.createHtmlNote = function () {
    return "<div>" + this.singleNote.showText() + "</div>";
  };
  exports.NoteView = NoteView;
})(this);
