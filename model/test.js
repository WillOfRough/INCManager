// !function (a, b, c, d) {
//     "use strict";
//
//     function e() {
//         var a, c;
//         a = b.createElement("style"), a.type = "text/css", c = '@-webkit-keyframes rotate {from { -webkit-transform: rotate(0deg); }to { -webkit-transform: rotate(360deg); }}@keyframes rotate {from  { transform: rotate(0deg); }to { transform: rotate(360deg); }}.netffice24-netffice-btn,.netffice24-netffice-btn:link,.netffice24-netffice-btn:hover {display: inline-block;height: 14px;font-family: "Lucida Grande", "Segoe UI", "Tahoma", "Helvetica Neue", "Helvetica", sans-serif;font-size: 11px;font-weight: 600;color: #333;text-decoration: none;padding: 1px 7px 5px 3px;border: 1px solid #ebebeb;border-radius: 2px;border-bottom-color: #d4d4d4;}.netffice24-netffice-btn > img {vertical-align: baseline;}.netffice24-netffice-default:hover,.netffice24-netffice-error:hover {border-color: #dedede;border-bottom-color: #cacaca;}.netffice24-netffice-default:active,.netffice24-netffice-error:active {border-color: #d1d1d1;box-shadow: inset 0 1px 1px rgba(0,0,0,0.1);}.netffice24-netffice-btn .netffice24-btn-status {display: inline-block;width: 15px;height: 14px;border: 0;margin: 0 5px 0 2px;position: relative;top: 2px;}.netffice24-netffice-progress .netffice24-btn-status {-webkit-animation-name: rotate;-webkit-animation-duration: 1.7s;-webkit-animation-iteration-count: infinite;-webkit-animation-timing-function: linear;animation-name: rotate;animation-duration: 1.7s;animation-iteration-count: infinite;animation-timing-function: linear;}.netffice24-netffice-disabled {.netffice24-netffice-btn.netffice24-netffice-disabled,background: #e0e0e0;border: 1px #dadada solid;border-bottom: 1px solid #ccc;box-shadow: none;}.netffice24-saver:hover, .netffice24-netffice:hover {text-decoration: none;cursor: pointer;}.netffice24-netffice,.netffice24-netffice-btn {line-height: 11px !important;text-decoration: none !important;box-sizing: content-box !important;-webkit-box-sizing: content-box !important;-moz-box-sizing: content-box !important;}', a.styleSheet ? a.styleSheet.cssText = c : a.textContent = c, b.getElementsByTagName("head")[0].appendChild(a)
//     }
//
//     function f(a) {
//         var c, d, e;
//         return a.buttonId ? b.getElementById(a.buttonId) : (c = b.createElement("a"), c.href = "", c.className += " netffice24-netffice-btn", w.isBrowserSupported() ? c.className += " netffice24-netffice-default" : c.className += " netffice24-netffice-disabled", d = b.createElement("img"), d.src = a.icon || w.baseUrl + "/assets/images/icon/netffice.svg", d.className = "netffice24-btn-status", c.appendChild(d), e = b.createTextNode(a.label), c.appendChild(e), c)
//     }
//
//     function g(a) {
//         var b, c, e, f;
//         if (a.success || d && "function" == typeof d.warn && d.warn("You must provide a success callback to the Chooser to see the files that the user selects"), c = function () {
//             d && "function" == typeof d.warn && d.warn("The provided list of extensions or file types is not valid. See Chooser documentation: " + t), d && "function" == typeof d.warn && d.warn("Available file types are: " + u.join(", ")), delete a.extensions
//         }, a.extensions && Array.isArray) if (Array.isArray(a.extensions)) for (e = 0, f = a.extensions.length; e < f; e++) b = a.extensions[e], !b.match(/^\.[\.\w$#&+@!()\-'`_~]+$/) && v.call(u, b) < 0 && c(); else c();
//         return a
//     }
//
//     function h(b, c) {
//         if (!w.isBrowserSupported()) return void a.alert("Your browser does not support the Netffice24JS SDK");
//         var d = c.width, e = c.height;
//         o(c.getUrl(b), q(d, e), b)
//     }
//
//     function i(a) {
//         var b = encodeURIComponent(k()), c = encodeURIComponent(a.forceOAuth || ""),
//             d = ["redirect=" + encodeURIComponent("/drive?external&origin=" + b), "force_oauth=" + c].join("&");
//         return l(w.baseUrl + "/sign/in?" + d)
//     }
//
//     function j(a) {
//         var b = encodeURIComponent(k()), c = encodeURIComponent(a.forceOAuth || ""),
//             d = encodeURIComponent(a.public || "none"), e = void 0 === a.multiselect || Boolean(a.multiselect),
//             f = encodeURIComponent(a.type || "file"),
//             g = ["origin=" + b, "force_oauth=" + c, "public=" + d, "multiselect=" + e, "type=" + f].join("&");
//         return l(w.baseUrl + "/chooser?" + g)
//     }
//
//     function k() {
//         return a.location.origin || a.location.protocol + "//" + a.location.host
//     }
//
//     function l(a) {
//         var b, c;
//         return c = encodeURIComponent(w.VERSION), b = -1 === a.indexOf("?") ? "?" : "&", "" + a + b + "version=" + c
//     }
//
//     function m() {
//         var b, d, e, f = [/IEMobile\/(7|8|9|10)\./, /BB10;/];
//         for (b = 0, d = f.length; b < d; b++) if (e = f[b], e.test(c.userAgent)) return !1;
//         return !!JSON && !!a.postMessage && !!a.addEventListener
//     }
//
//     function n(a, b, c) {
//         var e, f, g, h, i, j;
//         try {
//             f = JSON.parse(a.data)
//         } catch (k) {
//             f = {}
//         }
//         switch (g = s && c._popup ? s.contentWindow : a.source, f.method) {
//             case"origin_request":
//                 a.source.postMessage(JSON.stringify({method: "origin"}), w.baseUrl);
//                 break;
//             case"ready":
//                 c.files && (c._fetch_url_on_save ? (j = function () {
//                     var a, b, d;
//                     for (d = [], a = 0, b = c.files.length; a < b; a++) h = c.files[a], d.push({filename: h.filename});
//                     return d
//                 }(), i = JSON.stringify({
//                     method: "files_with_callback",
//                     params: j
//                 })) : i = JSON.stringify({
//                     method: "files",
//                     params: c.files
//                 }), g.postMessage(i, w.baseUrl)), "function" == typeof c.ready && c.ready();
//                 break;
//             case"files_selected":
//             case"files_saved":
//             case"login_completed":
//                 "function" == typeof b && b(), "function" == typeof c.success && c.success(f.params);
//                 break;
//             case"progress":
//                 "function" == typeof c.progress && c.progress(f.params);
//                 break;
//             case"close_dialog":
//                 "function" == typeof b && b(), "function" == typeof c.cancel && c.cancel();
//                 break;
//             case"web_session_error":
//                 "function" == typeof b && b(), "function" == typeof c.webSessionFailure && c.webSessionFailure();
//                 break;
//             case"web_session_unlinked":
//                 "function" == typeof b && b(), "function" == typeof c.webSessionUnlinked && c.webSessionUnlinked();
//                 break;
//             case"resize":
//                 "function" == typeof c.resize && c.resize(f.params);
//                 break;
//             case"error":
//                 "function" == typeof b && b(), "function" == typeof c.error && c.error(f.params);
//                 break;
//             case"save_callback":
//                 e = function (a) {
//                     f = {
//                         method: "continue_saving",
//                         params: {download_url: a ? a.url : void 0}
//                     }, g.postMessage(JSON.stringify(f), w.baseUrl)
//                 }, p(c, f, e);
//                 break;
//             case"_debug_log":
//                 d && d.log(f.params.msg)
//         }
//     }
//
//     function o(b, c, d) {
//         var e, f, g, h, i;
//         if (e = function () {
//             h.closed || h.close(), w.removeListener(a, "message", f), clearInterval(i)
//         }, f = function (a) {
//             a.source !== h && a.source !== (s ? s.contentWindow : void 0) || n(a, e, d)
//         }, g = function () {
//             h.closed && (e(), "function" == typeof d.cancel && d.cancel())
//         }, !(h = a.open(b, "Netffice24", c + ",resizable=yes,location=yes"))) throw new Error("Failed to open a popup window. Netffice.openWindow should only be called from within a user-triggered event handler such as a tap or click event.");
//         return h.focus(), i = setInterval(g, 100), w.addListener(a, "message", f), h
//     }
//
//     function p(a, b, c) {
//         var d;
//         a._fetch_url_on_save && (d = a.files[0], "function" != typeof d.url && "function" == typeof a.error && a.error("Something went wrong, file url callback not provided."), d.url(c))
//     }
//
//     function q(c, d) {
//         var e, f;
//         return e = (a.screenX || a.screenLeft) + ((a.outerWidth || b.documentElement.offsetWidth) - c) / 2, f = (a.screenY || a.screenTop) + ((a.outerHeight || b.documentElement.offsetHeight) - d) / 2, "width=" + c + ",height=" + d + ",left=" + e + ",top=" + f
//     }
//
//     function r() {
//         var a = function () {
//             b.removeEventListener("DOMContentLoaded", a, !1), d()
//         }, d = function () {
//             /\bTrident\b/.test(c.userAgent) && b.body && !s && (s = b.createElement("iframe"), s.setAttribute("id", "netffice_xcomm"), s.setAttribute("src", w.baseUrl + "/v1/netffice_xcomm.html"), s.style.display = "none", b.body.appendChild(s))
//         };
//         setTimeout(d, 0), "interactive" === b.readyState || "complete" === b.readyState ? setTimeout(a, 0) : b.addEventListener("DOMContentLoaded", a, !1)
//     }
//
//     var s, t, u, v, w = a.Netffice;
//     if (t = "http://devref.netffice24.com/javascript", u = ["text", "documents", "images", "video", "audio"], v = [].indexOf || function (a) {
//         for (var b = 0, c = this.length; b < c; b++) if (b in this && this[b] === a) return b;
//         return -1
//     }, w || (a.Netffice = w = {}), w.VERSION || (w.VERSION = "1.0"), w.baseUrl || (w.baseUrl = "https://space.malangmalang.com"), !w.appKey) {
//         var x;
//         w.appKey = (x = b.getElementById("Netfficejs")) ? x.getAttribute("data-app-key") : void 0
//     }
//     m() && (r(), e(), w.createLoginButton = function (a) {
//         var b;
//         return a || (a = {}), a = g(a), a.label = a.label || "Login Netffice 24", b = f(a), w.addListener(b, "click", function (b) {
//             b.preventDefault(), h({
//                 success: function (b) {
//                     "function" == typeof a.success && a.success(b)
//                 }, forceOAuth: a.forceOAuth, _trigger: "button"
//             }, {width: a.forceOAuth ? 580 : 350, height: 570, getUrl: i})
//         }), b
//     }, w.createChooseButton = function (a) {
//         var b;
//         return a || (a = {}), a = g(a), a.label = a.label || "Choose from Netffice 24", b = f(a), w.addListener(b, "click", function (b) {
//             b.preventDefault(), h({
//                 success: function (b) {
//                     "function" == typeof a.success && a.success(b)
//                 },
//                 public: a.public,
//                 forceOAuth: a.forceOAuth,
//                 cancel: a.cancel,
//                 linkType: a.linkType,
//                 multiselect: a.multiselect,
//                 type: a.type,
//                 extensions: a.extensions,
//                 _trigger: "button"
//             }, {width: 768, height: 570, getUrl: j})
//         }), b
//     }, w.isBrowserSupported = function () {
//         var a = m();
//         return w.isBrowserSupported = function () {
//             return a
//         }, a
//     }, w.addListener = function (a, b, c) {
//         a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, function (a) {
//             return a.preventDefault = function () {
//                 return this.returnValue = !1, !1
//             }, c(a)
//         })
//     }, w.removeListener = function (a, b, c) {
//         a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
//     })
// }(window, window.document, window.navigator, window.console);
//
//
//
// gnbLogin: function () {
//     var path = window.location.pathname;
//
//     if(Path){
//         path = Path;
//     }else {
//         path = path == "/" ? "" : path;
//     }
//
//     this.insertLog("WGNB0001");
//     // var params = window.location.search;
//
//     window.location.href = ACCOUNTS_URL + "/sign/in?redirect=" + encodeURIComponent(window.location.protocol + "//" + window.location.host + path);
// },