(function() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  it("note controller is instantiated with a noteList", function() {
    assertEquals(noteController.noteList, noteList);
  });
  
  it("note controller creates a note list view", function() {
    assertNotNull(noteController.noteListView);
  });
  
  it("note controller sets the correct HTML text", function() {
    noteList.createNote("Just a test");
    var dummyElement = document.createElement('div');
    dummyElement.innerHTML = "dummy";
    var htmlResult = "<ul><li><div><a href=\"#5\">Just a test</a></div></li></ul>";
    noteController.insertTextToApp(dummyElement);
    assertEquals(dummyElement.innerHTML, htmlResult);
  });
  
})();
