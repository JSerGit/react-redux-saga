(this["webpackJsonpreact-redux-saga"]=this["webpackJsonpreact-redux-saga"]||[]).push([[0],{39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(1),a=n.n(c),s=n(12),i=n(14),o=n(5),u=n(19),l=n(20),j=n(27),b=n(24),d=n(7),O="POST/CREATE_POST",p="POST/FETCH_POSTS",h="POST/REQUEST_POSTS",f="APP/SHOW_LOADER",x="APP/HIDE_LOADER",m="APP/SHOW_ALERT",v="APP/HIDE_ALERT";function g(){return{type:x}}function w(e){return function(t){t({type:m,payload:{message:e}}),setTimeout((function(){t(y())}),3e3)}}function y(){return{type:v}}var S=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).submitHandler=function(e){e.preventDefault();var t=r.state.title;if(t.trim()){var n={title:t,id:Date.now().toString()};r.props.createPost(n),r.setState(Object(o.a)(Object(o.a)({},r.state),{},{title:""}))}else r.props.showAlert("\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0441\u0442\u0430")},r.changeInputHandler=function(e){r.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},e.target.name,e.target.value))}))},r.state={title:""},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"title",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e\u0441\u0442\u0430"}),Object(r.jsx)("input",{type:"text",className:"form-control",id:"title",value:this.state.title,name:"title",onChange:this.changeInputHandler})]}),Object(r.jsx)("button",{className:"btn btn-success",type:"submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})}}]),n}(a.a.Component),P={createPost:function(e){return{type:O,payload:e}},showAlert:w},N=Object(d.b)(null,P)(S),E=function(e){var t=e.post;return Object(r.jsx)("div",{className:"card mt-3",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)("h5",{className:"card-title",children:t.title})})})},T=Object(d.b)((function(e){return console.log("mapStateToProps state",e),{syncPosts:e.posts.posts}}),null)((function(e){var t=e.syncPosts;return t.length?t.map((function(e){return Object(r.jsx)(E,{post:e},e.id)})):Object(r.jsx)("p",{className:"text-center",children:"\u041f\u043e\u0441\u0442\u043e\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"})}));n(39);function _(){return Object(r.jsx)("div",{className:"loaderWrapper",children:Object(r.jsx)("div",{className:"spinner-border",role:"status",children:Object(r.jsx)("span",{className:"sr-only",children:"Loading..."})})})}var k=function(){var e=Object(d.c)(),t=Object(d.d)((function(e){return e.posts.fetchedPosts}));return Object(d.d)((function(e){return e.app.loading}))?Object(r.jsx)(_,{}):t.length?t.map((function(e){return Object(r.jsx)(E,{post:e},e.id)})):Object(r.jsx)("button",{className:"btn btn-primary",onClick:function(){return e({type:h})},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"})},A=function(e){var t=e.message,n=Object(d.c)();return Object(r.jsx)("div",{className:"alert alert-warning",role:"alert",onClick:function(){return n(y())},children:t})};var D=function(){var e=Object(d.d)((function(e){return e.app.isWarningShow})),t=Object(d.d)((function(e){return e.app.warningMessage}));return Object(r.jsxs)("div",{className:"container pt-3",children:[e&&Object(r.jsx)(A,{message:t}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col",children:Object(r.jsx)(N,{})})}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)("h2",{children:"\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b"}),Object(r.jsx)(T,{})]}),Object(r.jsxs)("div",{className:"col",children:[Object(r.jsx)("h2",{children:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b"}),Object(r.jsx)(k,{})]})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},H=n(8),L=n(22),I=n(26),R=n(25),W={posts:[],fetchedPosts:[]},F={loading:!1,isWarningShow:!1,warningMessage:""},M=Object(H.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(R.a)(e.posts),[t.payload])});case p:return Object(o.a)(Object(o.a)({},e),{},{fetchedPosts:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(o.a)(Object(o.a)({},e),{},{loading:!0});case x:return Object(o.a)(Object(o.a)({},e),{},{loading:!1});case m:return Object(o.a)(Object(o.a)({},e),{},{isWarningShow:!0,warningMessage:t.payload.message});case v:return Object(o.a)(Object(o.a)({},e),{},{isWarningShow:!1});default:return e}}}),X=["fuck","ass","bitch"];var U=n(23),B=n(11),J=n.n(B),V=n(10),Q=J.a.mark(z),q=J.a.mark(G);function z(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(V.c)(h,G);case 2:case"end":return e.stop()}}),Q)}function G(){var e;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(V.b)({type:f});case 3:return t.next=5,Object(V.a)(K);case 5:if(e=t.sent){t.next=8;break}throw new Error("\u0427\u0442\u043e-\u043f\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 8:return t.next=10,Object(V.b)({type:p,payload:e});case 10:return t.next=12,Object(V.b)(g());case 12:t.next=20;break;case 14:return t.prev=14,t.t0=t.catch(0),t.next=18,Object(V.b)(w(t.t0.message));case 18:return t.next=20,Object(V.b)(g());case 20:case"end":return t.stop()}}),q,null,[[0,14]])}function K(){return Y.apply(this,arguments)}function Y(){return(Y=Object(U.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:return e.next=5,fetch("://jsonplaceholder.typicode.com/posts?_limit=5");case 5:if(200===(t=e.sent).status){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,t.json();case 10:return e.abrupt("return",e.sent);case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}var Z=Object(I.a)(),$=Object(H.e)(M,Object(H.d)(Object(H.a)(L.a,(function(e){var t=e.dispatch;return function(e){return function(n){if(n.type===O){var r=X.filter((function(e){return n.payload.title.includes(e)}));if(r.length)return t(w('\u0421\u043b\u043e\u0432\u0430 "'.concat(r.join('", "'),'" \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u044b')))}return e(n)}}}),Z),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Z.run(z);var ee=Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(d.a,{store:$,children:Object(r.jsx)(D,{})})});Object(s.render)(ee,document.getElementById("root")),C()}},[[41,1,2]]]);
//# sourceMappingURL=main.748f86fa.chunk.js.map