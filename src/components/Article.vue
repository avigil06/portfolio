<template>
  <section class="article">
    <header class="article__header-container">
      <h1 class="article__header">{{ title }}</h1>
      <pre class="article__publish-date">Published on {{ formattedDate }}</pre>
    </header>
    <div class="article__body">
      <template v-for="(line, key) in body">
        <h2 :key="key" v-if="line.type === 'heading2'">{{ line.text }}</h2>
        <h3 :key="key" v-else-if="line.type === 'heading3'">{{ line.text }}</h3>
        <p :key="key" v-else-if="line.type === 'paragraph'" v-html="getHtml(line)" />
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import { format } from 'date-fns';
import { getHtml } from '@/utils/prismic';

@Component
export default class Article extends Vue {
  @Prop() private title!: string;

  @Prop() private body!: DataContainer[];

  @Prop() private publishDate!: Date;

  get formattedDate() {
    return format(this.publishDate, 'MM/DD/YYYY');
  }

  getHtml: Function = getHtml;
}
</script>

<style lang="scss" scoped>
.article {
  position: relative;
  text-align: left;
  padding-bottom: 1rem;

  .article__header-container {
    margin-bottom: 1rem;
  }

  .article__header {
    margin: 0;
  }

  .article__publish-date {
    margin: 0;
  }

  .article__body {
    h2,
    h3 {
      margin: 0.75rem 0 0.25rem 0;
    }

    p {
      margin: 0;
    }
  }
}
</style>
