(function(e){function t(t){for(var r,l,c=t[0],i=t[1],u=t[2],s=0,d=[];s<c.length;s++)l=c[s],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,l=1;l<a.length;l++){var i=a[l];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},o=[];function l(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0ac7f5e2"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=l(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,a[1](u)}n[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-test/dist/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n={id:"nav"},o=Object(r["f"])("Home"),l=Object(r["f"])(" | "),c=Object(r["f"])("About");function i(e,t){var a=Object(r["y"])("router-link"),i=Object(r["y"])("router-view");return Object(r["s"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",n,[Object(r["g"])(a,{to:"/"},{default:Object(r["G"])((function(){return[o]})),_:1}),l,Object(r["g"])(a,{to:"/about"},{default:Object(r["G"])((function(){return[c]})),_:1})]),Object(r["g"])(i)],64)}a("cdef");const u={};u.render=i;var s=u,b=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),d=a("cf05"),v=a.n(d),p={class:"home"},f=Object(r["g"])("img",{alt:"Vue logo",src:v.a},null,-1),m={class:"mb-3"},g=Object(r["g"])("label",{for:"email",class:"form-label"},"Email",-1),j=Object(r["g"])("div",{class:"mb-3"},[Object(r["g"])("label",{for:"name",class:"form-label"},"姓名"),Object(r["g"])("input",{id:"name",name:"姓名",type:"text",class:"form-control",placeholder:"請輸入姓名"}),Object(r["g"])("span",{class:"invalid-feedback"})],-1),h={class:"mb-3"},O=Object(r["g"])("label",{for:"phone",class:"form-label"},"電話",-1),y=Object(r["g"])("div",{class:"mb-3"},[Object(r["g"])("label",{for:"region",class:"form-label"},"地區"),Object(r["g"])("select",{id:"region",name:"地區",class:"form-control"},[Object(r["g"])("option",{value:""},"請選擇地區"),Object(r["g"])("option",{value:"台北市"},"台北市"),Object(r["g"])("option",{value:"高雄市"},"高雄市")]),Object(r["g"])("span",{class:"invalid-feedback"})],-1),k=Object(r["g"])("div",{class:"mb-3"},[Object(r["g"])("label",{for:"address",class:"form-label"},"地址"),Object(r["g"])("input",{id:"address",name:"地址",type:"text",class:"form-control",placeholder:"請輸入地址"}),Object(r["g"])("span",{class:"invalid-feedback"})],-1),_=Object(r["g"])("button",{class:"btn btn-primary",type:"submit"},"Submit",-1);function w(e,t,a,n,o,l){var c=this,i=Object(r["y"])("HelloWorld"),u=Object(r["y"])("Field"),s=Object(r["y"])("error-message"),b=Object(r["y"])("Form");return Object(r["s"])(),Object(r["d"])("div",p,[f,Object(r["g"])(i,{msg:"Welcome to Your Vue.js App"}),Object(r["f"])(" "+Object(r["B"])(o.title),1),Object(r["g"])(b,{onSubmit:l.onSubmit,class:"container"},{default:Object(r["G"])((function(e){var a=e.errors;return[Object(r["f"])(Object(r["B"])(a)+" ",1),Object(r["g"])("div",m,[g,Object(r["g"])(u,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":a["email"],"is-valid":!a["email"]&&o.user.email}],placeholder:"請輸入 Email",modelValue:c.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.user.email=e}),rules:"email|required"},null,8,["modelValue","class"]),Object(r["g"])(s,{name:"email",class:"invalid-feedback"})]),j,Object(r["g"])("div",h,[O,Object(r["g"])(u,{id:"phone",name:"電話",type:"text",modelValue:o.user.phone,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.user.phone=e}),class:["form-control",{"is-invalid":a["電話"],"is-valid":!a["電話"]&&o.user.phone}],placeholder:"請輸入電話",rules:l.isPhone},null,8,["modelValue","rules","class"]),Object(r["g"])(s,{class:"invalid-feedback",name:"電話"})]),y,k,_]})),_:1},8,["onSubmit"])])}var x=Object(r["H"])("data-v-5141a303");Object(r["v"])("data-v-5141a303");var P={class:"hello"},S=Object(r["e"])('<p data-v-5141a303> For a guide and recipes on how to configure / customize this project,<br data-v-5141a303> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-cli documentation</a>. </p><h3 data-v-5141a303>Installed CLI Plugins</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-5141a303>babel</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-5141a303>router</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-5141a303>eslint</a></li></ul><h3 data-v-5141a303>Essential Links</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Core Docs</a></li><li data-v-5141a303><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Forum</a></li><li data-v-5141a303><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>Community Chat</a></li><li data-v-5141a303><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-5141a303>Twitter</a></li><li data-v-5141a303><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>News</a></li></ul><h3 data-v-5141a303>Ecosystem</h3><ul data-v-5141a303><li data-v-5141a303><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-router</a></li><li data-v-5141a303><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vuex</a></li><li data-v-5141a303><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-5141a303>vue-devtools</a></li><li data-v-5141a303><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-5141a303>vue-loader</a></li><li data-v-5141a303><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-5141a303>awesome-vue</a></li></ul>',7);Object(r["t"])();var E=x((function(e,t,a,n,o,l){return Object(r["s"])(),Object(r["d"])("div",P,[Object(r["g"])("h1",null,Object(r["B"])(a.msg),1),S])})),V={name:"HelloWorld",props:{msg:String}};a("65e4");V.render=E,V.__scopeId="data-v-5141a303";var H=V,T={name:"Home",components:{HelloWorld:H},data:function(){return{user:{},title:"測試編譯後的環境變數"}},methods:{onSubmit:function(){console.log(this.user)},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"}},created:function(){console.log(this)}};T.render=w;var C=T,F=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],M=Object(b["a"])({history:Object(b["b"])(),routes:F}),W=M,A=a("7bb1"),I=a("3aa8"),L=a("cbdf"),q=a("9457");Object(A["e"])("email",I["a"]),Object(A["e"])("required",I["c"]),Object(A["e"])("min",I["b"]),Object(A["d"])({generateMessage:Object(L["a"])({zh_TW:q}),validateOnInput:!0}),Object(L["b"])("zh_TW");var z=Object(r["c"])(s).use(W);z.component("Form",A["c"]),z.component("Field",A["b"]),z.component("ErrorMessage",A["a"]),z.mount("#app")},"5e10":function(e,t,a){},"65e4":function(e,t,a){"use strict";a("5e10")},cdef:function(e,t,a){"use strict";a("f5b2")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},f5b2:function(e,t,a){}});
//# sourceMappingURL=app.3306a763.js.map