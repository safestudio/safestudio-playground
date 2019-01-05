<template>
  <div :class="['dropdown', show ? 'show' : '']">
    <button :class="['btn', `btn-${colorStyle}`, 'dropdown-toggle']" type="button" :id="`dropdown-${id}`" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="show" @click="toggle">
      {{ title }}
    </button>

    <div :class="['dropdown-menu', show ? 'show' : '']" :aria-labelledby="`dropdown-${id}`" v-for="(item, index) in items" :key="index">
      <a class="dropdown-item" :href="item.link" @click="goToUrl(item.link)">{{ item.label }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bootstrap-dropdown',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    colorStyle: {
      type: String,
      default: 'primary'
    },
    items: {
      type: Array,
      required: true,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      show: false,
    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    goToUrl(link) {
      // this.show = false;
      this.$router.push(link);
    }
  }
}
</script>

