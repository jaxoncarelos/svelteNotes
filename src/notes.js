// make a new svelte writable// create a new note and add it to the noteList
// delete a note from the noteList
// update a note from the noteList
// export the noteList

import { writable } from 'svelte/store';
import Note from './NoteClass.js'

let counter = 0;

export const noteList = writable([]);

export const createNote = (title, content) => {
  const note = new Note(title, content, counter);
  counter++
  noteList.update((notes) => [...notes, note]);
};