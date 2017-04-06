// app/components/character-item

<template lang="html">
  <div class="character-item">
    <div class='box'>
	    <div class='content'>
        <img :src="`${character.thumbnail.path}.${character.thumbnail.extension}`" alt="">
      </div>
    </div>
    <h4 class="character-item__name">{{ character.name }}</h4>
  </div>
</template>

<script>
export default {
  props: ['character'],

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
