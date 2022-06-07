<template>
  <div class="Keep p-2">
    <div class="position-relative">
      <div class="w-100 d-flex">
        <img
          class="vp1 vp2 rounded crosshair"
          @click="activateKeep()"
          :src="keep.img"
          :alt="keep.name"
          :title="keep.name"
        />
        <div class="kt1 kt2 position-absolute d-flex">
          <h5 class="ts text-light" :title="keep.name">{{ keep.name }}</h5>
          <img
            class="circle vi1 vi2 action ms-4"
            @click="goToProfile()"
            :src="keep.creator?.picture"
            :alt="keep.creator?.name"
            :title="keep.creator?.name"
          />
          <h5
            v-if="vault.creatorId == account.id"
            class="ts text-light ms-4"
            title="remove from vault"
          >
            <i @click="removeFromVault()" class="mdi mdi-delete selectable"></i>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Modal } from 'bootstrap'
import { useRoute, useRouter } from 'vue-router'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { keepsService } from '../services/KeepsService.js'
import { vaultKeepsService } from '../services/VaultKeepsService.js'
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'

export default {
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    return {
      account: computed(() => AppState.account),
      vault: computed(() => AppState.activeVault),
      async activateKeep() {
        try {
          await keepsService.getKeepById(props.keep.id)
          await Modal.getOrCreateInstance(document.getElementById('keep-modal')).show()
        }
        catch (error) {
          logger.log(error);
          Pop.toast(error.message, "error");
        }
      },
      goToProfile() {
        router.push({ name: 'Profile', params: { id: props.keep.creatorId } })
      },
      async removeFromVault() {
        try {
          if (await Pop.confirm()) {
            await vaultKeepsService.deleteVaultKeep(props.keep.vaultKeepId)
            await vaultKeepsService.getAllVaultsKeeps(route.params.id)

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