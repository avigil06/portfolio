<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Component Groups</h1>
    <ul>
      <li><router-link :to="{ name: 'forms' }">Forms</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
  HelloWorld,
  },
  })
export default class Home extends Vue {}
</script>
