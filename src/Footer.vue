<script>
  items: [
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
  
  export default {
    name: "Footer"
  }
</script>

<template>
  <footer>
    <button v-for="item in items" :key="item.name">
      {{ item.name }}
    </button>
  </footer>
</template>

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