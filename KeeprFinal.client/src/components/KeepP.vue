<template>
  <div class="Keep p-2">
    <div class="position-relative">
      <div class="w-100 d-flex">
        <img
          class="kp3 rounded action"
          @click="activateKeep()"
          :src="keep.img"
          :alt="keep.name"
          :title="keep.name"
        />
        <div class="kt1 kt2 position-absolute">
          <h5 class="ts text-light action" @click.stop="activateKeep()" :title="keep.name">{{ keep.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Modal } from 'bootstrap';
import { AppState } from '../AppState.js';
import { keepsService } from '../services/KeepsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
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