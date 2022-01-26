<script>
  let directory = window.api.currentDirectory()
  $: filesPromise = window.api.directoryContents(directory)
  $: isRoot = (directory === "/")
  
  function navigate(path) {
    if (directory === "/") {
      directory = "/" + path
    } else {
      directory += "/" + path
    }
  }
  function navigateUp() {
    directory = directory.split("/").slice(0, -1).join("/") || "/"
  }
</script>

<h1>{directory}</h1>

{#await filesPromise}
{:then files}
  {#if !isRoot}
    <div>
      <button on:click={() => navigateUp()}>..</button>
    </div>
  {/if}
  {#each files as entry}
    {#if entry.type === "directory"}
      <div>
        <button on:click={() => navigate(entry.name)}>
          {entry.name}
        </button>
      </div>
    {:else}
      <div>
        {entry.name}
      </div>
    {/if}
  {/each}
{/await}

<style>
:global(body) {
  background-color: #444;
  color: #ccc;
}
</style>

<!-- 
ep13: Svelte
<script>
  import HistoryEntry from "./HistoryEntry.svelte"
  import CommandInput from "./CommandInput.svelte"
  let history = []
  function onsubmit(command) {
    let output = window.api.runCommand(command)
    history.push({command, output})
    history = history
  }
</script>

<h1>Svelte Terminal App</h1>

<div id="terminal">
  <div id="history">
    {#each history as entry}
      <HistoryEntry {...entry} />
    {/each}
  </div>

  <CommandInput {onsubmit} />
</div>

<style>
:global(body) {
  background-color: #444;
  color: #fff;
  font-family: monospace;
}
</style> -->