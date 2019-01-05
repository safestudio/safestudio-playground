<template>
  <div class="container h-100">
    <div class="row align-items-center h-100">
      <div class="col-12 mx-auto">
        <div class="jumbotron text-center">
          <h1 class="display-4">SAFE Studio Playground</h1>
          <bootstrap-dropdown title="Select tool" :items="items" class="text-center" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BootstrapDropdown from '~/components/dropdown/BootstrapDropdown.vue'

export default {
  components: {
    BootstrapDropdown
  },
  data() {
    return {
      items: [
        {
          label: "Generate Netlify redirect config",
          link: '/generate-netlify-redirect-config'
        }
      ]
    }
  }
}
</script>
<style>
#__layout {
  height: 100vh;
}
.jumbotron {
  background-color: #fff;
}
.text-center .dropdown-menu {
   left: 50%;
   transform: translateX(-50%);
}
</style>

