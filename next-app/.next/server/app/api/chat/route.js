"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/route";
exports.ids = ["app/api/chat/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fmichaelziegler%2FCode%2Finline-copilot-template%2Fnext-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmichaelziegler%2FCode%2Finline-copilot-template%2Fnext-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fmichaelziegler%2FCode%2Finline-copilot-template%2Fnext-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmichaelziegler%2FCode%2Finline-copilot-template%2Fnext-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_michaelziegler_Code_inline_copilot_template_next_app_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/route.ts */ \"(rsc)/./app/api/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/route\",\n        pathname: \"/api/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/route\"\n    },\n    resolvedPagePath: \"/Users/michaelziegler/Code/inline-copilot-template/next-app/app/api/chat/route.ts\",\n    nextConfigOutput,\n    userland: _Users_michaelziegler_Code_inline_copilot_template_next_app_app_api_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/chat/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRm1pY2hhZWx6aWVnbGVyJTJGQ29kZSUyRmlubGluZS1jb3BpbG90LXRlbXBsYXRlJTJGbmV4dC1hcHAlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGbWljaGFlbHppZWdsZXIlMkZDb2RlJTJGaW5saW5lLWNvcGlsb3QtdGVtcGxhdGUlMkZuZXh0LWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDaUM7QUFDOUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmxpbmUtY29waWxvdC1uZXh0LWFwcC8/ZDBmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvbWljaGFlbHppZWdsZXIvQ29kZS9pbmxpbmUtY29waWxvdC10ZW1wbGF0ZS9uZXh0LWFwcC9hcHAvYXBpL2NoYXQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2NoYXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGF0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGF0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21pY2hhZWx6aWVnbGVyL0NvZGUvaW5saW5lLWNvcGlsb3QtdGVtcGxhdGUvbmV4dC1hcHAvYXBwL2FwaS9jaGF0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jaGF0L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fmichaelziegler%2FCode%2Finline-copilot-template%2Fnext-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmichaelziegler%2FCode%2Finline-copilot-template%2Fnext-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/chat/route.ts":
/*!*******************************!*\
  !*** ./app/api/chat/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n//export const runtime = \"edge\";\nasync function POST(req) {\n    const body = await req.json();\n    console.log(\"body:\", body);\n    const input = body.input;\n    const jwt = body.jwt;\n    console.log(\"jwt:\", jwt);\n    // Pass jwt directly to getUserFromSession\n    const user = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.getUserFromSession)(req, jwt);\n    if (!user) return new Response(\"Missing User\", {\n        status: 500\n    });\n    if (!user || !user.openaiApiKey) return new Response(\"Missing OpenAI API key\", {\n        status: 500\n    });\n    const upstream = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n        method: \"POST\",\n        headers: {\n            \"Authorization\": `Bearer ${user.openaiApiKey}`,\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            model: \"gpt-4.1-mini\",\n            input,\n            stream: true\n        })\n    });\n    if (!upstream.ok || !upstream.body) {\n        const text = await upstream.text();\n        return new Response(text || \"Upstream error\", {\n            status: upstream.status || 500\n        });\n    }\n    // Pipe OpenAI stream straight through\n    return new Response(upstream.body, {\n        headers: {\n            \"Content-Type\": \"text/event-stream\",\n            \"Cache-Control\": \"no-cache\",\n            \"Connection\": \"keep-alive\",\n            \"Access-Control-Allow-Origin\": \"*\" // Consider restricting in production\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDdUQ7QUFHdkQsZ0NBQWdDO0FBRXpCLGVBQWVDLEtBQUtDLEdBQWdCO0lBQ3pDLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtJQUMzQkMsUUFBUUMsR0FBRyxDQUFDLFNBQVNIO0lBR3JCLE1BQU1JLFFBQVFKLEtBQUtJLEtBQUs7SUFDeEIsTUFBTUMsTUFBTUwsS0FBS0ssR0FBRztJQUNwQkgsUUFBUUMsR0FBRyxDQUFDLFFBQVFFO0lBQ3BCLDBDQUEwQztJQUMxQyxNQUFNQyxPQUFPLE1BQU1ULDZEQUFrQkEsQ0FBQ0UsS0FBS007SUFDM0MsSUFBSSxDQUFDQyxNQUFNLE9BQU8sSUFBSUMsU0FBUyxnQkFBZ0I7UUFBRUMsUUFBUTtJQUFJO0lBQzdELElBQUksQ0FBQ0YsUUFBUSxDQUFDQSxLQUFLRyxZQUFZLEVBQUUsT0FBTyxJQUFJRixTQUFTLDBCQUEwQjtRQUFFQyxRQUFRO0lBQUk7SUFFN0YsTUFBTUUsV0FBVyxNQUFNQyxNQUFNLDhDQUE4QztRQUN6RUMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsaUJBQWlCLENBQUMsT0FBTyxFQUFFUCxLQUFLRyxZQUFZLENBQUMsQ0FBQztZQUM5QyxnQkFBZ0I7UUFDbEI7UUFDQVQsTUFBTWMsS0FBS0MsU0FBUyxDQUFDO1lBQ25CQyxPQUFPO1lBQ1BaO1lBQ0FhLFFBQVE7UUFDVjtJQUNGO0lBRUEsSUFBSSxDQUFDUCxTQUFTUSxFQUFFLElBQUksQ0FBQ1IsU0FBU1YsSUFBSSxFQUFFO1FBQ2xDLE1BQU1tQixPQUFPLE1BQU1ULFNBQVNTLElBQUk7UUFDaEMsT0FBTyxJQUFJWixTQUFTWSxRQUFRLGtCQUFrQjtZQUFFWCxRQUFRRSxTQUFTRixNQUFNLElBQUk7UUFBSTtJQUNqRjtJQUVBLHNDQUFzQztJQUN0QyxPQUFPLElBQUlELFNBQVNHLFNBQVNWLElBQUksRUFBRTtRQUNqQ2EsU0FBUztZQUNQLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsY0FBYztZQUNkLCtCQUErQixJQUFJLHFDQUFxQztRQUMxRTtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmxpbmUtY29waWxvdC1uZXh0LWFwcC8uL2FwcC9hcGkvY2hhdC9yb3V0ZS50cz9kZTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0IH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VyRnJvbVNlc3Npb24gfSBmcm9tIFwiLi4vLi4vLi4vbGliL2F1dGhcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuXG4vL2V4cG9ydCBjb25zdCBydW50aW1lID0gXCJlZGdlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKFwiYm9keTpcIiwgYm9keSk7XG4gIFxuXG4gIGNvbnN0IGlucHV0ID0gYm9keS5pbnB1dDtcbiAgY29uc3Qgand0ID0gYm9keS5qd3Q7XG4gIGNvbnNvbGUubG9nKFwiand0OlwiLCBqd3QpO1xuICAvLyBQYXNzIGp3dCBkaXJlY3RseSB0byBnZXRVc2VyRnJvbVNlc3Npb25cbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJGcm9tU2Vzc2lvbihyZXEsIGp3dCkgYXMgeyBpZDogbnVtYmVyOyB1c2VybmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nOyBvcGVuYWlBcGlLZXk/OiBzdHJpbmcgfTtcbiAgaWYgKCF1c2VyKSByZXR1cm4gbmV3IFJlc3BvbnNlKFwiTWlzc2luZyBVc2VyXCIsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIGlmICghdXNlciB8fCAhdXNlci5vcGVuYWlBcGlLZXkpIHJldHVybiBuZXcgUmVzcG9uc2UoXCJNaXNzaW5nIE9wZW5BSSBBUEkga2V5XCIsIHsgc3RhdHVzOiA1MDAgfSk7XG5cbiAgY29uc3QgdXBzdHJlYW0gPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9uc1wiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3VzZXIub3BlbmFpQXBpS2V5fWAsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbW9kZWw6IFwiZ3B0LTQuMS1taW5pXCIsXG4gICAgICBpbnB1dCxcbiAgICAgIHN0cmVhbTogdHJ1ZVxuICAgIH0pXG4gIH0pO1xuXG4gIGlmICghdXBzdHJlYW0ub2sgfHwgIXVwc3RyZWFtLmJvZHkpIHtcbiAgICBjb25zdCB0ZXh0ID0gYXdhaXQgdXBzdHJlYW0udGV4dCgpO1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGV4dCB8fCBcIlVwc3RyZWFtIGVycm9yXCIsIHsgc3RhdHVzOiB1cHN0cmVhbS5zdGF0dXMgfHwgNTAwIH0pO1xuICB9XG5cbiAgLy8gUGlwZSBPcGVuQUkgc3RyZWFtIHN0cmFpZ2h0IHRocm91Z2hcbiAgcmV0dXJuIG5ldyBSZXNwb25zZSh1cHN0cmVhbS5ib2R5LCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJ0ZXh0L2V2ZW50LXN0cmVhbVwiLFxuICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwibm8tY2FjaGVcIixcbiAgICAgIFwiQ29ubmVjdGlvblwiOiBcImtlZXAtYWxpdmVcIixcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiIC8vIENvbnNpZGVyIHJlc3RyaWN0aW5nIGluIHByb2R1Y3Rpb25cbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImdldFVzZXJGcm9tU2Vzc2lvbiIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dCIsImp3dCIsInVzZXIiLCJSZXNwb25zZSIsInN0YXR1cyIsIm9wZW5haUFwaUtleSIsInVwc3RyZWFtIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGVsIiwic3RyZWFtIiwib2siLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserFromSession: () => (/* binding */ getUserFromSession)\n/* harmony export */ });\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"changeme\";\nasync function getUserFromSession(req, jwtOverride) {\n    const authHeader = jwtOverride ? `Bearer ${jwtOverride}` : req.headers.get(\"authorization\");\n    if (!authHeader) return null;\n    const token = authHeader.replace(\"Bearer \", \"\");\n    try {\n        const payload = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, JWT_SECRET);\n        if (!payload.id) return null;\n        const user = await _prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                id: payload.id\n            }\n        });\n        return user;\n    } catch  {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzhCO0FBQ0M7QUFFL0IsTUFBTUUsYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVLElBQUk7QUFTdEMsZUFBZUcsbUJBQ3BCQyxHQUFnQixFQUNoQkMsV0FBb0I7SUFFcEIsTUFBTUMsYUFBYUQsY0FDZixDQUFDLE9BQU8sRUFBRUEsWUFBWSxDQUFDLEdBQ3ZCRCxJQUFJRyxPQUFPLENBQUNDLEdBQUcsQ0FBQztJQUNwQixJQUFJLENBQUNGLFlBQVksT0FBTztJQUN4QixNQUFNRyxRQUFRSCxXQUFXSSxPQUFPLENBQUMsV0FBVztJQUM1QyxJQUFJO1FBQ0YsTUFBTUMsVUFBVVosMERBQVUsQ0FBQ1UsT0FBT1Q7UUFDbEMsSUFBSSxDQUFDVyxRQUFRRSxFQUFFLEVBQUUsT0FBTztRQUN4QixNQUFNQyxPQUFPLE1BQU1oQiwrQ0FBTUEsQ0FBQ2dCLElBQUksQ0FBQ0MsVUFBVSxDQUFDO1lBQUVDLE9BQU87Z0JBQUVILElBQUlGLFFBQVFFLEVBQUU7WUFBQztRQUFFO1FBQ3RFLE9BQU9DO0lBQ1QsRUFBRSxPQUFNO1FBQ04sT0FBTztJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmxpbmUtY29waWxvdC1uZXh0LWFwcC8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4vcHJpc21hXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJjaGFuZ2VtZVwiO1xuXG5leHBvcnQgdHlwZSBVc2VyID0ge1xuICBpZDogbnVtYmVyO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBvcGVuYWlBcGlLZXk/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckZyb21TZXNzaW9uKFxuICByZXE6IE5leHRSZXF1ZXN0LFxuICBqd3RPdmVycmlkZT86IHN0cmluZ1xuKTogUHJvbWlzZTxVc2VyIHwgbnVsbD4ge1xuICBjb25zdCBhdXRoSGVhZGVyID0gand0T3ZlcnJpZGVcbiAgICA/IGBCZWFyZXIgJHtqd3RPdmVycmlkZX1gXG4gICAgOiByZXEuaGVhZGVycy5nZXQoXCJhdXRob3JpemF0aW9uXCIpO1xuICBpZiAoIWF1dGhIZWFkZXIpIHJldHVybiBudWxsO1xuICBjb25zdCB0b2tlbiA9IGF1dGhIZWFkZXIucmVwbGFjZShcIkJlYXJlciBcIiwgXCJcIik7XG4gIHRyeSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGp3dC52ZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpIGFzIHsgaWQ6IG51bWJlciB9O1xuICAgIGlmICghcGF5bG9hZC5pZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogcGF5bG9hZC5pZCB9IH0pO1xuICAgIHJldHVybiB1c2VyIGFzIFVzZXI7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiand0IiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJnZXRVc2VyRnJvbVNlc3Npb24iLCJyZXEiLCJqd3RPdmVycmlkZSIsImF1dGhIZWFkZXIiLCJoZWFkZXJzIiwiZ2V0IiwidG9rZW4iLCJyZXBsYWNlIiwicGF5bG9hZCIsInZlcmlmeSIsImlkIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUM5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUMvQixpRUFBZUMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lubGluZS1jb3BpbG90LW5leHQtYXBwLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchat%2Froute&page=%2Fapi%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Froute.ts&appDir=%2FUsers%2Fmichaelziegler%2FCode%2Finline-copilot-template%2Fnext-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmichaelziegler%2FCode%2Finline-copilot-template%2Fnext-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();