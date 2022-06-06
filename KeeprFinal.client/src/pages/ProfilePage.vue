<template>
  <div class="profile container-fluid">
    <div class="row mt-2">
      <div class="col-md-3">
        <label :for="profile.name" class="visually-hidden">{{
          profile.name
        }}</label>
        <img
          class="pp1 pp2 rounded"
          :src="profile.picture"
          :alt="profile.name"
        />
      </div>
      <div class="col-md-9">
        <h1>{{ profile.name }}</h1>
        <h3>Vaults: {{ vaults.length }}</h3>
        <h3>Keeps: {{ keeps.length }}</h3>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-12">
        <h2>
          Vaults<i v-if="profile.id == account.id" class="mdi mdi-plus"></i>
        </h2>
      </div>
      <div v-for="v in vaults" :key="v.id" class="col-md-3">
          <Vault :vault="v" />
      </div>
    </div>
    <div class="row mt-5">
        <div class="col-md-12">
            <h2>Keeps<i v-if="profile.id == account.id" class="mdi mdi-plus"></i></h2>
        </div>
        <div class="col-md-2" v-for="k in keeps" :key="k.id">
            <Keep2 :keep="k" />
        </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService.js'
import { AppState } from '../AppState.js'
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        await profilesService.getProfile(route.params.id)
        await profilesService.getProfileKeeps(route.params.id)
        await profilesService.getProfileVaults(route.params.id)
      } catch (error) {
        logger.log(error)
        Pop.toast(error.message, "error")
      }
    })
    return {
      keeps: computed(() => AppState.myKeeps),
      vaults: computed(() => AppState.myVaults),
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>