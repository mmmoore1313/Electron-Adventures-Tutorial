<div clas='ui'>
  <header>
    File Manager
  </header>
  <Panel
    files={filesLeft}
    position="left"
    active={activePanel === "left"}
    onActivate={() => activePanel ="left"}
  />
  <Panel
    files={filesRight}
    position="right"
    active={activePanel === "right"}
    onActivate={() => activePanel ="right"}
  />
  <Footer />
</div>

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
    grid-template-rows: auto 1fr auto;
  }
  .ui header {
    grid-area: header;
  }
  header {
    font-size: 24px;
    margin: 4px;
  }
</style>