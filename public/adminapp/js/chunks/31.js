(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{GCgq:function(t,e,s){"use strict";s.r(e);var a=s("L2JU");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){var a;return a=function(t,e){if("object"!=r(t)||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var a=s.call(t,e||"default");if("object"!=r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==r(a)?a:a+"")in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={data:function(){return{status:"",activeField:""}},computed:o({},Object(a.c)("UsersSingle",["entry","loading","lists"])),beforeDestroy:function(){this.resetState()},watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},methods:o(o({},Object(a.b)("UsersSingle",["fetchEditData","updateData","resetState","setName","setEmail","setPassword","setRoles","setIsAdmin"])),{},{updateName:function(t){this.setName(t.target.value)},updateEmail:function(t){this.setEmail(t.target.value)},updatePassword:function(t){this.setPassword(t.target.value)},updateRoles:function(t){this.setRoles(t)},updateIsAdmin:function(t){this.setIsAdmin(t.target.checked)},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"users.index"}),t.$eventHub.$emit("update-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},c=s("KHd+"),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header card-header-primary card-header-icon"},[t._m(0),t._v(" "),e("h4",{staticClass:"card-title"},[t._v("\n              "+t._s(t.$t("global.edit"))+"\n              "),e("strong",[t._v(t._s(t.$t("pages.user.title_singular")))])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("back-button")],1),t._v(" "),e("div",{staticClass:"card-body"},[e("bootstrap-alert"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.name,"is-focused":"name"==t.activeField}},[e("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("pages.user.fields.name")))]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.name},on:{input:t.updateName,focus:function(e){return t.focusField("name")},blur:t.clearFocus}})]),t._v(" "),e("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.email,"is-focused":"email"==t.activeField}},[e("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("pages.user.fields.email")))]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.entry.email},on:{input:t.updateEmail,focus:function(e){return t.focusField("email")},blur:t.clearFocus}})]),t._v(" "),e("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.password,"is-focused":"password"==t.activeField}},[e("label",{staticClass:"bmd-label-floating"},[t._v(t._s(t.$t("pages.user.fields.password")))]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.entry.password},on:{input:t.updatePassword,focus:function(e){return t.focusField("password")},blur:t.clearFocus}})]),t._v(" "),e("div",{staticClass:"form-group bmd-form-group",class:{"has-items":0!==t.entry.roles.length,"is-focused":"roles"==t.activeField}},[e("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("pages.user.fields.roles")))]),t._v(" "),e("v-select",{key:"roles-field",attrs:{name:"roles",label:"title",value:t.entry.roles,options:t.lists.roles,closeOnSelect:!1,multiple:""},on:{input:t.updateRoles,search:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"focus",void 0,e.key,void 0)?null:t.focusField("roles")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"blur",void 0,e.key,void 0)?null:t.clearFocus.apply(null,arguments)}]}})],1),t._v(" "),e("div",{staticClass:"form-group form-check"},[e("label",{staticClass:"form-check-label"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{value:t.entry.is_admin,checked:t.entry.is_admin},on:{change:t.updateIsAdmin}}),t._m(1),t._v(t._s(t.$t("pages.user.fields.is_admin")))])])])])],1),t._v(" "),e("div",{staticClass:"card-footer"},[e("vue-button-spinner",{staticClass:"btn-primary",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              "+t._s(t.$t("global.save"))+"\n            ")])],1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-icon"},[t("i",{staticClass:"material-icons"},[this._v("edit")])])},function(){var t=this._self._c;return t("span",{staticClass:"form-check-sign"},[t("span",{staticClass:"check"})])}],!1,null,null,null);e.default=u.exports}}]);