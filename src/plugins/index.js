import * as Prismic from './PrismicVue';

function registerPlugins(Vue) {
  Vue.use(Prismic.default, Prismic.options);
}

export default registerPlugins;
