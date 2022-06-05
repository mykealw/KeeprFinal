<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.jcc {
  justify-content: center;
}
.jcsb {
  justify-content: space-between !important;
}
.ts {
  text-shadow: 2px 2px 0 #141414, -1px -1px 0 #141414, 1px -1px 0 #141414,
    -1px 1px 0 #141414, 1px 1px 0 #141414;
}
.bg {
  background-color: beige;
}
.zz {
  z-index: 1111;
}
.bd {
  border: 5px solid black;
}
.bt {
  font-weight: bold;
}
.bbt {
  font-weight: bolder;
}
.object-fit {
  object-fit: cover;
  width: 100%;
}
.masonry-container {
  columns: 4;
  // column-gap: 10px;
  div {
    break-inside: avoid;
  }
}
// mobile
@media only screen and (max-width: 767px) {
  .rp2 {
    left: 1em;
    bottom: 1em;
  }
  .ri2 {
    bottom: 1em;
    right: 1em;
  }
}
// regular size screen
@media only screen and (min-width: 767.98px) {
  .rp1 {
    left: 1em;
    bottom: 1em;
    height: 50px;
  }
  .ri1 {
    bottom: 1em;
    right: 1em;
    height: 100px;
    
  }
}
</style>
