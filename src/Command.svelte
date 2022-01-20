<script>
  import Icon from "svelte-awesome"
  import { spinner, exclamationTriangle } from "svelte-awesome/icons"
  export let command, stdout, stderr, error, running
</script>

<div class='history-entry'>
  <div class='input-line'>
    <span class='prompt'>$</span>
    <span class='input'>{command}</span>
  </div>
  {#each interactions as interaction}
    <div class={interaction.type}>{interaction.data}</div>
  {/each}
  {#if running}
    <form on:submit|preventDefault={submit}>
      <input type="text" bind:value={input} />
      <button type='button' on:click={endInput}>End Input</button>
      <button type='button' on:click={kill}>Kill</button>
    </form>
  {/if}
  {#if error}
    <Icon data={exclamationTriangle} />
  {/if}
</div>

<style>
  .history-entry {
    padding-bottom: 0.5rem;
  }
  .stdout {
    color: #afa;
    white-space: pre;
  }
  .stderr {
    color: #faa;
    white-space: pre;
  }
  .input-line {
    display: flex;
    gap: 0.5rem;
  }
  .input {
    color: #ffa;
    flex: 1;
  }
  form {
    flex: 1;
    display: flex;
  }
  input {
    flex: 1;
    font-family: inherit;
    background-color: #666;
    color: inherit;
    border: none;
  }
</style>

<!-- 
episode 15: Async
<script>
  import Icon from "svelte-awesome"
  import { spinner, exclamationTriangle } from "svelte-awesome/icons"
  export let command, stdout, stderr, error, running
</script>

<div class='history-entry'>
  <div class='input-line'>
    <span class='prompt'>$</span>
    <span class='input'>{command}</span>
  </div>
  <div class='stdout'>{stdout}</div>
  <div class='stderr'>{stderr}</div>
  {#if running}
    <Icon data={spinner} pulse />
  {/if}
  {#if error}
    <Icon data={exclamationTriangle} />
  {/if}
</div>

<style>
  .history-entry {
    padding-bottom: 0.5rem;
  }
  .stdout {
    color: #afa;
    white-space: pre;
  }
  .stderr {
    color: #faa;
    white-space: pre;
  }
  .input-line {
    display: flex;
    gap: 0.5rem;
  }
  .input {
    color: #ffa;
    flex: 1;
  }
</style> -->

<!-- 
episode 13: svelte

<script>
  export let command, output
</script>

<div class='input-line'>
  <span class='prompt'>$</span>
  <span class='input'>{command}</span>
</div>
<div class='output'>{output}</div>

<style>
  .output {
    color: #afa;
    white-space: pre;
    padding-bottom: 0.5rem;
  }
  
  .input-line {
    display: flex;
    gap: 0.5rem;
  }
  
  .input {
    color: #ffa;
    flex: 1;
  }
</style> -->