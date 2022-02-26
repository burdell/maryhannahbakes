var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/nathangriffin/Desktop/maryhannahbakes/web/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HWBTUJZV.css";

// app/data/index.ts
init_react();
var import_react = __toModule(require("react"));

// app/lib/sanity/getClient.ts
init_react();
var import_picosanity = __toModule(require("picosanity"));

// app/lib/sanity/config.ts
init_react();
var config = {
  apiVersion: "2021-03-25",
  dataset: "production",
  projectId: "c8wr2tzm",
  useCdn: false
};

// app/lib/sanity/getClient.ts
var sanityClient = new import_picosanity.default(config);
var previewClient = new import_picosanity.default(__spreadProps(__spreadValues({}, config), {
  useCdn: true,
  token: process.env.SANITY_API_TOKEN ?? ``
}));
var getClient = (usePreview = false) => usePreview ? previewClient : sanityClient;

// app/data/index.ts
async function getPages() {
  const pages = await getClient().fetch(`*[_type == "page"]{ _id, title, "slug": slug.current }`);
  return pages;
}
async function getPage(pageId) {
  const query = `*[_type == "page" && slug.current == $pageId] { 
      title,
      "slug": slug.current,
      text,
      bakes[]->{
        _id,
        name,
        body,
        pictures[]{
          asset->{url, assetId},
          blurb
        }
      }
    } | order(_updatedAt desc) [0]`;
  const pageData = await getClient().fetch(query, { pageId });
  return pageData;
}
var PageContext = (0, import_react.createContext)(void 0);
var { Provider } = PageContext;
function usePageData() {
  const data = (0, import_react.useContext)(PageContext);
  if (!data) {
    throw new Error("Used PageContext without a corresponding Provider");
  }
  return data;
}

// route-module:/Users/nathangriffin/Desktop/maryhannahbakes/web/app/root.tsx
var links = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png"
    },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Spectral:wght@300;400&display=swap"
    },
    { rel: "stylesheet", href: tailwind_default }
  ];
};
var meta = () => {
  return { title: "Mary Hannah Bakes" };
};
async function loader() {
  const pages = await getPages();
  return { pages };
}
function App() {
  let { pages } = (0, import_remix2.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Provider, {
    value: { pages }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-screen-xl my-0 mx-auto"
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null))));
}

// route-module:/Users/nathangriffin/Desktop/maryhannahbakes/web/app/routes/$pageId.tsx
var pageId_exports = {};
__export(pageId_exports, {
  default: () => Index,
  links: () => links2,
  loader: () => loader2
});
init_react();
var import_remix3 = __toModule(require_remix());

// node_modules/@reach/dialog/styles.css
var styles_default = "/build/_assets/styles-2JGN57QB.css";

// node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min_default = "/build/_assets/carousel.min-PQ3VLNRO.css";

// app/components/Header.tsx
init_react();
var import_react_router_dom2 = __toModule(require("react-router-dom"));

// app/components/PageLink.tsx
init_react();
var import_react_router_dom = __toModule(require("react-router-dom"));
function PageLink(_a) {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const match = (0, import_react_router_dom.useMatch)(props.to);
  return /* @__PURE__ */ React.createElement(import_react_router_dom.NavLink, __spreadValues({}, props), /* @__PURE__ */ React.createElement("div", {
    className: `uppercase mx-6 text-lg text-left text-slate-00 font-light hover:text-yellow-600 transition-colors ${match ? "border-b-2 border-yellow-600" : "border-b-2 border-transparent"}`
  }, children));
}

// app/components/Header.tsx
function Header() {
  const { pages } = usePageData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-6 flex lg:flex-row flex-col items-center"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom2.NavLink, {
    className: "w-64 flex-initial mb-4 lg:mb-0",
    to: "/"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-[url('/logo-sm.png')] h-headerLogoHeight bg-no-repeat bg-contain bg-left"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, pages.map((page) => /* @__PURE__ */ React.createElement(PageLink, {
    key: page.slug,
    to: `/${page.slug}`,
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement("div", null, page.title)))));
}

