var noteList = new NoteList();

it("is initialized with an empty array",function() {
  assertEquals(noteList.showNotes().length, 0);
});

it("Creates a note", function() {
  noteList.createNote("hello");
  var result = noteList.showNotes()[0].showText();
  assertEquals(result, "hello");
});
