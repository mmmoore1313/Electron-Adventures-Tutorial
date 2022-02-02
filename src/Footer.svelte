<script>
  let opts = [
    { name: 'F1 Help' },
    { name: 'F2 Menu' },
    { name: 'F3 View' },
    { name: 'F4 Edit' },
    { name: 'F5 Copy' },
    { name: 'F6 Move' },
    { name: 'F7 Mkdir' },
    { name: 'F8 Delete' },
    { name: 'F10 Quit',
      action: {quitCommand}
    },
  ]
  
  let quitCommand = (e) => {
    window.close()
  }
  
  let handleKey = (e) => {
    if (e.key === "F10") {
      e.preventDefault()
      quitCommand()
    }
  }
</script>

<footer>
  {#each opts as { name, action } }
    <button on:click={action}>
      {name}
    </button>
  {/each}
</footer>

<svelte:window on:keydown={handleKey} />

<style>
  footer {
    text-align: center;
    grid-area: footer;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    background-color: #66b;
    color: inherit;
  }
</style>

<!-- 
ep 27: keyboard interaction
<script>
  let opts = [
    { name: 'F1 Help' },
    { name: 'F2 Menu' },
    { name: 'F3 View' },
    { name: 'F4 Edit' },
    { name: 'F5 Copy' },
    { name: 'F6 Move' },
    { name: 'F7 Mkdir' },
    { name: 'F8 Delete' },
    { name: 'F10 Quit' },
  ]
</script>

<footer>
  {#each opts as { name } }
    <button>
      {name}
    </button>
  {/each}
</footer>

<style>
  footer {
    text-align: center;
    grid-area: footer;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    background-color: #66b;
    color: inherit;
  }
</style> -->