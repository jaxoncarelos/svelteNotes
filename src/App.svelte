<script>
	import MakeNote from './MakeNote.svelte';
	import NoteList from './NoteList.svelte';
</script>

<main>
	<div id="wrapper">
		Welcome to a note app.
		<br>
		Create a note.
		<MakeNote />
		<NoteList />
	</div>
</main>

<style>
	*
	{
		margin: 0;
		padding: 0;
		text-align: center;
		color: white;	
	}
</style>