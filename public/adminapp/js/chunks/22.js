(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"5Otv":function(t,e,s){"use strict";s.r(e);var i=s("L2JU");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e,s){var i;return i=function(t,e){if("object"!=r(t)||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var i=s.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==r(i)?i:i+"")in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={components:{Attachment:s("Dqre").a},data:function(){return{status:"",activeField:""}},computed:n({},Object(i.c)("TransactionsSingle",["entry","loading","lists"])),beforeDestroy:function(){this.resetState()},watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},methods:n(n({},Object(i.b)("TransactionsSingle",["fetchEditData","updateData","resetState","setUser","setType","setAmount","setDescription","insertCheckImageFile","removeCheckImageFile","setApproved"])),{},{updateUser:function(t){this.setUser(t)},updateType:function(t){this.setType(t)},updateAmount:function(t){this.setAmount(t.target.value)},updateDescription:function(t){this.setDescription(t.target.value)},updateApproved:function(t){this.setApproved(t.target.checked)},getRoute:function(t){return"".concat(axios.defaults.baseURL).concat(t,"/media")},submitForm:function(){var t=this;this.updateData().then((function(){t.$router.push({name:"expenses.index"}),t.$eventHub.$emit("update-success")})).catch((function(e){t.status="failed",_.delay((function(){t.status=""}),3e3)}))},focusField:function(t){this.activeField=t},clearFocus:function(){this.activeField=""}})},u=s("KHd+"),l=Object(u.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header card-header-primary card-header-icon"},[t._m(0),t._v(" "),e("h4",{staticClass:"card-title"},[t._v("\n              "+t._s(t.$t("global.edit"))+"\n              "),e("strong",[t._v(t._s(t.$t("pages.expense.title_singular")))])])]),t._v(" "),e("div",{staticClass:"card-body"},[e("back-button")],1),t._v(" "),e("div",{staticClass:"card-body"},[e("bootstrap-alert"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.type,"is-focused":"type"==t.activeField}},[e("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("pages.transaction.fields.type")))]),t._v(" "),e("v-select",{key:"type-field",attrs:{name:"type",value:t.entry.type,options:t.lists.type,reduce:function(t){return t.value}},on:{input:t.updateType,search:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"focus",void 0,e.key,void 0)?null:t.focusField("type")},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"blur",void 0,e.key,void 0)?null:t.clearFocus.apply(null,arguments)}]}})],1),t._v(" "),e("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.amount,"is-focused":"amount"==t.activeField}},[e("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("pages.transaction.fields.amount")))]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"number",step:"0.01",required:""},domProps:{value:t.entry.amount},on:{input:t.updateAmount,focus:function(e){return t.focusField("amount")},blur:t.clearFocus}})]),t._v(" "),e("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.entry.description,"is-focused":"description"==t.activeField}},[e("label",{staticClass:"bmd-label-floating required"},[t._v(t._s(t.$t("pages.transaction.fields.description")))]),t._v(" "),e("textarea",{staticClass:"form-control",attrs:{rows:"5",required:""},domProps:{value:t.entry.description},on:{input:t.updateDescription,focus:function(e){return t.focusField("description")},blur:t.clearFocus}})])])])],1),t._v(" "),e("div",{staticClass:"card-footer"},[e("vue-button-spinner",{staticClass:"btn-primary",attrs:{status:t.status,isLoading:t.loading,disabled:t.loading}},[t._v("\n              "+t._s(t.$t("global.save"))+"\n            ")])],1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-icon"},[t("i",{staticClass:"material-icons"},[this._v("edit")])])}],!1,null,null,null);e.default=l.exports}}]);