// app/components/PageContent.tsx
init_react();
function PageContent({
  heading,
  children
}) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "w-9/12 lg:w-1/2 m-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl mb-2"
  }, heading), /* @__PURE__ */ React.createElement("div", {
    className: "font-serif"
  }, children)));
}

// app/components/BlockContent/index.tsx
init_react();
var import_block_content_to_react = __toModule(require("@sanity/block-content-to-react"));
function BlockContent({ blocks }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "block-content"
  }, /* @__PURE__ */ React.createElement(import_block_content_to_react.default, {
    blocks,
    imageOptions: { w: 320, h: 240, fit: "max" },
    projectId: config.projectId,
    dataset: config.dataset
  }));
}

// app/components/BlockContent/styles.css
var styles_default2 = "/build/_assets/styles-BKZJHG76.css";

// app/components/BakeList/index.tsx
init_react();
var import_dialog = __toModule(require("@reach/dialog"));
var import_react2 = __toModule(require("react"));
var import_react_responsive_carousel = __toModule(require("react-responsive-carousel"));

// app/lib/sanity/images.ts
init_react();
function urlFor({
  originalUrl,
  width,
  height
}) {
  return `${originalUrl}?w=${width}&${height ? `h=${height}` : ""}&fit=crop`;
}

// app/components/BakeList/index.tsx
function Bake({
  bake,
  showBake
}) {
  const picture = (bake.pictures || [])[0];
  const imageUrl = picture ? urlFor({ originalUrl: picture.asset.url, width: 400, height: 200 }) : void 0;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("button", {
    className: "hover:text-yellow-600 transition-colors mb-6",
    onClick: () => showBake(bake)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-left"
  }, imageUrl && /* @__PURE__ */ React.createElement("img", {
    className: "rounded mb-1",
    src: imageUrl
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-lg text-slate-00 font-sans mb-2 "
  }, bake.name), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-600"
  }, bake.blurb))));
}
function BakePictures({ bake }) {
  var _a;
  const pictures = bake.pictures;
  if (!pictures || pictures.length === 0)
    return null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, ((_a = bake.pictures) == null ? void 0 : _a.length) === 1 ? /* @__PURE__ */ React.createElement("img", {
    className: "rounded",
    src: urlFor({
      originalUrl: pictures[0].asset.url,
      width: 900
    })
  }) : /* @__PURE__ */ React.createElement(import_react_responsive_carousel.Carousel, null, bake.pictures.map((picture) => /* @__PURE__ */ React.createElement("img", {
    key: picture.asset.assetId,
    className: "rounded",
    src: urlFor({
      originalUrl: picture.asset.url,
      width: 900
    })
  }))));
}
function BakeList({ bakes }) {
  const [shownBake, setShownBake] = (0, import_react2.useState)(void 0);
  function show(bake) {
    setShownBake(bake);
  }
  function close() {
    setShownBake(void 0);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "grid gap-2 sm:grid-cols-2 grid-cols-1 items-baseline"
  }, bakes.map((bake) => /* @__PURE__ */ React.createElement(Bake, {
    key: bake._id,
    bake,
    showBake: show
  }))), shownBake && /* @__PURE__ */ React.createElement(import_dialog.DialogOverlay, {
    onDismiss: close,
    style: { padding: 0 }
  }, /* @__PURE__ */ React.createElement(import_dialog.DialogContent, {
    style: {
      padding: "1rem",
      maxWidth: "820px",
      width: "90vw",
      borderRadius: "0.25rem"
    },
    "aria-label": "shown-bake"
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end mb-2"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "uppercase hover:text-yellow-600 transition-colors",
    onClick: close
  }, "close")), /* @__PURE__ */ React.createElement(BakePictures, {
    bake: shownBake
  }), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "text-lg text-slate-00 font-sans"
  }, shownBake.name), /* @__PURE__ */ React.createElement("div", {
    className: "text-slate-600 mb-2"
  }, shownBake.blurb), shownBake.body && /* @__PURE__ */ React.createElement("div", {
    className: "font-serif"
  }, /* @__PURE__ */ React.createElement(BlockContent, {
    blocks: shownBake.body
  })))))));
}

