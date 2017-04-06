// app/components/modal

<template lang="html">
  <div class="modal">
    <div class="modal-box">
      <a class="modal-box__close" href="#">X</a>
      <div class="modal-content">
        <div class="modal-content__img">
          <!-- <img src="http://www.placecera.com/c/200/300" alt=""> -->
        </div>
        <div class="modal-content__description">
          <p>{{ comicData[0].description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  props: ['comic'],
  data() {
    return {
      comicData: this.$select('comicData')
    };
  },

  methods: {

  },
};
</script>
