import login from "./features/login/login.controller";
import layout from "./core/layout/layout.controller";
export default class MainController {
  constructor($el) {
    this.$root = $el;
    this.loginController = new login(this.$root, {
      onLogin: () => this.userLogon(),
    });
    this.layoutController = new layout(this.$root);
    this.useLogin();
  }

  useLogin() {
    this.loginController.init();
  }
  userLogon() {
    this.clearRoot();
    this.layoutController.init();
  }

  clearRoot() {
    this.$root.empty();
  }
  useLayout() {}
}
