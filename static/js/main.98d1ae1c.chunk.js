(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(7),c=n.n(i),s=n(2),a=n(3),o=n(5),r=n(4),l=n(1),u=n.n(l),b=n(8),h=n.n(b),j=(n(13),n(0)),p=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={time:(new Date).toLocaleTimeString()},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"Clock",children:this.state.time})}}]),n}(u.a.Component),d=function(t){Object(o.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={isVisible:!0},t.showClock=function(){t.setState({isVisible:!0})},t.hideClock=function(){t.setState({isVisible:!1})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("p",{className:h()("Clock",{visible:!0===this.state.isVisible},{invisible:!1===this.state.isVisible}),children:Object(j.jsx)(p,{})}),Object(j.jsx)("button",{type:"button",onClick:this.showClock,children:"show"}),Object(j.jsx)("button",{type:"button",onClick:this.hideClock,children:"hide"})]})}}]),n}(u.a.Component),v=d;c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.98d1ae1c.chunk.js.map