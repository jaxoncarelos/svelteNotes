import { writable } from 'svelte/store';
import Note from './NoteClass.js'

let counter = 0;

export const noteList = writable([]);

export const createNote = (title, content) => {
  const note = new Note(title, content, counter);
  counter++
  noteList.update((notes) => [...notes, note]);
};