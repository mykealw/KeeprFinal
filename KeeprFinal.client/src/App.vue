<template >
  <header>
    <Navbar />
  </header>
  <main class="bg">
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
  text-shadow: 3px 3px 0px #141414, -1px -1px 0 #141414, 1px -1px 0 #141414,
    -1px 1px 0 #141414, 1px 1px 0 #141414;
}
.bg {
  background-color: rgb(245, 245, 232);
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
.circle {
  border-radius: 50%;
}

// mobile
@media only screen and (max-width: 767px) {
  .rp2 {
    justify-content: space-around;
    bottom: 1em;
    align-items: center;
  }
  .ri2 {
    height: 2em;
    max-width: 2em;
    object-fit: cover;
  }
  .pp2 {
    object-fit: cover;
    max-height: 35vh;
    width: 100%;

  }
  .masonry-container2 {
    columns: 2;
    // column-gap: 10px;
    div {
      break-inside: avoid;
    }
  }
}
// regular size screen
@media only screen and (min-width: 767.98px) {
  .rp1 {
    justify-content: space-around;
    bottom: 1em;
    align-items: center;
  }
  .ri1 {
    height: 5em;
    max-width: 5em;
    object-fit: cover;
  }
  .pp1 {
    object-fit: cover;
    max-height: 35vh;
    width: 100%;
  }
  .masonry-container1 {
    columns: 4;
    // column-gap: 10px;
    div {
      break-inside: avoid;
    }
  }
}
</style>
