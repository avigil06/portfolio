<template>
  <router-link :to="to" class="menu-item">
    <slot />
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface Route {
  name: string;
}

@Component
export default class MenuItem extends Vue {
  @Prop() private to!: Route;
}
</script>

<style lang="scss" scoped>
.menu-item {
  color: white;
  padding: 0 0.75rem;
}
</style>
