<template>
  <div class="Keep p-2">
    <div class="position-relative">
      <img
        class="object-fit rounded"
        @click="activateKeep()"
        :src="keep.img"
        alt=""
      />
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
import { Modal } from 'bootstrap'
import { useRouter } from 'vue-router'
import { keepsService } from '../services/KeepsService.js'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
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
      },
      async activateKeep() {
        try {
          await keepsService.getKeepById(props.keep.id)
          await Modal.getOrCreateInstance(document.getElementById('keep-modal')).show()
        }
        catch (error) {
          logger.log(error);
          Pop.toast(error.message, "error");
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>