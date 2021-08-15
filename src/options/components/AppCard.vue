<template>
    <div class="card mb-4" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title"><slot /></h5>
        <!--<h6 class="card-subtitle mb-2 text-muted"><slot />Background set to #014, font set to white. Alexa most popular sites.</h6>-->
        <b-button href="#" variant="primary">+ Follow this list</b-button>
        <ul class="list-group py-4">
          <li class="list-group-item">docs.google.com</li>
          <li class="list-group-item">google.com</li>
          <li class="list-group-item">reddit.com</li>
          <li class="list-group-item">twitter.com</li>
          <li class="list-group-item">twitch.com</li>
          <li class="list-group-item">youtube.com</li>
          <li class="list-group-item">amazon.com</li>
          <li class="list-group-item">telegram.org</li>
          <li class="list-group-item">whatsapp.com</li>
        </ul>
        <!--<a href="#" class="btn  mr-2"><i class="fas fa-link"></i> Visit Site</a>
        <a href="#" class="btn"><i class="fab fa-github"></i> Github</a>-->
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppCard',
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    variant: {
      type: String,
      required: false,
      default: 'secondary',
    },
    size: {
      type: String,
      required: false,
      default: 'large',
    },
  },
});
</script>

<style lang="scss" scoped>
.b-card {
  border-radius: 2px;
}
</style>
