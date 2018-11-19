<template>
  <header class="header">
    <div class="header__title-container bubble" ref="bubble">
      <h1 class="header__title">{{ title }}</h1>
      <div class="bubble-pulse" ref="bubblePulse" />
    </div>
    <nav class="header__nav">
      <MenuItem :to="{ name: 'home' }">Home</MenuItem>
      <MenuItem :to="{ name: 'forms' }">Forms</MenuItem>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import {
  TimelineLite, Back, Elastic, Expo,
} from 'gsap';
import MenuItem from '@/components/MenuItem.vue';

@Component({
  name: 'Header',
  components: {
  MenuItem,
  }
  })
export default class App extends Vue {
  @Watch('title')
  onPropertyChange() {
    this.animate();
  }

  get title(): string {
    if (!this.$route.name) return '';
    const [first, ...letters] = this.$route.name.split('');
    return [first.toUpperCase(), ...letters].join('');
  }

  animate(): void {
    const { bubble, bubblePulse } = this.$refs;
    new TimelineLite()
      .to(bubble, 0.4, {
        scale: 0.8,
        ease: Back.easeOut.config(1.7),
      })
      .to(
        bubblePulse,
        0.5,
        {
          scale: 0.9,
          opacity: 0.95,
        },
        '-=0.6',
      )
      .to(bubble, 1.2, {
        scale: 1,
        ease: Elastic.easeOut.config(2.5, 0.5),
      })
      .to(
        bubblePulse,
        1.1,
        {
          scale: 7,
          opacity: 0,
          ease: Expo.easeOut,
        },
        '-=1.2',
      );
  }
}
</script>

<style lang="scss">
@keyframes ripple {
  to {
    opacity: 0;
    transform: scale(100);
  }
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #433f4e;
  padding: 1rem 1.25rem;
  position: relative;
  overflow: hidden;

  .header__title {
    &-container {
      position: relative;
      padding: 0.25rem 1rem;
      border-radius: 100%;
    }
    margin: 0;
    font-size: 1.25rem;
    color: white;
    z-index: 1;
  }

  .header__nav {
    display: flex;
    flex-direction: row;
    z-index: 1;
  }
}

.bubble-pulse {
  position: absolute;
  z-index: 1;
  height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}
</style>
