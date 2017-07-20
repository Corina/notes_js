(function() {  
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteList.createNote("Testinggggg");
  var htmlResult = "<ul><li><div>Testinggggg</div></li></ul>";
  
  it("intializes with a notelist model", function () {
    assertEquals(noteController.noteList, noteList);
  });
  
  it("can see an added note", function () {
    assertEquals(noteController.noteListView.createHtmlList(), htmlResult);
  });
  
  it("sets the innerHtml property", function() {
    var dummyElement = document.createElement('div');
    dummyElement.innerHTML = 'Parteeeeee';
    noteController.setHtml(dummyElement);
    assertEquals(dummyElement.innerHTML, htmlResult);
  });
})();
