(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{159:function(e,t,r){var o=r(162);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(18).default)("2aa3933d",o,!0,{})},160:function(e,t,r){var o=r(164);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,r(18).default)("478f6032",o,!0,{})},161:function(e,t,r){"use strict";var o=r(159);r.n(o).a},162:function(e,t,r){(e.exports=r(17)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},163:function(e,t,r){"use strict";var o=r(160);r.n(o).a},164:function(e,t,r){(e.exports=r(17)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}\n.search{padding:5px;margin-top:20px\n}\n.search i{vertical-align:middle\n}\n.search #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n.search ul{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);list-style:none;margin:0;padding:0;position:absolute;z-index:1000;background:#fff;width:95%\n}\n.search ul li a{padding:8px;width:100%;height:100%;display:inline-block;color:#000\n}",""])},165:function(e,t,r){"use strict";var o,n=r(6),i=r(33),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return a(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(r){r.id===e?1==t.expandInfo[r.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[r.id]&&t.$set(t.expandInfo,r.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,r=Number(t.dataset.id);this.setExpandInfo(r)},t=s([Object(n.Component)({props:{items:Array}})],t)}(n.Vue),c=(r(161),r(9)),p=Object(c.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"margin-top-20px"},e._l(e.items,function(t){return r("div",{key:t.id,staticClass:"treeview-parent",class:{active:t.url===e.activeUrl}},[r("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n            "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),e._v(" "),r("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},["null"!=t.url?r("a",{attrs:{"data-id":t.id,href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):r("span",{attrs:{"data-id":t.id}},[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?r("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id] === true"}]},e._l(t.childs,function(t){return r("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);p.options.__file="treeview.vue";var d=p.exports,u=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:"result",text:"Result",url:"result"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:10,text:"Component",url:"component",childs:[{id:1,text:"Wall",url:"component/wall"},{id:2,text:"Shield",url:"component/shield"},{id:3,text:"Guard",url:"component/guard"}]},{id:"websocket",text:"Websocket",url:"websocket",childs:[{id:"clients",text:"Clients",url:"websocket/clients"},{id:"groups",url:"websocket/groups",text:"Groups"}]},{id:11,text:"Concepts",url:"null",childs:[{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"component-data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"},{id:7,text:"File upload",url:"file"}]}],h=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}(),f=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},v=function(e){function t(){var t=e.call(this)||this;return t.version=1,t.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],t.adIndex=-1,t.showMenu=!1,t.searchValue="",t.searchResult=[],t.linksWithChilds=[],t.catchEvents(),t}return h(t,e),t.prototype.catchEvents=function(){i.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this;0!=this.searchValue.length?this.searchResult=this.linksWithChilds.filter(function(t){if(t.text.toLowerCase().indexOf(e.searchValue)>=0)return t}):this.searchResult=[]},t.prototype.isNullOrEmpty=function(e){return null==e||0==e.length},t.prototype.mounted=function(){var e=this;this.showAds(),this.setLinksWithChilds();var t,r=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(o){if(null!=o.childs){var n=o.childs.find(function(t){return r===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=n)return t=n.url,e.$refs.linkContainer.setExpandInfo(o.id),!1}return!e.isNullOrEmpty(t)||r!==(""+e.relativeUrl+o.url.toLowerCase()).replace(/\//g,"")||(t=o.url,o.childs&&o.childs.length>0&&e.$refs.linkContainer.setExpandInfo(o.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"Shivneri - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this,t=this.$route.path,r=(this.relativeUrl,this.linksWithChilds.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})),o=this.linksWithChilds[r];return o?o.url:null},enumerable:!0,configurable:!0}),t.prototype.showAds=function(){var e=this,t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t,setTimeout(function(){e.showAds()},3e3)},t.prototype.setLinksWithChilds=function(){var e=this;this.links.forEach(function(t){e.linksWithChilds.push(t),t.childs&&t.childs.forEach(function(t){e.linksWithChilds.push(t)})})},t=f([Object(n.Component)({components:{TreeView:d},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(i.a),g=(r(163),Object(c.a)(v,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:""}},[r("div",{staticClass:"search"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),e.searchResult.length>0?r("ul",{staticClass:"search-results"},e._l(e.searchResult,function(t){return r("li",[r("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])],1)],1),e._v(" "),r("TreeView",{ref:"linkContainer",attrs:{id:"divMenuContainer",items:e.links}})],1),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[r("img",{staticClass:"ad-image",attrs:{src:"//jsstore.net/img/JsStore_350_155.png"}}),e._v(" "),r("div",[e._v(e._s(e.jsstoreText[e.adIndex]))])]),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/shivneri-crystal/community",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/shivneri.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",{staticStyle:{display:"inline-flex"}},[e._v("edit")])],1):e._e(),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-twitter"})]):e._e()],1)],1)},[],!1,null,null,null));g.options.__file="tutorial.vue";t.a=g.exports},232:function(e,t,r){"use strict";r.r(t);var o,n=r(6),i=r(165),a=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),s=function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EExpectBody%20is%20a%20decorator%20which%20helps%20you%20to%20validate%20body%20data.%20It%20provides%20following%20features%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3ECheck%20data%20type%20of%20incoming%20body%20data%20against%20expected%20body.%3C/li%3E%0A%3Cli%3ERemoves%20unnecessary%20data%20from%20incoming%20body.%20This%20helps%20you%20to%20store%20data%20in%20nosql%20database%20without%20retrieving%20particular%20property%20and%20thus%20saving%20lots%20of%20code.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22checkdatatype%22%3ECheck%20data%20type%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AConsider%20a%20post%20request%20which%20sends%20following%20data%20in%20request%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3E%7B%0A%20%20%20%20price:%221200%22,%0A%20%20%20%20name:%22black%20jeans%20nike%22%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EHere%20price%20being%20sent%20is%201200%20which%20is%20string%20but%20server%20expects%20it%20to%20be%20number.%20In%20this%20case%20you%20will%20write%20codes%20to%20check%20for%20data%20type%20of%20%3Ccode%3Eprice%3C/code%3E%20property.%20%3C/p%3E%0A%3Cp%3EBut%20when%20using%20%3Ccode%3EExpectBody%3C/code%3E%20it%20will%20automatically%20check%20the%20datatype%20&amp;%20if%20not%20matches%20then%20returns%20a%20400%20request.%20This%20saves%20you%20writing%20code%20for%20validation%20of%20property%20type.%3C/p%3E%0A%3Cp%3ELet's%20see%20how%20to%20configure%20this%20using%20%3Ccode%3EExpectBody%3C/code%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20ProductController%7B%0A%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20@Worker(%5B%22post%22%5D)%0A%20%20%20%20@ExpectBody(%7B%20price:0,%20name:%22%22%7D)%0A%20%20%20%20saveProduct()%7B%0A%20%20%20%20%20%20%20const%20product%20=%20%20this.body;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EYou%20can%20also%20provide%20a%20class%20as%20parameter.%20Make%20sure%20that%20class%20properties%20are%20initialized.%3C/p%3E%0A%3Cp%3Ee.g%20-%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20Product%20%7B%0A%20%20price%20=%200;%0A%20%20name%20=%20%22%22%0A%7D%0A%0Aexport%20class%20ProductController%7B%0A%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20@Worker(%5B%22post%22%5D)%0A%20%20%20%20@ExpectBody(Product)%0A%20%20%20%20saveProduct()%7B%0A%20%20%20%20%20%20%20const%20product%20=%20%20this.body;%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22removesunnecessarydatafromincomingbody%22%3ERemoves%20unnecessary%20data%20from%20incoming%20body%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%0AConsider%20a%20post%20request%20which%20sends%20following%20data%20in%20request%20%3C/p%3E%0A%3Cpre%3E%3Ccode%3E%7B%0A%20%20%20%20name:%22ujjwal%20gupta%22,%0A%20%20%20%20gender:%22male%22,%0A%20%20%20%20extra:%22some%20extra%20value%22%20//%20some%20extra%20value%20which%20is%20not%20required%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3Enow%20for%20such%20requests%20-%3C/p%3E%0A%3Ch3%20id=%221weeithersavethewholedata%22%3E1.%20We%20either%20save%20the%20whole%20data%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20UserController%7B%0A%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20@Worker(%5B%22post%22%5D)%0A%20%20%20%20saveUser()%7B%0A%20%20%20%20%20%20%20const%20user%20=%20this.body;%0A%20%20%20%20%20%20%20//%20save%20user%20into%20mongodb%0A%20%20%20%20%20%20%20const%20service%20=%20new%20UserService();%0A%20%20%20%20%20%20%20service.saveUser(user);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EIn%20this%20case%20-%20property%20%3Ccode%3Eextra%3C/code%3E%20will%20be%20saved%20too%20&amp;%20thus%20your%20database%20has%20now%20garbage%20value.%20This%20is%20a%20very%20big%20risk%20&amp;%20you%20shouldn't%20save%20data%20this%20way%20when%20using%20nosql%20database.%3C/p%3E%0A%3Ch3%20id=%222extractparticularvaluefrombody%22%3E2.%20Extract%20particular%20value%20from%20body%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20UserController%7B%0A%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20@Worker(%5B%22post%22%5D)%0A%20%20%20%20saveUser()%7B%0A%20%20%20%20%20%20%20const%20user%20=%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20name:this.body.name,%0A%20%20%20%20%20%20%20%20%20%20%20gender:%20this.body.gender%0A%20%20%20%20%20%20%20%7D%20;%0A%20%20%20%20%20%20%20//%20save%20user%20into%20mongodb%0A%20%20%20%20%20%20%20const%20service%20=%20new%20UserService();%0A%20%20%20%20%20%20%20service.saveUser(user);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3Ethis%20is%20a%20good%20way%20but%20consider%20user%20value%20with%2010%20properties%20which%20means%20you%20need%20to%20write%2010%20lines%20of%20code.%3C/p%3E%0A%3Cp%3ELet's%20write%20the%20above%20code%20using%20%3Ccode%3EExpectBody%3C/code%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eexport%20class%20UserController%7B%0A%0A%20%20%20%20@Route(%22/%22)%0A%20%20%20%20@Worker(%5B%22post%22%5D)%0A%20%20%20%20@ExpectBody(%7Bname:%22%22,%20gender:%20%22%22%7D)%0A%20%20%20%20saveUser()%7B%0A%20%20%20%20%20%20%20const%20user%20=%20%20this.body;%0A%20%20%20%20%20%20%20//%20save%20user%20into%20mongodb%0A%20%20%20%20%20%20%20const%20service%20=%20new%20UserService();%0A%20%20%20%20%20%20%20service.saveUser(user);%0A%20%20%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E",t.title="Expect Body",t.keywords="body, secure body, validation, Shivneri, crystal lang",t.description="This page tells about decorator ExpectBody & how to use this.",t}return a(t,e),t=s([Object(n.Component)({components:{Tutorial:i.a}})],t)}(n.Vue),c=r(9),p=Object(c.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);p.options.__file="expect-body.vue";t.default=p.exports}}]);