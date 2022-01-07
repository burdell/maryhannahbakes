import {
  React,
  __toModule,
  init_react,
  require_main2 as require_main
} from "/build/_shared/chunk-GHK3HHDO.js";

// app/components/Header.tsx
init_react();
var import_react_router_dom = __toModule(require_main());
function PageLink({ children, ...props }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    ...props
  }, /* @__PURE__ */ React.createElement("div", {
    className: "uppercase mx-2 text-lg px-10 py-2 mb-6 text-left text-slate-00 font-light hover:text-yellow-600 hover:border-yellow-600 transition-colors"
  }, children)));
}
function Header() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-6 flex"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    className: "flex-1",
    to: "/"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-[url('/logo-sm.png')] h-headerLogoHeight bg-no-repeat bg-contain bg-left"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(PageLink, {
    to: "/about"
  }, /* @__PURE__ */ React.createElement("div", null, "About")), /* @__PURE__ */ React.createElement(PageLink, {
    to: "/bakes"
  }, /* @__PURE__ */ React.createElement("div", null, "Bakes")), /* @__PURE__ */ React.createElement(PageLink, {
    to: "/events"
  }, /* @__PURE__ */ React.createElement("div", null, "Events"))));
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
//# sourceMappingURL=/build/_shared/chunk-PLMOEZYL.js.map
