(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{319:function(t,a,s){"use strict";s.r(a);var e=s(40),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start","aria-hidden":"true"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),s("h1",{attrs:{id:"commands-commonly-used-for-local-dev"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands-commonly-used-for-local-dev","aria-hidden":"true"}},[t._v("#")]),t._v(" commands commonly used for local dev")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dev back-end or docs")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" serve "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dev front-end")]),t._v("\n")])])]),s("h1",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("h2",{attrs:{id:"basic-concepts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic Concepts")]),t._v(" "),s("blockquote",[s("p",[t._v("First of all, you need to know about the related ecology of Node. js and the installation of Node. js.\nWe will take a minute to introduce the basic concepts. By default, you know the basic operations of Linux and Git.\nYou can read the "),s("a",{attrs:{href:"https://strapi.io/documentation/3.0.0-beta.x/getting-started/install-requirements.html#basic-installation-requirements",target:"_blank",rel:"noopener noreferrer"}},[t._v("Basic installation Requirements"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"build-with-current-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-with-current-version","aria-hidden":"true"}},[t._v("#")]),t._v(" Build With(current version)")]),t._v(" "),s("p",[t._v("Vue.js: Front-end framework"),s("br"),t._v("Strapi.js: Open source Node.js Headless CMS to easily build customisable APIs"),s("br"),t._v("Sqlite: Database")]),t._v(" "),s("h1",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("ol",[s("li",[t._v("the API is powered by strapi.js")])]),t._v(" "),s("h2",{attrs:{id:"setup-backend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-backend","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup backend")]),t._v(" "),s("h3",{attrs:{id:"_1-quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-quick-start","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. quick start")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# by default, the current path is the root path for luban-h5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" back-end/h5-api\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install dependencies")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" psd "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install dependency of psd")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install ejs engine, mainly used for preview work")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" strapi-hook-ejs\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# modify h5-api/hook.json (next paragraph)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# see more details about strapi-hook-ejs：https://github.com/strapi/strapi/tree/master/packages/strapi-hook-ejs#configuration")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# local dev")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# additional notes: run `npm run localdev` if you want to debug it in vscode")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# #!en: default database is sqlite3(db location: h5-api/.tmp/data.db)")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问 http://locahost:1337/admin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# visit http://locahost:1337/admin")]),t._v("\n")])])]),s("p",[s("code",[t._v("h5-api/hook. json")]),t._v("  is configured as follows:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"load"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"before"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"order"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Define the hooks\' load order by putting their names in this array in the right order"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"after"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ejs"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"viewExt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ejs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"partial"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cache"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"debug"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"layout"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-something-important"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-something-important","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Something important")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("403 Forbidden")]),t._v(" ：Please follow the instructions to config the API can be publicly accessible: "),s("code",[t._v("[Roles And Permission] -> [Public] - [Permissions]")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/12668546/65381949-32addd00-dd2e-11e9-967a-e313dc6fca89.png",alt:"1567438464273-e0892ee2-5dca-45ec-a528-8090d80b23bd"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/12668546/65381950-32addd00-dd2e-11e9-859a-dbec0941dc5a.png",alt:"1567438463824-d6b87f12-eecf-4ae2-aa9c-bb4c73c4127d"}})]),t._v(" "),s("h5",{attrs:{id:"used-for-upload-work-cover"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#used-for-upload-work-cover","aria-hidden":"true"}},[t._v("#")]),t._v(" Used for upload work cover")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/12668546/65381948-32154680-dd2e-11e9-95ea-589f808ce095.png",alt:"1567858269172-44561808-5d49-43b5-89c1-f4f876eeec24"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("code",[t._v("ctx.render is not a function")]),t._v(" "),s("br"),t._v("solution:"),s("code",[t._v("Setup backend/quick start/strap-hook-ejs")])])]),t._v(" "),s("br"),t._v("\n```javascript\nerror TypeError: ctx.render is not a function\n  at previewOne (~/luban-h5/back-end/h5-api/api/work/controllers/Work.js:13:16)\n```\n"),s("h2",{attrs:{id:"setup-front-end"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-front-end","aria-hidden":"true"}},[t._v("#")]),t._v(" setup front-end")]),t._v(" "),s("h3",{attrs:{id:"_1-quick-start-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-quick-start-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. quick start")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# by default, the current path is the root path of luban-h5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" front-end/h5\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install dependencies")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" serve "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# develop")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# more commands")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# please refer to project/front-end/h5/package.json")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-build-preview-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-build-preview-engine","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. build preview engine")]),t._v(" "),s("h4",{attrs:{id:"basic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/ly525/luban-h5/blob/bd486ce16fc24bfd7030fc51857a579776e12e68/back-end/h5-api/api/work/controllers/Work.js#L12",target:"_blank",rel:"noopener noreferrer"}},[t._v("luban-h5/back-end/h5-api/api/work/controllers/Work.js/previewOne"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("previewOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" work "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" strapi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("work"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'engine'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" work "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("h4",{attrs:{id:"how-to-build-preview-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build-preview-engine","aria-hidden":"true"}},[t._v("#")]),t._v(" How to build preview engine")]),t._v(" "),s("ol",[s("li",[t._v("cd "),s("code",[t._v("front-end/h5")]),t._v(", run "),s("code",[t._v("yarn engine:build")])]),t._v(" "),s("li",[t._v("after build finished, an folder named "),s("code",[t._v("engine-assets")]),t._v("  is auto generated at "),s("code",[t._v("back-end/h5-api/public")])]),t._v(" "),s("li",[s("code",[t._v("preview.vue")]),t._v(" is preview modal, the mobile div is an iframe which a wrapper for builded "),s("code",[t._v("engine-entry")])])]),t._v(" "),s("h3",{attrs:{id:"_3-explanation-for-front-end-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-explanation-for-front-end-components","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. explanation for front-end components")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("lbp-")])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("lu-ban-plugin: plugins for luban-h5")]),t._v("：location: "),s("code",[t._v("front-end/h5/src/components/plugins")])])])])},[],!1,null,null,null);a.default=n.exports}}]);