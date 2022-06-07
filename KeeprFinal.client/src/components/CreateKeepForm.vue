<template>
  <Modal id="create-keep">
    <template #modal-body>
      <div class="p-4">
        <button
          type="button"
          class="btn-close position-absolute right top"
          data-bs-dismiss="modal"
          title="close button"
        ></button>
        <h3 class="text-center" title="create keep">Create Keep</h3>
        <form @submit.prevent="createKeep()">
          <div class="justify-content-center">
            <div class="row">
              <div class="col-md-12 p-1">
                <label class="p-1" for="Keep Name">Name:</label>
                <input
                  required
                  class="w-100"
                  title="name input"
                  v-model="edit.name"
                  maxlength="20"
                  type="text"
                />
              </div>
              <div class="col-md-12 p-1">
                <label class="p-1" for="Keep description">Description:</label>
                <textarea
                  required
                  title="description input"
                  v-model="edit.description"
                  class="form-control"
                  name="ProjectDescription"
                  id="ProjectDescription"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-md-12 p-1">
                <label class="p-1" for="Keep  Image"> Image URL:</label>
                <input
                  class="w-100"
                  title="img url input"
                  required
                  v-model="edit.img"
                  type="url"
                />
              </div>
              <button class="btn btn-success" title="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </template>
  </Modal>
</template>


<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { keepsService } from '../services/KeepsService.js'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { Modal } from 'bootstrap'
import { profilesService } from '../services/ProfilesService.js'
export default {
  setup() {
    const edit = ref({})
    const route = useRoute()
    return {
      edit,
      async createKeep() {
        try {
          await keepsService.createKeep(edit.value)
          Modal.getOrCreateInstance(document.getElementById('create-keep')).hide()
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