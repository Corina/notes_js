(function() {
  var note = new Note("sushi");
  var noteView = new NoteView(note);
  
  it("it intialized with a single note model", function () {
    assertNotNull(noteView.note);
  });
  
  it("returns a string of HTML", function () {
    var htmlResult = "<div>sushi</div>"
    assertEquals(noteView.getHtml(), htmlResult);
  });
})();
