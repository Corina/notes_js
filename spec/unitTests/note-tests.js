it("intializes with a text", function() {
  var note = new Note();
  assertNotNull(note.showText());
});

it("shows the text of the note", function() {
  var noteText = "This is a test";
  var note = new Note(noteText);
  assertEquals(note.showText(), noteText)
});
