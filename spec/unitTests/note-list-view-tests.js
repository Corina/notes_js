(function() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.createNote("new note");
  noteList.createNote("another note");
  noteList.createNote("another new note with more than 20 charcters");
  
  it("note list view is initialized with a note list model", function () {
    assertNotNull(noteListView.noteList);
  });
  
  it("note list view returns a string of HTML that represents the first 20 characters from a note", function () {
    var htmlResult = "<ul><li><div><a href=\"#2\">new note</a></div></li><li><div><a href=\"#3\">another note</a></div></li><li><div><a href=\"#4\">another new note wit</a></div></li></ul>";
    assertEquals(noteListView.createHtmlList(), htmlResult);
  });
  
  it("note list view returns '' for an empty noteList", function() {
    var noteListEmpty = new NoteList();
    var noteListViewEmpty = new NoteListView(noteListEmpty);
    var htmlResultEmpty = "";
    assertEquals(noteListViewEmpty.createHtmlList(), htmlResultEmpty);
  });
  
  it("note list view returns a string of HTML for each note in the list", function () {
    var htmlResult = "<li><div><a href=\"#2\">new note</a></div></li><li><div><a href=\"#3\">another note</a></div></li><li><div><a href=\"#4\">another new note wit</a></div></li>";
    assertEquals(noteListView.htmlForEachNote(), htmlResult);
  });
})();
