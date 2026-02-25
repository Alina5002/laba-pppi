export class Book {
  constructor(title) {
    this.title = title;
    this.notes = [];
  }

  addNote(note) {
    this.notes.push(note);
  }
}