// route-module:/Users/nathangriffin/Desktop/maryhannahbakes/web/app/routes/$pageId.tsx
var links2 = () => {
  return [
    { rel: "stylesheet", href: styles_default2 },
    { rel: "stylesheet", href: styles_default },
    { rel: "stylesheet", href: carousel_min_default }
  ];
};
var loader2 = async ({ params }) => {
  const pageId = params.pageId;
  if (!pageId) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  const page = await getPage(pageId);
  if (!page) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  const response = {
    page
  };
  return response;
};
function Index() {
  const { page } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(PageContent, {
    heading: page.title
  }, page.text && /* @__PURE__ */ React.createElement(BlockContent, {
    blocks: page.text
  }), page.bakes && page.bakes.length > 0 ? /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement(BakeList, {
    bakes: page.bakes
  })) : null));
}

// route-module:/Users/nathangriffin/Desktop/maryhannahbakes/web/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();
var import_react_router_dom3 = __toModule(require("react-router-dom"));
function PageLink2(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, __spreadValues({}, props), /* @__PURE__ */ React.createElement("div", {
    className: "border-b-2 border-solid border-transparent mx-2 text-2xl px-8 py-2 mb-6 text-center text-slate-00 font-light hover:text-yellow-600 hover:border-yellow-600 transition-colors"
  }, children)));
}
function Index2() {
  let { pages } = usePageData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-screen items-center flex-col sm:justify-center md:-mt-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-[url('/logo-med.png')] h-logoHeight bg-no-repeat bg-contain bg-center"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex justify-center mt-14 flex-col sm:flex-row"
  }, pages.map((page) => /* @__PURE__ */ React.createElement(PageLink2, {
    key: page.slug,
    to: page.slug
  }, page.title)))));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$pageId": {
    id: "routes/$pageId",
    parentId: "root",
    path: ":pageId",
    index: void 0,
    caseSensitive: void 0,
    module: pageId_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9uYXRoYW5ncmlmZmluL0Rlc2t0b3AvbWFyeWhhbm5haGJha2VzL3dlYi9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2RhdGEvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2xpYi9zYW5pdHkvZ2V0Q2xpZW50LnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9saWIvc2FuaXR5L2NvbmZpZy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL25hdGhhbmdyaWZmaW4vRGVza3RvcC9tYXJ5aGFubmFoYmFrZXMvd2ViL2FwcC9yb3V0ZXMvJHBhZ2VJZC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9QYWdlTGluay50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUGFnZUNvbnRlbnQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jsb2NrQ29udGVudC9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQmFrZUxpc3QvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9saWIvc2FuaXR5L2ltYWdlcy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL25hdGhhbmdyaWZmaW4vRGVza3RvcC9tYXJ5aGFubmFoYmFrZXMvd2ViL2FwcC9yb3V0ZXMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbmF0aGFuZ3JpZmZpbi9EZXNrdG9wL21hcnloYW5uYWhiYWtlcy93ZWIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL25hdGhhbmdyaWZmaW4vRGVza3RvcC9tYXJ5aGFubmFoYmFrZXMvd2ViL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbmF0aGFuZ3JpZmZpbi9EZXNrdG9wL21hcnloYW5uYWhiYWtlcy93ZWIvYXBwL3JvdXRlcy8kcGFnZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvbmF0aGFuZ3JpZmZpbi9EZXNrdG9wL21hcnloYW5uYWhiYWtlcy93ZWIvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzLyRwYWdlSWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kcGFnZUlkXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiOnBhZ2VJZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB0YWlsd2luZCBmcm9tICcuL3RhaWx3aW5kLmNzcydcbmltcG9ydCB7IGdldFBhZ2VzLCBQYWdlRGF0YVByb3ZpZGVyIH0gZnJvbSAnfi9kYXRhJ1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICBocmVmOiAnL2Zhdmljb24ucG5nJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly91bnBrZy5jb20vbW9kZXJuLWNzcy1yZXNldEAxLjQuMC9kaXN0L3Jlc2V0Lm1pbi5jc3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOlxuICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMCZmYW1pbHk9U3BlY3RyYWw6d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCcsXG4gICAgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiB0YWlsd2luZCB9LFxuICBdXG59XG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ01hcnkgSGFubmFoIEJha2VzJyB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgZ2V0UGFnZXMoKVxuICByZXR1cm4geyBwYWdlcyB9XG59XG50eXBlIExvYWRlckRhdGEgPSBBc3luY1JldHVyblR5cGU8dHlwZW9mIGxvYWRlcj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBsZXQgeyBwYWdlcyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8UGFnZURhdGFQcm92aWRlciB2YWx1ZT17eyBwYWdlcyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi14bCBteS0wIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgICAgPC9QYWdlRGF0YVByb3ZpZGVyPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSAnfi9saWIvc2FuaXR5L2dldENsaWVudCdcbmltcG9ydCB0eXBlIHsgUGFnZSwgQmFrZSB9IGZyb20gJ34vbGliL3Nhbml0eS90eXBlcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VzKCkge1xuICBjb25zdCBwYWdlcyA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoPFBhZ2VbXT4oXG4gICAgYCpbX3R5cGUgPT0gXCJwYWdlXCJdeyBfaWQsIHRpdGxlLCBcInNsdWdcIjogc2x1Zy5jdXJyZW50IH1gLFxuICApXG5cbiAgcmV0dXJuIHBhZ2VzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdlKHBhZ2VJZDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJwYWdlXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRwYWdlSWRdIHsgXG4gICAgICB0aXRsZSxcbiAgICAgIFwic2x1Z1wiOiBzbHVnLmN1cnJlbnQsXG4gICAgICB0ZXh0LFxuICAgICAgYmFrZXNbXS0+e1xuICAgICAgICBfaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGJvZHksXG4gICAgICAgIHBpY3R1cmVzW117XG4gICAgICAgICAgYXNzZXQtPnt1cmwsIGFzc2V0SWR9LFxuICAgICAgICAgIGJsdXJiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IHwgb3JkZXIoX3VwZGF0ZWRBdCBkZXNjKSBbMF1gXG5cbiAgY29uc3QgcGFnZURhdGEgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaDxQYWdlPihxdWVyeSwgeyBwYWdlSWQgfSlcbiAgcmV0dXJuIHBhZ2VEYXRhXG59XG5cbmV4cG9ydCBjb25zdCBQYWdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8eyBwYWdlczogUGFnZVtdIH0gfCB1bmRlZmluZWQ+KFxuICB1bmRlZmluZWQsXG4pXG5cbmNvbnN0IHsgUHJvdmlkZXIgfSA9IFBhZ2VDb250ZXh0XG5leHBvcnQgeyBQcm92aWRlciBhcyBQYWdlRGF0YVByb3ZpZGVyIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhZ2VEYXRhKCkge1xuICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChQYWdlQ29udGV4dClcbiAgaWYgKCFkYXRhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVc2VkIFBhZ2VDb250ZXh0IHdpdGhvdXQgYSBjb3JyZXNwb25kaW5nIFByb3ZpZGVyJylcbiAgfVxuXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCYWtlcygpIHtcbiAgY29uc3QgcXVlcnkgPVxuICAgICcqW190eXBlID09IFwiYmFrZVwiXSB7IF9pZCwgbmFtZSwgYm9keSwgcGljdHVyZXNbXXsgYXNzZXQtPnt1cmwsIGFzc2V0SWR9IH0sIGJsdXJiLCBjYXRlZ29yaWVzW10tPnt0aXRsZSwgc2x1Z30gfSB8IG9yZGVyKF91cGRhdGVkQXQgZGVzYyknXG5cbiAgY29uc3QgcGFnZURhdGEgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaDxCYWtlW10+KHF1ZXJ5LCB7fSlcbiAgcmV0dXJuIHBhZ2VEYXRhXG59XG4iLCAiaW1wb3J0IFBpY29TYW5pdHkgZnJvbSAncGljb3Nhbml0eSdcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBuZXcgUGljb1Nhbml0eShjb25maWcpXG5cbmV4cG9ydCBjb25zdCBwcmV2aWV3Q2xpZW50ID0gbmV3IFBpY29TYW5pdHkoe1xuICAuLi5jb25maWcsXG4gIHVzZUNkbjogdHJ1ZSxcbiAgdG9rZW46IHByb2Nlc3MuZW52LlNBTklUWV9BUElfVE9LRU4gPz8gYGAsXG59KVxuXG5leHBvcnQgY29uc3QgZ2V0Q2xpZW50ID0gKHVzZVByZXZpZXcgPSBmYWxzZSkgPT5cbiAgdXNlUHJldmlldyA/IHByZXZpZXdDbGllbnQgOiBzYW5pdHlDbGllbnRcbiIsICJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGlWZXJzaW9uOiAnMjAyMS0wMy0yNScsXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcbiAgcHJvamVjdElkOiAnYzh3cjJ0em0nLFxuICB1c2VDZG46IGZhbHNlLFxufVxuIiwgImltcG9ydCB7IExpbmssIExpbmtQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgcmVhY2hTdHlsZXMgZnJvbSAnQHJlYWNoL2RpYWxvZy9zdHlsZXMuY3NzJ1xuaW1wb3J0IGNhcm91c2VsU3R5bGVzIGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzJ1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICd+L2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IHsgUGFnZUNvbnRlbnQgfSBmcm9tICd+L2NvbXBvbmVudHMvUGFnZUNvbnRlbnQnXG5pbXBvcnQgeyBnZXRQYWdlLCBnZXRCYWtlcyB9IGZyb20gJ34vZGF0YSdcbmltcG9ydCB7IFBhZ2UsIEJha2UgfSBmcm9tICd+L2xpYi9zYW5pdHkvdHlwZXMnXG5pbXBvcnQgeyBCbG9ja0NvbnRlbnQgfSBmcm9tICd+L2NvbXBvbmVudHMvQmxvY2tDb250ZW50J1xuXG5pbXBvcnQgYmxvY2tDb250ZW50IGZyb20gJ34vY29tcG9uZW50cy9CbG9ja0NvbnRlbnQvc3R5bGVzLmNzcydcbmltcG9ydCB7IEJha2VMaXN0IH0gZnJvbSAnfi9jb21wb25lbnRzL0Jha2VMaXN0J1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogYmxvY2tDb250ZW50IH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogcmVhY2hTdHlsZXMgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBjYXJvdXNlbFN0eWxlcyB9LFxuICBdXG59XG5cbnR5cGUgUGFnZURhdGEgPSB7XG4gIHBhZ2U6IFBhZ2Vcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBwYWdlSWQgPSBwYXJhbXMucGFnZUlkXG4gIGlmICghcGFnZUlkKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKCdOb3QgRm91bmQnLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2UocGFnZUlkKVxuICBpZiAoIXBhZ2UpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoJ05vdCBGb3VuZCcsIHtcbiAgICAgIHN0YXR1czogNDA0LFxuICAgIH0pXG4gIH1cblxuICBjb25zdCByZXNwb25zZTogUGFnZURhdGEgPSB7XG4gICAgcGFnZSxcbiAgfVxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHsgcGFnZSB9ID0gdXNlTG9hZGVyRGF0YTxQYWdlRGF0YT4oKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxQYWdlQ29udGVudCBoZWFkaW5nPXtwYWdlLnRpdGxlfT5cbiAgICAgICAge3BhZ2UudGV4dCAmJiA8QmxvY2tDb250ZW50IGJsb2Nrcz17cGFnZS50ZXh0fSAvPn1cbiAgICAgICAge3BhZ2UuYmFrZXMgJiYgcGFnZS5iYWtlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPEJha2VMaXN0IGJha2VzPXtwYWdlLmJha2VzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvUGFnZUNvbnRlbnQ+XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBOYXZMaW5rLCBOYXZMaW5rUHJvcHMsIHVzZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgdXNlUGFnZURhdGEgfSBmcm9tICd+L2RhdGEnXG5pbXBvcnQgeyBQYWdlTGluayB9IGZyb20gJy4vUGFnZUxpbmsnXG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgcGFnZXMgfSA9IHVzZVBhZ2VEYXRhKClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGxnOmZsZXgtcm93IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwidy02NCBmbGV4LWluaXRpYWwgbWItNCBsZzptYi0wXCIgdG89XCIvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctW3VybCgnL2xvZ28tc20ucG5nJyldIGgtaGVhZGVyTG9nb0hlaWdodCBiZy1uby1yZXBlYXQgYmctY29udGFpbiBiZy1sZWZ0XCIgLz5cbiAgICAgIDwvTmF2TGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAge3BhZ2VzLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgIDxQYWdlTGluayBrZXk9e3BhZ2Uuc2x1Z30gdG89e2AvJHtwYWdlLnNsdWd9YH0gY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICA8ZGl2PntwYWdlLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDwvUGFnZUxpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBOYXZMaW5rLCBOYXZMaW5rUHJvcHMsIHVzZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VMaW5rKHtcbiAgY2hpbGRyZW4sXG4gIC4uLnByb3BzXG59OiBPbWl0PE5hdkxpbmtQcm9wcywgJ3RvJz4gJiB7IHRvOiBzdHJpbmcgfSkge1xuICBjb25zdCBtYXRjaCA9IHVzZU1hdGNoKHByb3BzLnRvKVxuICByZXR1cm4gKFxuICAgIDxOYXZMaW5rIHsuLi5wcm9wc30+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHVwcGVyY2FzZSBteC02IHRleHQtbGcgdGV4dC1sZWZ0IHRleHQtc2xhdGUtMDAgZm9udC1saWdodCBob3Zlcjp0ZXh0LXllbGxvdy02MDAgdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICBtYXRjaFxuICAgICAgICAgICAgPyAnYm9yZGVyLWItMiBib3JkZXIteWVsbG93LTYwMCdcbiAgICAgICAgICAgIDogJ2JvcmRlci1iLTIgYm9yZGVyLXRyYW5zcGFyZW50J1xuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9OYXZMaW5rPlxuICApXG59XG4iLCAiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBQYWdlQ29udGVudCh7XG4gIGhlYWRpbmcsXG4gIGNoaWxkcmVuLFxufToge1xuICBoZWFkaW5nOiBzdHJpbmdcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOS8xMiBsZzp3LTEvMiBtLWF1dG9cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTJcIj57aGVhZGluZ308L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VyaWZcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7fSBmcm9tICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgU2FuaXR5QmxvY2tDb250ZW50LCB7XG4gIEJsb2NrQ29udGVudFByb3BzLFxufSBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ34vbGliL3Nhbml0eS9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0NvbnRlbnQoeyBibG9ja3MgfTogeyBibG9ja3M6IEJsb2NrQ29udGVudFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cbiAgICAgIDxTYW5pdHlCbG9ja0NvbnRlbnRcbiAgICAgICAgYmxvY2tzPXtibG9ja3N9XG4gICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiAzMjAsIGg6IDI0MCwgZml0OiAnbWF4JyB9fVxuICAgICAgICBwcm9qZWN0SWQ9e2NvbmZpZy5wcm9qZWN0SWR9XG4gICAgICAgIGRhdGFzZXQ9e2NvbmZpZy5kYXRhc2V0fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCBEaWFsb2csIHsgRGlhbG9nT3ZlcmxheSwgRGlhbG9nQ29udGVudCB9IGZyb20gJ0ByZWFjaC9kaWFsb2cnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJ1xuXG5pbXBvcnQgdHlwZSB7IEJha2UgYXMgQmFrZVR5cGUgfSBmcm9tICd+L2xpYi9zYW5pdHkvdHlwZXMnXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICd+L2xpYi9zYW5pdHkvaW1hZ2VzJ1xuaW1wb3J0IHsgQmxvY2tDb250ZW50IH0gZnJvbSAnfi9jb21wb25lbnRzL0Jsb2NrQ29udGVudCdcblxuZnVuY3Rpb24gQmFrZSh7XG4gIGJha2UsXG4gIHNob3dCYWtlLFxufToge1xuICBiYWtlOiBCYWtlVHlwZVxuICBzaG93QmFrZShiYWtlOiBCYWtlVHlwZSk6IHZvaWRcbn0pIHtcbiAgY29uc3QgcGljdHVyZSA9IChiYWtlLnBpY3R1cmVzIHx8IFtdKVswXVxuICBjb25zdCBpbWFnZVVybCA9IHBpY3R1cmVcbiAgICA/IHVybEZvcih7IG9yaWdpbmFsVXJsOiBwaWN0dXJlLmFzc2V0LnVybCwgd2lkdGg6IDQwMCwgaGVpZ2h0OiAyMDAgfSlcbiAgICA6IHVuZGVmaW5lZFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC15ZWxsb3ctNjAwIHRyYW5zaXRpb24tY29sb3JzIG1iLTZcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93QmFrZShiYWtlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICB7aW1hZ2VVcmwgJiYgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkIG1iLTFcIiBzcmM9e2ltYWdlVXJsfSAvPn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1zbGF0ZS0wMCBmb250LXNhbnMgbWItMiBcIj5cbiAgICAgICAgICAgIHtiYWtlLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMFwiPntiYWtlLmJsdXJifTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIEJha2VQaWN0dXJlcyh7IGJha2UgfTogeyBiYWtlOiBCYWtlVHlwZSB9KSB7XG4gIGNvbnN0IHBpY3R1cmVzID0gYmFrZS5waWN0dXJlc1xuXG4gIGlmICghcGljdHVyZXMgfHwgcGljdHVyZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtiYWtlLnBpY3R1cmVzPy5sZW5ndGggPT09IDEgPyAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkXCJcbiAgICAgICAgICBzcmM9e3VybEZvcih7XG4gICAgICAgICAgICBvcmlnaW5hbFVybDogcGljdHVyZXNbMF0uYXNzZXQudXJsLFxuICAgICAgICAgICAgd2lkdGg6IDkwMCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDYXJvdXNlbD5cbiAgICAgICAgICB7YmFrZS5waWN0dXJlcy5tYXAoKHBpY3R1cmUpID0+IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAga2V5PXtwaWN0dXJlLmFzc2V0LmFzc2V0SWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgICBzcmM9e3VybEZvcih7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxVcmw6IHBpY3R1cmUuYXNzZXQudXJsLFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MDAsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJha2VMaXN0KHsgYmFrZXMgfTogeyBiYWtlczogQmFrZVR5cGVbXSB9KSB7XG4gIGNvbnN0IFtzaG93bkJha2UsIHNldFNob3duQmFrZV0gPSB1c2VTdGF0ZTxCYWtlVHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKVxuICBmdW5jdGlvbiBzaG93KGJha2U6IEJha2VUeXBlKSB7XG4gICAgc2V0U2hvd25CYWtlKGJha2UpXG4gIH1cbiAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgc2V0U2hvd25CYWtlKHVuZGVmaW5lZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiBzbTpncmlkLWNvbHMtMiBncmlkLWNvbHMtMSBpdGVtcy1iYXNlbGluZVwiPlxuICAgICAgICB7YmFrZXMubWFwKChiYWtlKSA9PiAoXG4gICAgICAgICAgPEJha2Uga2V5PXtiYWtlLl9pZH0gYmFrZT17YmFrZX0gc2hvd0Jha2U9e3Nob3d9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd25CYWtlICYmIChcbiAgICAgICAgPERpYWxvZ092ZXJsYXkgb25EaXNtaXNzPXtjbG9zZX0gc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogJzgyMHB4JyxcbiAgICAgICAgICAgICAgd2lkdGg6ICc5MHZ3JyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3duLWJha2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIGhvdmVyOnRleHQteWVsbG93LTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBjbG9zZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEJha2VQaWN0dXJlcyBiYWtlPXtzaG93bkJha2V9IC8+XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtc2xhdGUtMDAgZm9udC1zYW5zXCI+XG4gICAgICAgICAgICAgICAgICB7c2hvd25CYWtlLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMCBtYi0yXCI+e3Nob3duQmFrZS5ibHVyYn08L2Rpdj5cbiAgICAgICAgICAgICAgICB7c2hvd25CYWtlLmJvZHkgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlcmlmXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCbG9ja0NvbnRlbnQgYmxvY2tzPXtzaG93bkJha2UuYm9keX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8L0RpYWxvZ092ZXJsYXk+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGb3Ioe1xuICBvcmlnaW5hbFVybCxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbn06IHtcbiAgb3JpZ2luYWxVcmw6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodD86IG51bWJlclxufSkge1xuICByZXR1cm4gYCR7b3JpZ2luYWxVcmx9P3c9JHt3aWR0aH0mJHtoZWlnaHQgPyBgaD0ke2hlaWdodH1gIDogJyd9JmZpdD1jcm9wYFxufVxuIiwgImltcG9ydCB7IExpbmssIExpbmtQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IHVzZVBhZ2VEYXRhIH0gZnJvbSAnfi9kYXRhJ1xuXG5mdW5jdGlvbiBQYWdlTGluayh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9OiBMaW5rUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExpbmsgey4uLnByb3BzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYi0yIGJvcmRlci1zb2xpZCBib3JkZXItdHJhbnNwYXJlbnQgbXgtMiB0ZXh0LTJ4bCBweC04IHB5LTIgbWItNiB0ZXh0LWNlbnRlciB0ZXh0LXNsYXRlLTAwIGZvbnQtbGlnaHQgaG92ZXI6dGV4dC15ZWxsb3ctNjAwIGhvdmVyOmJvcmRlci15ZWxsb3ctNjAwIHRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgbGV0IHsgcGFnZXMgfSA9IHVzZVBhZ2VEYXRhKClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1zY3JlZW4gaXRlbXMtY2VudGVyIGZsZXgtY29sIHNtOmp1c3RpZnktY2VudGVyIG1kOi1tdC04XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVt1cmwoJy9sb2dvLW1lZC5wbmcnKV0gaC1sb2dvSGVpZ2h0IGJnLW5vLXJlcGVhdCBiZy1jb250YWluIGJnLWNlbnRlclwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXgganVzdGlmeS1jZW50ZXIgbXQtMTQgZmxleC1jb2wgc206ZmxleC1yb3dcIj5cbiAgICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXG4gICAgICAgICAgICA8UGFnZUxpbmsga2V5PXtwYWdlLnNsdWd9IHRvPXtwYWdlLnNsdWd9PlxuICAgICAgICAgICAgICB7cGFnZS50aXRsZX1cbiAgICAgICAgICAgIDwvUGFnZUxpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxl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
