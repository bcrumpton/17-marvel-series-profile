<template lang="html">
  <div class="app">
    <nav class="top-nav">
      <img class="logo" src="http://2.bp.blogspot.com/-CfcNNFkQgKg/VVA2-IZrYMI/AAAAAAAACW4/2UKFilGssf0/s1600/Marvel-comics-logo-vector.png" alt="">
    </nav>
    <div class="section">
      <div class="container">
        <div class="main">
          <div class="sidebar">
            <img class="sidebar__img" v-bind:src="`${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}`" alt="">
            <h1 class="sidebar__title">{{seriesInfo.title}}</h1>
            <h2 class="sidebar__creators">Creators</h2>
            <hr/>
            <ul>
              <li class="sidebar__creators--item" v-for="x in seriesInfo.creators.items">{{ x.name }}</li>
            </ul>
          </div>

          <div class="main-content">
            <div class="main-content__item">
              <h2 class="main-content__heading">Characters</h2>
              <hr/>

              <div class="character">
                <character-item v-for="character in characterData" v-bind:character="character"></character-item>
              </div>
            </div>
            <div class="main-content__item">
              <h2 class="main-content__heading">Comics</h2>
              <hr/>
              <div class="character">
                <comic-item v-for="comic in comicData" v-bind:comic="comic"></comic-item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal></modal>
  </div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch } from '../actions';
import CharacterItem from './character-item.vue';
import ComicItem from './comic-item.vue';
import Modal from './modal.vue';

export default {
  components: {
    CharacterItem,
    ComicItem,
    Modal,
  },

  data() {
    return {
      seriesInfo: this.$select('seriesInfo'),
      characterData: this.$select('characterData'),
      comicData: this.$select('comicData'),
      modal: true,
    };
  },

  mounted() {
    store.dispatch(seriesInfoSearch('Deadpool'));
  },

  methods: {

  },
};
</script>
