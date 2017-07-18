
it("is initialized with an empty array",function() {
  var noteList = new NoteList();
  assertEquals(noteList.showNotes().length, 0);
});

it("Creates a note", function() {
  var noteList = new NoteList();
  noteList.createNote("hello");
  result = noteList.showNotes()[0].showText();
  assertEquals(result, "hello");
});
