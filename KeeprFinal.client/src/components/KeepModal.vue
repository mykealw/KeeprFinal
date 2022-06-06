<template>
  <Modal id="keep-modal">
    <template #modal-body>
      <div class="container-fluid position-relative">
        <button
          type="button"
          class="btn-close position-absolute close-button right top"
          data-bs-dismiss="modal"
        ></button>
        <div class="row">
          <div class="col-md-6">
            <img v-if="keep?.picture" :src="keep.picture" :alt="keep.name" />
          </div>
          <div class="col-md-6">
            <div class="row">
              <h4 class="text-info">
                <i class="mdi mdi-eye">{{ keep.view }}</i>
                <i class="mdi mdi-chevron-right-box-outline">{{ keep.kept }}</i>
                <i class="mdi mdi-share-variant">{{ keep.shares }}</i>
              </h4>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h1>{{ keep.name }}</h1>
              </div>
              <div class="col-md-12">
                <h3>{{ keep.description }}</h3>
                <hr />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <select
                  name="add to vault"
                  id="add to vault"
                  v-model="vaultId"
                  placeholder="add to vault"
                >
                  <option v-for="v in vaults" :key="v.id" :value="v.id">
                    {{ v.name }}
                  </option>
                </select>
                <button class="btn btn-success" @click="addToVault()">
                  add
                </button>
              </div>
              <div class="col-md-4">
                <i
                  v-if="keep.creatorId == account.id"
                  class="mdi mdi-delete mdi48"
                ></i>
              </div>
              <div class="col-md-4 d-flex">
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
export default {
  props: {
    keep: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const vaultId = ref(0)
    return {
      keep: computed(() => AppState.activeKeep),
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      async addToVault() {
        try {
          const newVK = { vaultId: vaultId.value, keepId: props.keep.id, creatorId: props.account.id }
          await vaultKeepsService.createVaultKeep(newVk)
          vaultId.value = 0
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