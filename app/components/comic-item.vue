// app/components/comic-item

<template lang="html">
  <div class="character-item">
    <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="">
    <h3 class="comics-number">#{{ comic.issueNumber }}</h3>
    <h5 class="character-item__name">{{ comic.title }}</h5>
    <button v-on:click="modal" class="comics-btn">Read More</button>
  </div>
</template>

<script>
export default {
  props: ['comic'],
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
