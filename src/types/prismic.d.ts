interface PrismicAPI {
  query: Function;
}

interface HyperLink {
  target: string;
  url: string;
  link_type: string;
}

declare enum SpanData {
  HyperLink,
}

interface SpanContainer {
  type: string;
  end: number;
  start: number;
  data: HyperLink;
}

interface DataContainer {
  type: string;
  text: string;
  spans: SpanContainer[];
}

interface ArticleContainer {
  data: BlogArticle;
  last_publication_date: string;
}

interface BlogArticle {
  title: DataContainer[];
  slug: string;
  body: DataContainer[];
  publishDate: Date;
}
