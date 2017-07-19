var noteList = new NoteList();
var noteController = new NoteController(noteList);

it("intializes with a notelist model", function () {
  assertEquals(noteController.noteList, noteList);
});

it("can see an added note", function () {
  noteList.createNote("Testinggggg");
  var htmlResult = "<ul><li><div>Testinggggg</div></li></ul>";
  assertEquals(noteController.noteListView.createHtmlList(), htmlResult);
});
