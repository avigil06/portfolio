<template>
  <div class="forms">
    <h1>Forms</h1>
    <p>This page is dedicated to different form type components</p>
    <hr>
    <h2>Modal Sign In</h2>
    <a target="_blank" href="https://dribbble.com/shots/3768074-Modal-windows?utm_source=Clipboard_Shot&utm_campaign=antalik&utm_content=Modal%20windows&utm_medium=Social_Share" alt="Modal Sign In Insipiration">Inspiration</a>
    <ModalSignIn />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModalSignIn from '../components/ModalSignIn/index.vue';

@Component({
  components: {
    ModalSignIn,
  }
})
export default class Forms extends Vue {

}
</script>