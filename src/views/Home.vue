<template>
  <main class="home">
    <Article
      v-for="article in articles"
      :key="article.slug"
      :title="article.title[0].text"
      :body="article.body"
      :publish-date="article.publishDate" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import prismic from 'prismic-javascript';
import Article from '@/components/Article.vue';
// import Prismic from '@/types/prismic.d.ts';

@Component({
  components: {
  Article,
  },
  })
export default class Home extends Vue {
  articles: Article[] = [];

  created() {
    this.getArticles();
  }

  async getArticles() {
    const endpoint: string = 'https://avigil-portfolio-blog.prismic.io/api/v2';
    const api: Prismic.Api = await prismic.getApi(endpoint);
    const { results } = await api.query('');
    this.articles = results.map((document: Prismic.ArticleContainer): Prismic.Article => ({
      ...document.data,
      publishDate: new Date(document.last_publication_date),
    }));
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 1rem 2.5rem;

  .article:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #433f4e;
  }
}
</style>
