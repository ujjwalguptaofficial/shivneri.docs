(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{159:function(e,t,n){var r=n(162);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(18).default)("2aa3933d",r,!0,{})},160:function(e,t,n){var r=n(164);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(18).default)("478f6032",r,!0,{})},161:function(e,t,n){"use strict";var r=n(159);n.n(r).a},162:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},163:function(e,t,n){"use strict";var r=n(160);n.n(r).a},164:function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}\n.search{padding:5px;margin-top:20px\n}\n.search i{vertical-align:middle\n}\n.search #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n.search ul{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);list-style:none;margin:0;padding:0;position:absolute;z-index:1000;background:#fff;width:95%\n}\n.search ul li a{padding:8px;width:100%;height:100%;display:inline-block;color:#000\n}",""])},165:function(e,t,n){"use strict";var r,i=n(6),o=n(33),a=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return a(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(n){n.id===e?1==t.expandInfo[n.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[n.id]&&t.$set(t.expandInfo,n.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,n=Number(t.dataset.id);this.setExpandInfo(n)},t=s([Object(i.Component)({props:{items:Array}})],t)}(i.Vue),c=(n(161),n(9)),d=Object(c.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"margin-top-20px"},e._l(e.items,function(t){return n("div",{key:t.id,staticClass:"treeview-parent",class:{active:t.url===e.activeUrl}},[n("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n            "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),e._v(" "),n("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},["null"!=t.url?n("a",{attrs:{"data-id":t.id,href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):n("span",{attrs:{"data-id":t.id}},[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?n("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id] === true"}]},e._l(t.childs,function(t){return n("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[n("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);d.options.__file="treeview.vue";var p=d.exports,u=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:"result",text:"Result",url:"result"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:10,text:"Component",url:"component",childs:[{id:1,text:"Wall",url:"component/wall"},{id:2,text:"Shield",url:"component/shield"},{id:3,text:"Guard",url:"component/guard"}]},{id:11,text:"Concepts",url:"null",childs:[{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"component-data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File upload",url:"file"}]}],h=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},g=function(e){function t(){var t=e.call(this)||this;return t.version=1,t.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],t.adIndex=-1,t.showMenu=!1,t.searchValue="",t.searchResult=[],t.linksWithChilds=[],t.catchEvents(),t}return h(t,e),t.prototype.catchEvents=function(){o.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this;0!=this.searchValue.length?this.searchResult=this.linksWithChilds.filter(function(t){if(t.text.toLowerCase().indexOf(e.searchValue)>=0)return t}):this.searchResult=[]},t.prototype.isNullOrEmpty=function(e){return null==e||0==e.length},t.prototype.mounted=function(){var e=this;this.showAds(),this.setLinksWithChilds();var t,n=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(r){if(null!=r.childs){var i=r.childs.find(function(t){return n===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=i)return t=i.url,e.$refs.linkContainer.setExpandInfo(r.id),!1}return!e.isNullOrEmpty(t)||n!==(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")||(t=r.url,r.childs&&r.childs.length>0&&e.$refs.linkContainer.setExpandInfo(r.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"Shivneri - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this,t=this.$route.path,n=(this.relativeUrl,this.linksWithChilds.findIndex(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")})),r=this.linksWithChilds[n];return r?r.url:null},enumerable:!0,configurable:!0}),t.prototype.showAds=function(){var e=this,t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t,setTimeout(function(){e.showAds()},3e3)},t.prototype.setLinksWithChilds=function(){var e=this;this.links.forEach(function(t){e.linksWithChilds.push(t),t.childs&&t.childs.forEach(function(t){e.linksWithChilds.push(t)})})},t=f([Object(i.Component)({components:{TreeView:p},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(o.a),v=(n(163),Object(c.a)(g,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:""}},[n("div",{staticClass:"search"},[n("v-card",{staticClass:"search-wrapper"},[n("v-card-text",{staticStyle:{padding:"5px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),n("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),e.searchResult.length>0?n("ul",{staticClass:"search-results"},e._l(e.searchResult,function(t){return n("li",[n("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])],1)],1),e._v(" "),n("TreeView",{ref:"linkContainer",attrs:{id:"divMenuContainer",items:e.links}})],1),e._v(" "),n("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[n("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),n("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[n("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[n("img",{staticClass:"ad-image",attrs:{src:"//jsstore.net/img/JsStore_350_155.png"}}),e._v(" "),n("div",[e._v(e._s(e.jsstoreText[e.adIndex]))])]),e._v(" "),null!=e.docToEdit?n("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/shivneri-crystal/community",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?n("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/shivneri.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("v-icon",{staticStyle:{display:"inline-flex"}},[e._v("edit")])],1):e._e(),e._v(" "),null!=e.docToEdit?n("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"fab fa-twitter"})]):e._e()],1)],1)},[],!1,null,null,null));v.options.__file="tutorial.vue";t.a=v.exports},198:function(e,t,n){"use strict";n.r(t);var r,i=n(6),o=n(165),a=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3E%3Ccode%3Ebody%3C/code%3E%20is%20class%20member%20of%20Guard%20and%20Controller.%20It%20is%20used%20to%20access%20body%20data%20sent%20in%20http%20post%20request.%20%3C/p%3E%0A%3Cp%3Ebody%20data%20is%20stored%20in%20form%20of%20hash%20(key%20is%20type%20of%20string%20&amp;%20value%20is%20type%20of%20JSON::Any),%20so%20you%20can%20use%20hash%20syntax%20for%20accessing%20body%20data.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eclass%20UserController%20&lt;%20Shivneri::Controller%0A%0A%20%20%20%20%20%20@%5BWorker%5D%0A%20%20%20%20%20%20def%20full_name%0A%20%20%20%20%20%20%20%20first_name%20=%20body%5B%22first_name%22%5D%20#%20this%20syntax%20is%20not%20recommended%20because%20if%20key%20is%20not%20found%20then%20exception%20will%20be%20thrown%0A%0A%20%20%20%20%20%20%20%20last_name%20=%20body%5B%22last_name%22%5D?%20#%20this%20is%20recommended%0A%20%20%20%20%20%20%20%20return%20text_result(%22full%20name%20is%20#%7Bfirst_name%7D%20#%7Blast_name%7D%22)%0A%20%20%20%20%20%20end%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Ch2%20id=%22to_tuple%22%3Eto_tuple%3C/h2%3E%0A%3Cp%3Ebody%20has%20method%20%3Ccode%3Eto_tuple%3C/code%3E%20which%20takes%20%3Ccode%3ENamedTuple%3C/code%3E%20type%20&amp;%20returns%20a%20%3Ccode%3ENamedTuple%3C/code%3E%20value.%20It%20extracts%20value%20from%20body%20data%20&amp;%20converts%20every%20value%20it%20into%20expected%20type.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eclass%20UserController%20&lt;%20Shivneri::Controller%0A%0A%20%20%20%20%20%20@%5BWorker%5D%0A%20%20%20%20%20%20def%20full_name%0A%20%20%20%20%20%20%20%20%20data%20=%20body.to_tuple(NamedTuple(first_name:%20String,%20last_name:%20String))%0A%20%20%20%20%20%20%20%20return%20text_result(%22full%20name%20is%20#%7Bdata.first_name%7D%20#%7Bdata.last_name%7D%22)%0A%20%20%20%20%20%20end%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThis%20method%20is%20helpful%20when%20you%20are%20extracting%20large%20body%20data%20(have%20many%20keys).%20%3C/p%3E%0A%3Ch2%20id=%22injectbodyinworker%22%3EInject%20body%20in%20worker%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AShivneri%20can%20convert%20body%20into%20a%20class%20instance%20&amp;%20inject%20it%20as%20worker%20args.%3C/p%3E%0A%3Cp%3EFor%20this%20you%20need%20to%20perform%20few%20steps%20-%20%3C/p%3E%0A%3Col%3E%0A%3Cli%3ECreate%20a%20class%20with%20a%20constructor%20which%20takes%20a%20%3Ccode%3ENamedTuple%3C/code%3E%20as%20argument%20&amp;%20then%20initialize%20class%20property.%20%3C/li%3E%0A%3C/ol%3E%0A%3Cpre%3E%3Ccode%3Eclass%20User%0A%20%20%20%20%20%20include%20JSON::Serializable%0A%20%20%20%20%20%20property%20id,%20name,%20gender%0A%0A%20%20%20%20%20%20@id%20:%20Int32%0A%20%20%20%20%20%20@name%20:%20String%0A%20%20%20%20%20%20@gender%20:%20String%0A%0A%20%20%20%20%20%20def%20initialize(user)%20#%20A%20constructor%20which%20initialize%20property%20from%20named%20tuple%0A%20%20%20%20%20%20%20%20@id%20=%20user%5B:id%5D%0A%20%20%20%20%20%20%20%20@name%20=%20user%5B:name%5D%0A%20%20%20%20%20%20%20%20@gender%20=%20user%5B:gender%5D%0A%20%20%20%20%20%20end%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Col%20start=%222%22%3E%0A%3Cli%3EUse%20annotation%20%3Ccode%3EInject%3C/code%3E%20to%20inject%20body%3C/li%3E%0A%3C/ol%3E%0A%3Cpre%3E%3Ccode%3Eclass%20UserController%20&lt;%20Shivneri::Controller%0A%0A%20%20%20%20%20%20@%5BWorker%5D%0A%20%20%20%20%20%20@%5BInject(%22as_body%22)%5D%0A%20%20%20%20%20%20def%20add_user(user)%0A%20%20%20%20%20%20%20%20return%20json_result(user)%0A%20%20%20%20%20%20end%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Col%20start=%223%22%3E%0A%3Cli%3EProvide%20your%20class%20in%20Annotation%20%3Ccode%3EExpectBody%3C/code%3E%20%3C/li%3E%0A%3C/ol%3E%0A%3Cpre%3E%3Ccode%3Eclass%20UserController%20&lt;%20Shivneri::Controller%0A%0A%20%20%20%20%20%20@%5BWorker%5D%0A%20%20%20%20%20%20@%5BInject(%22as_body%22)%5D%0A%20%20%20%20%20%20@%5BExpectBody(User)%5D%0A%20%20%20%20%20%20def%20add_user(user)%0A%20%20%20%20%20%20%20%20return%20json_result(user)%0A%20%20%20%20%20%20end%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EThis%20is%20a%20recommend%20approach%20to%20extract%20body%20because%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ECode%20is%20clear%20&amp;%20readable%20%3C/li%3E%0A%3Cli%3EIn%20the%20end%20,%20you%20are%20going%20to%20create%20an%20instance%20of%20a%20class.%3C/li%3E%0A%3Cli%3EUnit%20testable%20-%20different%20value%20can%20be%20passed%20directly%20to%20method.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Cdiv%20class=%22top-border%22%3E%3Cbr%3E%3C/div%3E%0A%3Cp%3EBy%20default%20Shivneri%20parses%20the%20body%20data.%20But%20it%20can%20be%20turned%20off%20by%20setting%20option%20-%20%3Ccode%3Eshould_parse_post%3C/code%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%3EShivneri.should_parse_post%20=%20false%0A%3C/code%3E%3C/pre%3E",t.title="Body",t.keywords="request, post, body, Shivneri, crystal",t.description="Shivneri body member details",t}return a(t,e),t=s([Object(i.Component)({components:{Tutorial:o.a}})],t)}(i.Vue),c=n(9),d=Object(c.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);d.options.__file="body.vue";t.default=d.exports}}]);