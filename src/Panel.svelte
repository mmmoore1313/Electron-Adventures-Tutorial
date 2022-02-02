<script>
  export let position
  export let directory
  export let active
  export let onActivate
  let files = []
  let selected = []
  let focusedIdx = 0
  $: filesPromise = window.api.directoryContents(directory)
  $: filesPromise.then(x => {
    files = x
    focusedIdx = 0
    selected = []
  })
  $: filesCount = files.length
  let onclick = (idx) => {
    onActivate()
    focusedIdx = idx
  }
  let onrightclick = (idx) => {
    onActivate()
    focusedIdx = idx
    flipSelected(idx)
  }
  let flipSelected = (idx) => {
    if (selected.includes(idx)) {
      selected = selected.filter(f => f !== idx)
    } else {
      selected = [...selected, idx]
    }
  }
  let goUp = () => {
    if (focusedIdx > 0) {
      focusedIdx -= 1
    }
  }
  let goDown = () => {
    if (focusedIdx < filesCount - 1) {
      focusedIdx += 1
    }
  }
  let handleKey = (e) => {
    if (!active) {
      return
    }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      goDown()
    }
    if (e.key === "ArrowUp") {
      e.preventDefault()
      goUp()
    }
    if (e.key === " ") {
      e.preventDefault()
      flipSelected(focusedIdx)
      goDown()
    }
  }
</script>

<div class="panel {position}" class:active={active}>
  <header>{directory.split("/").slice(-1)[0]}</header>
  <div class="file-list">
    {#each files as file, idx}
      <div
        class="file"
        class:focused={idx === focusedIdx}
        class:selected={selected.includes(idx)}
        on:click|preventDefault={() => onclick(idx)}
        on:contextmenu|preventDefault={() => onrightclick(idx)}
      >{file.name}</div>
    {/each}
  </div>
</div>

<svelte:window on:keydown={handleKey}/>

<style>
  .left {
    grid-area: panel-left;
  }
  .right {
    grid-area: panel-right;
  }
  .panel {
    background: #338;
    margin: 4px;
    display: flex;
    flex-direction: column;
  }
  header {
    text-align: center;
    font-weight: bold;
  }
  .file-list {
    flex: 1;
    overflow-y: scroll;
  }
  .file {
    cursor: pointer;
  }
  .file.selected {
    color: #ff2;
    font-weight: bold;
  }
  .panel.active .file.focused {
    background-color: #66b;
  }
</style>

<!-- 
ep27: keyboard stuffs
<script>
  export let position
  export let files
  export let active
  export let onActivate
  
  let focused = files[0]
  let selected = []
  let onclick = (file) => {
    onActivate(position)
    focused = file
  }
  let onrightclick = (file) => {
    onActivate(position)
    focused = file
    flipSelected(file)
  }
  let flipSelected = (file) => {
    if (selected.includes(file)) {
      selected = selected.filter(f => f !== file)
    } else {
      selected = [...selected, file]
    }
  }
  let goUp = () => {
    let i = files.indexOf(focused)
    if (i > 0) {
      focused = files[i - 1]
    }
  }
  let goDown = () => {
    let i = files.indexOf(focused)
    if (i < files.length - 1) {
      focused = files[i + 1]
    }
  }
  let handleKey = (e) => {
    if (!active) {
      return
    }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      goDown()
    }
    if (e.key === "ArrowUp") {
      e.preventDefault()
      goUp()
    }
    if (e.key === " ") {
      e.preventDefault()
      flipSelected(focused)
      goDown()
    }
  }
</script>

<div class="panel {position}" class:active={active}>
  {#each files as file}
    <div
      class="file"
      class:focused={file === focused}
      class:selected={selected.includes(file)}
      on:click|preventDefault={() => onrightclick(file)}
    >
      {file}
    </div>
  {/each}
</div>

<svelte:window on:keydown={handleKey}/>

<style>
  .panel-left {
    grid-area: panel-left;
  }
  .panel-right {
    grid-area: panel-right;
  }
  .panel {
    background: #338;
    margin: 4px;
  }
  .file {
    cursor: pointer;
  }
  .file.selected {
    color: #ff2;
    font-weight: bold;
  }
  .panel.active .file.focused {
    background-color: #66b;
  }
</style> -->

<!-- 
ep 26: Svelte Orthodox File Manager
<script>
  export let position
  export let files
  export let active
  export let onActivate
  
  let focused = files[0]
  let selected = []
  let onclick = (file) => {
    onActivate(position)
    focused = file
  }
  let onrightclick = (file) => {
    onActivate(position)
    focused = file
    if (selected.includes(file)) {
      selected = selected.filter(f => f !== file)
    } else {
      selected = [...selected, file]
    }
  }
</script>

<div class="panel {position}" class:active={active}>
  {#each files as file}
    <div
      class="file"
      class:focused={file === focused}
      class:selected={selected.includes(file)}
      on:click|preventDefault={() => onrightclick(file)}
    >
      {file}
    </div>
  {/each}
</div>

<style>
  .panel-left {
    grid-area: panel-left;
  }
  .panel-right {
    grid-area: panel-right;
  }
  .panel {
    background: #338;
    margin: 4px;
  }
  .file {
    cursor: pointer;
  }
  .file.selected {
    color: #ff2;
    font-weight: bold;
  }
  .panel.active .file.focused {
    background-color: #66b;
  }
</style> -->