<template>
  <div class="container h-100">
    <div class="row h-100" style="display: block;">
      <div class="col-12 mx-auto">
        <div class="jumbotron text-center">
          <h1 class="display-4">Cipher Tool</h1>
        </div>
      </div>
      <div class="col-12 mx-auto">
        <div class="jumbotron text-center">
        <form class="form-inline">
          <div class="form-group mb-2">
            <label for="mode" class="sr-only mr-3 mb-2">Mode</label>
            <bootstrap-dropdown title="Mode" :items="modes" v-on:value-selected="mode = $event" />
          </div>
          <div class="form-group mx-2 mb-2">
            <label for="mode" class="sr-only mr-3 mb-2">Algorithm</label>
            <bootstrap-dropdown title="Algorithm" :items="algorithms" v-on:value-selected="algorithm = $event" />
          </div>
          <div class="form-group mx-2 mb-2">
            <label for="mode" class="sr-only mr-3 mb-2">Input</label>
            <input type="text" class="form-control" id="input" size=90 :placeholder="`Enter input string ${mode.length > 0 ? `to ${mode}` : ''}`" v-model="input">
          </div>
        </form>
        <form>
          <div class="form-group">
            <label for="output">Output</label>
            <textarea class="output-textarea form-control" rows="26" v-model="output"/>
          </div>
        </form>
      </div>
      </div>
      <footer class="footer">
        <p>Copright &copy; 2019 by <span class="brand">SAFE Studio Team.</span></p>
      </footer>
    </div>
  </div>
</template>

<script>
import { caesar, caesar2 } from '~/libs/caesar.js';

export default {
  components: {
    BootstrapDropdown: () => import('~/components/dropdown/BootstrapDropdown.vue')
  },
  data() {
    return {
      input: '',
      algorithm: '',
      mode: '',
      modes: [
        {
          label: 'Encode',
          value: 'encode',
        },
        {
          label: 'Decode',
          value: 'decode',
        }
      ],
      algorithms: [
        {
          label: 'Caesar',
          value: 'caesar',
        },
        {
          label: 'Caesar 2',
          value: 'caesar2',
        },
        {
          label: 'Reverse',
          value: 'reverse',
        },
      ],
    }
  },
  computed: {
    output() {
      if (this.mode === 'encode' && this.algorithm === 'reverse') {
        const s = this.input;
        return s.split('').reverse().join('');
      }
      if (this.mode === 'encode' && this.algorithm === 'caesar') {
        const caesarArr = [];
        for (let i = 1; i < 26; i++) {
          caesarArr.push(caesar(this.input, i));
        }
        return caesarArr.join('\n');
      }
      if (this.mode === 'encode' && this.algorithm === 'caesar2') {
        const caesarArr = [];
        for (let i = 1; i < 26; i++) {
          caesarArr.push(caesar2(this.input, i));
        }
        return caesarArr.join('\n');
      }
      return '';
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
.footer {
  padding: 2rem;
  text-align: center;
}
.footer p:last-child {
  margin-bottom: 0;
}

.output-textarea {
  width: 100%;
}
</style>

