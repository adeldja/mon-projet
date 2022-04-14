<template>
  <div class="container">
    <h1>{{ doodle.name }}</h1>
    <svg ref="svg" xmlns="http://www.w3.org/2000/svg"
  :viewBox="viewBox"
  @mousedown="onMousedown"
  @mouseup="onMouseup"
  @mouseleave="onMouseup"
  @mousemove="onMousemove"
>
      <path v-for="path in doodle.paths" :key="path.id"
        :stroke="path.stroke"
        :stroke-width="path.stroke_width"
        :fill="path.fill"
        :fill-opacity="path.fill_opacity"
        :d="path.d"
        stroke-linecap="round" stroke-linejoin="round"
      />
      <path
        v-bind="path"
        stroke-linecap="round"
       stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: ['id'],
  data() {
    return {
      vbWidth: 0,
      vbHeight: 0,
      mousedown: false,
      path: {
          stroke: '#000000',
          stroke_width: 1,
          fill: 'none',
          d: ''
  }
    };
  },
  computed: {
    ...mapState(['loading', 'doodle']),
    viewBox() {
      const x = -this.vbWidth / 2;
      const y = -this.vbHeight / 2;
      return `${x} ${y} ${this.vbWidth} ${this.vbHeight}`;
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    this.$store.dispatch('getDoodle', this.id);
    
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
    this.$store.commit('doodle', {});
  },
  methods: {
    onResize() {
      const r = this.$refs.svg.getBoundingClientRect();
      this.vbWidth = r.width;
      this.vbHeight = r.height;
    },
    onMousedown(e) {
          this.mousedown = true;
          this.updateMouseCoordinates(e);
        // on commence la ligne
        this.path.d = `M${this.mx} ${this.my}`;
      },
    onMousemove(e) {
      if (this.mousedown) {
        this.updateMouseCoordinates(e);
        // on continue la ligne
        this.path.d += `L${this.mx} ${this.my}`;
      }
    },
    onMouseup() {
      this.mousedown = false;
      this.$store.dispatch('postPath', { id: this.id, d: this.path.d });
      this.$router.go(); //this.$store.dispatch('getDoodle', this.id);
      
    },
    updateMouseCoordinates(e) {
      // coordonnées de la souris
      this.mx = e.clientX - this.vbWidth / 2;
      this.my = e.clientY - this.vbHeight / 2;
    }
  }
};
</script>


<style>
svg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
}

</style>
