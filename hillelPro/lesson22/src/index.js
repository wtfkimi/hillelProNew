import $ from "jquery";
import MainController from "./main.controller";
import("./some.css");

const $container = $("#root");
new MainController($container);
