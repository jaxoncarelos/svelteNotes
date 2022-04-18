<script>
    export let note;
</script>

<style>
    @keyframes bringIn
    {
        0%
        {
            transform: translateX(-3000px);
        }
        100%
        {
            transform: translateX(0px);
        }
    }
    main{
        display: flex;
        justify-content: center;
        padding: 1rem;
    }
    #note
    {
        animation: bringIn 0.3s ease-in-out;
        border-radius: 10px;
        background-color: #888;
        color: #fff;
        width: 25%;

    }
    #note h1
    {
        text-align: center;
        padding: 10px;
    }
    #note p
    {
        padding: 5px;
    }
</style>


<main>
    <div id="note">
        <h1>{note.title}</h1>
        <p>{note.body}</p>
    </div>
</main>