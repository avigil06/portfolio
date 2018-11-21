declare namespace Prismic {
  export interface Api {
    query: Function;
  }

  export interface Article {
    title: DataContainer[];
    slug: string;
    body: DataContainer[];
    publishDate: Date;
  }

  export interface HyperLink {
    target: string;
    url: string;
    link_type: string;
  }

  export interface SpanContainer {
    type: string;
    end: number;
    start: number;
    data: HyperLink;
  }

  export interface DataContainer {
    type: string;
    text: string;
    spans: SpanContainer[];
  }

  export interface ArticleContainer {
    data: Article;
    last_publication_date: string;
  }

  export interface prismic_vue {
    client: client;
  }

  interface client {
    query: Function;
  }
}
