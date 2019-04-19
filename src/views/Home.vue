<template>
  <div>
    <div class="logo">
      <img alt="imgur logo" src="../assets/imgur.jpg">
      <h1>Imgur Public Profile</h1>
    </div>
    <div class="input">
      <a-form layout="inline">
        <a-form-item>
          <a-input v-model="username" class="username" size="large" placeholder="Search by username">
            <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button @click="search" size="large" type="primary" :loading="loading" :disabled="!username">
            Search
          </a-button>
        </a-form-item>
      </a-form>
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
      this.loading = true
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito:700');
.logo {
  padding-top: 100px; 
}
.logo img {
  width: 150px;
}
.logo h1 {
  font-family: 'Nunito', sans-serif;
  font-size: 36px;
  padding-top: 10px;
  color: #434343;
}
.input {
  padding-top: 80px;
}
.username {
  width: 400px !important;
}
</style>

