import $ from "jquery";
export default class LayoutView {
  constructor() {
  }
  renderLayout($contrainer) {
    const $layout = this.createLayout();
    $contrainer.append($layout);
  }
  createLayout() {
    return $(`
    <div class="layout-container">
    <div class="header">Header</div>
    <div id="main-container">Body</div>
    <div class="footer">Footer</div>
    </div>
    `);
  }
}
