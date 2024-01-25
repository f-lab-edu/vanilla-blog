export default class Component {
  $target;
  $props;
  $state;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();

    this.render();
  }
  setup() {}
  mounted() {}
  template() {
    return "";
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
}
