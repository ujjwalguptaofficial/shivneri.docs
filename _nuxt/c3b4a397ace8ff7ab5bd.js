(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{158:function(e,t,r){var n=r(161);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(17).default)("2aa3933d",n,!0,{})},159:function(e,t,r){var n=r(163);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(17).default)("478f6032",n,!0,{})},160:function(e,t,r){"use strict";var n=r(158);r.n(n).a},161:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},162:function(e,t,r){"use strict";var n=r(159);r.n(n).a},163:function(e,t,r){(e.exports=r(16)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}\n.search{padding:5px;margin-top:20px\n}\n.search i{vertical-align:middle\n}\n.search #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n.search ul{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);list-style:none;margin:0;padding:0;position:absolute;z-index:1000;background:#fff;width:95%\n}\n.search ul li a{padding:8px;width:100%;height:100%;display:inline-block;color:#000\n}",""])},164:function(e,t,r){"use strict";var n,i=r(6),o=r(33),s=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return s(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(r){r.id===e?1==t.expandInfo[r.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[r.id]&&t.$set(t.expandInfo,r.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,r=Number(t.dataset.id);this.setExpandInfo(r)},t=a([Object(i.Component)({props:{items:Array}})],t)}(i.Vue),c=(r(160),r(9)),u=Object(c.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"margin-top-20px"},e._l(e.items,function(t){return r("div",{key:t.id,staticClass:"treeview-parent",class:{active:t.url===e.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n            "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),e._v(" "),r("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},["null"!=t.url?r("a",{attrs:{"data-id":t.id,href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):r("span",{attrs:{"data-id":t.id}},[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id] === true"}]},e._l(t.childs,function(t){return r("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);u.options.__file="treeview.vue";var d=u.exports,p=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:8,text:"Authentication",url:"authentication"},{id:10,text:"Component",url:"component",childs:[{id:1,text:"Wall",url:"component/wall"},{id:2,text:"Shield",url:"component/shield"},{id:3,text:"Guard",url:"component/guard"}]},{id:11,text:"Concepts",url:"null",childs:[{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"}]}],h=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),f=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},g=function(e){function t(){var t=e.call(this)||this;return t.version=1,t.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],t.adIndex=-1,t.showMenu=!1,t.searchValue="",t.searchResult=[],t.linksWithChilds=[],t.catchEvents(),t}return h(t,e),t.prototype.catchEvents=function(){o.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this;0!=this.searchValue.length?this.searchResult=this.linksWithChilds.filter(function(t){if(t.text.toLowerCase().indexOf(e.searchValue)>=0)return t}):this.searchResult=[]},t.prototype.isNullOrEmpty=function(e){return null==e||0==e.length},t.prototype.mounted=function(){var e=this;this.showAds(),this.setLinksWithChilds();var t,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(n){if(null!=n.childs){var i=n.childs.find(function(t){return r===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=i)return t=i.url,e.$refs.linkContainer.setExpandInfo(n.id),!1}return!e.isNullOrEmpty(t)||r!==(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")||(t=n.url,n.childs&&n.childs.length>0&&e.$refs.linkContainer.setExpandInfo(n.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"Shivneri - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this,t=this.$route.path,r=(this.relativeUrl,this.linksWithChilds.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})),n=this.linksWithChilds[r];return n?n.url:null},enumerable:!0,configurable:!0}),t.prototype.showAds=function(){var e=this,t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t,setTimeout(function(){e.showAds()},3e3)},t.prototype.setLinksWithChilds=function(){var e=this;this.links.forEach(function(t){e.linksWithChilds.push(t),t.childs&&t.childs.forEach(function(t){e.linksWithChilds.push(t)})})},t=f([Object(i.Component)({components:{TreeView:d},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(o.a),v=(r(162),Object(c.a)(g,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:""}},[r("div",{staticClass:"search"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),e.searchResult.length>0?r("ul",{staticClass:"search-results"},e._l(e.searchResult,function(t){return r("li",[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])],1)],1),e._v(" "),r("TreeView",{ref:"linkContainer",attrs:{id:"divMenuContainer",items:e.links}})],1),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[r("img",{staticClass:"ad-image",attrs:{src:"//jsstore.net/img/JsStore_350_155.png"}}),e._v(" "),r("div",[e._v(e._s(e.jsstoreText[e.adIndex]))])]),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/fortjs/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/fortjs.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",{staticStyle:{display:"inline-flex"}},[e._v("edit")])],1):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-twitter"})]):e._e()],1)],1)},[],!1,null,null,null));v.options.__file="tutorial.vue";t.a=v.exports},235:function(e,t,r){"use strict";r.r(t);var n,i=r(6),o=r(164),s=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EAs%20the%20codes%20written%20in%20Shivneri%20are%20simple%20&amp;%20clean,%20we%20want%20similar%20approach%20for%20test%20cases.%20Let's%20see%20one%20example%20for%20unit%20testing%20%22UserController%22-%20%3C/p%3E%0A%3Cp%3EConsider%20UserController%20implments%20Rest%20Api%20&amp;%20codes%20are%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20textResult,%20DefaultWorker,%20jsonResult,%20Worker,%20Route,%20HTTP_STATUS_CODE,%20HTTP_METHOD,%20Guards,%20Singleton%20%7D%20from%20'Shivneri';%0Aimport%20%7B%20UserService%20%7D%20from%20'../services/user_service';%0Aimport%20%7B%20ModelUserGuard%20%7D%20from%20'../guards/model_user_guard';%0Aimport%20%7B%20User%20%7D%20from%20'../models/user';%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20service:%20UserService;%0A%20%20%20%20constructor(@Singleton(UserService)%20service:%20UserService)%20%7B%0A%20%20%20%20%20%20%20%20super();%0A%20%20%20%20%20%20%20%20this.service%20=%20service;%0A%20%20%20%20%7D%0A%0A%20%20%20%20@DefaultWorker()%0A%20%20%20%20async%20getUsers()%20%7B%0A%20%20%20%20%20%20%20%20return%20jsonResult(this.service.getUsers());%0A%20%20%20%20%7D%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.Post%5D)%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20@Guards(%5BModelUserGuard%5D)%0A%20%20%20%20async%20addUser()%20%7B%0A%20%20%20%20%20%20%20%20const%20user%20=%20this.data.user;%0A%20%20%20%20%20%20%20%20const%20newUser%20=%20this.service.addUser(user);%0A%20%20%20%20%20%20%20%20return%20jsonResult(newUser,%20HTTP_STATUS_CODE.Created);%0A%20%20%20%20%7D%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.Put%5D)%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20async%20updateUser()%20%7B%0A%20%20%20%20%20%20%20%20const%20user%20=%20new%20User().init(this.body);%0A%20%20%20%20%20%20%20%20const%20userUpdated%20=%20this.service.updateUser(user);%0A%20%20%20%20%20%20%20%20if%20(userUpdated%20===%20true)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%22user%20updated%22);%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%22invalid%20user%22);%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%7D%0A%0A%20%20%20%20@Worker(%5BHTTP_METHOD.Get%5D)%0A%20%20%20%20@Route(%22/%7Bid%7D%22)%0A%20%20%20%20async%20getUser()%20%7B%0A%0A%20%20%20%20%20%20%20%20const%20userId%20=%20Number(this.param.id);%0A%20%20%20%20%20%20%20%20const%20user%20=%20new%20UserService().getUser(userId);%0A%20%20%20%20%20%20%20%20if%20(user%20==%20null)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20textResult(%22invalid%20user%20id%22,%20HTTP_STATUS_CODE.NotFound);%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20jsonResult(user);%0A%0A%20%20%20%20%7D%0A%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%20id=%22testcode%22%3ETest%20code%20-%3C/h2%3E%0A%3Cpre%3E%3Ccode%3Edescribe('UserController',%20()%20=&gt;%20%7B%0A%20%20%20%20let%20app,controller;%0A%0A%20%20%20%20beforeAll(async%20()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20app%20=%20await%20createApp();%0A%20%20%20%20%20%20%20%20//%20UserController%20has%20dependency%20of%20UserService,%20which%20is%20injected%20by%20Shivneri%20at%20run%20time.%20%0A%20%20%20%20%20%20%20%20//%20Here%20UserService%20is%20a%20fake%20service%20in%20memory%0A%20%20%20%20%20%20%20%20controller%20=%20new%20UserController(new%20UserService());%0A%20%20%20%20%7D);%0A%0A%20%20%20%20it('getUsers',%20async%20()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20controller.initialize();%0A%20%20%20%20%20%20%20%20const%20expectedResult%20=%20jsonResult(controller.service.getUsers());%0A%20%20%20%20%20%20%20%20const%20result%20=%20await%20controller.getUsers();%0A%20%20%20%20%20%20%20%20expect(result).toEqual(expectedResult);%0A%20%20%20%20%7D);%0A%0A%20%20%20%20it('addUser',%20async%20()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20const%20newUser%20=%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20'ujjwal%20gupta',%0A%20%20%20%20%20%20%20%20%20%20%20%20emailId:%20'ujjwal@m.com',%0A%20%20%20%20%20%20%20%20%20%20%20%20gender:%20'male',%0A%20%20%20%20%20%20%20%20%20%20%20%20password:%20'asdfvg',%0A%20%20%20%20%20%20%20%20%20%20%20%20address:%20'Bangalore%20India'%0A%20%20%20%20%20%20%20%20%7D;%0A%20%20%20%20%20%20%20%20controller.initialize(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20data:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20user:%20newUser%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%20%20%20%20const%20expectedResult%20=%20jsonResult(newUser,%20201);%0A%20%20%20%20%20%20%20%20const%20result%20=%20await%20controller.addUser();%0A%20%20%20%20%20%20%20%20expect(result).toEqual(expectedResult);%0A%20%20%20%20%20%20%20%20expect(result.responseData).toEqual(newUser);%0A%20%20%20%20%7D);%0A%0A%20%20%20%20it('getUser',%20async%20()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20controller.initialize(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20param:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id:%20'2'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%20%20%20%20const%20expectedResult%20=%20jsonResult(controller.service.getUser(2));%0A%20%20%20%20%20%20%20%20const%20result%20=%20await%20controller.getUsers();%0A%20%20%20%20%20%20%20%20expect(result).toEqual(expectedResult);%0A%20%20%20%20%7D);%0A%0A%20%20%20%20it('updateUser',%20async%20()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20const%20userData%20=%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id:%202,%0A%20%20%20%20%20%20%20%20%20%20%20%20name:%20'ujjwal%20gupta',%0A%20%20%20%20%20%20%20%20%20%20%20%20emailId:%20'ujjwal@m.com',%0A%20%20%20%20%20%20%20%20%20%20%20%20gender:%20'male',%0A%20%20%20%20%20%20%20%20%20%20%20%20password:%20'asdfvg',%0A%20%20%20%20%20%20%20%20%20%20%20%20address:%20'Bangalore%20India'%0A%20%20%20%20%20%20%20%20%7D;%0A%0A%20%20%20%20%20%20%20%20//%20update%20user%20for%20existing%20data%0A%20%20%20%20%20%20%20%20controller.initialize(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20body:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20user:%20userData%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%20%20%20%20let%20expectedResult%20=%20await%20textResult(%22user%20updated%22);%0A%20%20%20%20%20%20%20%20let%20result%20=%20await%20controller.updateUser();%0A%20%20%20%20%20%20%20%20expect(result).toEqual(expectedResult);%0A%0A%20%20%20%20%20%20%20%20//%20update%20user%20for%20not%20existing%20data%0A%20%20%20%20%20%20%20%20userData.id%20=%205;%0A%20%20%20%20%20%20%20%20controller.initialize(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20data:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20user:%20userData%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D);%0A%20%20%20%20%20%20%20%20expectedResult%20=%20textResult(%22invalid%20user%22);%0A%20%20%20%20%20%20%20%20result%20=%20await%20controller.updateUser();%0A%20%20%20%20%20%20%20%20expect(result).toEqual(expectedResult);%0A%20%20%20%20%7D);%0A%0A%20%20%20%20afterAll(()%20=&gt;%20%7B%0A%20%20%20%20%20%20%20%20return%20app.destroy();%0A%20%20%20%20%7D);%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20above%20code%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EbeforeAll%3C/strong%3E%20-%20We%20are%20configuring%20everything%20that%20we%20need%20bofore%20test%20starts%20in%20%22beforeAll%22%20hook%20of%20jest%20i.e%20-%20creating%20the%20UserController%20object%20and%20starting%20our%20app.%20The%20hook%20can%20be%20different%20in%20another%20framework.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EgetUsers%3C/strong%3E%20-%20%20Here%20we%20have%20written%20code%20for%20testing%20getUsers.%20%22getUsers%22%20is%20a%20method%20which%20returns%20all%20the%20user%20presents.%20As%20you%20can%20see,%20the%20first%20line%20of%20the%20code%20is%20'controller.initialize'%20-%20this%20is%20very%20important%20to%20call%20before%20any%20test%20case%20start.%20The%20'initialize'%20method%20is%20present%20in%20every%20component%20i.e%20-%20controller,%20guard,%20wall%20&amp;%20shield.%20This%20is%20used%20to%20initialize%20the%20controller%20with%20some%20value%20i.e%20setting%20body%20object,%20setting%20query%20string%20etc,%20basically%20to%20set%20the%20component%20props.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EaddUser%3C/strong%3E%20-%20%22addUser%22%20method%20takes%20user%20data%20from%20body%20&amp;%20add%20a%20user.%20We%20are%20using%20'controller.initialize'%20to%20supply%20the%20user%20information%20in%20body.%20But%20in%20code,%20we%20are%20actually%20supplying%20user%20information%20in%20%3Ccode%3Edata%3C/code%3E%20but%20not%20%3Ccode%3Ebody%3C/code%3E%20-%20this%20is%20because%20method%20%22addUser%22%20uses%20a%20Guard%20%3Ccode%3EModelUserGuard%3C/code%3E%20which%20sends%20user%20info%20in%20%3Ccode%3Edata%3C/code%3E%20&amp;%20the%20worker%20%22addUser%22%20uses%20data%20property%20of%20controller.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3EupdateUser%3C/strong%3E%20-%20%20%22updateUser%22%20method%20takes%20user%20data%20from%20body%20&amp;%20update%20user%20if%20exist%20otherwise%20returns%20'invalid%20user'.%20The%20test%20code%20initialise%20the%20controller%20using%20'controller.initialize'%20&amp;%20supply%20the%20user%20information%20in%20body.%20Here%20we%20are%20not%20using%20any%20guard%20(for%20explainining%20how%20to%20pass%20body%20i%20have%20removed%20guard%20from%20this%20method).%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EHope%20this%20is%20clear%20&amp;%20understandable.%20For%20help%20-%20please%20reach%20to%20our%20gitter%20channel.%3C/p%3E",t.title="Unit Test",t.keywords="test, unit, e2e, Shivneri, crystal",t.description="Setting up unit test in Shivneri",t}return s(t,e),t=a([Object(i.Component)({components:{Tutorial:o.a}})],t)}(i.Vue),c=r(9),u=Object(c.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="unit-test.vue";t.default=u.exports}}]);