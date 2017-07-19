var singleNote = new Note("sushi");
var noteView = new NoteView(singleNote);

it("it intialized with a single note model", function () {
  assertNotNull(noteView.singleNote);
});

it("returns a string of HTML", function () {
  var htmlResult = "<div>sushi</div>"
  assertEquals(noteView.createHtmlNote(), htmlResult);
});
