import {
  React,
  __toModule,
  init_react,
  require_main2 as require_main
} from "/build/_shared/chunk-GHK3HHDO.js";

// browser-route-module:/Users/nathangriffin/Desktop/maryhannahbakes/app/routes/about.tsx?browser
init_react();

// app/routes/about.tsx
init_react();

// app/components/Header.tsx
init_react();
var import_react_router_dom = __toModule(require_main());
function Header() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-9"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-[url('/logo-sm.png')] h-headerLogoHeight bg-no-repeat bg-contain bg-left"
  })));
}

// app/routes/about.tsx
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/about-AETF27AL.js.map
