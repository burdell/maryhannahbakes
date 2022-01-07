import {
  React,
  __toModule,
  init_react,
  require_main2 as require_main
} from "/build/_shared/chunk-GHK3HHDO.js";

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
  })), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "/about"
  }, /* @__PURE__ */ React.createElement("div", null, "About")));
}

// app/components/PageContent.tsx
init_react();
function PageContent({
  heading,
  children
}) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 m-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl mb-2"
  }, heading), /* @__PURE__ */ React.createElement("div", {
    className: " font-serif"
  }, children)));
}

export {
  Header,
  PageContent
};
//# sourceMappingURL=/build/_shared/chunk-O52SWQ2N.js.map
