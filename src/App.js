import Component from "./core/Component.js";
import Articles from "./components/Articles.js";

export default class App extends Component {
  setup() {
    this.$state = {
      data: [
        {
          id: 1,
          title: "Title1",
          contents: "article1",
        },
        {
          id: 2,
          title: "Title2",
          contents: "article2",
        },
        {
          id: 3,
          title: "Title3",
          contents: "article3",
        },
      ],
    };
  }

  template() {
    return `
      <header></header>
      <main data-component="items"></main>
      <footer></footer>
    `;
  }

  mounted() {
    const { articles } = this;
    console.log(this.$state);
    const $items = this.$target.querySelector('[data-component="items"]');

    new Articles($items, {
      articles,
    });
  }

  get articles() {
    const { data } = this.$state;
    return data;
  }
}
