(function() {
  var noteList = new NoteList();
  it("note list is initialized with an empty array",function() {
    assertEquals(noteList.showNotes().length, 0);
  });
  
  it("note list creates a note", function() {
    noteList.createNote("hello");
    var result = noteList.showNotes()[0].showText();
    assertEquals(result, "hello");
  });
})();
