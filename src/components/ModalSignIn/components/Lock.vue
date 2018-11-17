<template>
  <div
    class="lock"
    :class="{ 'lock_error': !!error,
              'lock_success': !!success }">
    <img src="@/assets/icons/lock.svg" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Lock extends Vue {
  @Prop() private error: boolean = false;

  @Prop() private success: boolean = false;
}
</script>

<style lang="scss" scoped>
@keyframes shake {
  25% {
    transform: translateX(-1rem);
  }
  50% {
    transform: translateX(1rem);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes jumpRock {
  33% {
    transform: rotate(-25deg);
  }
  66% {
    transform: rotate(25deg);
  }
  100% {
    transform: translateY(0);
  }
}
.lock {
  height: 3rem;
  width: 3rem;
  margin: auto;
  border-radius: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &.lock_error {
    animation: shake 750ms;
  }

  &.lock_success {
    animation-name: jumpRock;
    animation-duration: 500ms;
    animation-iteration-count: 3;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(#03dac5, 0.75);
    transition: background-color 200ms ease-in-out;
  }

  &.lock_error:before {
    background-color: rgba(#b00020, 0.75);
  }
  &.lock_success:before {
    background-color: rgba(#90ee02, 0.75);
  }
}
</style>
