<template>
  <Modal id="keep-modal">
    <template #modal-body>
      <div class="container-fluid position-relative">
        <button
          type="button"
          class="btn-close position-absolute close-button right top"
          title="close button"
          data-bs-dismiss="modal"
        ></button>
        <div class="row d-flex p-3">
          <div class="col-md-6">
            <img
              class="object-fit rounded"
              :src="keep.img"
              :alt="keep.name"
              :title="keep.name"
            />
          </div>
          <div class="col-md-6">
            <div class="row my-4">
              <h4 class="text-info text-center">
                <i class="mdi mdi-eye" title="keep views"></i> {{ keep?.views }}
                <i
                  class="mdi mdi-chevron-right-box-outline"
                  title="keep kepts"
                ></i>
                {{ keep.kept }}

                <i class="mdi mdi-share-variant" title="keep shares"></i>
                {{ keep.shares }}
              </h4>
            </div>
            <div class="row my-3">
              <div class="col-md-12">
                <h1 :title="keep.name">{{ keep.name }}</h1>
              </div>
              <div class="col-md-12">
                <h3 :title="keep.description">{{ keep.description }}</h3>
                <hr class="my-5" />
              </div>
            </div>
            <div class="row my-5">
              <div v-if="user.isAuthenticated" class="col-md-7">
                <select
                  name="add to vault"
                  id="add to vault"
                  v-model="vaultId"
                  placeholder="add to vault"
                  title="add to vault"
                >
                  <option
                    v-for="v in vault"
                    :key="v.id"
                    :value="v.id"
                    title="select vault"
                  >
                    {{ v.name }}
                  </option>
                </select>
                <button
                  class="btn btn-success ms-2"
                  @click="addToVault()"
                  title="add to vault"
                >
                  add to vault
                </button>
              </div>
              <div class="col-md-1">
                <i
                  v-if="keep.creatorId == account.id"
                  class="mdi mdi-delete mdi-36px action"
                  title="delete keep"
                  @click="deleteKeep(keep.id)"
                ></i>
              </div>
              <div
                class="col-md-4 d-flex action"
                @click="goToProfile()"
                title="go to profile"
              >
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
      user: computed(() => AppState.user),
      async addToVault() {
        try {
          // debugger
          let newVk = { vaultId: vaultId.value, keepId: AppState.activeKeep.id }
          await vaultKeepsService.createVaultKeep(newVk)
          vaultId.value = 0
          Modal.getOrCreateInstance(document.getElementById('keep-modal')).hide()
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
            AppState.keeps = AppState.keeps.filter(k => k.id != k.id)
          }
        }
        catch (error) {
          logger.log(error);
          Pop.toast(error.message, "error");
        }
      },
      goToProfile() {
        Modal.getOrCreateInstance(document.getElementById('keep-modal')).hide()
        router.push({ name: 'Profile', params: { id: AppState.activeKeep?.creator?.id } })
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