import $ from "jquery";
export default class LoginView {
  constructor(options) {
    console.log("constructor", options);
    this.options = options;
  }

  renderLoginForm($contrainer) {
    console.log("view", $contrainer);
    const $form = this.createForm();
    $contrainer.append($form);
    this.initListeners();
  }
  initListeners() {
    $("#login-btn").on("click", this.onClick);
  }

  onClick = () => {
    this.options.login();
  };
  createForm() {
    return $(
      `<div>
        <h1>Loging</h1>
        <input type="text" placeholder="enter login"/>
        <input type="password" placeholder="enter password"/>
        <button id="login-btn"> login </button>
        </div>`
    );
  }
}
