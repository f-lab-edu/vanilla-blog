import Component from "../core/Component.js";

export default class Articles extends Component {
  template() {
    const { articles } = this.$props;
    return `
      <ul>
        ${articles
          .map(
            ({ contents, title, id }) => `
          <li id="${id}">
          <h3>${title}</h3>
            ${contents}
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }
}
