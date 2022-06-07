<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <div class="row">
    <h5
      class="
        selectable
        p-2
        border border-dark
        m-2
        bg-primary
        rounded
        text-center
      "
      @click="goToProfile()"
      title="go to profile"
    >
      Go to Profile
      <i class="ms-2 mdi mdi-folder-heart-outline"></i>
    </h5>
  </div>
  <div class="row">
    <div v-if="editing !== true" class="col-md-12">
      <h5
        class="
          selectable
          p-2
          border border-dark
          m-2
          bg-primary
          rounded
          text-center
        "
        @click="editing = !editing"
        title="Edit Account"
      >
        Edit Account
        <i class="ms-2 mdi mdi-account-edit-outline"></i>
      </h5>
    </div>
    <form class="p-3" v-if="editing == true" @submit.prevent="editAccount()">
      <div class="m-2">
        <label for="name" class="form-label visually-hidden">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="helpId"
          placeholder="Name.."
          v-model="edit.name"
        />
      </div>
      <div class="m-2">
        <label for="picture" class="form-label visually-hidden">Picture</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="picture url input"
          placeholder="picture URL..."
          v-model="edit.picture"
        />
      </div>
      <div>
        <button
          class="btn bg-danger"
          @click="editing = !editing"
          title="Cancel"
        >
          Cancel
        </button>
        <button class="btn bg-success ms-2" title="Submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router';
import { accountService } from '../services/AccountService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';

export default {
  name: 'Account',
  setup() {
    const editing = ref(false);
    const edit = ref({});
    const router = useRouter();
    return {
      editing,
      edit,
      account: computed(() => AppState.account),
      async editAccount() {
        try {
          if (!edit.value.name) {
            edit.value.name = AppState.account.name
          }
          if (!edit.value.picture) {
            edit.value.picture = AppState.account.picture
          }
          await accountService.editAccount(edit.value)
          Pop.toast("Account updated", "success")
        } catch (error) {
          logger.log("[error prefix]", error.message);
          Pop.toast(error.message, "error");
        }
      },
      goToProfile() {
        router.push({ name: 'Profile', params: { id: AppState.account.id } })
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
.picfont {
  font-family: "Alegreya Sans", sans-serif;
}
.ticpic {
  object-fit: cover;
  height: 26vh;
  width: 100%;
}
.jcsa {
  justify-content: space-around;
}
.ticlen {
  width: 500px;
}
.hole {
  height: 100px;
  border-radius: 50%;
  width: 100px;
  margin-left: 50%;
  margin-top: 25%;
}
</style>
