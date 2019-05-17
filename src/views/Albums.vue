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
            <div class="card-image cursor-pointer" @click="openAlbum(album.link)">
              <figure class="image is-4by3">
                <img v-lazy="coverUrl(album.cover)" alt="Cover">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p>{{ album.title }}</p>
              </div>
            </div>
            <footer class="card-footer">
              <div class="card-footer-item">
                <b-icon icon="image"></b-icon>
                <span>{{ album.images_count }}</span>
              </div>
              <div class="card-footer-item">
                <b-icon icon="eye"></b-icon>
                <span>{{ album.views }}</span>
              </div>
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
  },
  methods: {
    coverUrl(url) {
      return `https://i.imgur.com/${url}_d.jpg?maxwidth=520&shape=thumb&fidelity=high`
    },
    openAlbum(url) {
      window.open(url, '_blank')
    }
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
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.card {
  border-radius: 5px;
}
.card-footer-item span {
  margin-left: 5px;
}
.card-content {
  padding: .8rem;
}
.card-content .content {
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
