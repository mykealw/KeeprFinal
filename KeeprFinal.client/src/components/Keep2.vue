<template>
  <div class="Keep p-2">
    <div class="position-relative">
      <div class="w-100 d-flex">
        <img class="k2p1 k2p2 rounded" :src="keep.img" alt="" />
        <div class="kt1 kt2 position-absolute">
          <h5 class="ts text-light ">{{ keep.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
    }
  }

}
</script>


<style lang="scss" scoped>
</style>