(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),l=n(4),r=n(1),u=n.n(r),m=(n(12),n(0)),d=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={time:new Date},t.timeId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timeId=window.setInterval((function(){t.setState({time:new Date})}),1e3)}},{key:"componentDidUpdate",value:function(t,e){e.time!==this.state.time&&console.info(this.state.time.toUTCString().slice(-12,-4))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timeId)}},{key:"render",value:function(){var t=this.state.time;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.name})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.Component);function h(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var k=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.clockId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.clockId=window.setInterval((function(){t.setState({clockName:h()})}),3300),document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(e){e.preventDefault(),t.setState({hasClock:!0})}))}},{key:"componentDidUpdate",value:function(t,e){e.clockName!==this.state.clockName&&this.state.hasClock&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.clockId)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.hasClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),n&&Object(m.jsx)(d,{name:e})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.eec82694.chunk.js.map