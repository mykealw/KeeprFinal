<template>
    <nav class="d-flex bg-primary jcsb p-3">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex flex-column align-items-center ">
          <label for="logo" class="visually-hidden"> navigate home</label>
          <img
            alt="GO home"
            aria-label="logo, go home"
            src="../assets/img/keepr.png"
            height="45"
          />
        </div>
      </router-link>
      <!-- <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
   
      <span class="navbar-toggler-icon" />
    </button> -->
      <div class="" id="">
        <!-- <ul class="navbar-nav me-auto">
     
        <li>
          <router-link
            :to="{ name: 'About' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            About
          </router-link>
        </li>
      </ul> -->
        <!-- LOGIN COMPONENT HERE -->
        <Login />
      </div>
    </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
/* .jcsb {
  justify-content: space-between;
} */
</style>
