<script setup></script>

<script>
import { Wall } from '@/services/Wall'

export default {
  name: 'lego-wall',
  data() {
    return {
      wall: null
    }
  },
  mounted() {
    this.wall = this.$refs.container ? new Wall(this.$refs.container) : null
    window.addEventListener('resize', this.resize)
  },
  unmounted() {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize() {
      this.wall?.resize()
    }
  }
}
</script>

<template>
  <div id="blocks" ref="container">
    <template v-for="row in this.wall?.rows" :key="row.y">
      <div
        v-for="block in row.blocks()"
        :key="block.key()"
        :class="{
          block: true,
          [block.color + block.size]: true
        }"
        :style="{
          left: `${wall.startx + block.x * 37}px`,
          bottom: `${wall.starty + block.y * 44}px`,
          'z-index': 2 * block.y
        }"
      ></div>
    </template>

    <slot></slot>
  </div>
</template>

<style scoped>
#blocks {
  left: 0;
}
</style>
