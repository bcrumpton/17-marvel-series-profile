<template lang="html">
  <div class="app">
    <nav class="top-nav">
      <h1>Marvel</h1>
    </nav>
    <div class="section">
      <div class="container">
        <div class="main">
          <div class="sidebar">
            <div class='box'>
              <div clas='content'>
                <img class="sidebar__img" v-bind:src="`${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}`" alt="">
              </div>
            </div>
            <h1 class="sidebar__title">{{seriesInfo.title}}</h1>
            <h3 class="sidebar__year">{{seriesInfo.startYear}}</h3>
            <h4 class="sidebar__creators">Creators</h4>
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

    <div class="open_modal">
      <div class="modal">
        <button v-on:click="close" href="#close" class="modal__close">Close</button>
        <h2 class="modal__heading">Thor</h2>
        <p class="modal__description">Now, when you do this without getting punched in the chest, you'll have more fun. Well, what do you expect, mother? Say goodbye to these, because it's the last time! Bad news. Andy Griffith turned us down. He didn't like his trailer.</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch } from '../actions';
import CharacterItem from './character-item.vue';
import ComicItem from './comic-item.vue';

export default {
  components: {
    CharacterItem,
    ComicItem,
  },

  data() {
    return {
      seriesInfo: this.$select('seriesInfo'),
      characterData: this.$select('characterData'),
      comicData: this.$select('comicData'),
      modal: this.$select('modal'),
    };
  },

  mounted() {
    store.dispatch(seriesInfoSearch('Deadpool'));
  },

  methods: {
    modal() {
      document.querySelector('.open_modal').style.display = 'block';
    },

    close() {
      document.querySelector('.open_modal .modal').style.display = 'none';
      document.querySelector('.open_modal').style.background = 'rgba(0, 0, 0, 0)';
    },
  },
};
</script>
