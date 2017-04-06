// app/components/comic-item

<template lang="html">
  <div class="character-item">
    <div class="box">
      <div class="content">
        <img :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`" alt="">
      </div>
    </div>
    <h3 class="comics-number">#{{ comic.issueNumber }}</h3>
    <h5 class="character-item__name">{{ comic.title }}</h5>
    <button id="show-modal" @click="modal = true" class="comics-btn">Read More</button>
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
