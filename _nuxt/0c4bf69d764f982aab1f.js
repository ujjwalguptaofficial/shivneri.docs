(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{158:function(e,t,r){var n=r(161);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(17).default)("2aa3933d",n,!0,{})},159:function(e,t,r){var n=r(163);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(17).default)("478f6032",n,!0,{})},160:function(e,t,r){"use strict";var n=r(158);r.n(n).a},161:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},162:function(e,t,r){"use strict";var n=r(159);r.n(n).a},163:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}\n.search{padding:5px;margin-top:20px\n}\n.search i{vertical-align:middle\n}\n.search #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n.search ul{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);list-style:none;margin:0;padding:0;position:absolute;z-index:1000;background:#fff;width:95%\n}\n.search ul li a{padding:8px;width:100%;height:100%;display:inline-block;color:#000\n}",""])},164:function(e,t,r){"use strict";var n,i=r(6),o=r(33),s=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return s(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(r){r.id===e?1==t.expandInfo[r.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[r.id]&&t.$set(t.expandInfo,r.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,r=Number(t.dataset.id);this.setExpandInfo(r)},t=a([Object(i.Component)({props:{items:Array}})],t)}(i.Vue),c=(r(160),r(9)),u=Object(c.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"margin-top-20px"},e._l(e.items,function(t){return r("div",{key:t.id,staticClass:"treeview-parent",class:{active:t.url===e.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n            "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),e._v(" "),r("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},["null"!=t.url?r("a",{attrs:{"data-id":t.id,href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):r("span",{attrs:{"data-id":t.id}},[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id] === true"}]},e._l(t.childs,function(t){return r("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);u.options.__file="treeview.vue";var p=u.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:8,text:"Authentication",url:"authentication"},{id:10,text:"Component",url:"component",childs:[{id:1,text:"Wall",url:"component/wall"},{id:2,text:"Shield",url:"component/shield"},{id:3,text:"Guard",url:"component/guard"}]},{id:11,text:"Concepts",url:"null",childs:[{id:2,text:"Session",url:"session"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"}]}],h=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),f=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},g=function(e){function t(){var t=e.call(this)||this;return t.version=1,t.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],t.adIndex=-1,t.showMenu=!1,t.searchValue="",t.searchResult=[],t.linksWithChilds=[],t.catchEvents(),t}return h(t,e),t.prototype.catchEvents=function(){o.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this;0!=this.searchValue.length?this.searchResult=this.linksWithChilds.filter(function(t){if(t.text.toLowerCase().indexOf(e.searchValue)>=0)return t}):this.searchResult=[]},t.prototype.isNullOrEmpty=function(e){return null==e||0==e.length},t.prototype.mounted=function(){var e=this;this.showAds(),this.setLinksWithChilds();var t,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(n){if(null!=n.childs){var i=n.childs.find(function(t){return r===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=i)return t=i.url,e.$refs.linkContainer.setExpandInfo(n.id),!1}return!e.isNullOrEmpty(t)||r!==(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")||(t=n.url,n.childs&&n.childs.length>0&&e.$refs.linkContainer.setExpandInfo(n.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"Shivneri - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this,t=this.$route.path,r=(this.relativeUrl,this.linksWithChilds.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})),n=this.linksWithChilds[r];return n?n.url:null},enumerable:!0,configurable:!0}),t.prototype.showAds=function(){var e=this,t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t,setTimeout(function(){e.showAds()},3e3)},t.prototype.setLinksWithChilds=function(){var e=this;this.links.forEach(function(t){e.linksWithChilds.push(t),t.childs&&t.childs.forEach(function(t){e.linksWithChilds.push(t)})})},t=f([Object(i.Component)({components:{TreeView:p},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(o.a),v=(r(162),Object(c.a)(g,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:""}},[r("div",{staticClass:"search"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),e.searchResult.length>0?r("ul",{staticClass:"search-results"},e._l(e.searchResult,function(t){return r("li",[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])],1)],1),e._v(" "),r("TreeView",{ref:"linkContainer",attrs:{id:"divMenuContainer",items:e.links}})],1),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[r("img",{staticClass:"ad-image",attrs:{src:"//jsstore.net/img/JsStore_350_155.png"}}),e._v(" "),r("div",[e._v(e._s(e.jsstoreText[e.adIndex]))])]),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/shivneri-crystal/community",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/shivneri.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",{staticStyle:{display:"inline-flex"}},[e._v("edit")])],1):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-twitter"})]):e._e()],1)],1)},[],!1,null,null,null));v.options.__file="tutorial.vue";t.a=v.exports},231:function(e,t,r){"use strict";r.r(t);var n,i=r(6),o=r(164),s=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EShivneri%20provides%20a%20seperate%20library%20-%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/Shivneri-swagger%22%3EShivneri-swagger%3C/a%3E%20for%20swagger%20integration.%20It%20provides%20automatic%20generation%20of%20swagger%20documents%20by%20taking%20documents%20related%20information%20from%20you.%3C/p%3E%0A%3Ch2%20id=%221installlibrary%22%3E1.%20Install%20library%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0A%3Ccode%3Enpm%20install%20Shivneri-swagger%3C/code%3E%3C/p%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%222initiate%22%3E2.%20Initiate%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0Ainitiate%20the%20swagger%20after%20the%20Shivneri%20has%20started.%3C/p%3E%0A%3Cp%3Ee.g%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20App%20extends%20Fort%20%7B%0A%20%20%20%20constructor()%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20this.routes%20=%20routes;%0A%20%20%20%20%20%20%20%20this.viewEngine%20=%20FortViewEngine;%0A%20%20%20%20%7D%0A%7D%0A%0Aconst%20swaggerPath%20=%20Path.join(__dirname,%20%22../swagger/%22);%0A%0Anew%20App().create(%7B%0A%20%20%20%20//%20allow%20swagger%20path%20to%20access%20using%20url%20with%20alias%20swagger%0A%20%20%20%20folders:%20%5B%7B%0A%20%20%20%20%20%20%20%20alias:%20%22swagger%22,%0A%20%20%20%20%20%20%20%20path:%20swaggerPath%0A%20%20%20%20%7D%5D%0A%7D).then(()%20=&gt;%20%7B%20%20%20%20%0A%20%20%20%20//%20initiating%20swagger%20%0A%20%20%20%20new%20Swagger().create(%7B%0A%20%20%20%20%20%20%20%20appInfo:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title:%20%22Swagger%20Test%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20description:%20%22Swagger%20Test%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20version:%20%221.0%22%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20servers:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20description:%20%22local%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20url:%20%22http://localhost:4000%22%0A%20%20%20%20%20%20%20%20%7D%5D,%0A%20%20%20%20%20%20%20%20//%20create%20swagger%20files%20at%20this%20path%0A%20%20%20%20%20%20%20%20outputPath:%20swaggerPath,%0A%20%20%20%20%20%20%20%20securitySchemes:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20basicAuth:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type:%20%22http%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20scheme:%20%22basic%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D);%0A%7D)%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EWill%20it%20generate%20docs%20now%20?%3C/p%3E%0A%3Cp%3ENo,%20This%20is%20just%20a%20setup.%20Now%20we%20need%20to%20tell%20Shivneri%20what%20we%20are%20expecting%20exactly%20i.e%20-%20what%20will%20be%20the%20structure%20of%20http%20request%20&amp;%20structure%20of%20http%20response%20etc.%3C/p%3E%0A%3Cp%3EConsider%20the%20below%20controller%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@DefaultWorker()%0A%20%20%20%20async%20getUsers()%20%7B%0A%20%20%20%20%20%20%20%20const%20service%20=%20new%20UserService();%0A%20%20%20%20%20%20%20%20return%20jsonResult(service.getUsers());%0A%20%20%20%20%7D%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.Post%5D)%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20@Guards(%5BModelUserGuard%5D)%0A%20%20%20%20async%20addUser()%20%7B%0A%20%20%20%20%20%20%20%20const%20user%20=%20this.data.user;%0A%20%20%20%20%20%20%20%20const%20service%20=%20new%20UserService();%0A%20%20%20%20%20%20%20%20const%20newUser%20=%20service.addUser(user);%0A%20%20%20%20%20%20%20%20return%20jsonResult(newUser,%20HTTP_STATUS_CODE.Created);%0A%20%20%20%20%7D%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.Put%5D)%0A%20%20%20%20@Guards(%5BModelUserGuard%5D)%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20async%20updateUser()%20%7B%0A%0A%20%20%20%20%20%20%20%20const%20user:%20User%20=%20this.data.user;%0A%20%20%20%20%20%20%20%20const%20userUpdated%20=%20new%20UserService().updateUser(user);%0A%20%20%20%20%20%20%20%20if%20(userUpdated%20===%20true)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%22user%20updated%22);%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%22invalid%20user%22);%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%7D%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.Get%5D)%0A%20%20%20%20@Route(%22/%7Bid%7D%22)%0A%20%20%20%20async%20getUser()%20%7B%0A%0A%20%20%20%20%20%20%20%20const%20userId%20=%20Number(this.param.id);%0A%20%20%20%20%20%20%20%20const%20user%20=%20new%20UserService().getUser(userId);%0A%20%20%20%20%20%20%20%20if%20(user%20==%20null)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%22invalid%20id%22);%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20jsonResult(user);%0A%0A%20%20%20%20%7D%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.Delete%5D)%0A%20%20%20%20@Route(%22/%7Bid%7D%22)%0A%20%20%20%20async%20removeUser()%20%7B%0A%0A%20%20%20%20%20%20%20%20const%20userId%20=%20Number(this.param.id);%0A%20%20%20%20%20%20%20%20const%20service%20=%20new%20UserService();%0A%20%20%20%20%20%20%20%20const%20user%20=%20service.getUser(userId);%0A%20%20%20%20%20%20%20%20if%20(user%20!=%20null)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20service.removeUser(userId);%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%22user%20deleted%22);%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%22invalid%20user%22);%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%0A%20%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThe%20above%20controller%20does%20operation%20for%20a%20user.%20And%20every%20end%20point%20exepects%20different%20request%20and%20return%20different%20response.%20We%20need%20to%20tell%20these%20info%20to%20swagger.%20%3C/p%3E%0A%3Cp%3ELet's%20document%20the%20%20worker%20-%20%22getUsers%22.%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Response,%20Summary,%20Description%7D%20from%20'Shivneri-swagger';%0A%0A@Summary('get%20all%20users')%0A@Description('return%20all%20saved%20users')%20%0A@Response(HTTP_STATUS_CODE.Ok,%20%5BUser%5D)%0A@DefaultWorker()%0Aasync%20getUsers()%20%7B%0A%20%20%20%20const%20service%20=%20new%20UserService();%0A%20%20%20%20return%20jsonResult(service.getUsers());%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EHere%20we%20have%20used%20three%20different%20decorators%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ESummary%20-%20used%20to%20define%20the%20summary%20of%20the%20end%20point%3C/li%3E%0A%3Cli%3EDescription%20-%20used%20to%20describe%20the%20end%20point%20in%20details.%20This%20is%20not%20necessary%20most%20of%20the%20time.%3C/li%3E%0A%3Cli%3EResponse%20-%20%20used%20to%20define%20the%20response%20returned.%20In%20this%20example%20-%20we%20are%20telling%20swagger%20that%20:%20for%20http%20status%20%22OK%22%20the%20result%20will%20be%20array%20of%20model%20User.%20You%20can%20define%20multiple%20response%20in%20the%20same%20way%20i.e%20by%20using%20response%20decorator%20multiple%20time.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3EIn%20the%20similar%20way%20-%20we%20can%20define%20other%20workers.%3C/p%3E%0A%3Ch1%20id=%22moreresources%22%3E*%20More%20resources%20-%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EExamples%20-%20https://github.com/ujjwalguptaofficial/Shivneri-swagger/tree/master/examples%3C/li%3E%0A%3C/ul%3E",t.title="Swagger Initialization",t.keywords="swagger, automatic generate, integrate, Shivneri, crystal",t.description="Swagger integration in Shivneri",t}return s(t,e),t=a([Object(i.Component)({components:{Tutorial:o.a}})],t)}(i.Vue),c=r(9),u=Object(c.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="initiate.vue";t.default=u.exports}}]);