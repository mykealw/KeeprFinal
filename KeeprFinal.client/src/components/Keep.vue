<template>
  <div class="Keep p-2">
    <div class="position-relative">
      <img class="object-fit rounded" :src="keep.img" alt="" />
      <div class="position-absolute w-100 d-flex rp1 rp2">
        <h4 class="ts text-light me-2">{{ keep.name }}</h4>
        <img
          class="circle ri1 ri2"
          @click="goToProfile()"
          :src="keep.creator?.picture"
          alt=""
        />
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
    const router = useRouter()
    return {
      goToProfile() {
        router.push({ name: 'Profile', params: { id: props.keep.creatorId } })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>