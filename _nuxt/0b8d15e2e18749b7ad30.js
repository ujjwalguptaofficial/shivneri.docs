(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{159:function(t,e,r){var n=r(162);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(18).default)("2aa3933d",n,!0,{})},160:function(t,e,r){var n=r(164);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(18).default)("478f6032",n,!0,{})},161:function(t,e,r){"use strict";var n=r(159);r.n(n).a},162:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},163:function(t,e,r){"use strict";var n=r(160);r.n(n).a},164:function(t,e,r){(t.exports=r(17)(!1)).push([t.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}\n.search{padding:5px;margin-top:20px\n}\n.search i{vertical-align:middle\n}\n.search #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n.search ul{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);list-style:none;margin:0;padding:0;position:absolute;z-index:1000;background:#fff;width:95%\n}\n.search ul li a{padding:8px;width:100%;height:100%;display:inline-block;color:#000\n}",""])},165:function(t,e,r){"use strict";var n,i=r(6),o=r(33),s=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),l=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s},a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.activeUrl="",e.expandInfo={},e}return s(e,t),e.prototype.mounted=function(){var t=this;this.items.forEach(function(e){t.$set(t.expandInfo,e.id,!1)})},e.prototype.setActiveLink=function(t){this.activeUrl=t},e.prototype.setExpandInfo=function(t){var e=this;this.items.forEach(function(r){r.id===t?1==e.expandInfo[r.id]?e.$set(e.expandInfo,t,!1):e.$set(e.expandInfo,t,!0):1==e.expandInfo[r.id]&&e.$set(e.expandInfo,r.id,!1)})},e.prototype.onMenuClick=function(t){var e=t.target,r=Number(e.dataset.id);this.setExpandInfo(r)},e=l([Object(i.Component)({props:{items:Array}})],e)}(i.Vue),u=(r(161),r(9)),c=Object(u.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin-top-20px"},t._l(t.items,function(e){return r("div",{key:e.id,staticClass:"treeview-parent",class:{active:e.url===t.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==e.childs||0==e.childs.length},attrs:{"data-id":e.id},on:{click:t.onMenuClick}},[t._v("\n            "+t._s(!0===t.expandInfo[e.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),t._v(" "),r("div",{staticClass:"text",attrs:{"data-id":e.id},on:{click:t.onMenuClick}},["null"!=e.url?r("a",{attrs:{"data-id":e.id,href:"/tutorial/"+e.url}},[t._v(t._s(e.text))]):r("span",{attrs:{"data-id":e.id}},[t._v(" "+t._s(e.text))])]),t._v(" "),null!=e.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===t.expandInfo[e.id],expression:"expandInfo[item.id] === true"}]},t._l(e.childs,function(e){return r("li",{key:e.id,class:{"link-active":e.url===t.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])}))},[],!1,null,null,null);c.options.__file="treeview.vue";var p=c.exports,d=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:"result",text:"Result",url:"result"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:10,text:"Component",url:"component",childs:[{id:1,text:"Wall",url:"component/wall"},{id:2,text:"Shield",url:"component/shield"},{id:3,text:"Guard",url:"component/guard"}]},{id:"websocket",text:"Websocket",url:"websocket",childs:[{id:"controller",text:"WebSocketController",url:"websocket/controller"},{id:"clients",text:"Clients",url:"websocket/clients"},{id:"groups",url:"websocket/groups",text:"Groups"}]},{id:11,text:"Concepts",url:"null",childs:[{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"component-data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File upload",url:"file"}]}],h=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),f=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s},g=function(t){function e(){var e=t.call(this)||this;return e.version=1,e.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],e.adIndex=-1,e.showMenu=!1,e.searchValue="",e.searchResult=[],e.linksWithChilds=[],e.catchEvents(),e}return h(e,t),e.prototype.catchEvents=function(){o.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this;0!=this.searchValue.length?this.searchResult=this.linksWithChilds.filter(function(e){if(e.text.toLowerCase().indexOf(t.searchValue)>=0)return e}):this.searchResult=[]},e.prototype.isNullOrEmpty=function(t){return null==t||0==t.length},e.prototype.mounted=function(){var t=this;this.showAds(),this.setLinksWithChilds();var e,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(n){if(null!=n.childs){var i=n.childs.find(function(e){return r===(""+t.relativeUrl+e.url.toLowerCase()).replace(/\//g,"")});if(null!=i)return e=i.url,t.$refs.linkContainer.setExpandInfo(n.id),!1}return!t.isNullOrEmpty(e)||r!==(""+t.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")||(e=n.url,n.childs&&n.childs.length>0&&t.$refs.linkContainer.setExpandInfo(n.id),!1)}),e&&e.length>0&&this.$refs.linkContainer.setActiveLink(e)},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.head=function(){return{title:"Shivneri - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return"1"},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this,e=this.$route.path,r=(this.relativeUrl,this.linksWithChilds.findIndex(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})),n=this.linksWithChilds[r];return n?n.url:null},enumerable:!0,configurable:!0}),e.prototype.showAds=function(){var t=this,e=++this.adIndex;e>=this.jsstoreText.length&&(e=this.adIndex=0),this.adIndex=e,setTimeout(function(){t.showAds()},3e3)},e.prototype.setLinksWithChilds=function(){var t=this;this.links.forEach(function(e){t.linksWithChilds.push(e),e.childs&&e.childs.forEach(function(e){t.linksWithChilds.push(e)})})},e=f([Object(i.Component)({components:{TreeView:p},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(o.a),x=(r(163),Object(u.a)(g,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:""}},[r("div",{staticClass:"search"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),r("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),t.searchResult.length>0?r("ul",{staticClass:"search-results"},t._l(t.searchResult,function(e){return r("li",[r("a",{attrs:{href:"/tutorial/"+e.url}},[t._v(t._s(e.text))])])})):t._e()])],1)],1),t._v(" "),r("TreeView",{ref:"linkContainer",attrs:{id:"divMenuContainer",items:t.links}})],1),t._v(" "),r("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[r("img",{staticClass:"ad-image",attrs:{src:"//jsstore.net/img/JsStore_350_155.png"}}),t._v(" "),r("div",[t._v(t._s(t.jsstoreText[t.adIndex]))])]),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/shivneri-crystal/community",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/shivneri.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",{staticStyle:{display:"inline-flex"}},[t._v("edit")])],1):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-twitter"})]):t._e()],1)],1)},[],!1,null,null,null));x.options.__file="tutorial.vue";e.a=x.exports},243:function(t,e,r){"use strict";r.r(e);var n,i=r(6),o=r(165),s=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),l=function(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s},a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EThe%20type%20%3Ccode%3EhttpResult%3C/code%3E%20is%20used%20by%20workers%20to%20return%20the%20result.%20%3C/p%3E%0A%3Cp%3EStructure%20of%20httpResult%20is%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Etype%20HttpResult%20=%20%7B%0A%20%20%20%20statusCode:%20HTTP_STATUS_CODE;%0A%20%20%20%20responseData:%20any;%0A%20%20%20%20contentType:%20MIME_TYPE;%0A%20%20%20%20file%20?%20:%20FileResultInfo;%0A%20%20%20%20shouldRedirect%20?%20:%20boolean;%0A%7D;%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EShivneri%20provides%20some%20helper%20method%20which%20return%20result%20of%20type%20HttpResult.%20These%20are%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EtextResult%20-%20used%20to%20return%20text%20result.%3C/li%3E%0A%3Cli%3EjsonResult%20-%20used%20to%20return%20json%20result.%3C/li%3E%0A%3Cli%3EhtmlResult%20-%20used%20to%20return%20html%20result.%3C/li%3E%0A%3Cli%3EviewResult%20-%20used%20to%20return%20a%20view.%3C/li%3E%0A%3Cli%3EfileResult%20-%20used%20to%20return%20a%20file%20which%20will%20be%20rendered%20by%20browser.%3C/li%3E%0A%3Cli%3EdownloadResult%20-%20used%20to%20return%20a%20file%20which%20will%20be%20downloaded%20by%20browser.%3C/li%3E%0A%3Cli%3EredirectResult%20-%20used%20to%20return%20a%20result%20which%20will%20tell%20browser%20to%20redirect%20url.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22example%22%3EExample%3C/h2%3E%0A%3Ch3%20id=%22retruningastringusinghttpresult%22%3ERetruning%20a%20string%20using%20httpResult%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20defaultWorker,%20HTTP_STATUS_CODE,%20MIME_TYPE%20%20%7D%20from%20%22Shivneri%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@defaultWorker()%0A%20%20%20%20async%20default%20()%20%7B%0A%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20statusCode:%20HTTP_STATUS_CODE.Ok,%0A%20%20%20%20%20%20%20%20%20%20%20%20responseData:%20%22This%20is%20default%20worker%20for%20section%20user%22,%0A%20%20%20%20%20%20%20%20%20%20%20%20contentType:%20MIME_TYPE.Text%0A%20%20%20%20%20%20%20%20%7D;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%20id=%22retruningastringusinghelpermethodtextresult%22%3ERetruning%20a%20string%20using%20helper%20method%20-%20textResult%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Eimport%20%7B%20Controller,%20defaultWorker,%20textResult%20%7D%20from%20%22Shivneri%22;%0A%0Aexport%20class%20UserController%20extends%20Controller%20%7B%0A%0A%20%20%20%20@defaultWorker()%0A%20%20%20%20async%20default%20()%20%7B%0A%20%20%20%20%20%20%20return%20textResult(%22This%20is%20default%20worker%20for%20section%20user%22);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EYou%20can%20see%20-%20helper%20methods%20make%20things%20easy%20and%20looks%20pretty%20cool.%3C/p%3E",e.title="HttpResult",e.keywords="http result, type, options, Shivneri, crystal lang",e.description="Type HttpResult member description",e}return s(e,t),e=l([Object(i.Component)({components:{Tutorial:o.a}})],e)}(i.Vue),u=r(9),c=Object(u.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="http-result.vue";e.default=c.exports}}]);