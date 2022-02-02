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