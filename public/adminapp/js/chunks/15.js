(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3aEs":function(t,e,s){"use strict";var n={props:["title"]},i=s("KHd+"),a=Object(i.a)(n,(function(){return(0,this._self._c)("span",[this._v("\n  "+this._s(this.$t(this.title))+"\n")])}),[],!1,null,null,null);e.a=a.exports},"8P9S":function(t,e,s){(t.exports=s("I1BE")(!1)).push([t.i,".dropdown-menu .dropdown-item[data-v-b03a5c46]:focus,.dropdown-menu .dropdown-item[data-v-b03a5c46]:hover{box-shadow:none;background-color:#f4f4f4;color:#000;cursor:pointer!important}",""])},"90sC":function(t,e,s){"use strict";s("9NIy")},"9NIy":function(t,e,s){var n=s("8P9S");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,i);n.locals&&(t.exports=n.locals)},PMYq:function(t,e,s){"use strict";var n={name:"HeaderSettings",props:["columns"],methods:{isColVisible:function(t){return void 0===t.visible||""+t.visible=="true"},handleChange:function(t){this.$set(t,"visible",!this.isColVisible(t))}}},i=(s("90sC"),s("KHd+")),a=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{name:"HeaderSettings"}},[t._m(0),t._v(" "),e("div",{staticClass:"dropdown-menu p-2 mr-5"},[e("h5",{staticClass:"ml-2 mb-1"},[t._v("\n      "+t._s(t.$t("global.datatables.colvis"))+"\n    ")]),t._v(" "),e("hr",{staticClass:"my-1"}),t._v(" "),t._l(t.columns,(function(s,n){return e("div",{key:s.title+n},[e("div",{staticClass:"dropdown-item px-2 mt-0 mb-1",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleChange(s)}}},[t.isColVisible(s)?e("i",{staticClass:"material-icons text-success mr-2"},[t._v("\n          done\n        ")]):e("i",{staticClass:"material-icons text-rose mr-2"},[t._v("close")]),t._v("\n        "+t._s(t.$t(s.title))+"\n      ")])])})),t._v(" "),e("hr",{staticClass:"my-1"}),t._v(" "),e("button",{staticClass:"btn btn-default btn-sm pull-right",attrs:{type:"button"}},[t._v("\n      "+t._s(t.$t("global.close"))+"\n    ")])],2)])}),[function(){var t=this._self._c;return t("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[t("i",{staticClass:"fa fa-cog"}),this._v(" "),t("span",{staticClass:"caret"})])}],!1,null,"b03a5c46",null);e.a=a.exports},PQI8:function(t,e,s){"use strict";var n={props:{query:{type:Object,require:!0}},data:function(){return{focus:!1}},methods:{debounceSearch:_.debounce((function(t){this.query.s=t,this.query.offset=0}),300)}},i=s("KHd+"),a=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-group bmd-form-group",class:{"has-items":t.query.s,"is-focused":t.focus}},[e("label",{staticClass:"bmd-label-floating"},[t._v("\n    "+t._s(t.$t("global.search"))+"\n  ")]),t._v(" "),e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"search"},domProps:{value:t.query.s},on:{input:function(e){return t.debounceSearch(e.target.value)},focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}}),t._v(" "),0!==t.query.s.length?e("div",{staticClass:"btn btn-just-icon btn-round btn-link text-dark d-inline-block input-group-append m-0",staticStyle:{height:"36px"},on:{click:function(e){t.query.s=""}}},[e("i",{staticClass:"material-icons"},[t._v("clear")])]):t._e()])])}),[],!1,null,null,null);e.a=a.exports},jWWX:function(t,e,s){"use strict";s.r(e);var n=s("L2JU"),i=s("qM1Y"),a=s("3aEs"),r=s("PMYq");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){u(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function u(t,e,s){var n;return n=function(t,e){if("object"!=o(t)||!t)return t;var s=t[Symbol.toPrimitive];if(void 0!==s){var n=s.call(t,e||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==o(n)?n:n+"")in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={components:{GlobalSearch:s("PQI8").a,HeaderSettings:r.a},data:function(){return{columns:[{title:"pages.permission.fields.id",field:"id",thComp:a.a,sortable:!0,colStyle:"width: 100px;"},{title:"pages.permission.fields.title",field:"title",thComp:a.a,sortable:!0},{title:"global.actions",thComp:a.a,tdComp:i.a,visible:!0,thClass:"text-right",tdClass:"text-right td-actions",colStyle:"width: 150px;"}],query:{sort:"id",order:"desc",limit:100,s:""},xprops:{module:"PermissionsIndex",route:"permissions",permission_prefix:"permission_"}}},beforeDestroy:function(){this.resetState()},computed:c({},Object(n.c)("PermissionsIndex",["data","total","loading"])),watch:{query:{handler:function(t){this.setQuery(t),this.fetchIndexData()},deep:!0}},methods:c({},Object(n.b)("PermissionsIndex",["fetchIndexData","setQuery","resetState"]))},p=s("KHd+"),b=Object(p.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header card-header-primary card-header-icon"},[t._m(0),t._v(" "),e("h4",{staticClass:"card-title"},[t._v("\n            "+t._s(t.$t("global.table"))+"\n            "),e("strong",[t._v(t._s(t.$t("pages.permission.title")))])])]),t._v(" "),e("div",{staticClass:"card-body"},[t.$can(t.xprops.permission_prefix+"create")?e("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:t.xprops.route+".create"}}},[e("i",{staticClass:"material-icons"},[t._v("\n              add\n            ")]),t._v("\n            "+t._s(t.$t("global.add"))+"\n          ")]):t._e(),t._v(" "),e("button",{staticClass:"btn btn-default",class:{disabled:t.loading},attrs:{type:"button",disabled:t.loading},on:{click:t.fetchIndexData}},[e("i",{staticClass:"material-icons",class:{"fa-spin":t.loading}},[t._v("\n              refresh\n            ")]),t._v("\n            "+t._s(t.$t("global.refresh"))+"\n          ")])],1),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"table-overlay"},[e("div",{staticClass:"table-overlay-container"},[e("material-spinner"),t._v(" "),e("span",[t._v("Loading...")])],1)]),t._v(" "),e("datatable",{attrs:{columns:t.columns,data:t.data,total:t.total,query:t.query,xprops:t.xprops,HeaderSettings:!1,pageSizeOptions:[10,25,50,100]}},[e("global-search",{staticClass:"pull-left",attrs:{query:t.query}}),t._v(" "),e("header-settings",{staticClass:"pull-right",attrs:{columns:t.columns}})],1)],1)])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-icon"},[t("i",{staticClass:"material-icons"},[this._v("assignment")])])}],!1,null,null,null);e.default=b.exports},qM1Y:function(t,e,s){"use strict";var n={props:["row","xprops"],data:function(){return{}},created:function(){},methods:{destroyData:function(t){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonText:"Delete",confirmButtonColor:"#dd4b39",focusCancel:!0,reverseButtons:!0}).then((function(s){s.value&&e.$store.dispatch(e.xprops.module+"/destroyData",t).then((function(t){e.$eventHub.$emit("delete-success")}))}))}}},i=s("KHd+"),a=Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dt-action-container"},[t.$can(t.xprops.permission_prefix+"show")?e("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-azure",attrs:{to:{name:t.xprops.route+".show",params:{id:t.row.id}}}},[e("i",{staticClass:"material-icons"},[t._v("remove_red_eye")])]):t._e(),t._v(" "),t.$can(t.xprops.permission_prefix+"edit")?e("router-link",{staticClass:"btn btn-just-icon btn-round btn-link text-success",attrs:{to:{name:t.xprops.route+".edit",params:{id:t.row.id}}}},[e("i",{staticClass:"material-icons"},[t._v("edit")])]):t._e(),t._v(" "),t.$can(t.xprops.permission_prefix+"delete")?e("a",{staticClass:"btn btn-just-icon btn-round btn-link text-rose",attrs:{href:"#",type:"button"},on:{click:function(e){return e.preventDefault(),t.destroyData(t.row.id)}}},[e("i",{staticClass:"material-icons"},[t._v("delete")])]):t._e()],1)}),[],!1,null,null,null);e.a=a.exports}}]);