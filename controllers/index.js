noteController = new NoteController();
noteController.noteList.createNote("Favourite drink: seltzer");
noteListView = new NoteListView(noteList);
noteListView.createHtmlList();
