(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{xeq9:function(t,e,r){"use strict";r.r(e);var i=r("L2JU");function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){var i;return i=function(t,e){if("object"!=n(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==n(i)?i:i+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={data:function(){return{status:"",activeField:""}},computed:o({},Object(i.c)("TransactionsSingle",["entry","loading","lists"])),beforeDestroy:function(){this.resetState()},watch:{"$route.params.id":{immediate:!0,handler:function(){this.resetState(),this.fetchEditData(this.$route.params.id)}}},methods:o(o({},Object(i.b)("TransactionsSingle",["fetchEditData","resetState"])),{},{updateApproved:function(t){var e=this;axios.post("transactions/manage",{transaction_id:this.$route.params.id,action:t?"approve":"reject"}).then((function(t){e.$router.push({name:"check.list"})}))}})},l=r("KHd+"),u=Object(l.a)(c,(function(){var t,e,r=this,i=r._self._c;return i("div",{staticClass:"container-fluid"},[i("form",{on:{submit:function(t){return t.preventDefault(),r.submitForm.apply(null,arguments)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"card"},[i("div",{staticClass:"card-header card-header-primary card-header-icon"},[r._m(0),r._v(" "),i("h4",{staticClass:"card-title"},[r._v("\n              "+r._s(r.$t("global.edit"))+"\n              "),i("strong",[r._v(r._s(r.$t("pages.income.title_singular")))])])]),r._v(" "),i("div",{staticClass:"card-body"},[i("back-button")],1),r._v(" "),i("div",{staticClass:"card-body text-center"},[null!==(t=r.entry)&&void 0!==t&&null!==(t=t.media[0])&&void 0!==t&&t.original_url?i("img",{attrs:{src:null===(e=r.entry)||void 0===e||null===(e=e.media[0])||void 0===e?void 0:e.original_url,height:"450px"}}):r._e(),r._v(" "),i("h3",[r._v(r._s(r.$t("global.approve"))+"?")]),r._v(" "),i("span",{staticClass:"btn btn-success",attrs:{id:"approve-button"},on:{click:function(t){return r.updateApproved(!0)}}},[r._v(r._s(r.$t("global.approve")))]),r._v(" "),i("span",{staticClass:"btn btn-rose",attrs:{id:"disapprove-button"},on:{click:function(t){return r.updateApproved(!1)}}},[r._v(r._s(r.$t("global.disapprove")))])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-icon"},[t("i",{staticClass:"material-icons"},[this._v("edit")])])}],!1,null,null,null);e.default=u.exports}}]);