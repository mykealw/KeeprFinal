<template>
  <div class="vault mt-2 position-relative">
    <img class="vp1 vp2" :src="vault.img" :alt="vault.name" />
    <div class="position-absolute kt1 kt2">
      <h3 class=" ts text-light">{{ vault.name }}</h3>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    vault: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>