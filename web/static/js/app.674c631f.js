(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],d=0,_=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&_.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(_.length)_.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function s(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0aad1c":"a948801f","chunk-2d213307":"c74c5f98"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("div",{attrs:{id:"app"}},[n("v-app-bar",{attrs:{app:"",color:"primary"}},[n("v-spacer"),e.is_login?n("span",[n("v-btn",{attrs:{text:""},on:{click:e.logout}},[n("span",{staticClass:"mr-2"},[e._v("登出")]),n("v-icon",[e._v("mdi-home-export-outline")])],1)],1):n("span",[n("router-link",{attrs:{to:"/login"}},[n("v-btn",{attrs:{text:""}},[n("v-icon",[e._v("mdi-account-outline")]),n("span",{staticClass:"mr-2"},[e._v("登录")])],1)],1)],1)],1),n("router-view")],1)])},o=[],s={data:function(){return{is_login:!1}},created:function(){this.check_login()},methods:{check_login:function(){localStorage.token&&(this.is_login=!0)},logout:function(){localStorage.token="",location.reload()}}},i=s,c=(n("034f"),n("2877")),l=n("6544"),d=n.n(l),u=n("7496"),_=n("40dc"),v=n("8336"),p=n("132d"),m=n("2fa4"),f=Object(c["a"])(i,r,o,!1,null,null,null),h=f.exports;d()(f,{VApp:u["a"],VAppBar:_["a"],VBtn:v["a"],VIcon:p["a"],VSpacer:m["a"]});var g=n("f309");a["a"].use(g["a"]);var w=new g["a"]({theme:{dark:!0}}),b=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-main",{staticClass:"ma-16"},[n("v-alert",{attrs:{dismissible:"",transition:"scale-transition",type:e.alertType,value:e.alert}},[e._v(" "+e._s(e.alertMsg)+" ")]),n("v-expansion-panels",{attrs:{multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" 节点信息 ")]),n("v-expansion-panel-content",[n("NoneInfo")],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[e._v(" 用户信息 ")]),n("v-expansion-panel-content",[n("UserInfo")],1)],1)],1)],1)},k=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-dialog",{attrs:{width:"500"},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[n("v-alert",{attrs:{type:e.alertType}},[e._v(" "+e._s(e.alertMsg)+" ")])],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.worknode_cmd,callback:function(t){e.worknode_cmd=t},expression:"worknode_cmd"}},[n("v-card",{staticClass:"pa-10",attrs:{width:"1000px",flat:""}},[n("v-card-title",[e._v(" 请在子节点执行以下命令 ")]),n("v-card-text",[e._v(" "+e._s(e.add_msg)+" ")])],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.del_node_show,callback:function(t){e.del_node_show=t},expression:"del_node_show"}},[n("v-card",[n("v-card-title",[e._v(" 删除节点 ")]),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(' 是否删除节点"'+e._s(e.current_node)+'"? 该操作不可逆 ')])],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"error",disabled:!e.valid},on:{click:e.send_del_node}},[e._v(" 确定删除 ")]),n("v-btn",{staticClass:"mr-4",on:{click:function(t){e.del_node_show=!1}}},[e._v(" 取消 ")])],1)],1)],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.add_node_dialog,callback:function(t){e.add_node_dialog=t},expression:"add_node_dialog"}},[n("v-card",{staticClass:"pa-10",attrs:{width:"500px",flat:""}},[n("v-card-title",[e._v(" 添加节点 ")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:"节点名称","persistent-hint":""},model:{value:e.nodename,callback:function(t){e.nodename=t},expression:"nodename"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:"备注","persistent-hint":""},model:{value:e.node_remarks,callback:function(t){e.node_remarks=t},expression:"node_remarks"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:"域名",hint:"www.example.com","persistent-hint":""},model:{value:e.domain,callback:function(t){e.domain=t},expression:"domain"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{"append-icon":e.showpwd?"mdi-eye":"mdi-eye-off",type:e.showpwd?"text":"password",label:"密码"},on:{"click:append":function(t){e.showpwd=!e.showpwd}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:"节点地域",hint:"中国台湾","persistent-hint":""},model:{value:e.region,callback:function(t){e.region=t},expression:"region"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.add_node}},[e._v(" 添加 ")]),n("v-btn",{staticClass:"mr-4",on:{click:function(t){e.add_node_dialog=!e.add_node_dialog}}},[e._v(" 取消 ")])],1)],1)],1)],1)],1)],1),n("v-progress-linear",{attrs:{active:e.loading,indeterminate:e.loading,absolute:"",bottom:"",color:"blue-grey accent-4"}}),n("v-row",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[n("v-col",{attrs:{cols:"20",md:"4"}},[n("v-btn",{attrs:{color:"success"},on:{click:function(t){e.add_node_dialog=!e.add_node_dialog}}},[n("v-icon",[e._v("mdi-plus-circle-multiple-outline")])],1),n("v-btn",{staticClass:"ma-3",attrs:{color:"blue-grey",loading:e.refresh},on:{click:function(t){e.refresh=!0,e.get_info()}}},[n("v-icon",[e._v("mdi-refresh")])],1)],1)],1),n("v-divider",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]}),n("v-row",e._l(e.node_info,(function(t){return n("v-col",{key:t.id,attrs:{cols:"20",md:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{elevation:"0"}},[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(t.node_name))]),n("span",{staticClass:"mt-2 ps-3 blue-grey--text text-caption"},[e._v(" ↑ "+e._s(e.node_status[t.node_domain]["up_speed"])+"/s | ↓ "+e._s(e.node_status[t.node_domain]["down_speed"])+"/s ")]),n("v-row",{attrs:{align:"center",justify:"end"}},[n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(a){var r=a.on,o=a.attrs;return[n("v-chip",e._g(e._b({staticClass:"mt-1",attrs:{"x-small":""}},"v-chip",o,!1),r),[e._v(" "+e._s(t.node_usernumber)+" ")])]}}],null,!0)},[n("span",[e._v("用户数量")])]),n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(a){var r=a.on,o=a.attrs;return[n("v-btn",e._g(e._b({staticClass:"ma-3",attrs:{"x-small":"",color:e.node_status[t.node_domain].node_status.status}},"v-btn",o,!1),r),[e._v(" "+e._s(e.node_status[t.node_domain].node_status.info)+" ")])]}}],null,!0)},[n("span",[e._v(e._s(e.node_status[t.node_domain].node_status.msg))])])],1)],1),n("v-divider"),n("v-card-text",{staticClass:"font-weight-bold"},[n("div",{staticClass:"text-overline mb-1"},[e._v(" cpu "),n("v-progress-linear",{attrs:{rounded:"",height:"15",value:e.node_status[t.node_domain].cpu_percent}},[e._v(e._s(e.node_status[t.node_domain].cpu_percent)+"%")])],1),n("div",{staticClass:"text-overline mb-1"},[e._v(" 内存 "+e._s(e.node_status[t.node_domain].mem_used)+" / "+e._s(e.node_status[t.node_domain].mem_total)+" "),n("v-progress-linear",{attrs:{rounded:"",height:"15",value:e.node_status[t.node_domain].mem_percent}},[e._v(e._s(e.node_status[t.node_domain].mem_percent)+"%")])],1),n("div",{staticClass:"text-overline mb-1"},[e._v(" swap "+e._s(e.node_status[t.node_domain].swap_used)+" / "+e._s(e.node_status[t.node_domain].swap_total)+" "),n("v-progress-linear",{attrs:{rounded:"",height:"15",value:e.node_status[t.node_domain].swap_percent}},[e._v(e._s(e.node_status[t.node_domain].swap_percent)+"%")])],1),n("div",{staticClass:"text-overline mb-1"},[e._v(" 磁盘 "+e._s(e.node_status[t.node_domain].disk_used)+" / "+e._s(e.node_status[t.node_domain].disk_total)+" "),n("v-progress-linear",{attrs:{rounded:"",height:"15",value:e.node_status[t.node_domain].disk_percent}},[e._v(e._s(e.node_status[t.node_domain].disk_percent)+"%")])],1)]),n("v-card-actions",[n("v-list-item",{staticClass:"grow"},[n("a",{staticClass:"ma-n1"},[e._v(e._s(t.node_domain)+" | "+e._s(t.node_region))]),n("v-spacer"),n("v-btn",{attrs:{color:"error",plain:""},on:{click:function(n){e.del_node_show=!0,e.del_node(t.node_name)}}},[e._v(" 删除 ")])],1)],1)],1)],1)})),1)],1)},j=[],C=n("1da1"),V=(n("96cf"),n("7c15")),O={data:function(){return{loading:!0,del_node_show:!1,add_node_dialog:!1,refresh:!1,showpwd:!1,worknode_cmd:!1,valid:!1,alert:!1,alertMsg:"",alertType:"",add_msg:"",password:"",domain:"",nodename:"",node_remarks:"",current_node:"",region:"",node_info:[],domain_list:[],node_status:{}}},created:function(){var e=this;this.get_info(),window.setInterval((function(){setTimeout((function(){e.get_status()}),0)}),5e3)},methods:{get_info:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(V["e"])().then((function(t){e.node_info=t["data"]["node_list"],e.domain_list=t["data"]["domain_list"]}));case 2:e.get_status(),e.refresh=!1;case 4:case"end":return t.stop()}}),t)})))()},get_status:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(V["f"])(e.node_info).then((function(t){e.node_status=t["data"],e.loading=!1}));case 2:case"end":return t.stop()}}),t)})))()},add_node:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={node_name:e.nodename,node_domain:e.domain,node_region:e.region,node_remarks:e.node_remarks},t.next=3,Object(V["a"])(n).then((function(t){e.add_code=t["code"],e.add_msg=t["data"],200==e.add_code?(e.alertType="success",e.alertMsg="添加成功!",e.alert=!0,e.worknode_cmd=!0):(e.alertType="error",console.log(e.add_msg),e.alertMsg=e.add_msg,e.alert=!0)}));case 3:e.get_info(),e.add_node_dialog=!1;case 5:case"end":return t.stop()}}),t)})))()},del_node:function(e){console.log(e),this.current_node=e},send_del_node:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.current_node),n={node_name:e.current_node},t.next=4,Object(V["b"])(n).then((function(e){console.log(e)}));case 4:e.del_node_show=!1,e.get_info();case 6:case"end":return t.stop()}}),t)})))()}}},T=O,R=n("0798"),S=n("b0af"),P=n("99d9"),M=n("cc20"),E=n("62ad"),q=n("a523"),A=n("169a"),I=n("ce7e"),z=n("4bd4"),D=n("da13"),$=n("8e36"),N=n("0fd9"),L=n("8654"),B=n("3a2f"),H=Object(c["a"])(T,y,j,!1,null,null,null),F=H.exports;d()(H,{VAlert:R["a"],VBtn:v["a"],VCard:S["a"],VCardActions:P["a"],VCardText:P["b"],VCardTitle:P["c"],VChip:M["a"],VCol:E["a"],VContainer:q["a"],VDialog:A["a"],VDivider:I["a"],VForm:z["a"],VIcon:p["a"],VListItem:D["a"],VProgressLinear:$["a"],VRow:N["a"],VSpacer:m["a"],VTextField:L["a"],VTooltip:B["a"]});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"ma-16",attrs:{elevation:"0"}},[n("v-dialog",{attrs:{width:"500"},model:{value:e.alert,callback:function(t){e.alert=t},expression:"alert"}},[n("v-alert",{attrs:{type:e.alertType}},[e._v(" "+e._s(e.alertMsg)+" ")])],1),n("v-card-title",[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"搜索","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("v-spacer"),n("v-spacer"),n("v-btn",{staticClass:"ma-2",attrs:{color:"success",dark:""},on:{click:function(t){e.add_user=!0}}},[n("v-icon",[e._v("mdi-account-plus")])],1)],1),n("v-data-table",{attrs:{"item-key":"username",loading:e.loadingdata,"loading-text":"数据加载中...",headers:e.headers,items:e.desserts,search:e.search},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[n("v-tooltip",{attrs:{top:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){e.set_user_show=!0,e.set_user(a)}}},"v-icon",o,!1),r),[e._v(" mdi-account-edit ")])]}}],null,!0)},[n("span",[e._v("编辑用户")])]),n("v-tooltip",{attrs:{top:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){e.get_trojan(a),e.trojan_show=!0}}},"v-icon",o,!1),r),[e._v(" mdi-eye ")])]}}],null,!0)},[n("span",[e._v("查看节点")])]),n("v-tooltip",{attrs:{top:"",color:"error"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){e.del_user(a),e.del_user_show=!0,e.valid=!0}}},"v-icon",o,!1),r),[e._v(" mdi-delete ")])]}}],null,!0)},[n("span",[e._v("删除用户")])])]}}])}),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.add_user,callback:function(t){e.add_user=t},expression:"add_user"}},[n("v-card",[n("v-card-title",[e._v(" 新增用户 ")]),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{label:"用户名","persistent-hint":""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-text-field",{attrs:{"append-icon":e.showpwd?"mdi-eye":"mdi-eye-off",type:e.showpwd?"text":"password",label:"密码"},on:{"click:append":function(t){e.showpwd=!e.showpwd}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.register}},[e._v(" 添加 ")]),n("v-btn",{staticClass:"mr-4",on:{click:function(t){e.add_user=!1}}},[e._v(" 取消 ")])],1)],1)],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.set_user_show,callback:function(t){e.set_user_show=t},expression:"set_user_show"}},[n("v-card",[n("v-card-title",[e._v(" 编辑用户 ")]),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-text-field",{attrs:{label:"流量限制",hint:"-1为无限制",type:"number",min:"-1",suffix:"GB"},model:{value:e.quota,callback:function(t){e.quota=t},expression:"quota"}},[e._v("-1")])],1),n("v-col",{attrs:{cols:"12",sm:"8"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"到期时间","prepend-icon":"mdi-calendar",readonly:"",clearable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",r,!1),a))]}}]),model:{value:e.date_menu,callback:function(t){e.date_menu=t},expression:"date_menu"}},[n("v-date-picker",{attrs:{min:e.date_min,locale:"zh-cn"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[e._v(" 用户节点 "),n("v-chip-group",{attrs:{column:""}},e._l(e.current_nodes,(function(t){return n("span",{key:t.id},[n("v-chip",{attrs:{color:"primary"},on:{click:function(n){return e.remove_user_nodes(t)}}},[e._v(" "+e._s(t)+" ")])],1)})),0)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[e._v(" 可用节点 "),n("v-chip-group",{attrs:{column:""}},e._l(e.available_nodes,(function(t){return n("span",{key:t.id},[n("v-chip",{on:{click:function(n){return e.add_user_nodes(t)}}},[e._v(" "+e._s(t)+" ")])],1)})),0)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.send_set_user}},[e._v(" 提交 ")]),n("v-btn",{staticClass:"mr-4",on:{click:function(t){e.set_user_show=!1}}},[e._v(" 取消 ")])],1)],1)],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.del_user_show,callback:function(t){e.del_user_show=t},expression:"del_user_show"}},[n("v-card",[n("v-card-title",[e._v(" 删除用户 ")]),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(' 是否删除用户"'+e._s(e.current_user)+'"? 该操作不可逆 ')]),n("v-text-field",{attrs:{label:"输入用户名",rules:[e.rules.del_user]}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"error",disabled:!e.valid},on:{click:e.send_del_user}},[e._v(" 确定删除 ")]),n("v-btn",{staticClass:"mr-4",on:{click:function(t){e.del_user_show=!1}}},[e._v(" 取消 ")])],1)],1)],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"700px"},model:{value:e.trojan_show,callback:function(t){e.trojan_show=t},expression:"trojan_show"}},[n("v-card",{attrs:{loading:e.trojan_url_loading}},[n("v-card-title",[e._v(" trojan 链接 ")]),n("v-card-text",[n("v-container",{attrs:{fluid:""}},e._l(e.trojan_urls,(function(t){return n("v-row",{key:t.id},[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("span",[e._v(e._s(t))])])],1)})),1)],1),n("v-card-title",[e._v(" 订阅链接 ")]),n("v-card-text",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[e._v(" 普通订阅："+e._s(e.subscribe_link)+" ")]),n("v-col",{attrs:{cols:"12",sm:"12"}},[e._v(" clash 订阅："+e._s(e.subscribe_link+"&t=clash")+" ")])],1),e.trojan_url_loading?e._e():n("v-row",[n("v-col",[e.subscribe_link?n("span",[n("v-btn",{on:{click:e.update_subscribe_link}},[e._v(" 重置订阅链接 ")])],1):n("span",[n("v-btn",{on:{click:e.update_subscribe_link}},[e._v(" 创建订阅链接 ")])],1)])],1)],1)],1)],1)],1)],1)},U=[];n("a434"),n("4de4");Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++)if(this[t]==e)return t;return-1},Array.prototype.remove=function(e){var t=this.indexOf(e);t>-1&&this.splice(t,1)};var G={data:function(){var e=this;return{search:"",username:"",password:"",alertMsg:"",alertType:"",alert:!1,valid:!1,loadingdata:!0,trojan_url_loading:!0,set_user_show:!1,del_user_show:!1,trojan_show:!1,showpwd:!1,add_user:!1,date_menu:!1,date_min:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()+864e5).toISOString().substr(0,10),date:"",quota:-1,current_user:"",all_nodes:[],current_nodes:[],available_nodes:[],trojan_urls:[],subscribe_link:"",rules:{del_user:function(t){return t==e.current_user}},headers:[{text:"用户",align:"start",sortable:!1,value:"username"},{text:"上传流量",value:"upload"},{text:"下载流量",value:"download"},{text:"总流量",value:"total"},{text:"流量限制",value:"quota"},{text:"到期时间",value:"expiry_date"},{text:"操作",value:"actions",sortable:!1}],desserts:[]}},created:function(){this.get_user()},methods:{set_user:function(e){this.current_user=e.username,this.current_nodes=e.nodes,"永久"!=e.expiry_date&&(this.date=e.expiry_date),"无限制"==e.quota?this.quota=-1:this.quota=e.quota,this.available_nodes=this.all_nodes.filter((function(t){return-1==e.nodes.indexOf(t)}))},del_user:function(e){this.current_user=e.username},send_del_user:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=6;break}return n={username:e.current_user},t.next=4,Object(V["c"])(n).then((function(t){e.add_code=t["code"],e.add_msg=t["data"],200==e.add_code?(e.alertType="success",e.alertMsg="删除成功!",e.alert=!0,e.worknode_cmd=!0):(e.alertType="error",console.log(e.add_msg),e.alertMsg=e.add_msg,e.alert=!0)}));case 4:e.del_user_show=!1,e.get_user();case 6:case"end":return t.stop()}}),t)})))()},send_set_user:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={username:e.current_user,node_list:e.current_nodes,user_data:{quota:e.quota,expiry_date:e.date}},t.next=3,Object(V["i"])(n).then((function(t){e.add_code=t["code"],e.add_msg=t["data"]}));case 3:e.set_user_show=!1,e.get_user(),e.get_info();case 6:case"end":return t.stop()}}),t)})))()},get_user:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingdata=!0,t.next=3,Object(V["d"])().then((function(t){401==t.code&&(localStorage.token="",e.$router.push("/login")),e.desserts=t["data"]["user_list"],e.all_nodes=t["data"]["node_list"]}));case 3:e.loadingdata=!1;case 4:case"end":return t.stop()}}),t)})))()},register:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={username:e.username,password:e.password},t.next=3,Object(V["k"])(n).then((function(t){e.add_code=t["code"],e.add_msg=t["data"],200==e.add_code?(e.alertType="success",e.alertMsg="添加成功!",e.alert=!0,e.worknode_cmd=!0):(e.alertType="error",console.log(e.add_msg),e.alertMsg=e.add_msg,e.alert=!0)}));case 3:e.add_user=!1,e.get_user();case 5:case"end":return t.stop()}}),t)})))()},add_user_nodes:function(e){this.available_nodes.remove(e),this.current_nodes.push(e)},remove_user_nodes:function(e){this.current_nodes.remove(e),this.available_nodes.push(e)},get_trojan:function(e){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.trojan_url_loading=!0,t.current_user=e.username,n.next=4,Object(V["g"])(e.username).then((function(e){t.trojan_urls=e["data"]["trojan_urls"],t.subscribe_link=window.gurl.SERVICE_CONTEXT_PATH+e["data"]["subscribe_link"]}));case 4:t.trojan_url_loading=!1;case 5:case"end":return n.stop()}}),n)})))()},update_subscribe_link:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={username:e.current_user},t.next=3,Object(V["j"])(n).then((function(t){e.add_code=t["code"],e.add_msg=t["data"]}));case 3:e.get_trojan({username:e.current_user});case 4:case"end":return t.stop()}}),t)})))()}}},X=G,K=n("ef9a"),Q=n("8fea"),W=n("2e4b"),Y=n("e449"),Z=Object(c["a"])(X,J,U,!1,null,null,null),ee=Z.exports;d()(Z,{VAlert:R["a"],VBtn:v["a"],VCard:S["a"],VCardText:P["b"],VCardTitle:P["c"],VChip:M["a"],VChipGroup:K["a"],VCol:E["a"],VContainer:q["a"],VDataTable:Q["a"],VDatePicker:W["a"],VDialog:A["a"],VForm:z["a"],VIcon:p["a"],VMenu:Y["a"],VRow:N["a"],VSpacer:m["a"],VTextField:L["a"],VTooltip:B["a"]});var te={name:"Home",components:{NoneInfo:F,UserInfo:ee},data:function(){return{panel:[1],alert:!1}},created:function(){this.check_login()},methods:{check_login:function(){var e=this;localStorage.token||(this.alert=!0,this.alertType="warning",this.alertMsg="账号未登录, 前往登录页面..",setTimeout((function(){e.$router.push("/login")}),1e3))}}},ne=te,ae=n("cd55"),re=n("49e2"),oe=n("c865"),se=n("0393"),ie=n("f6c4"),ce=Object(c["a"])(ne,x,k,!1,null,null,null),le=ce.exports;d()(ce,{VAlert:R["a"],VExpansionPanel:ae["a"],VExpansionPanelContent:re["a"],VExpansionPanelHeader:oe["a"],VExpansionPanels:se["a"],VMain:ie["a"]}),a["a"].use(b["a"]);var de=[{path:"/",name:"Home",component:le},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d213307").then(n.bind(null,"ac2a"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-2d0aad1c").then(n.bind(null,"1348"))}}],ue=new b["a"]({mode:"history",base:"/",routes:de}),_e=ue;a["a"].config.productionTip=!1,new a["a"]({router:_e,vuetify:w,render:function(e){return e(h)}}).$mount("#app")},"7c15":function(e,t,n){"use strict";n.d(t,"h",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return _})),n.d(t,"k",(function(){return v})),n.d(t,"i",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"j",(function(){return h})),n.d(t,"g",(function(){return g}));n("d3b7");var a=n("bc3a"),r=n.n(a);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,a){r.a.get(e,{params:t}).then((function(e){n(e.data)})).catch((function(e){a(e)}))}))}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,a){r.a.post(e,t).then((function(e){n(e.data)}),(function(e){a(e)}))}))}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,a){r.a.put(e,t).then((function(e){n(e.data)}),(function(e){a(e)}))}))}r.a.defaults.timeout=2e4,r.a.defaults.baseURL=window.gurl.SERVICE_CONTEXT_PATH,r.a.interceptors.request.use((function(e){return e.data=JSON.stringify(e.data),e.headers={"Content-Type":"application/x-www-form-urlencoded"},localStorage.token&&(e.headers.Authorization=localStorage.token),e}),(function(e){return Promise.reject(e)})),r.a.interceptors.response.use((function(e){return e}),(function(e){if(e&&e.response)switch(e.response.status){case 400:console.log("错误请求");break;case 401:console.log("未授权，请重新登录");break;case 403:console.log("拒绝访问");break;case 404:console.log("请求错误,未找到该资源");break;case 405:console.log("请求方法未允许");break;case 408:console.log("请求超时");break;case 500:console.log("服务器端出错");break;case 501:console.log("网络未实现");break;case 502:console.log("网络错误");break;case 503:console.log("服务不可用");break;case 504:console.log("网络超时");break;case 505:console.log("http版本不支持该请求");break;default:console.log("连接错误".concat(e.response.status))}else console.log("连接到服务器失败");return Promise.resolve(e.response)}));var c=function(e){return s("/login",e)},l=function(e){return s("/node/get_node_status",e)},d=function(e){return o("/node/node",e)},u=function(e){return s("/node/node",e)},_=function(e){return s("/node/del",e)},v=function(e){return s("/user/user",e)},p=function(e){return i("/user/user",e)},m=function(e){return s("/user/del",e)},f=function(e){return o("/user/user",e)},h=function(e){return s("/user/subscribe",e)},g=function(e){return o("/user/get_trojan_url",e)}},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.674c631f.js.map