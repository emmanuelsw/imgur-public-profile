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

    <div class="foot">
      <a href="https://github.com/emmanuelsw">emmanuelsw</a>
      <b-icon icon="github-circle"></b-icon>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
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
      this.$store.dispatch('search', this.username)
        .then(() => {
          this.loading = false
          this.$router.push({ name: 'albums', params: { username: this.username } })
        })
        .catch(err => {
          this.loading = false
          this.$notification.open({
            duration: 3000,
            closable: false,
            message: err.data.data.error,
            position: 'is-top',
            type: 'is-danger'
          })
        })
    }
  }
}
</script>

<style scoped>
.logo {
  padding-top: 200px;
  padding-bottom: 150px;
}
.logo img {
  width: 180px;
}
.foot {
  width: 100%;
  position: fixed;
  bottom: 15px;
  color: #fff;
  font-weight: bold;
}
.foot a {
  color: #fff;
  vertical-align: top;
  margin-right: 10px;
}
</style>

