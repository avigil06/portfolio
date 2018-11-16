<template>
  <div>
    <form @submit.prevent="submit">
      <section class="modal">
        <Lock :error="mode === 'failed'" :success="mode === 'success'"/>
        <h1 class="modal__title">This link is password Protected</h1>
        <p class="modal__subtitle">Please enter the password to view this link.</p>
        <InputText
          v-model="password"
          class="modal__input"
          :error="mode === 'error'"
          :loading="mode === 'loading'"/>
        <Button class="modal__button" :disabled="mode === 'loading'">Submit</Button>
      </section>
    </form>
    <button @click="reset">Reset</button>
    <button @click="setMode('error')">Error</button>
    <button @click="setMode('loading')">Loading</button>
    <button @click="setMode('failed')">Bad Request</button>
    <button @click="setMode('success')">Good Request</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Button from './components/Button.vue';
import Lock from './components/Lock.vue';
import InputText from './components/InputText.vue';

@Component({
  name: 'ModalSignIn',
  components: {
    Button,
    Lock,
    InputText,
  },
})
export default class ModalSignIn extends Vue {
  mode: string = ''
  password: string = ''

  setMode (mode: string): void {
    this.mode = mode;
  }

  reset (): void {
    this.mode = '';
    this.password = '';
  }

  submit (): void {
    this.mode = this.password.length > 0 ? 'loading' : 'error';
    if (this.mode !== 'loading') return;
    setTimeout(() => this.mode = this.simulateRequest(), 5000);
  }

  simulateRequest (): string {
    const rng = Math.floor(Math.random() * Math.floor(10));
    return rng >= 5 ? 'success' : 'failed';
  }
}
</script>

<style lang="scss" scoped>
.modal {
  margin: 2rem auto;
  width: 21rem;
  padding: 1.5rem;
  box-shadow: -1px 1px 12px 1px #000;
  border-radius: 6px;
  position: relative;

  .modal__title {
    font-size: 1.125rem;
  }

  .modal__subtitle {
    font-size: 0.875rem;
    font-weight: 600;
    opacity: 0.75;
  }

  .modal__input {
    width: 16rem;
    margin: 1rem auto;
  }

  .modal__button {
    margin: 1rem auto;
  }
}
</style>
