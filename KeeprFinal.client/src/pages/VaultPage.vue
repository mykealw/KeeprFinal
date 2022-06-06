<template>
  <div class="VaultPage">YOU arrived</div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { vaultsService } from '../services/VaultsService.js'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
import { vaultKeepsService } from '../services/VaultKeepsService.js'
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        await vaultsService.getVaultById(route.params.id)
        await vaultKeepsService.getAllVaultsKeeps(route.params.id)
      } catch (error) {
        logger.log(error)
        Pop.toast(error.message, "error")
      }
    })
    return {
      vault: computed(() => AppState.activeVault), profile: computed(() => AppState.profile),
      account: computed(() => AppState.account)

    }
  }
}
</script>


<style lang="scss" scoped>
</style>