import {
  React,
  __toModule,
  init_react,
  require_main2 as require_main
} from "/build/_shared/chunk-GHK3HHDO.js";

// browser-route-module:/Users/nathangriffin/Desktop/maryhannahbakes/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react_router_dom = __toModule(require_main());
function PageLink(props) {
  return /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    ...props
  }, "Bakes");
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-screen items-center flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-[url('/logo-med.png')] h-logoHeight bg-no-repeat bg-contain bg-center"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "font-sans flex-1"
  }, /* @__PURE__ */ React.createElement(PageLink, {
    href: "/bakes"
  }, "Bakes")));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-YVV5JYRV.js.map
