(function() {
  var note = new Note("This is a test");
  it("note intializes with a text", function() {
    assertNotNull(note.showText());
  });
  
  it("note shows the text of the note", function() {
    assertEquals(note.showText(), "This is a test")
  });
})();
