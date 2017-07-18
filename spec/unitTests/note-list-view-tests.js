it("is initialized with a note list model", function () {
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
  assertNotNull(noteListView.noteList);
});

it("it returns a string of HTML that represents the note list model", function () {
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
  noteList.createNote("new note");
  noteList.createNote("another note");
  noteList.createNote("another new note");
  htmlResult = "<ul><li><div>new note</div></li><li><div>another note</div></li><li><div>another new note</div></li></ul>";
  assertEquals(noteListView.createHtmlList(), htmlResult);
});

it("it returns <ul></ul> that represents the note list model", function () {
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
  htmlResult = "<ul></ul>";
  assertEquals(noteListView.createHtmlList(), htmlResult);
});

it("it returns a string of HTML for each note in the list", function () {
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
  noteList.createNote("new note");
  noteList.createNote("another note");
  noteList.createNote("another new note");
  htmlResult = "<li><div>new note</div></li><li><div>another note</div></li><li><div>another new note</div></li>";
  assertEquals(noteListView.htmlForEachNote(), htmlResult);
});
