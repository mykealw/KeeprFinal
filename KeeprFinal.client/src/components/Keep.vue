<template>
  <div class="Keep p-2">
    <div class="position-relative">
      <img class="object-fit rounded" :src="keep.img" alt="" />
      <h3 class="position-absolute ts text-light rp1 rp2">{{ keep.name }}</h3>
      <img class="position-absolute ri1 ri2" :src="keep.creator?.picture" alt="">
    </div>
  </div>
</template>


<script>
export default {
  props: {
    keep: {
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