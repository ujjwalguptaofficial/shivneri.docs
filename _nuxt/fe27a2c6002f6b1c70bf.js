(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{159:function(e,t,r){var o=r(162);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(18).default)("2aa3933d",o,!0,{})},160:function(e,t,r){var o=r(164);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(18).default)("478f6032",o,!0,{})},161:function(e,t,r){"use strict";var o=r(159);r.n(o).a},162:function(e,t,r){(e.exports=r(17)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},163:function(e,t,r){"use strict";var o=r(160);r.n(o).a},164:function(e,t,r){(e.exports=r(17)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}\n.search{padding:5px;margin-top:20px\n}\n.search i{vertical-align:middle\n}\n.search #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n.search ul{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);list-style:none;margin:0;padding:0;position:absolute;z-index:1000;background:#fff;width:95%\n}\n.search ul li a{padding:8px;width:100%;height:100%;display:inline-block;color:#000\n}",""])},165:function(e,t,r){"use strict";var o,n=r(6),i=r(33),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return a(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(r){r.id===e?1==t.expandInfo[r.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[r.id]&&t.$set(t.expandInfo,r.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,r=Number(t.dataset.id);this.setExpandInfo(r)},t=s([Object(n.Component)({props:{items:Array}})],t)}(n.Vue),d=(r(161),r(9)),c=Object(d.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"margin-top-20px"},e._l(e.items,function(t){return r("div",{key:t.id,staticClass:"treeview-parent",class:{active:t.url===e.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n            "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),e._v(" "),r("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},["null"!=t.url?r("a",{attrs:{"data-id":t.id,href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):r("span",{attrs:{"data-id":t.id}},[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id] === true"}]},e._l(t.childs,function(t){return r("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);c.options.__file="treeview.vue";var u=c.exports,p=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:"result",text:"Result",url:"result"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:10,text:"Component",url:"component",childs:[{id:1,text:"Wall",url:"component/wall"},{id:2,text:"Shield",url:"component/shield"},{id:3,text:"Guard",url:"component/guard"}]},{id:"websocket",text:"Websocket",url:"websocket",childs:[{id:"controller",text:"WebSocketController",url:"websocket/controller"},{id:"clients",text:"Clients",url:"websocket/clients"},{id:"groups",url:"websocket/groups",text:"Groups"}]},{id:11,text:"Concepts",url:"null",childs:[{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"component-data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File upload",url:"file"},{id:"file_server",text:"File server",url:"file-server"}]}],h=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),f=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},C=function(e){function t(){var t=e.call(this)||this;return t.version=1,t.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],t.adIndex=-1,t.showMenu=!1,t.searchValue="",t.searchResult=[],t.linksWithChilds=[],t.catchEvents(),t}return h(t,e),t.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this;0!=this.searchValue.length?this.searchResult=this.linksWithChilds.filter(function(t){if(t.text.toLowerCase().indexOf(e.searchValue)>=0)return t}):this.searchResult=[]},t.prototype.isNullOrEmpty=function(e){return null==e||0==e.length},t.prototype.mounted=function(){var e=this;this.showAds(),this.setLinksWithChilds();var t,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(o){if(null!=o.childs){var n=o.childs.find(function(t){return r===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=n)return t=n.url,e.$refs.linkContainer.setExpandInfo(o.id),!1}return!e.isNullOrEmpty(t)||r!==(""+e.relativeUrl+o.url.toLowerCase()).replace(/\//g,"")||(t=o.url,o.childs&&o.childs.length>0&&e.$refs.linkContainer.setExpandInfo(o.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"Shivneri - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this,t=this.$route.path,r=(this.relativeUrl,this.linksWithChilds.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})),o=this.linksWithChilds[r];return o?o.url:null},enumerable:!0,configurable:!0}),t.prototype.showAds=function(){var e=this,t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t,setTimeout(function(){e.showAds()},3e3)},t.prototype.setLinksWithChilds=function(){var e=this;this.links.forEach(function(t){e.linksWithChilds.push(t),t.childs&&t.childs.forEach(function(t){e.linksWithChilds.push(t)})})},t=f([Object(n.Component)({components:{TreeView:u},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(i.a),m=(r(163),Object(d.a)(C,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:""}},[r("div",{staticClass:"search"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),e.searchResult.length>0?r("ul",{staticClass:"search-results"},e._l(e.searchResult,function(t){return r("li",[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])],1)],1),e._v(" "),r("TreeView",{ref:"linkContainer",attrs:{id:"divMenuContainer",items:e.links}})],1),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[r("img",{staticClass:"ad-image",attrs:{src:"//jsstore.net/img/JsStore_350_155.png"}}),e._v(" "),r("div",[e._v(e._s(e.jsstoreText[e.adIndex]))])]),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/shivneri-crystal/community",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/shivneri.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",{staticStyle:{display:"inline-flex"}},[e._v("edit")])],1):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-twitter"})]):e._e()],1)],1)},[],!1,null,null,null));m.options.__file="tutorial.vue";t.a=m.exports},211:function(e,t,r){"use strict";r.r(t);var o,n=r(6),i=r(165),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EIn%20this%20get-started%20tutorial%20we%20will%20learn%20how%20to%20setup%20Shivneri%20and%20create%20some%20simple%20end%20point.%20You%20can%20see/download%20code%20of%20this%20get%20started%20tutorial%20here%20-%20%20%3Ca%20target=%22_blank%22%20href=%22https://github.com/ujjwalguptaofficial/shivneri-examples/tree/master/shivneri-demo%22%3EShivneri%20demo%3C/a%3E%3C/p%3E%0A%3Ch2%20id=%22createaapp%22%3ECreate%20a%20App%3C/h2%3E%0A%3Cp%3EExecute%20command%20-%20%3Ccode%3Ecrystal%20lang%20init%20app%20shivneri-demo%3C/code%3E%3C/p%3E%0A%3Cp%3Ethis%20will%20create%20a%20folder%20%22shivneri-demo%22%20which%20contains%20folder%20structure%20and%20some%20files%20to%20run%20a%20crystal%20lang%20app.%3C/p%3E%0A%3Ch2%20id=%22installshivneri%22%3EInstall%20Shivneri%3C/h2%3E%0A%3Cp%3E%3Cbr%3EAdd%20below%20code%20in%20shard.yml%3C/p%3E%0A%3Cpre%3E%3Ccode%3Edependencies:%0A%20%20shivneri:%0A%20%20%20%20github:%20ujjwalguptaofficial/shivneri%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThis%20will%20add%20shivneri%20as%20dependency%20in%20your%20app.%3C/p%3E%0A%3Cp%3ENow%20install%20Shivneri%20by%20runing%20command%20-%20%3Ccode%3Eshards%20install%3C/code%3E%3C/p%3E%0A%3Ch2%20id=%22initiateshivneri%22%3EInitiate%20Shivneri%3C/h2%3E%0A%3Cp%3E%3Cbr%3EPaste%20below%20code%20in%20file%20src/shivneri-demo.cr%3C/p%3E%0A%3Cpre%3E%3Ccode%3E#%20TODO:%20Write%20documentation%20for%20%60Shivneri::Demo%60%0Arequire%20%22shivneri%22%0Ainclude%20Shivneri::Demo%0A%0Amodule%20Shivneri::Demo%0A%20%20VERSION%20=%20%220.1.0%22%0A%20%20Shivneri.open%20do%0A%20%20%20%20puts%20%22Shivneri%20is%20created%22%0A%20%20end%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EAbove%20code%20require%20shivneri%20and%20start%20the%20app%20by%20calling%20%22open%22%20api.%20We%20don't%20have%20any%20routes%20for%20now,%20so%20let's%20create%20it%20in%20next%20step.%3C/p%3E%0A%3Ch2%20id=%22createfoldersforshivneri%22%3ECreate%20folders%20for%20Shivneri%3C/h2%3E%0A%3Cp%3E%3Cbr%3EShivneri%20is%20a%20MVC%20framework%20which%20means%20you%20gotta%20create%20a%20controller%20for%20writing%20your%20logic,%20so%20let's%20create%20a%20folder%20controllers%20inside%20src.%3C/p%3E%0A%3Cp%3ENow%20add%20a%20file%20default_controller.cr%20inside%20folder%20controllers%20&amp;%20paste%20below%20code%3C/p%3E%0A%3Cpre%3E%3Ccode%3Emodule%20Shivneri::Demo%0A%20%20module%20Controller%0A%20%20%20%20class%20DefaultController%20&lt;%20Shivneri::Controller%0A%0A%20%20%20%20%20%20%20%20@%5BDefaultWorker%5D%0A%20%20%20%20%20%20%20%20def%20index%0A%20%20%20%20%20%20%20%20%20%20text_result%20%22Welcome%20to%20Shivneri%22%0A%20%20%20%20%20%20%20%20end%0A%0A%20%20%20%20end%0A%20%20end%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20above%20code%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3EWe%20have%20created%20a%20class%20%22DefaultController%22%20which%20inherits%20class%20%22Shivneri::Controller%22.%20This%20will%20make%20class%20%22DefaultController%22%20a%20controller%20class.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EWe%20have%20added%20method%20%22index%22%20which%20returns%20http%20result%20%22Welcome%20to%20Shivneri%22%20by%20calling%20text_result%20method%20.%20Controller%20methods%20which%20acts%20as%20end%20point%20is%20known%20as%20worker%20in%20Shivneri%20because%20it%20does%20some%20work%20&amp;%20return%20result.%20We%20have%20marked%20it%20as%20worker%20by%20using%20annotation%20'DefaultWorker'.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EAnnotation%20%22DefaultWorker%22%20marks%20method%20index%20as%20worker%20&amp;%20also%20add%20route%20%22/%22%20with%20http%20methods%20%22GET%22.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Ch2%20id=%22activatecontrolleraddcontrollerasroute%22%3EActivate%20Controller%20-%20add%20controller%20as%20route%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AThe%20added%20controller%20is%20not%20activated%20yet.%20You%20need%20to%20activate%20it%20by%20adding%20it%20to%20routes%20list.%3C/p%3E%0A%3Cp%3EPaste%20below%20code%20in%20file%20src/shivneri-demo.cr%3C/p%3E%0A%3Cpre%3E%3Ccode%3E#%20TODO:%20Write%20documentation%20for%20%60Shivneri::Demo%60%0Arequire%20%22shivneri%22%0Arequire%20%22./controllers/default_controller%22%0Ainclude%20Shivneri::Demo%0A%0Amodule%20Shivneri::Demo%0A%20%20include%20Controller%0A%20%20VERSION%20=%20%220.1.0%22%0A%20%20Shivneri.routes%20=%20%5B%7B%0A%20%20%20%20controller:%20DefaultController,%0A%20%20%20%20path:%20%20%20%20%20%20%20%22/*%22,%0A%20%20%7D%5D%0A%20%20Shivneri.open%20do%0A%20%20%20%20puts%20%22Shivneri%20is%20created%22%0A%20%20end%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20the%20above%20code%20-%20we%20have%20added%20%22DefaultController%22%20with%20path%20%22/*%22%20in%20routes%20list.%20Now%20Shivneri%20knows%20that%20for%20route%20%22/*%22%20(/*%20means%20for%20any%20route%20unless%20explicitly%20defined)%20-%20%22DefaultController%22%20needs%20to%20be%20executed.%3C/p%3E%0A%3Cp%3ENow%20let's%20test%20our%20implementation%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EExecute%20command%20-%20%3Ccode%3Ecrystal%20lang%20run%20src/shivneri-demo.cr%3C/code%3E%3C/li%3E%0A%3Cli%3Ebrowse%20url%20-%20%3Ca%20href=%22http://localhost:4000%22%20target=%22_blank%22%3Ehttp://localhost:4000%3C/a%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%0AYou%20will%20see%20result%20%22Welcome%20to%20Shivneri%22%20which%20is%20what%20we%20are%20returning%20from%20method%20%22index%22.%3C/p%3E%0A%3Ch2%20id=%22letsaddsomemoreworker%22%3ELet's%20add%20some%20more%20worker%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch3%20id=%22returningjson%22%3EReturning%20json%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Edef%20json%0A%20%20%20%20data%20=%20%7B%0A%20%20%20%20%20%20name:%20%20%20%20%22Ujjwal%20Gupta%22,%0A%20%20%20%20%20%20address:%20%22Bengaluru,%20India%22,%0A%20%20%20%20%7D%0A%0A%20%20%20%20return%20json_result(data)%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThe%20above%20code%20create%20a%20tuple%20&amp;%20call%20json_result%20which%20will%20convert%20the%20tuple%20to%20http%20result%20in%20the%20form%20of%20json.%20%3C/p%3E%0A%3Cp%3EBut%20the%20above%20added%20method%20won't%20work%20because%20its%20not%20marked%20as%20Worker.%20Let's%20mark%20this%20method%20as%20worker%20by%20using%20annotation%20%22Worker%22.%20Now%20our%20code%20looks%20like%20this%20-%3C/p%3E%0A%3Cpre%3E%3Ccode%3E@%5BWorker%5D%0Adef%20json%0A%20%20data%20=%20%7B%0A%20%20%20%20name:%20%20%20%20%22Ujjwal%20Gupta%22,%0A%20%20%20%20address:%20%22Bengaluru,%20India%22,%0A%20%20%7D%0A%0A%20%20return%20json_result(data)%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ELet's%20reload%20our%20app%20again%20&amp;%20open%20the%20end%20point%20-%20%3Ca%20href=%22http://localhost:4000/json%22%20target=%22_blank%22%3Ehttp://localhost:4000/json%3C/a%3E%3C/p%3E%0A%3Cp%3EYou%20will%20see%20your%20result%20as%20json.%20%3C/p%3E%0A%3Ch3%20id=%22accessbodydata%22%3Eaccess%20body%20data%3C/h3%3E%0A%3Cp%3E%3Cbr%3Ebody%20is%20member%20of%20controller%20which%20means%20you%20can%20access%20it%20directly%20using%20%22body%22%20or%20%22self.body%22.%20body%20stores%20data%20in%20form%20of%20hash,%20so%20you%20can%20use%20hash%20syntax%20for%20retrieving%20body%20data.%3C/p%3E%0A%3Cp%3ELet's%20create%20a%20method%20body%20which%20will%20retrieve%20name,%20address%20from%20body%20and%20return%20as%20json%20result.%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3E@%5BWorker%5D%0Adef%20get_body%0A%20%20data%20=%20%7B%0A%20%20%20%20name:%20%20%20%20body%5B%22name%22%5D?,%0A%20%20%20%20address:%20body%5B%22address%22%5D?,%0A%20%20%7D%0A%0A%20%20return%20json_result(data)%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ESend%20a%20post%20request%20to%20the%20end%20point%20-%20%3Ca%20href=%22http://localhost:4000/get_body%22%20target=%22_blank%22%3Ehttp://localhost:4000/get_body%3C/a%3E%20and%20you%20will%20see%20result%20returned%20from%20this%20method.%3C/p%3E%0A%3Ch3%20id=%22changeroute%22%3EChange%20route%3C/h3%3E%0A%3Cp%3E%3Cbr%3EBy%20default%20method%20name%20is%20route%20name%20but%20you%20can%20customize%20it%20using%20annotation%20%22Route%22.%20Let's%20change%20above%20method%20%22get_body%22%20to%20route%20%22/body%22%3C/p%3E%0A%3Cpre%3E%3Ccode%3E@%5BWorker%5D%0A@%5BRoute(%22/body%22)%5D%0Adef%20get_body%0A%20%20data%20=%20%7B%0A%20%20%20%20name:%20%20%20%20body%5B%22name%22%5D?,%0A%20%20%20%20address:%20body%5B%22address%22%5D?,%0A%20%20%7D%0A%0A%20%20return%20json_result(data)%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20%22get_body%22%20is%20not%20visible%20which%20means%20when%20you%20will%20send%20a%20request%20to%20%22http://localhost:4000/get_body%22%20,%20you%20will%20get%20http%20status%20code%20404.%20%3C/p%3E%0A%3Cp%3EBut%20our%20newly%20configured%20route%20%22/body%22%20is%20available.%20Send%20a%20post%20request%20to%20the%20end%20point%20-%20%3Ca%20href=%22http://localhost:4000/body%22%20target=%22_blank%22%3Ehttp://localhost:4000/body%3C/a%3E%20and%20you%20will%20see%20result%20returned%20from%20this%20method.%3C/p%3E%0A%3Cp%3EWe%20hope%20you%20have%20understood%20this%20get%20started%20article.%20Now%20lets%20make%20something%20awesome.%3C/p%3E%0A%3Ch4%20id=%22checkitoutsometutorialexamplesformoreunderstanding%22%3E*%20Check%20it%20out%20some%20tutorial%20&amp;%20examples%20for%20more%20understanding%20-%3C/h4%3E%0A%3Cul%3E%0A%3Cli%3E%5BCreate%20Rest%20Api%5D(https://medium.com/shivneri-framework/rest-api-in-crystal%20lang-lang-using-shivneri-f70f1035a731)%3C/li%3E%0A%3Cli%3E%3Ca%20href=%22https://github.com/ujjwalguptaofficial/shivneri-examples/tree/master/rest%22%3ERest%20Api%20example%3C/a%3E%3C/li%3E%0A%3C/ul%3E",t.title="Get Started",t.keywords="introduction, get started, fort-creator Shivneri, crystal lang",t.description="Shivneri introduction & how to use.",t}return a(t,e),t=s([Object(n.Component)({components:{Tutorial:i.a}})],t)}(n.Vue),d=r(9),c=Object(d.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="get-started.vue";t.default=c.exports}}]);