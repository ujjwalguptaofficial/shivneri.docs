(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{158:function(e,t,n){var i=n(161);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(17).default)("2aa3933d",i,!0,{})},159:function(e,t,n){var i=n(163);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(17).default)("478f6032",i,!0,{})},160:function(e,t,n){"use strict";var i=n(158);n.n(i).a},161:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"\n.treeview-parent{padding:5px 10px;cursor:pointer\n}\n.treeview-parent .text{display:inline-block;padding:3px\n}\n.treeview-parent i.material-icons{vertical-align:bottom\n}\n.treeview-parent:not(.link-active) .text a{padding:5px\n}\n.treeview-parent .text:hover{border-bottom:1px solid\n}",""])},162:function(e,t,n){"use strict";var i=n(159);n.n(i).a},163:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"\n#divTutorialContent{padding-left:20px\n}\n.link-active,.treeview-parent.active div{background-color:#e1e0e0;font-weight:700\n}\n#divMenuContainer a{color:#000\n}\n#divMenuContainer{background-color:#f9f9f9\n}\n#divMenuContainer ul{list-style:none;margin-left:20px\n}\n#divMenuContainer ul li{padding:5px\n}\n#divMenuContainer ul li a{color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:2px 8px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100%;height:auto\n}\n.search{padding:5px;margin-top:20px\n}\n.search i{vertical-align:middle\n}\n.search #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n.search ul{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);list-style:none;margin:0;padding:0;position:absolute;z-index:1000;background:#fff;width:95%\n}\n.search ul li a{padding:8px;width:100%;height:100%;display:inline-block;color:#000\n}",""])},164:function(e,t,n){"use strict";var i,r=n(6),o=n(33),a=(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.activeUrl="",t.expandInfo={},t}return a(t,e),t.prototype.mounted=function(){var e=this;this.items.forEach(function(t){e.$set(e.expandInfo,t.id,!1)})},t.prototype.setActiveLink=function(e){this.activeUrl=e},t.prototype.setExpandInfo=function(e){var t=this;this.items.forEach(function(n){n.id===e?1==t.expandInfo[n.id]?t.$set(t.expandInfo,e,!1):t.$set(t.expandInfo,e,!0):1==t.expandInfo[n.id]&&t.$set(t.expandInfo,n.id,!1)})},t.prototype.onMenuClick=function(e){var t=e.target,n=Number(t.dataset.id);this.setExpandInfo(n)},t=s([Object(r.Component)({props:{items:Array}})],t)}(r.Vue),c=(n(160),n(9)),p=Object(c.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"margin-top-20px"},e._l(e.items,function(t){return n("div",{key:t.id,staticClass:"treeview-parent",class:{active:t.url===e.activeUrl}},[n("i",{staticClass:"material-icons",class:{"not-visible":null==t.childs||0==t.childs.length},attrs:{"data-id":t.id},on:{click:e.onMenuClick}},[e._v("\n            "+e._s(!0===e.expandInfo[t.id]?"keyboard_arrow_down":"chevron_right")+"\n        ")]),e._v(" "),n("div",{staticClass:"text",attrs:{"data-id":t.id},on:{click:e.onMenuClick}},["null"!=t.url?n("a",{attrs:{"data-id":t.id,href:"/tutorial/"+t.url}},[e._v(e._s(t.text))]):n("span",{attrs:{"data-id":t.id}},[e._v(" "+e._s(t.text))])]),e._v(" "),null!=t.childs?n("ul",{directives:[{name:"show",rawName:"v-show",value:!0===e.expandInfo[t.id],expression:"expandInfo[item.id] === true"}]},e._l(t.childs,function(t){return n("li",{key:t.id,class:{"link-active":t.url===e.activeUrl}},[n("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])}))},[],!1,null,null,null);p.options.__file="treeview.vue";var d=p.exports,u=[{id:1,url:"get-started",text:"Get Started"},{id:2,url:"controller",text:"Controller"},{id:3,url:"worker",text:"Worker"},{id:4,text:"Route",url:"route"},{id:8,text:"Authentication",url:"authentication"},{id:9,text:"Logger",url:"logger"},{id:10,text:"Component",url:"component",childs:[{id:1,text:"Wall",url:"component/wall"},{id:2,text:"Shield",url:"component/shield"},{id:3,text:"Guard",url:"component/guard"}]},{id:11,text:"Concepts",url:"null",childs:[{id:2,text:"Session",url:"session"},{id:3,text:"Component Data",url:"component-data"},{id:4,text:"Route Param",url:"param"},{id:5,text:"Query String",url:"query"},{id:6,text:"Post Data",url:"body"}]}],h=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),f=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},g=function(e){function t(){var t=e.call(this)||this;return t.version=1,t.jsstoreText=["Store data in browser using jsstore","Improve your web app performance by storing data in client side","Easy indexeddb development using jsstore"],t.adIndex=-1,t.showMenu=!1,t.searchValue="",t.searchResult=[],t.linksWithChilds=[],t.catchEvents(),t}return h(t,e),t.prototype.catchEvents=function(){o.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this;0!=this.searchValue.length?this.searchResult=this.linksWithChilds.filter(function(t){if(t.text.toLowerCase().indexOf(e.searchValue)>=0)return t}):this.searchResult=[]},t.prototype.isNullOrEmpty=function(e){return null==e||0==e.length},t.prototype.mounted=function(){var e=this;this.showAds(),this.setLinksWithChilds();var t,n=this.$route.path.toLowerCase().replace(/\//g,"");this.links.every(function(i){if(null!=i.childs){var r=i.childs.find(function(t){return n===(""+e.relativeUrl+t.url.toLowerCase()).replace(/\//g,"")});if(null!=r)return t=r.url,e.$refs.linkContainer.setExpandInfo(i.id),!1}return!e.isNullOrEmpty(t)||n!==(""+e.relativeUrl+i.url.toLowerCase()).replace(/\//g,"")||(t=i.url,i.childs&&i.childs.length>0&&e.$refs.linkContainer.setExpandInfo(i.id),!1)}),t&&t.length>0&&this.$refs.linkContainer.setActiveLink(t)},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.head=function(){return{title:"Shivneri - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},t.prototype.getVersion=function(){return"1"},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){return this.allLinks_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")})},Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this,t=this.$route.path,n=(this.relativeUrl,this.linksWithChilds.findIndex(function(n){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+n.url.toLowerCase()).replace(/\//g,"")})),i=this.linksWithChilds[n];return i?i.url:null},enumerable:!0,configurable:!0}),t.prototype.showAds=function(){var e=this,t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t,setTimeout(function(){e.showAds()},3e3)},t.prototype.setLinksWithChilds=function(){var e=this;this.links.forEach(function(t){e.linksWithChilds.push(t),t.childs&&t.childs.forEach(function(t){e.linksWithChilds.push(t)})})},t=f([Object(r.Component)({components:{TreeView:d},props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],t)}(o.a),v=(n(162),Object(c.a)(g,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),e._v(" "),n("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:""}},[n("div",{staticClass:"search"},[n("v-card",{staticClass:"search-wrapper"},[n("v-card-text",{staticStyle:{padding:"5px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),n("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),e.searchResult.length>0?n("ul",{staticClass:"search-results"},e._l(e.searchResult,function(t){return n("li",[n("a",{attrs:{href:"/tutorial/"+t.url}},[e._v(e._s(t.text))])])})):e._e()])],1)],1),e._v(" "),n("TreeView",{ref:"linkContainer",attrs:{id:"divMenuContainer",items:e.links}})],1),e._v(" "),n("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{xs12:"",md8:"",xl8:"",id:"divTutorialContent"}},[n("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),n("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[n("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://jsstore.net/"}},[n("img",{staticClass:"ad-image",attrs:{src:"//jsstore.net/img/JsStore_350_155.png"}}),e._v(" "),n("div",[e._v(e._s(e.jsstoreText[e.adIndex]))])]),e._v(" "),null!=e.docToEdit?n("v-btn",{staticClass:"margin-bottom-140px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/shivneri-crystal/community",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"fab fa-gitter"})]):e._e(),e._v(" "),null!=e.docToEdit?n("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/shivneri.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("v-icon",{staticStyle:{display:"inline-flex"}},[e._v("edit")])],1):e._e(),e._v(" "),null!=e.docToEdit?n("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://twitter.com/ujjwal_kr_gupta",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"fab fa-twitter"})]):e._e()],1)],1)},[],!1,null,null,null));v.options.__file="tutorial.vue";t.a=v.exports},228:function(e,t,n){"use strict";n.r(t);var i,r=n(6),o=n(164),a=(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EWall%20is%20security%20layer%20on%20top%20of%20your%20app%20&amp;%20called%20very%20first%20as%20soon%20as%20http%20request%20is%20accepted.%20It%20controls%20whether%20a%20request%20should%20be%20allowed%20to%20enter%20inside%20the%20app.%20It%20can%20also%20be%20used%20to%20do%20some%20task%20and%20pass%20data%20inside%20app.%3C/p%3E%0A%3Cp%3EThere%20can%20be%20multiple%20wall%20for%20an%20app%20-%3C/p%3E%0A%3Cp%3EWall%20has%20two%20lifecycle%20hook%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3Eentered%3C/strong%3E%20-%20called%20when%20a%20request%20has%20entered%20inside%20the%20Shivneri%20(app).%20If%20this%20events%20returns%20nil%20means%20request%20is%20allowed%20to%20enter%20otherwise%20rejects%20with%20the%20result%20returned.%3C/p%3E%0A%3Cp%3EIf%20there%20are%20multiple%20walls%20then%20%22entered%22%20is%20called%20in%20same%20order%20as%20they%20are%20defined.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3E%3Cstrong%3Efinished%3C/strong%3E%20-%20called%20when%20a%20controller%20is%20executed%20&amp;%20response%20is%20about%20to%20be%20sent.%20This%20is%20an%20optional%20event%20&amp;%20Result%20returned%20from%20this%20event%20is%20ignored.%3C/p%3E%0A%3Cp%3EIf%20there%20are%20multiple%20walls%20then%20%22finished%22%20is%20called%20in%20reverse%20order%20as%20they%20are%20defined.%3C/p%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3EA%20wall%20has%20access%20to%20following%20-%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EQuery%20string%20data%20-%20%3Ccode%3Equery%3C/code%3E%3C/li%3E%0A%3Cli%3EData%20from%20other%20components%20-%20%20%3Ccode%3E%5B%5D%3C/code%3E%3C/li%3E%0A%3Cli%3ELogger%20-%20%3Ccode%3Elogger%3C/code%3E%3C/li%3E%0A%3Cli%3ECookie%20-%20%3Ccode%3Ecookie%3C/code%3E%3C/li%3E%0A%3Cli%3ESession%20-%20%3Ccode%3Esession%3C/code%3E%3C/li%3E%0A%3Cli%3ERequest%20-%20%3Ccode%3Erequest%3C/code%3E%3C/li%3E%0A%3Cli%3EResponse%20-%20%3Ccode%3Eresponse%3C/code%3E%3C/li%3E%0A%3C/ul%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch1%20id=%22creatingwall%22%3ECreating%20wall%3C/h1%3E%0A%3Cp%3E%3Cbr%3E%0AWall%20is%20a%20class%20which%20inherits%20the%20class%20%22Wall%22%20from%20Shivneri.%3C/p%3E%0A%3Cpre%3E%3Ccode%3Eclass%20AppWall%20&lt;%20Wall%0A%20%20%20%20def%20entered%0A%20%20%20%20%20%20%20%20if%20(some%20condition)%20#%20block%20request%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20text_result(%22This%20request%20is%20blocked%20by%20wall%22);%0A%20%20%20%20%20%20%20%20end%0A%20%20%20%20end%0A%0A%20%20%20%20def%20finished%0A%20%20%20%20%20%20%20%20#%20this%20events%20can%20be%20used%20to%20set%20headers%20or%20log%20datas%20etc%0A%20%20%20%20%20%20%20%20logger.debug(%22request%20finished%22);%0A%20%20%20%20end%0Aend%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3ENow%20you%20have%20defined%20the%20wall%20but%20in%20order%20to%20use%20this%20wall,%20you%20need%20to%20add%20it%20to%20Shivneri.%3C/p%3E%0A%3Cpre%3E%3Ccode%3EShivneri.walls%20=%20%5BAppWall%5D%0A%3C/code%3E%3C/pre%3E",t.title="Wall",t.keywords="wall, component, options, Shivneri, crystal",t.description="Description about wall components & its uses",t}return a(t,e),t=s([Object(r.Component)({components:{Tutorial:o.a}})],t)}(r.Vue),c=n(9),p=Object(c.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);p.options.__file="wall.vue";t.default=p.exports}}]);