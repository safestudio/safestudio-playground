<template>
  <div class="container h-100">
    <div class="row align-items-center h-100">
      <div class="col-12 mx-auto">
        <div class="jumbotron text-center">
          <h1 v-if="error.code === 404">Page not found</h1>
          <h1 v-else>{{ error.message }}</h1>
          <nuxt-link to="/">Back to homepage</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
<style>
#__layout {
  height: 100vh;
}
.jumbotron {
  background-color: #fff;
}
</style>

