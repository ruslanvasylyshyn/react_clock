(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(8),l=a.n(o),r=a(1),i=a(2),s=a(4),u=a(3),m=(a(14),a(5)),k=(a(15),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date}),console.log(this.state.date.toLocaleTimeString())}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Current time:"," ",this.state.date.toLocaleTimeString()))}}]),a}(c.a.Component)),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,clockName:Math.ceil(21*Math.random())},e.hideClock=function(){e.setState({isClockVisible:!1})},e.showClock=function(){e.setState({isClockVisible:!0})},e.setRandomName=function(){e.setState({clockName:Math.ceil(21*Math.random())})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.clockName!==this.state.clockName&&console.log("\n        Clock renamed from ".concat(t.clockName," to ").concat(this.state.clockName,"\n      "))}},{key:"render",value:function(){var e=this.state,t=e.clockName,a=e.isClockVisible;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React clock"),c.a.createElement("div",{className:"clockWrapper"},a&&c.a.createElement(k,{name:t})),c.a.createElement(m.a,{variant:"outline-primary",type:"button",onClick:this.hideClock,className:"buttonMargin"},"Hide Clock")," ",c.a.createElement(m.a,{variant:"outline-warning",type:"button",onClick:this.showClock,className:"buttonMargin"},"Show Clock")," ",c.a.createElement(m.a,{variant:"outline-dark",type:"button",onClick:this.setRandomName,className:"buttonMargin"},"Set random name"),c.a.createElement("p",null,c.a.createElement("strong",null,"Clock name: ".concat(t))))}}]),a}(c.a.Component);l.a.render(c.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c8f45a7b.chunk.js.map