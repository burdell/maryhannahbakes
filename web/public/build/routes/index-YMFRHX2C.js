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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "uppercase mx-2 text-2xl border-2 border-solid border-slate-700 px-5 py-2 mb-6 text-center font-semibold text-slate-00"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    ...props
  }, children)));
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-screen items-center flex-col sm:justify-center md:-mt-8 mt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-[url('/logo-med.png')] h-logoHeight bg-no-repeat bg-contain bg-center"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "font-serif flex-1 flex justify-center mt-14 flex-col sm:flex-row"
  }, /* @__PURE__ */ React.createElement(PageLink, {
    to: "/about"
  }, "About"), /* @__PURE__ */ React.createElement(PageLink, {
    to: "/bakes"
  }, "Bakes"), /* @__PURE__ */ React.createElement(PageLink, {
    to: "/events"
  }, "Events"))));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-YMFRHX2C.js.map
