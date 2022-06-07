<template>
  <Modal id="keep-modal">
    <template #modal-body>
      <div class="container-fluid position-relative">
        <button
          type="button"
          class="btn-close position-absolute close-button right top"
          data-bs-dismiss="modal"
        ></button>
        <div class="row d-flex p-3">
          <div class="col-md-6">
            <img class="object-fit rounded" :src="keep.img" :alt="keep.name" />
          </div>
          <div class="col-md-6">
            <div class="row my-3">
              <h4 class="text-info text-center">
                <i class="mdi mdi-eye"></i> {{ keep?.views }}
                <i class="mdi mdi-chevron-right-box-outline"></i>
                {{ keep.kept }}

                <i class="mdi mdi-share-variant"></i> {{ keep.shares }}
              </h4>
            </div>
            <div class="row my-2">
              <div class="col-md-12">
                <h1>{{ keep.name }}</h1>
              </div>
              <div class="col-md-12">
                <h3>{{ keep.description }}</h3>
                <hr />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <select
                  name="add to vault"
                  id="add to vault"
                  v-model="vaultId"
                  placeholder="add to vault"
                >
                  <option v-for="v in vault" :key="v.id" :value="v.id">
                    {{ v.name }}
                  </option>
                </select>
                <button class="btn btn-success ms-2" @click="addToVault()">
                  add
                </button>
              </div>
              <div class="col-md-2">
                <i
                  v-if="keep.creatorId == account.id"
                  class="mdi mdi-delete mdi-36px action"
                  @click="deleteKeep(keep.id)"
                ></i>
              </div>
              <div class="col-md-4 d-flex action" @click="goToProfile()">
                <img
                  height="40"
                  :src="keep.creator?.picture"
                  :alt="keep.creator?.name"
                />
                <h5 class="ms-2">{{ keep.creator?.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState.js'
import { vaultKeepsService } from '../services/VaultKeepsService.js'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { keepsService } from '../services/KeepsService.js'
import { router } from '../router.js'
import { useRoute, useRouter } from 'vue-router'
import { Modal } from 'bootstrap'
export default {
  props: {
    keep: {
      type: Object,
      required: true
    },
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const vaultId = ref({})
    return {
      vaultId,
      vault: computed(() => AppState.myVaults),
      keep: computed(() => AppState.activeKeep),
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      async addToVault() {
        try {
          // debugger
          let newVk = { vaultId: vaultId.value, keepId: AppState.activeKeep.id }
          await vaultKeepsService.createVaultKeep(newVk)
          vaultId.value = 0
          AppState.activeKeep = AppState.activeKeep
        }
        catch (error) {
          logger.log(error);
          Pop.toast(error.message, "error");
        }
      },
      async deleteKeep(keepId) {
        try {
          if (await Pop.confirm()) {
            await keepsService.deleteKeep(keepId)
            Modal.getOrCreateInstance(document.getElementById('keep-modal')).hide()
            Pop.toast("deleted")
            await vaultKeepsService.getAllVaultsKeeps(route.params.id)
          }
        }
        catch (error) {
          logger.log(error);
          Pop.toast(error.message, "error");
        }
      },
      goToProfile() {
        Modal.getOrCreateInstance(document.getElementById('keep-modal')).hide()
        router.push({ name: 'Profile', params: { id: props.keep.creatorId } })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.keep {
  height: 50vh;
  width: 100%;
  transition: all 0.3s ease;
  background-size: cover;
}
</style>