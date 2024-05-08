//NOnoN0nOYes (Note taking app)
//Save a note
let notes = [];
function saveNote(content, id) {
  const obj = { content, id };
  notes.push(obj);
  return notes;
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

//Get a note
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    } else {
      return "error";
    }
  }
}
const noteById = getNote(1);
console.log(noteById);
//Log out notes
function logOutNotesFormatted(notes) {
  let formattedNotes = "";
  for (let i = 0; i < notes.length; i++) {
    formattedNotes += `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}\n`;
  }
  return formattedNotes;
}
const notesAfterFormat = logOutNotesFormatted(notes);
console.log(notesAfterFormat);
//Unique feature - Update notes
function updateNote(id, updatedContent, updatedId) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].content = updatedContent;
      notes[i].id = updatedId;
      return notes;
    } else {
      return "error";
    }
  }
}
const notesAfterUpdate = updateNote(1, "Hai", 3);
console.log(notesAfterUpdate);

//Unique feature - Delete notes
function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
      return notes;
    } else {
      return "error";
    }
  }
}
const notesAfterDeletion = deleteNote(3);
console.log(notesAfterDeletion);
