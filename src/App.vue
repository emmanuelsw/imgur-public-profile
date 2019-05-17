<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  height: 100vh;
}
body {
  background: linear-gradient(#061234,#1e2230);
  min-height: 100vh;
}
.input, .taginput .taginput-container.is-focusable, .textarea {
  box-shadow: none !important;
}
.green {
  background-color: #1AB76F !important;
}
.green:hover {
  background-color: #34BE7D !important;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
