(function(exports) {
  function Note(text, id) {
    this._text = text;
    this.id = this.setUniqueId();
  };
  
  Note.prototype.showText = function () {
    return this._text;
  };
  
  Note.prototype.id = 0;
  
  Note.prototype.setUniqueId = function () {
    return Note.prototype.id++;
  };
  
  exports.Note = Note;
})(this);
