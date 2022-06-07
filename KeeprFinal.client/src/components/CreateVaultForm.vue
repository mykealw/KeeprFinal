<template>
  <Modal id="create-vault">
    <template #modal-body>
      <div class="p-4">
        <button
          type="button"
          class="btn-close position-absolute close-button right top"
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
              <div class="col-md-12 p-1">
                <label class="p-1" for="Vault  Image"> Image URL:</label>
                <input class="w-100" required v-model="edit.img" type="text" />
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
export default {
  setup() {
    const edit = ref({})
    return {
      edit
    }
  }
}
</script>


<style lang="scss" scoped>
</style>