<template>
  <Modal id="create-vault">
    <template #modal-body>
      <div class="p-4">
        <button
          type="button"
          class="btn-close position-absolute right top"
          data-bs-dismiss="modal"
        ></button>
        <h3 class="text-center">Create Vault</h3>
        <form @submit.prevent="createVault()">
          <div class="justify-content-center">
            <div class="row">
              <div class="col-md-12 p-1">
                <label class="p-1" for="Vault Name">Name:</label>
                <input
                  required
                  class="w-100"
                  v-model="edit.name"
                  maxlength="20"
                  type="text"
                />
              </div>
              <div class="col-md-12 p-1">
                <label class="p-1" for="Vault description">Description:</label>
                <textarea
                  required
                  v-model="edit.description"
                  class="form-control"
                  name="ProjectDescription"
                  id="ProjectDescription"
                  rows="3"
                ></textarea>
              </div>
              <div class="form-check col-md-12">
                <label class="form-check-label" for="isPrivate">
                  Is this Private?
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="edit.isPrivate"
                  id="isPrivate"
                />
              </div>

              <div class="col-md-12 p-1">
                <label class="p-1" for="Vault  Image"> Image URL:</label>
                <input class="w-100" required v-model="edit.img" type="url" />
              </div>
              <button class="btn btn-success">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </template>
  </Modal>
</template>


<script>
import { ref } from '@vue/reactivity'
import { vaultsService } from '../services/VaultsService.js'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService.js'
import { Modal } from 'bootstrap'
export default {
  setup() {
    const edit = ref({})
    const route = useRoute()

    return {
      edit,
      async createVault() {
        try {
          logger.log(edit.value, "edit?")
          await vaultsService.createVault(edit.value)
          Modal.getOrCreateInstance(document.getElementById('create-vault')).hide()
          await profilesService.getProfileKeeps(route.params.id)
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>