<template>
  <div class="vault mt-2 position-relative">
    <img
      class="vp1 vp2 rounded"
      @click="goToVault()"
      :src="vault.img"
      :alt="vault.name"
      :title="vault.name"
    />
    <div class="position-absolute kt1 kt2">
      <h3 class="ts text-light" :title="vault.name">{{ vault.name }}</h3>
    </div>
  </div>
</template>


<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    vault: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    return {
      goToVault() {
        router.push({ name: 'Vaults', params: { id: props.vault.id } })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>