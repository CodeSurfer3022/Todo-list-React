(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),l=n(3),d=n(4),i=n(6),u=n(5);n(12);var s=function(e){return a.a.createElement("div",{className:"todo"},a.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:e.handleChange}),a.a.createElement("p",null,e.text))},p=[{id:1,text:"Take out the trash",completed:!0},{id:2,text:"Grocery shopping",completed:!1},{id:3,text:"Clean gecko tank",completed:!1},{id:4,text:"Mow lawn",completed:!0},{id:5,text:"Catch up on Arrested Development",completed:!1}],h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={todos:p},e}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.slice().map((function(t){return t.id===e&&(t.completed=!t.completed),t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return a.a.createElement(s,{key:t.id,completed:t.completed,text:t.text,handleChange:function(){return e.handleChange(t.id)}})}));return a.a.createElement("div",{className:"note"},t)}}]),n}(a.a.Component);n(13);r.a.render(a.a.createElement(h,null),document.querySelector("#root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.2f066a3f.chunk.js.map