import VIEW from "./layout.view";
import("./layout.css");
export default class LayoutController {
  constructor($el) {
    this.$container = $el;
    this.view = new VIEW();
  }

  init() {
    this.view.renderLayout(this.$container);
  }
}
