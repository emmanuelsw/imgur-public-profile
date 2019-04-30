<template>
  <div>

    <div class="logo">
      <img alt="imgur logo" src="../assets/imgur.svg">
      <p class="heading has-text-white is-size-7 has-text-weight-semibold">Public Profile</p>
    </div>

    <div class="container">
      <div class="columns is-multiline">
        <div v-for="(album, index) in albums" :key="index" class="column is-3">

          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img v-lazy="`https://i.imgur.com/${album.cover}_d.jpg?maxwidth=520&shape=thumb&fidelity=high`" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                {{ album.title }}
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Save</a>
              <a href="#" class="card-footer-item">Edit</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Albums',
  computed: {
    ...mapState([
      'albums'
    ])
  }
}
</script>

<style scoped>
.logo {
  padding-top: 40px;
  padding-bottom: 50px;
}
.logo img {
  width: 120px;
}
.image img {
  object-fit: cover;
}
</style>
