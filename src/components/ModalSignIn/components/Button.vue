<template>
  <button class="button" @mousedown="onClick" @mouseup="debounce(cleanUp, 2000)">
    <slot />
    <div class="ripple-container" ref="container" />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'Button',
})
export default class Button extends Vue {
  timer: any = null;

  onClick (event: MouseEvent): void {
    const { pageX, pageY } = event;
    const el = <HTMLElement>this.$refs.container;
    const { offsetWidth } = el;
    const { top, left } = el.getBoundingClientRect(); 
    this.addRipple(pageX - left, pageY - top, offsetWidth);
    this.$emit('click', event);
  }

  addRipple (x: number, y: number, width: number): void {
    const container = <HTMLElement>this.$refs.container;
    const ripple = document.createElement('span');
    ripple.setAttribute('style', [
      `top: ${y - (width / 2)}px; left: ${x - (width / 2)}px; `,
      `width: ${width}px; height: ${width}px`,
    ].join(' '));
    container.appendChild(ripple);
  }

  cleanUp (): void {
    const container = <HTMLElement>this.$refs.container;
    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  debounce (func: Function, delay: number): void {
    if (this.timer) {
      this.clearTimer();
    }
    this.timer = setTimeout(() => func(), delay);
  }

  clearTimer (): void {
    clearTimeout(this.timer);
    this.timer = null;
  }
}
</script>

<style lang="scss">
@keyframes ripple {
  to {
    opacity: 0;
    transform: scale(2);
  }
}

.button {
  position: relative;
  overflow: hidden;
  padding: 0.75rem 1.75rem;
  background-color: #6200ee;
  color: #fff;
  border-color: transparent;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 200ms ease-in-out;
  outline: none;

  &:hover {
    background-color: rgba(#6200ee, 0.85);
  }

  .ripple-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    span {
      display: inline-block;
      transform: scale(0);
      border-radius: 100%;
      position: absolute;
      opacity: 0.75;
      background-color: #fff;
      animation: ripple 1000ms;
    }
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
