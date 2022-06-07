<template>
  <div class="Keep p-2">
    <div class="position-relative">
      <div class="w-100 d-flex">
        <img
          class="k2p1 k2p2 rounded"
          @click="activateKeep()"
          :src="keep.img"
          alt=""
        />
        <div class="kt1 kt2 position-absolute">
          <h5 class="ts text-light">{{ keep.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Modal } from 'bootstrap'
import { useRouter } from 'vue-router'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { keepsService } from '../services/KeepsService.js'

export default {
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
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