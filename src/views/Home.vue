<template>
  <div>

    <div class="logo">
      <img alt="imgur logo" src="../assets/imgur.svg">
      <p class="heading has-text-white is-size-6 has-text-weight-semibold">Public Profile</p>
    </div>

    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <div class="box">
          <b-field grouped>
            <b-input v-model="username" placeholder="Search by username" size="is-large" icon="account" expanded></b-input>
            <p class="control">
              <b-button @click="search" :loading="loading" class="green" size="is-large" type="is-success" icon-left="magnify">Search</b-button>
            </p>
          </b-field>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      loading: false,
      username: '' 
    }
  },
  methods: {
    search() {
      if (!this.username) {
        this.$notification.open({
          duration: 3000,
          closable: false,
          message: `Username can't be blank.`,
          position: 'is-top',
          type: 'is-danger'
        })
        return
      }
      this.loading = true
    }
  }
}
</script>

<style scoped>
.logo {
  padding-top: 200px;
  padding-bottom: 100px;
}
.logo img {
  width: 180px;
}
.logo h1 {
  font-size: 36px;
  padding-top: 10px;
  color: #434343;
}
</style>

