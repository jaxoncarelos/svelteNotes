<script>
    import NoteClass from "./NoteClass.js"
    let note = new NoteClass();
    import { createNote } from "./notes.js";
    async function createNotes()
    {
        createNote(note.title, note.body);
        await new Promise(r => setTimeout(r, 10));
        note.title = "";
        note.body = "";
    }
</script>

<style>
    .makeNote
    {
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        
    }
    .makeNote textarea
    {
        background-color: #555;
        width: 100%;
        height: 100px;
        color: white;
    }
    input
    {
        width: 100%;
        background-color: #555;
        color: white;
    }
    button
    {
        background-color: #555;
        color: white;
        width: 100%;
    }
</style>

<div class="makeNote">
    <input type="Text" bind:value={note.title} placeholder="Title">
    <textarea bind:value={note.body}></textarea>
    <button on:click={createNotes}>Create Note</button>
</div>