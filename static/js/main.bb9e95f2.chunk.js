(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),i=(n(28),n(29),n(6)),s=n(7),l=n(11),u=n(8),d=n(10),m=n(9),h=function(e){var t=e.todo,n=e.completeTask;return o.a.createElement("li",{onClick:function(){return n(t.id)}},t.message)},p=function(e){var t=e.todos,n=e.completeTask,a=t.map(function(e){return o.a.createElement(h,{key:e.id,todo:e,completeTask:n})});return o.a.createElement("ul",{className:"list-unstyled"},a)},f="ADD_TODO",v="POP_TODO";var b=n(1),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={message:""},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleClick=n.handleClick.bind(Object(b.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleClick",value:function(e){e.preventDefault(),this.props.addComment(this.state.message),this.setState({message:""})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"todo",value:this.state.message,onChange:this.handleChange}),o.a.createElement("button",{type:"button",onClick:function(t){return e.handleClick(t)}},"Add Task"))}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row h-100"},o.a.createElement("h1",null,"ToDo List")),o.a.createElement("div",{className:"row h-100"},o.a.createElement("div",{className:"d-flex align-items-center"},o.a.createElement(O,{addComment:this.props.addToDo}),o.a.createElement(p,{todos:this.props.todos,completeTask:this.props.popToDo}))))}}]),t}(a.Component),k=Object(m.b)(function(e){return{todos:e.todos}},function(e){return{addToDo:function(t){return e(function(e){return{type:f,payload:e}}(t))},popToDo:function(t){return e(function(e){return{type:v,payload:e}}(t))}}})(g);var j=function(){return o.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(3),E=n(19),w=n.n(E),C=n(21),T=n(12),D=n(20),N=n.n(D);function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{todos:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n={id:N()(),message:t.payload};return Object(T.a)({},e,{todos:e.todos.concat(n)});case v:return Object(T.a)({},e,{todos:Object(C.a)(e.todos).filter(function(e){return e.id!==t.payload})});default:return Object(T.a)({},e)}}var A=Object(y.c)(x,Object(y.a)(w.a));c.a.render(o.a.createElement(m.a,{store:A},o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.bb9e95f2.chunk.js.map