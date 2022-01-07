import {
  require_main2 as require_main
} from "/build/_shared/chunk-6QH5KI2V.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// app/components/Header.tsx
init_react();
var import_react_router_dom = __toModule(require_main());
function Header() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-6"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-[url('/logo-sm.png')] h-headerLogoHeight bg-no-repeat bg-contain bg-left"
  })));
}

export {
  Header
};
//# sourceMappingURL=/build/_shared/chunk-BYHBSQON.js.map
