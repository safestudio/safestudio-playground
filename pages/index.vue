<template>
  <div class="container h-100">
    <div class="row align-items-center h-100">
      <div class="col-12 mx-auto">
        <div class="jumbotron text-center">
          <h1 class="display-4">SAFE Studio Playground</h1>
          <bootstrap-dropdown-link title="Select tool" :items="items" class="text-center" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    BootstrapDropdownLink: () => import('~/components/dropdown/BootstrapDropdownLink.vue')
  },
  data() {
    return {
      items: [
        {
          label: 'Generate Netlify redirect config',
          link: '/generate-netlify-redirect-config'
        },
        {
          label: 'Cipher tools',
          link: '/cipher'
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

