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
function PageLink({ children, ...props }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "uppercase mx-2 text-2xl border-2 border-solid p-1 flex-1"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    ...props
  }, children));
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-screen items-center flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-[url('/logo-med.png')] h-logoHeight bg-no-repeat bg-contain bg-center"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "font-serif flex-1 flex"
  }, /* @__PURE__ */ React.createElement(PageLink, {
    to: "/bakes"
  }, "About"), /* @__PURE__ */ React.createElement(PageLink, {
    to: "/bakes"
  }, "Bakes"), /* @__PURE__ */ React.createElement(PageLink, {
    to: "/bakes"
  }, "Events")));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-HQLBASHH.js.map
