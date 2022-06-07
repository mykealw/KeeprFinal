<template>
  <div class="VaultPage container-fluid">
    <div class="row d-flex mt-3 ms-5">
      <div class="col-md-3">
        <h1>{{ vault.name }}</h1>
      </div>
      <div class="col-md-6">
        <h6>{{ vault.description }}</h6>
      </div>
      <div class="col-md-3">
        <button
          type="button"
          v-if="vault.creatorId == account.id"
          class="btn btn-outline-secondary"
          @click="deleteVault(vault.id)"
        >
          Delete Vault <i class="mdi mdi-delete"></i>
        </button>
      </div>
      <div class="col-md-12">
        <h6>Keeps: {{ keeps.length }}</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" v-for="k in keeps" :key="k.id">
        <KeepV :keep="k" />
      </div>
    </div>
  </div>
  <div v-for="k in keeps" :key="k.id">
    <KeepModal :keep="k" />
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { vaultsService } from '../services/VaultsService.js'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
import { vaultKeepsService } from '../services/VaultKeepsService.js'
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async () => {
      try {
        await vaultsService.getVaultById(route.params.id)
        await vaultKeepsService.getAllVaultsKeeps(route.params.id)
      } catch (error) {
        logger.log(error)
        Pop.toast("you do not have access to this, sending you home")
        router.push({ name: 'Home' })
      }

    })
    return {
      vault: computed(() => AppState.activeVault), profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
      keeps: computed(() => AppState.keeps),
      activeKeep: computed(() => AppState.activeKeep),
      async deleteVault(id) {
        try {
          if (await Pop.confirm()) {
            await vaultsService.deleteVault(id)
            router.push({ name: 'Home' })
            Pop.toast("deleted, going home")
          }

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