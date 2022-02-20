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
var tailwind_default = "/build/_assets/tailwind-PTQFQTJV.css";

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
  useCdn: false,
  token: process.env.SANITY_API_TOKEN ?? ``
}));
var getClient = (usePreview = false) => usePreview ? previewClient : sanityClient;

// app/data/index.ts
async function getPages() {
  const pages = await getClient().fetch(`*[_type == "page"]{ _id, title, "slug": slug.current }`);
  return pages;
}
async function getPage(pageId) {
  const query = '*[_type == "page" && slug.current == $pageId] { title, "slug": slug.current, text } | order(_updatedAt desc) [0]';
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
async function getBakes() {
  const query = '*[_type == "bake"] { _id, name, body, pictures[]{ asset->{url, assetId} }, blurb, categories[]->{title, slug} } | order(_updatedAt desc)';
  const pageData = await getClient().fetch(query, {});
  return pageData;
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
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null))));
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_router_dom.NavLink, __spreadValues({}, props), /* @__PURE__ */ React.createElement("div", {
    className: `uppercase mx-2 text-lg px-8 text-left text-slate-00 font-light hover:text-yellow-600 transition-colors ${match ? "border-b-2 border-yellow-600" : "border-b-2 border-transparent"}`
  }, children)));
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
    className: "flex flex-1 items-center"
  }, pages.map((page) => /* @__PURE__ */ React.createElement(PageLink, {
    key: page.slug,
    to: `/${page.slug}`
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
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "uppercase hover:text-yellow-600 transition-colors",
    onClick: close
  }, "close")), /* @__PURE__ */ React.createElement(BakePictures, {
    bake: shownBake
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
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
  const [page, bakes] = await Promise.all([
    getPage(pageId),
    pageId === "bakes" ? getBakes() : void 0
  ]);
  if (!page) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  const response = {
    bakes,
    page
  };
  return response;
};
function Index() {
  const { page, bakes } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(PageContent, {
    heading: page.title
  }, page.text && /* @__PURE__ */ React.createElement(BlockContent, {
    blocks: page.text
  }), bakes && bakes.length > 0 ? /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement(BakeList, {
    bakes
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9uYXRoYW5ncmlmZmluL0Rlc2t0b3AvbWFyeWhhbm5haGJha2VzL3dlYi9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2RhdGEvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2xpYi9zYW5pdHkvZ2V0Q2xpZW50LnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9saWIvc2FuaXR5L2NvbmZpZy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL25hdGhhbmdyaWZmaW4vRGVza3RvcC9tYXJ5aGFubmFoYmFrZXMvd2ViL2FwcC9yb3V0ZXMvJHBhZ2VJZC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9QYWdlTGluay50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUGFnZUNvbnRlbnQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jsb2NrQ29udGVudC9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQmFrZUxpc3QvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9saWIvc2FuaXR5L2ltYWdlcy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL25hdGhhbmdyaWZmaW4vRGVza3RvcC9tYXJ5aGFubmFoYmFrZXMvd2ViL2FwcC9yb3V0ZXMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbmF0aGFuZ3JpZmZpbi9EZXNrdG9wL21hcnloYW5uYWhiYWtlcy93ZWIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL25hdGhhbmdyaWZmaW4vRGVza3RvcC9tYXJ5aGFubmFoYmFrZXMvd2ViL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbmF0aGFuZ3JpZmZpbi9EZXNrdG9wL21hcnloYW5uYWhiYWtlcy93ZWIvYXBwL3JvdXRlcy8kcGFnZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvbmF0aGFuZ3JpZmZpbi9EZXNrdG9wL21hcnloYW5uYWhiYWtlcy93ZWIvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzLyRwYWdlSWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kcGFnZUlkXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiOnBhZ2VJZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB0YWlsd2luZCBmcm9tICcuL3RhaWx3aW5kLmNzcydcbmltcG9ydCB7IGdldFBhZ2VzLCBQYWdlRGF0YVByb3ZpZGVyIH0gZnJvbSAnfi9kYXRhJ1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICBocmVmOiAnL2Zhdmljb24ucG5nJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly91bnBrZy5jb20vbW9kZXJuLWNzcy1yZXNldEAxLjQuMC9kaXN0L3Jlc2V0Lm1pbi5jc3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOlxuICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMCZmYW1pbHk9U3BlY3RyYWw6d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCcsXG4gICAgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiB0YWlsd2luZCB9LFxuICBdXG59XG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ01hcnkgSGFubmFoIEJha2VzJyB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgZ2V0UGFnZXMoKVxuICByZXR1cm4geyBwYWdlcyB9XG59XG50eXBlIExvYWRlckRhdGEgPSBBc3luY1JldHVyblR5cGU8dHlwZW9mIGxvYWRlcj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBsZXQgeyBwYWdlcyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8UGFnZURhdGFQcm92aWRlciB2YWx1ZT17eyBwYWdlcyB9fT5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICAgIDwvUGFnZURhdGFQcm92aWRlcj5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGdldENsaWVudCB9IGZyb20gJ34vbGliL3Nhbml0eS9nZXRDbGllbnQnXG5pbXBvcnQgdHlwZSB7IFBhZ2UsIEJha2UgfSBmcm9tICd+L2xpYi9zYW5pdHkvdHlwZXMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdlcygpIHtcbiAgY29uc3QgcGFnZXMgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaDxQYWdlW10+KFxuICAgIGAqW190eXBlID09IFwicGFnZVwiXXsgX2lkLCB0aXRsZSwgXCJzbHVnXCI6IHNsdWcuY3VycmVudCB9YCxcbiAgKVxuXG4gIHJldHVybiBwYWdlc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZShwYWdlSWQ6IHN0cmluZykge1xuICBjb25zdCBxdWVyeSA9XG4gICAgJypbX3R5cGUgPT0gXCJwYWdlXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRwYWdlSWRdIHsgdGl0bGUsIFwic2x1Z1wiOiBzbHVnLmN1cnJlbnQsIHRleHQgfSB8IG9yZGVyKF91cGRhdGVkQXQgZGVzYykgWzBdJ1xuXG4gIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2g8UGFnZT4ocXVlcnksIHsgcGFnZUlkIH0pXG4gIHJldHVybiBwYWdlRGF0YVxufVxuXG5leHBvcnQgY29uc3QgUGFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PHsgcGFnZXM6IFBhZ2VbXSB9IHwgdW5kZWZpbmVkPihcbiAgdW5kZWZpbmVkLFxuKVxuXG5jb25zdCB7IFByb3ZpZGVyIH0gPSBQYWdlQ29udGV4dFxuZXhwb3J0IHsgUHJvdmlkZXIgYXMgUGFnZURhdGFQcm92aWRlciB9XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQYWdlRGF0YSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUNvbnRleHQoUGFnZUNvbnRleHQpXG4gIGlmICghZGF0YSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVXNlZCBQYWdlQ29udGV4dCB3aXRob3V0IGEgY29ycmVzcG9uZGluZyBQcm92aWRlcicpXG4gIH1cblxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmFrZXMoKSB7XG4gIGNvbnN0IHF1ZXJ5ID1cbiAgICAnKltfdHlwZSA9PSBcImJha2VcIl0geyBfaWQsIG5hbWUsIGJvZHksIHBpY3R1cmVzW117IGFzc2V0LT57dXJsLCBhc3NldElkfSB9LCBibHVyYiwgY2F0ZWdvcmllc1tdLT57dGl0bGUsIHNsdWd9IH0gfCBvcmRlcihfdXBkYXRlZEF0IGRlc2MpJ1xuXG4gIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgZ2V0Q2xpZW50KCkuZmV0Y2g8QmFrZVtdPihxdWVyeSwge30pXG4gIHJldHVybiBwYWdlRGF0YVxufVxuIiwgImltcG9ydCBQaWNvU2FuaXR5IGZyb20gJ3BpY29zYW5pdHknXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xuXG5leHBvcnQgY29uc3Qgc2FuaXR5Q2xpZW50ID0gbmV3IFBpY29TYW5pdHkoY29uZmlnKVxuXG5leHBvcnQgY29uc3QgcHJldmlld0NsaWVudCA9IG5ldyBQaWNvU2FuaXR5KHtcbiAgLi4uY29uZmlnLFxuICB1c2VDZG46IGZhbHNlLFxuICB0b2tlbjogcHJvY2Vzcy5lbnYuU0FOSVRZX0FQSV9UT0tFTiA/PyBgYCxcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRDbGllbnQgPSAodXNlUHJldmlldyA9IGZhbHNlKSA9PlxuICB1c2VQcmV2aWV3ID8gcHJldmlld0NsaWVudCA6IHNhbml0eUNsaWVudFxuIiwgImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaVZlcnNpb246ICcyMDIxLTAzLTI1JyxcbiAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICBwcm9qZWN0SWQ6ICdjOHdyMnR6bScsXG4gIHVzZUNkbjogZmFsc2UsXG59XG4iLCAiaW1wb3J0IHsgTGluaywgTGlua1Byb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IExpbmtzRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCByZWFjaFN0eWxlcyBmcm9tICdAcmVhY2gvZGlhbG9nL3N0eWxlcy5jc3MnXG5pbXBvcnQgY2Fyb3VzZWxTdHlsZXMgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3MnXG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ34vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgeyBQYWdlQ29udGVudCB9IGZyb20gJ34vY29tcG9uZW50cy9QYWdlQ29udGVudCdcbmltcG9ydCB7IGdldFBhZ2UsIGdldEJha2VzIH0gZnJvbSAnfi9kYXRhJ1xuaW1wb3J0IHsgUGFnZSwgQmFrZSB9IGZyb20gJ34vbGliL3Nhbml0eS90eXBlcydcbmltcG9ydCB7IEJsb2NrQ29udGVudCB9IGZyb20gJ34vY29tcG9uZW50cy9CbG9ja0NvbnRlbnQnXG5cbmltcG9ydCBibG9ja0NvbnRlbnQgZnJvbSAnfi9jb21wb25lbnRzL0Jsb2NrQ29udGVudC9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgQmFrZUxpc3QgfSBmcm9tICd+L2NvbXBvbmVudHMvQmFrZUxpc3QnXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBibG9ja0NvbnRlbnQgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiByZWFjaFN0eWxlcyB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGNhcm91c2VsU3R5bGVzIH0sXG4gIF1cbn1cblxudHlwZSBQYWdlRGF0YSA9IHtcbiAgcGFnZTogUGFnZVxuICBiYWtlczogQmFrZVtdIHwgdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgcGFnZUlkID0gcGFyYW1zLnBhZ2VJZFxuICBpZiAoIXBhZ2VJZCkge1xuICAgIHRocm93IG5ldyBSZXNwb25zZSgnTm90IEZvdW5kJywge1xuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IFtwYWdlLCBiYWtlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0UGFnZShwYWdlSWQpLFxuICAgIHBhZ2VJZCA9PT0gJ2Jha2VzJyA/IGdldEJha2VzKCkgOiB1bmRlZmluZWQsXG4gIF0pXG4gIGlmICghcGFnZSkge1xuICAgIHRocm93IG5ldyBSZXNwb25zZSgnTm90IEZvdW5kJywge1xuICAgICAgc3RhdHVzOiA0MDQsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlOiBQYWdlRGF0YSA9IHtcbiAgICBiYWtlcyxcbiAgICBwYWdlLFxuICB9XG4gIHJldHVybiByZXNwb25zZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBwYWdlLCBiYWtlcyB9ID0gdXNlTG9hZGVyRGF0YTxQYWdlRGF0YT4oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxQYWdlQ29udGVudCBoZWFkaW5nPXtwYWdlLnRpdGxlfT5cbiAgICAgICAge3BhZ2UudGV4dCAmJiA8QmxvY2tDb250ZW50IGJsb2Nrcz17cGFnZS50ZXh0fSAvPn1cbiAgICAgICAge2Jha2VzICYmIGJha2VzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8QmFrZUxpc3QgYmFrZXM9e2Jha2VzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvUGFnZUNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBOYXZMaW5rLCBOYXZMaW5rUHJvcHMsIHVzZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgdXNlUGFnZURhdGEgfSBmcm9tICd+L2RhdGEnXG5pbXBvcnQgeyBQYWdlTGluayB9IGZyb20gJy4vUGFnZUxpbmsnXG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgcGFnZXMgfSA9IHVzZVBhZ2VEYXRhKClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBmbGV4IGxnOmZsZXgtcm93IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwidy02NCBmbGV4LWluaXRpYWwgbWItNCBsZzptYi0wXCIgdG89XCIvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctW3VybCgnL2xvZ28tc20ucG5nJyldIGgtaGVhZGVyTG9nb0hlaWdodCBiZy1uby1yZXBlYXQgYmctY29udGFpbiBiZy1sZWZ0XCIgLz5cbiAgICAgIDwvTmF2TGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICA8UGFnZUxpbmsga2V5PXtwYWdlLnNsdWd9IHRvPXtgLyR7cGFnZS5zbHVnfWB9PlxuICAgICAgICAgICAgPGRpdj57cGFnZS50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8L1BhZ2VMaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgTmF2TGluaywgTmF2TGlua1Byb3BzLCB1c2VNYXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmV4cG9ydCBmdW5jdGlvbiBQYWdlTGluayh7XG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufTogT21pdDxOYXZMaW5rUHJvcHMsICd0byc+ICYgeyB0bzogc3RyaW5nIH0pIHtcbiAgY29uc3QgbWF0Y2ggPSB1c2VNYXRjaChwcm9wcy50bylcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdkxpbmsgey4uLnByb3BzfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHVwcGVyY2FzZSBteC0yIHRleHQtbGcgcHgtOCB0ZXh0LWxlZnQgdGV4dC1zbGF0ZS0wMCBmb250LWxpZ2h0IGhvdmVyOnRleHQteWVsbG93LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyAke1xuICAgICAgICAgICAgbWF0Y2hcbiAgICAgICAgICAgICAgPyAnYm9yZGVyLWItMiBib3JkZXIteWVsbG93LTYwMCdcbiAgICAgICAgICAgICAgOiAnYm9yZGVyLWItMiBib3JkZXItdHJhbnNwYXJlbnQnXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9OYXZMaW5rPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBQYWdlQ29udGVudCh7XG4gIGhlYWRpbmcsXG4gIGNoaWxkcmVuLFxufToge1xuICBoZWFkaW5nOiBzdHJpbmdcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOS8xMiBsZzp3LTEvMiBtLWF1dG9cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTJcIj57aGVhZGluZ308L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VyaWZcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7fSBmcm9tICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgU2FuaXR5QmxvY2tDb250ZW50LCB7XG4gIEJsb2NrQ29udGVudFByb3BzLFxufSBmcm9tICdAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3QnXG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ34vbGliL3Nhbml0eS9jb25maWcnXG5cbmV4cG9ydCBmdW5jdGlvbiBCbG9ja0NvbnRlbnQoeyBibG9ja3MgfTogeyBibG9ja3M6IEJsb2NrQ29udGVudFByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrLWNvbnRlbnRcIj5cbiAgICAgIDxTYW5pdHlCbG9ja0NvbnRlbnRcbiAgICAgICAgYmxvY2tzPXtibG9ja3N9XG4gICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiAzMjAsIGg6IDI0MCwgZml0OiAnbWF4JyB9fVxuICAgICAgICBwcm9qZWN0SWQ9e2NvbmZpZy5wcm9qZWN0SWR9XG4gICAgICAgIGRhdGFzZXQ9e2NvbmZpZy5kYXRhc2V0fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCBEaWFsb2csIHsgRGlhbG9nT3ZlcmxheSwgRGlhbG9nQ29udGVudCB9IGZyb20gJ0ByZWFjaC9kaWFsb2cnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJ1xuXG5pbXBvcnQgdHlwZSB7IEJha2UgYXMgQmFrZVR5cGUgfSBmcm9tICd+L2xpYi9zYW5pdHkvdHlwZXMnXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICd+L2xpYi9zYW5pdHkvaW1hZ2VzJ1xuaW1wb3J0IHsgQmxvY2tDb250ZW50IH0gZnJvbSAnfi9jb21wb25lbnRzL0Jsb2NrQ29udGVudCdcblxuZnVuY3Rpb24gQmFrZSh7XG4gIGJha2UsXG4gIHNob3dCYWtlLFxufToge1xuICBiYWtlOiBCYWtlVHlwZVxuICBzaG93QmFrZShiYWtlOiBCYWtlVHlwZSk6IHZvaWRcbn0pIHtcbiAgY29uc3QgcGljdHVyZSA9IChiYWtlLnBpY3R1cmVzIHx8IFtdKVswXVxuICBjb25zdCBpbWFnZVVybCA9IHBpY3R1cmVcbiAgICA/IHVybEZvcih7IG9yaWdpbmFsVXJsOiBwaWN0dXJlLmFzc2V0LnVybCwgd2lkdGg6IDQwMCwgaGVpZ2h0OiAyMDAgfSlcbiAgICA6IHVuZGVmaW5lZFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC15ZWxsb3ctNjAwIHRyYW5zaXRpb24tY29sb3JzIG1iLTZcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93QmFrZShiYWtlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICB7aW1hZ2VVcmwgJiYgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkIG1iLTFcIiBzcmM9e2ltYWdlVXJsfSAvPn1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1zbGF0ZS0wMCBmb250LXNhbnMgbWItMiBcIj5cbiAgICAgICAgICAgIHtiYWtlLm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMFwiPntiYWtlLmJsdXJifTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59XG5cbmZ1bmN0aW9uIEJha2VQaWN0dXJlcyh7IGJha2UgfTogeyBiYWtlOiBCYWtlVHlwZSB9KSB7XG4gIGNvbnN0IHBpY3R1cmVzID0gYmFrZS5waWN0dXJlc1xuXG4gIGlmICghcGljdHVyZXMgfHwgcGljdHVyZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtiYWtlLnBpY3R1cmVzPy5sZW5ndGggPT09IDEgPyAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkXCJcbiAgICAgICAgICBzcmM9e3VybEZvcih7XG4gICAgICAgICAgICBvcmlnaW5hbFVybDogcGljdHVyZXNbMF0uYXNzZXQudXJsLFxuICAgICAgICAgICAgd2lkdGg6IDkwMCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDYXJvdXNlbD5cbiAgICAgICAgICB7YmFrZS5waWN0dXJlcy5tYXAoKHBpY3R1cmUpID0+IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAga2V5PXtwaWN0dXJlLmFzc2V0LmFzc2V0SWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWRcIlxuICAgICAgICAgICAgICBzcmM9e3VybEZvcih7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxVcmw6IHBpY3R1cmUuYXNzZXQudXJsLFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MDAsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJha2VMaXN0KHsgYmFrZXMgfTogeyBiYWtlczogQmFrZVR5cGVbXSB9KSB7XG4gIGNvbnN0IFtzaG93bkJha2UsIHNldFNob3duQmFrZV0gPSB1c2VTdGF0ZTxCYWtlVHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKVxuICBmdW5jdGlvbiBzaG93KGJha2U6IEJha2VUeXBlKSB7XG4gICAgc2V0U2hvd25CYWtlKGJha2UpXG4gIH1cbiAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgc2V0U2hvd25CYWtlKHVuZGVmaW5lZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtMiBzbTpncmlkLWNvbHMtMiBncmlkLWNvbHMtMSBpdGVtcy1iYXNlbGluZVwiPlxuICAgICAgICB7YmFrZXMubWFwKChiYWtlKSA9PiAoXG4gICAgICAgICAgPEJha2Uga2V5PXtiYWtlLl9pZH0gYmFrZT17YmFrZX0gc2hvd0Jha2U9e3Nob3d9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd25CYWtlICYmIChcbiAgICAgICAgPERpYWxvZ092ZXJsYXkgb25EaXNtaXNzPXtjbG9zZX0gc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogJzFyZW0nLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogJzgyMHB4JyxcbiAgICAgICAgICAgICAgd2lkdGg6ICc5MHZ3JyxcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMC4yNXJlbScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNob3duLWJha2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBob3Zlcjp0ZXh0LXllbGxvdy02MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgY2xvc2VcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxCYWtlUGljdHVyZXMgYmFrZT17c2hvd25CYWtlfSAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LXNsYXRlLTAwIGZvbnQtc2Fuc1wiPlxuICAgICAgICAgICAgICAgICAge3Nob3duQmFrZS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS02MDAgbWItMlwiPntzaG93bkJha2UuYmx1cmJ9PC9kaXY+XG4gICAgICAgICAgICAgICAge3Nob3duQmFrZS5ib2R5ICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZXJpZlwiPlxuICAgICAgICAgICAgICAgICAgICA8QmxvY2tDb250ZW50IGJsb2Nrcz17c2hvd25CYWtlLmJvZHl9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPC9EaWFsb2dPdmVybGF5PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXJsRm9yKHtcbiAgb3JpZ2luYWxVcmwsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG59OiB7XG4gIG9yaWdpbmFsVXJsOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBoZWlnaHQ/OiBudW1iZXJcbn0pIHtcbiAgcmV0dXJuIGAke29yaWdpbmFsVXJsfT93PSR7d2lkdGh9JiR7aGVpZ2h0ID8gYGg9JHtoZWlnaHR9YCA6ICcnfSZmaXQ9Y3JvcGBcbn1cbiIsICJpbXBvcnQgeyBMaW5rLCBMaW5rUHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgeyB1c2VQYWdlRGF0YSB9IGZyb20gJ34vZGF0YSdcblxuZnVuY3Rpb24gUGFnZUxpbmsoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogTGlua1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMaW5rIHsuLi5wcm9wc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItMiBib3JkZXItc29saWQgYm9yZGVyLXRyYW5zcGFyZW50IG14LTIgdGV4dC0yeGwgcHgtOCBweS0yIG1iLTYgdGV4dC1jZW50ZXIgdGV4dC1zbGF0ZS0wMCBmb250LWxpZ2h0IGhvdmVyOnRleHQteWVsbG93LTYwMCBob3Zlcjpib3JkZXIteWVsbG93LTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGxldCB7IHBhZ2VzIH0gPSB1c2VQYWdlRGF0YSgpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBzbTpqdXN0aWZ5LWNlbnRlciBtZDotbXQtOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bdXJsKCcvbG9nby1tZWQucG5nJyldIGgtbG9nb0hlaWdodCBiZy1uby1yZXBlYXQgYmctY29udGFpbiBiZy1jZW50ZXJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGp1c3RpZnktY2VudGVyIG10LTE0IGZsZXgtY29sIHNtOmZsZXgtcm93XCI+XG4gICAgICAgICAge3BhZ2VzLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgICAgPFBhZ2VMaW5rIGtleT17cGFnZS5zbHVnfSB0bz17cGFnZS5zbHVnfT5cbiAgICAgICAgICAgICAge3BhZ2UudGl0bGV9XG4gICAgICAgICAgICA8L1BhZ2VMaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFB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
