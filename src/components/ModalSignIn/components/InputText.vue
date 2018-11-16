<template>
  <div class="field">
    <input type="password" :class="{
      'field__input': true,
      'field__input_error': error,
      'field__input_loading': loading}"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)" />
    <div class="field__status-bar" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'InputText',
})
export default class InputText extends Vue {
  @Prop() private error!: boolean;
  @Prop() private loading!: boolean;
  @Prop() private value!: string;
  @Prop() private placeholder!: string;
}
</script>

<style lang="scss">
@keyframes loading {
  0% {
    left: 0;
    width: 0;
  }
  15% {
    width: 4rem;
    transform: translateX(0);
  }
  100% {
    transform: translateX(380px);
  }
}

.field {
  .field__status-bar {
    height: 2px;
    position: relative;
    overflow: hidden;

    &:after {
      content: "";
      background-color: #6200ee;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 0;
      transition: width 200ms ease-in-out;
    }

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #f0f0f0;
    }
  }

  .field__input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    letter-spacing: 5px;

    &:focus + .field__status-bar:after {
      width: 100%;
    }

    &.field__input_error + .field__status-bar:after {
      width: 100%;
      background-color: #b00020;
    }

    &.field__input_loading + .field__status-bar:after {
      animation-name: loading;
      animation-duration: 800ms;
      animation-iteration-count: infinite;
    }
  }
}
</style>