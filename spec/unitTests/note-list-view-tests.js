it("is initialized with a note list model", function () {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assertNotNull(noteListView.noteList);
});

it("it returns a string of HTML that represents the note list model", function () {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.createNote("new note");
  noteList.createNote("another note");
  noteList.createNote("another new note with my life story, sorry so short");
  var htmlResult = "<ul><li><div>new note</div></li><li><div>another note</div></li><li><div>another new note wit</div></li></ul>";
  assertEquals(noteListView.createHtmlList(), htmlResult);
});

it("it returns <ul></ul> that represents the note list model", function () {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  var htmlResult = "";
  assertEquals(noteListView.createHtmlList(), htmlResult);
});

it("it returns a string of HTML for each note in the list", function () {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.createNote("new note");
  noteList.createNote("another note");
  noteList.createNote("another new note");
  var htmlResult = "<li><div>new note</div></li><li><div>another note</div></li><li><div>another new note</div></li>";
  assertEquals(noteListView.htmlForEachNote(), htmlResult);
});
