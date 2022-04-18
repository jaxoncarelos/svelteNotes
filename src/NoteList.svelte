<script>
    import { noteList } from "./notes.js";
    import Note from "./Note.svelte";
</script>

<main>
    {#each $noteList as note (note.id)}
        <Note {note}/>
    {/each}
</main>