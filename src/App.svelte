<script>
  import Panel from './Panel.svelte'
  import Footer from './Footer.svelte'
  
  let activePanel = 'left'
  let directoryLeft = window.api.currentDirectory()
  let directoryRight = window.api.currentDirectory() + "/node_modules"
  let handleKey = (e) => {
    if (e.key === "Tab") {
      if (acitvePanel === "left") {
        activePanel = "right"
      } else {
        activePanel = "left"
      }
      e.preventDefault()
    }
  }
</script>

<div class='ui'>
  <header>
    File Manager
  </header>
  <Panel
    directory={directoryLeft}
    position="left"
    active={activePanel === "left"}
    onActivate={() => activePanel = "left"}
  />
  <Panel
    directory={directoryRight}
    position="right"
    active={activePanel === "right"}
    onActivate={() => activePanel = "right"}
  />
  <Footer />
</div>

<svelte:window on:keydown={handleKey} />

<style>
  :global(body) {
    background-color: #226;
    color: #fff;
    font-family: monospace;
    margin: 0;
    font-size: 16px;
  }
  .ui {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-areas:
      "header header"
      "panel-left panel-right"
      "footer footer";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto minmax(0, 1fr) auto;
  }
  .ui header {
    grid-area: header;
  }
  header {
    font-size: 24px;
    margin: 4px;
  }
</style>

<!-- 
ep 27: keyboard control
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
  function formatDate(d) {
    return d ? d.toDateString() : ""
  }
  function formatName(entry) {
    if (entry.linkTarget) {
      return `${entry.name} → ${entry.linkTarget}`
    } else {
      return entry.name
    }
  }
</script>

<h1>{directory}</h1>

{#await filesPromise}
{:then files}
  <div  class="file-list">
  {#if !isRoot}
    <div>
      <button on:click={() => navigateUp()}>..</button>
    </div>
    <div></div>
    <div></div>
    <div></div>
  {/if}
  {#each files as entry}
    {#if entry.type === "directory"}
      <div>
        <button on:click={() => navigate(entry.name)}>
          {formatName(entry)}
        </button>
      </div>
    {:else}
      <div>
        {formatName(entry)}
      </div>
    {/if}
    <div>
      {entry.type}
      {entry.linkTarget ? " link" : ""}
    </div>
    <div>
      {entry.size ? entry.size : ""}
    </div>
    <div>
      {formatDate(entry.mtime)}
    </div>
  {/each}
  </div>
{/await}

<style>
  :global(body) {
    background-color: #444;
    color: #ccc;
  }
  .file-list {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
  }
</style> -->

<!-- 
ep21: File Manager
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
    <div><button on:click={() => navigateUp()}>..</button></div>
  {/if}
  {#each files as entry}
    {#if entry.type === "directory"}
      <div>
        <button on:click={() => navigate(entry.name)}>{entry.name}</button>
      </div>
    {:else}
      <div>{entry.name}</div>
    {/if}
  {/each}
{/await}

<style>
  :global(body) {
    background-color: #444;
    color: #ccc;
  }
</style> -->

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