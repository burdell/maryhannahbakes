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
var tailwind_default = "/build/_assets/tailwind-6ERSDBC3.css";

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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(PageContent, {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9uYXRoYW5ncmlmZmluL0Rlc2t0b3AvbWFyeWhhbm5haGJha2VzL3dlYi9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2RhdGEvaW5kZXgudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2xpYi9zYW5pdHkvZ2V0Q2xpZW50LnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9saWIvc2FuaXR5L2NvbmZpZy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL25hdGhhbmdyaWZmaW4vRGVza3RvcC9tYXJ5aGFubmFoYmFrZXMvd2ViL2FwcC9yb3V0ZXMvJHBhZ2VJZC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9QYWdlTGluay50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvUGFnZUNvbnRlbnQudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Jsb2NrQ29udGVudC9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvQmFrZUxpc3QvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9saWIvc2FuaXR5L2ltYWdlcy50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL25hdGhhbmdyaWZmaW4vRGVza3RvcC9tYXJ5aGFubmFoYmFrZXMvd2ViL2FwcC9yb3V0ZXMvaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvbmF0aGFuZ3JpZmZpbi9EZXNrdG9wL21hcnloYW5uYWhiYWtlcy93ZWIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL25hdGhhbmdyaWZmaW4vRGVza3RvcC9tYXJ5aGFubmFoYmFrZXMvd2ViL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvbmF0aGFuZ3JpZmZpbi9EZXNrdG9wL21hcnloYW5uYWhiYWtlcy93ZWIvYXBwL3JvdXRlcy8kcGFnZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvbmF0aGFuZ3JpZmZpbi9EZXNrdG9wL21hcnloYW5uYWhiYWtlcy93ZWIvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzLyRwYWdlSWRcIjoge1xuICAgIGlkOiBcInJvdXRlcy8kcGFnZUlkXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiOnBhZ2VJZFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCB0YWlsd2luZCBmcm9tICcuL3RhaWx3aW5kLmNzcydcbmltcG9ydCB7IGdldFBhZ2VzLCBQYWdlRGF0YVByb3ZpZGVyIH0gZnJvbSAnfi9kYXRhJ1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnaWNvbicsXG4gICAgICBocmVmOiAnL2Zhdmljb24ucG5nJyxcbiAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly91bnBrZy5jb20vbW9kZXJuLWNzcy1yZXNldEAxLjQuMC9kaXN0L3Jlc2V0Lm1pbi5jc3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOlxuICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMCZmYW1pbHk9U3BlY3RyYWw6d2dodEAzMDA7NDAwJmRpc3BsYXk9c3dhcCcsXG4gICAgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiB0YWlsd2luZCB9LFxuICBdXG59XG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ01hcnkgSGFubmFoIEJha2VzJyB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgZ2V0UGFnZXMoKVxuICByZXR1cm4geyBwYWdlcyB9XG59XG50eXBlIExvYWRlckRhdGEgPSBBc3luY1JldHVyblR5cGU8dHlwZW9mIGxvYWRlcj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBsZXQgeyBwYWdlcyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpXG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8UGFnZURhdGFQcm92aWRlciB2YWx1ZT17eyBwYWdlcyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi14bCBteS0wIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgICAgPC9QYWdlRGF0YVByb3ZpZGVyPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgZ2V0Q2xpZW50IH0gZnJvbSAnfi9saWIvc2FuaXR5L2dldENsaWVudCdcbmltcG9ydCB0eXBlIHsgUGFnZSwgQmFrZSB9IGZyb20gJ34vbGliL3Nhbml0eS90eXBlcydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VzKCkge1xuICBjb25zdCBwYWdlcyA9IGF3YWl0IGdldENsaWVudCgpLmZldGNoPFBhZ2VbXT4oXG4gICAgYCpbX3R5cGUgPT0gXCJwYWdlXCJdeyBfaWQsIHRpdGxlLCBcInNsdWdcIjogc2x1Zy5jdXJyZW50IH1gLFxuICApXG5cbiAgcmV0dXJuIHBhZ2VzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdlKHBhZ2VJZDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5ID1cbiAgICAnKltfdHlwZSA9PSBcInBhZ2VcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHBhZ2VJZF0geyB0aXRsZSwgXCJzbHVnXCI6IHNsdWcuY3VycmVudCwgdGV4dCB9IHwgb3JkZXIoX3VwZGF0ZWRBdCBkZXNjKSBbMF0nXG5cbiAgY29uc3QgcGFnZURhdGEgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaDxQYWdlPihxdWVyeSwgeyBwYWdlSWQgfSlcbiAgcmV0dXJuIHBhZ2VEYXRhXG59XG5cbmV4cG9ydCBjb25zdCBQYWdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8eyBwYWdlczogUGFnZVtdIH0gfCB1bmRlZmluZWQ+KFxuICB1bmRlZmluZWQsXG4pXG5cbmNvbnN0IHsgUHJvdmlkZXIgfSA9IFBhZ2VDb250ZXh0XG5leHBvcnQgeyBQcm92aWRlciBhcyBQYWdlRGF0YVByb3ZpZGVyIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhZ2VEYXRhKCkge1xuICBjb25zdCBkYXRhID0gdXNlQ29udGV4dChQYWdlQ29udGV4dClcbiAgaWYgKCFkYXRhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVc2VkIFBhZ2VDb250ZXh0IHdpdGhvdXQgYSBjb3JyZXNwb25kaW5nIFByb3ZpZGVyJylcbiAgfVxuXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCYWtlcygpIHtcbiAgY29uc3QgcXVlcnkgPVxuICAgICcqW190eXBlID09IFwiYmFrZVwiXSB7IF9pZCwgbmFtZSwgYm9keSwgcGljdHVyZXNbXXsgYXNzZXQtPnt1cmwsIGFzc2V0SWR9IH0sIGJsdXJiLCBjYXRlZ29yaWVzW10tPnt0aXRsZSwgc2x1Z30gfSB8IG9yZGVyKF91cGRhdGVkQXQgZGVzYyknXG5cbiAgY29uc3QgcGFnZURhdGEgPSBhd2FpdCBnZXRDbGllbnQoKS5mZXRjaDxCYWtlW10+KHF1ZXJ5LCB7fSlcbiAgcmV0dXJuIHBhZ2VEYXRhXG59XG4iLCAiaW1wb3J0IFBpY29TYW5pdHkgZnJvbSAncGljb3Nhbml0eSdcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBzYW5pdHlDbGllbnQgPSBuZXcgUGljb1Nhbml0eShjb25maWcpXG5cbmV4cG9ydCBjb25zdCBwcmV2aWV3Q2xpZW50ID0gbmV3IFBpY29TYW5pdHkoe1xuICAuLi5jb25maWcsXG4gIHVzZUNkbjogZmFsc2UsXG4gIHRva2VuOiBwcm9jZXNzLmVudi5TQU5JVFlfQVBJX1RPS0VOID8/IGBgLFxufSlcblxuZXhwb3J0IGNvbnN0IGdldENsaWVudCA9ICh1c2VQcmV2aWV3ID0gZmFsc2UpID0+XG4gIHVzZVByZXZpZXcgPyBwcmV2aWV3Q2xpZW50IDogc2FuaXR5Q2xpZW50XG4iLCAiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgYXBpVmVyc2lvbjogJzIwMjEtMDMtMjUnLFxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gIHByb2plY3RJZDogJ2M4d3IydHptJyxcbiAgdXNlQ2RuOiBmYWxzZSxcbn1cbiIsICJpbXBvcnQgeyBMaW5rLCBMaW5rUHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHJlYWNoU3R5bGVzIGZyb20gJ0ByZWFjaC9kaWFsb2cvc3R5bGVzLmNzcydcbmltcG9ydCBjYXJvdXNlbFN0eWxlcyBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzcydcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnfi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IFBhZ2VDb250ZW50IH0gZnJvbSAnfi9jb21wb25lbnRzL1BhZ2VDb250ZW50J1xuaW1wb3J0IHsgZ2V0UGFnZSwgZ2V0QmFrZXMgfSBmcm9tICd+L2RhdGEnXG5pbXBvcnQgeyBQYWdlLCBCYWtlIH0gZnJvbSAnfi9saWIvc2FuaXR5L3R5cGVzJ1xuaW1wb3J0IHsgQmxvY2tDb250ZW50IH0gZnJvbSAnfi9jb21wb25lbnRzL0Jsb2NrQ29udGVudCdcblxuaW1wb3J0IGJsb2NrQ29udGVudCBmcm9tICd+L2NvbXBvbmVudHMvQmxvY2tDb250ZW50L3N0eWxlcy5jc3MnXG5pbXBvcnQgeyBCYWtlTGlzdCB9IGZyb20gJ34vY29tcG9uZW50cy9CYWtlTGlzdCdcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IGJsb2NrQ29udGVudCB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHJlYWNoU3R5bGVzIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogY2Fyb3VzZWxTdHlsZXMgfSxcbiAgXVxufVxuXG50eXBlIFBhZ2VEYXRhID0ge1xuICBwYWdlOiBQYWdlXG4gIGJha2VzOiBCYWtlW10gfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBwYWdlSWQgPSBwYXJhbXMucGFnZUlkXG4gIGlmICghcGFnZUlkKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKCdOb3QgRm91bmQnLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgW3BhZ2UsIGJha2VzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRQYWdlKHBhZ2VJZCksXG4gICAgcGFnZUlkID09PSAnYmFrZXMnID8gZ2V0QmFrZXMoKSA6IHVuZGVmaW5lZCxcbiAgXSlcbiAgaWYgKCFwYWdlKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKCdOb3QgRm91bmQnLCB7XG4gICAgICBzdGF0dXM6IDQwNCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2U6IFBhZ2VEYXRhID0ge1xuICAgIGJha2VzLFxuICAgIHBhZ2UsXG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHBhZ2UsIGJha2VzIH0gPSB1c2VMb2FkZXJEYXRhPFBhZ2VEYXRhPigpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPFBhZ2VDb250ZW50IGhlYWRpbmc9e3BhZ2UudGl0bGV9PlxuICAgICAgICB7cGFnZS50ZXh0ICYmIDxCbG9ja0NvbnRlbnQgYmxvY2tzPXtwYWdlLnRleHR9IC8+fVxuICAgICAgICB7YmFrZXMgJiYgYmFrZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxCYWtlTGlzdCBiYWtlcz17YmFrZXN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9QYWdlQ29udGVudD5cbiAgICA8Lz5cbiAgKVxufVxuIiwgImltcG9ydCB7IE5hdkxpbmssIE5hdkxpbmtQcm9wcywgdXNlTWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgeyB1c2VQYWdlRGF0YSB9IGZyb20gJ34vZGF0YSdcbmltcG9ydCB7IFBhZ2VMaW5rIH0gZnJvbSAnLi9QYWdlTGluaydcblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgeyBwYWdlcyB9ID0gdXNlUGFnZURhdGEoKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGZsZXggbGc6ZmxleC1yb3cgZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJ3LTY0IGZsZXgtaW5pdGlhbCBtYi00IGxnOm1iLTBcIiB0bz1cIi9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bdXJsKCcvbG9nby1zbS5wbmcnKV0gaC1oZWFkZXJMb2dvSGVpZ2h0IGJnLW5vLXJlcGVhdCBiZy1jb250YWluIGJnLWxlZnRcIiAvPlxuICAgICAgPC9OYXZMaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXG4gICAgICAgICAgPFBhZ2VMaW5rIGtleT17cGFnZS5zbHVnfSB0bz17YC8ke3BhZ2Uuc2x1Z31gfSBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgIDxkaXY+e3BhZ2UudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPC9QYWdlTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7IE5hdkxpbmssIE5hdkxpbmtQcm9wcywgdXNlTWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5leHBvcnQgZnVuY3Rpb24gUGFnZUxpbmsoe1xuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IE9taXQ8TmF2TGlua1Byb3BzLCAndG8nPiAmIHsgdG86IHN0cmluZyB9KSB7XG4gIGNvbnN0IG1hdGNoID0gdXNlTWF0Y2gocHJvcHMudG8pXG4gIHJldHVybiAoXG4gICAgPE5hdkxpbmsgey4uLnByb3BzfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgdXBwZXJjYXNlIG14LTYgdGV4dC1sZyB0ZXh0LWxlZnQgdGV4dC1zbGF0ZS0wMCBmb250LWxpZ2h0IGhvdmVyOnRleHQteWVsbG93LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyAke1xuICAgICAgICAgIG1hdGNoXG4gICAgICAgICAgICA/ICdib3JkZXItYi0yIGJvcmRlci15ZWxsb3ctNjAwJ1xuICAgICAgICAgICAgOiAnYm9yZGVyLWItMiBib3JkZXItdHJhbnNwYXJlbnQnXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L05hdkxpbms+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VDb250ZW50KHtcbiAgaGVhZGluZyxcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGhlYWRpbmc6IHN0cmluZ1xuICBjaGlsZHJlbjogUmVhY3ROb2RlXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05LzEyIGxnOnctMS8yIG0tYXV0b1wiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItMlwiPntoZWFkaW5nfTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZXJpZlwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IHt9IGZyb20gJy4vc3R5bGVzLmNzcydcbmltcG9ydCBTYW5pdHlCbG9ja0NvbnRlbnQsIHtcbiAgQmxvY2tDb250ZW50UHJvcHMsXG59IGZyb20gJ0BzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdCdcblxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnfi9saWIvc2FuaXR5L2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIEJsb2NrQ29udGVudCh7IGJsb2NrcyB9OiB7IGJsb2NrczogQmxvY2tDb250ZW50UHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxuICAgICAgPFNhbml0eUJsb2NrQ29udGVudFxuICAgICAgICBibG9ja3M9e2Jsb2Nrc31cbiAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDMyMCwgaDogMjQwLCBmaXQ6ICdtYXgnIH19XG4gICAgICAgIHByb2plY3RJZD17Y29uZmlnLnByb2plY3RJZH1cbiAgICAgICAgZGF0YXNldD17Y29uZmlnLmRhdGFzZXR9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IERpYWxvZywgeyBEaWFsb2dPdmVybGF5LCBEaWFsb2dDb250ZW50IH0gZnJvbSAnQHJlYWNoL2RpYWxvZydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnXG5cbmltcG9ydCB0eXBlIHsgQmFrZSBhcyBCYWtlVHlwZSB9IGZyb20gJ34vbGliL3Nhbml0eS90eXBlcydcbmltcG9ydCB7IHVybEZvciB9IGZyb20gJ34vbGliL3Nhbml0eS9pbWFnZXMnXG5pbXBvcnQgeyBCbG9ja0NvbnRlbnQgfSBmcm9tICd+L2NvbXBvbmVudHMvQmxvY2tDb250ZW50J1xuXG5mdW5jdGlvbiBCYWtlKHtcbiAgYmFrZSxcbiAgc2hvd0Jha2UsXG59OiB7XG4gIGJha2U6IEJha2VUeXBlXG4gIHNob3dCYWtlKGJha2U6IEJha2VUeXBlKTogdm9pZFxufSkge1xuICBjb25zdCBwaWN0dXJlID0gKGJha2UucGljdHVyZXMgfHwgW10pWzBdXG4gIGNvbnN0IGltYWdlVXJsID0gcGljdHVyZVxuICAgID8gdXJsRm9yKHsgb3JpZ2luYWxVcmw6IHBpY3R1cmUuYXNzZXQudXJsLCB3aWR0aDogNDAwLCBoZWlnaHQ6IDIwMCB9KVxuICAgIDogdW5kZWZpbmVkXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXllbGxvdy02MDAgdHJhbnNpdGlvbi1jb2xvcnMgbWItNlwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dCYWtlKGJha2UpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxuICAgICAgICAgIHtpbWFnZVVybCAmJiA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQgbWItMVwiIHNyYz17aW1hZ2VVcmx9IC8+fVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LXNsYXRlLTAwIGZvbnQtc2FucyBtYi0yIFwiPlxuICAgICAgICAgICAge2Jha2UubmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNjAwXCI+e2Jha2UuYmx1cmJ9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gQmFrZVBpY3R1cmVzKHsgYmFrZSB9OiB7IGJha2U6IEJha2VUeXBlIH0pIHtcbiAgY29uc3QgcGljdHVyZXMgPSBiYWtlLnBpY3R1cmVzXG5cbiAgaWYgKCFwaWN0dXJlcyB8fCBwaWN0dXJlcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2Jha2UucGljdHVyZXM/Lmxlbmd0aCA9PT0gMSA/IChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWRcIlxuICAgICAgICAgIHNyYz17dXJsRm9yKHtcbiAgICAgICAgICAgIG9yaWdpbmFsVXJsOiBwaWN0dXJlc1swXS5hc3NldC51cmwsXG4gICAgICAgICAgICB3aWR0aDogOTAwLFxuICAgICAgICAgIH0pfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPENhcm91c2VsPlxuICAgICAgICAgIHtiYWtlLnBpY3R1cmVzLm1hcCgocGljdHVyZSkgPT4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBrZXk9e3BpY3R1cmUuYXNzZXQuYXNzZXRJZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZFwiXG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFVybDogcGljdHVyZS5hc3NldC51cmwsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwMCxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQmFrZUxpc3QoeyBiYWtlcyB9OiB7IGJha2VzOiBCYWtlVHlwZVtdIH0pIHtcbiAgY29uc3QgW3Nob3duQmFrZSwgc2V0U2hvd25CYWtlXSA9IHVzZVN0YXRlPEJha2VUeXBlIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpXG4gIGZ1bmN0aW9uIHNob3coYmFrZTogQmFrZVR5cGUpIHtcbiAgICBzZXRTaG93bkJha2UoYmFrZSlcbiAgfVxuICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBzZXRTaG93bkJha2UodW5kZWZpbmVkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC0yIHNtOmdyaWQtY29scy0yIGdyaWQtY29scy0xIGl0ZW1zLWJhc2VsaW5lXCI+XG4gICAgICAgIHtiYWtlcy5tYXAoKGJha2UpID0+IChcbiAgICAgICAgICA8QmFrZSBrZXk9e2Jha2UuX2lkfSBiYWtlPXtiYWtlfSBzaG93QmFrZT17c2hvd30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93bkJha2UgJiYgKFxuICAgICAgICA8RGlhbG9nT3ZlcmxheSBvbkRpc21pc3M9e2Nsb3NlfSBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgIDxEaWFsb2dDb250ZW50XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nOiAnMXJlbScsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiAnODIwcHgnLFxuICAgICAgICAgICAgICB3aWR0aDogJzkwdncnLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcwLjI1cmVtJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hvd24tYmFrZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgaG92ZXI6dGV4dC15ZWxsb3ctNjAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGNsb3NlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QmFrZVBpY3R1cmVzIGJha2U9e3Nob3duQmFrZX0gLz5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1zbGF0ZS0wMCBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAgICAgIHtzaG93bkJha2UubmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNjAwIG1iLTJcIj57c2hvd25CYWtlLmJsdXJifTwvZGl2PlxuICAgICAgICAgICAgICAgIHtzaG93bkJha2UuYm9keSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VyaWZcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJsb2NrQ29udGVudCBibG9ja3M9e3Nob3duQmFrZS5ib2R5fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDwvRGlhbG9nT3ZlcmxheT5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZydcblxuZXhwb3J0IGZ1bmN0aW9uIHVybEZvcih7XG4gIG9yaWdpbmFsVXJsLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxufToge1xuICBvcmlnaW5hbFVybDogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgaGVpZ2h0PzogbnVtYmVyXG59KSB7XG4gIHJldHVybiBgJHtvcmlnaW5hbFVybH0/dz0ke3dpZHRofSYke2hlaWdodCA/IGBoPSR7aGVpZ2h0fWAgOiAnJ30mZml0PWNyb3BgXG59XG4iLCAiaW1wb3J0IHsgTGluaywgTGlua1Byb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgdXNlUGFnZURhdGEgfSBmcm9tICd+L2RhdGEnXG5cbmZ1bmN0aW9uIFBhZ2VMaW5rKHsgY2hpbGRyZW4sIC4uLnByb3BzIH06IExpbmtQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGluayB7Li4ucHJvcHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iLTIgYm9yZGVyLXNvbGlkIGJvcmRlci10cmFuc3BhcmVudCBteC0yIHRleHQtMnhsIHB4LTggcHktMiBtYi02IHRleHQtY2VudGVyIHRleHQtc2xhdGUtMDAgZm9udC1saWdodCBob3Zlcjp0ZXh0LXllbGxvdy02MDAgaG92ZXI6Ym9yZGVyLXllbGxvdy02MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBsZXQgeyBwYWdlcyB9ID0gdXNlUGFnZURhdGEoKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLXNjcmVlbiBpdGVtcy1jZW50ZXIgZmxleC1jb2wgc206anVzdGlmeS1jZW50ZXIgbWQ6LW10LThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctW3VybCgnL2xvZ28tbWVkLnBuZycpXSBoLWxvZ29IZWlnaHQgYmctbm8tcmVwZWF0IGJnLWNvbnRhaW4gYmctY2VudGVyXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0xNCBmbGV4LWNvbCBzbTpmbGV4LXJvd1wiPlxuICAgICAgICAgIHtwYWdlcy5tYXAoKHBhZ2UpID0+IChcbiAgICAgICAgICAgIDxQYWdlTGluayBrZXk9e3BhZ2Uuc2x1Z30gdG89e3BhZ2Uuc2x1Z30+XG4gICAgICAgICAgICAgIHtwYWdlLnRpdGxlfVxuICAgICAgICAgICAgPC9QYWdlTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFB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
