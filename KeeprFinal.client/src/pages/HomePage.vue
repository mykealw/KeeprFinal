<template>
  <div class="home container-fluid flex-grow-1">
    <div class="masonry-container1 masonry-container2">
      <div v-for="k in keeps" :key="k.id">
        <Keep :keep="k" />
      </div>
    </div>
  </div>
  <div v-if="!!actKeeps" v-for="k in actKeeps" :key="k.id">
    <KeepModal :keep="k" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { keepsService } from '../services/KeepsService.js'
import { AppState } from '../AppState.js'
export default {
  setup() {
    onMounted(async () => {
      try {
        await keepsService.getAllKeeps()
      } catch (error) {
        logger.log(error)
        Pop.toast("oh no")
      }
    })
    return {
      keeps: computed(() => AppState.keeps),
      actKeeps: computed(() => AppState.activeKeep)

    }
  }
}
</script>

<style scoped lang="scss">
</style>
