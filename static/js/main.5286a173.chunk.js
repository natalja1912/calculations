(this.webpackJsonpnumbers=this.webpackJsonpnumbers||[]).push([[0],{157:function(t,e,n){},159:function(t,e,n){},199:function(t,e,n){},201:function(t,e,n){},202:function(t,e,n){},203:function(t,e,n){},204:function(t,e,n){},205:function(t,e,n){},206:function(t,e,n){},208:function(t,e,n){},209:function(t,e,n){"use strict";n.r(e);n(0);var s=n(44),a=n.n(s),c=n(32),r=(n(93),n(7)),u=n(10),i=n(8),l=n(212),o=function(t){for(var e=[],n=0;n<t;n++){var s=Math.floor(100*Math.random()),a=Math.floor(100*Math.random()),c=Math.round(Math.random());e.push({num1:s,num2:a,sign:c})}return e}(10),j="ADD_RESULT",m="ADD_USER_NAME",b=Object(i.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;return e.type,t},finalResult:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return e.payload;default:return t}},userName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u0410\u043d\u043e\u043d\u0438\u043c",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return e.payload;default:return t}},form:l.a}),d=Object(i.c)(b),h=n(213),f=n(211),O=n(210);var x=function(t){for(var e={},n=0;n<10;n++){var s="task".concat(n);t[s]&&t[s].length>3&&(e[s]="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 3\u0445 \u0446\u0438\u0444\u0440")}return t.name?t.name.length<3?e.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 3\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432":t.name.length>14&&(e.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 15 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):e.name="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435",e},p=n(28),_=(n(157),n(2)),v=function(t){var e=t.input,n=t.type,s=t.meta,a=s.touched,c=s.error;return Object(_.jsxs)("div",{className:"input-name",children:[Object(_.jsx)("input",Object(p.a)(Object(p.a)({autoComplete:"off",className:"input-name__text"},e),{},{type:n,maxLength:"15"})),a&&c&&Object(_.jsx)("span",{className:"input-name__error",children:c})]})},N=(n(159),function(t){var e=t.handleSubmit,n=t.userName;return Object(_.jsxs)("form",{className:"form",onSubmit:e,children:[Object(_.jsx)("label",{className:"form__label",htmlFor:"name",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}),Object(_.jsx)(f.a,{className:"form__input",name:"name",type:"text",component:v}),n&&n.length>2?Object(_.jsx)("button",{className:"form__button form__button_active",onClick:e,children:"\u0413\u043e\u0442\u043e\u0432\u043e!"}):Object(_.jsx)("div",{className:"form__button form__button_inactive",children:"\u0413\u043e\u0442\u043e\u0432\u043e!"})]})});N=Object(O.a)({form:"registerForm",validate:x})(N);var g=Object(h.a)("registerForm"),k=Object(u.b)((function(t){return{userName:g(t,"name")}}))(N),y=(n(199),Object(h.a)("registerForm"));var S=Object(u.b)((function(t){return{userName:y(t,"name")}}),(function(t){return{addName:function(e){return t(function(t){return{type:m,payload:t}}(e))}}}))((function(t){var e=t.addName,n=t.userName,s=Object(r.g)();return Object(_.jsx)("div",{className:"main",children:Object(_.jsx)(k,{onSubmit:function(){e(n),s.push("/tasks")}})})})),M=(n(201),function(t){var e=t.input,n=t.type,s=t.meta,a=s.touched,c=s.error;return Object(_.jsxs)("div",{children:[Object(_.jsx)("input",Object(p.a)(Object(p.a)({autoComplete:"off",className:"task-input"},e),{},{type:n})),a&&c&&Object(_.jsx)("span",{className:"task-input__error",children:c})]})}),F=(n(202),function(t){var e=t.task,n=t.index,s=t.handleSubmit;return Object(_.jsx)("form",{onSubmit:s,children:Object(_.jsxs)("div",{className:"task",children:[Object(_.jsxs)("div",{className:"task__text-group",children:[Object(_.jsx)("p",{className:"task__text",children:e.num1}),Object(_.jsx)("p",{className:"task__text",children:1===e.sign?" + ":" - "}),Object(_.jsx)("p",{className:"task__text",children:"".concat(e.num2," =")})]}),Object(_.jsx)(f.a,{name:"task".concat(n),component:M,type:"number"})]})})}),R=F=Object(O.a)({form:"taskForm",validate:x})(F),w=(n(203),function(t){var e=t.tasks;function n(t){console.log(t)}return Object(_.jsx)("div",{className:"tasks",children:e&&Object(_.jsx)("ul",{children:e.map((function(t,e){return Object(_.jsx)("li",{children:Object(_.jsx)(R,{onSubmit:n,task:t,index:e})},e)}))})})}),C=n(214);n(204);var D=Object(u.b)((function(t){return{state:t,tasks:t.tasks}}),(function(t){return{addResult:function(e){return t(function(t){return{type:j,payload:t}}(e))}}}))((function(t){var e,n=t.state,s=t.tasks,a=t.addResult,c=Object(r.g)(),u=Object(C.a)("taskForm")(n);return e=u?Object.keys(u).length:0,Object(_.jsxs)("div",{className:"calculations",children:[Object(_.jsx)("h1",{className:"calculations__heading",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0432\u043e\u0438 \u0437\u043d\u0430\u043d\u0438\u044f"}),Object(_.jsx)(w,{tasks:s}),(!u||10!==e)&&Object(_.jsx)("div",{className:"form__error",children:"\u0420\u0435\u0448\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),u&&10===e?Object(_.jsx)("button",{className:"form__button form__button_active",onClick:function(){c.push("/results");var t=function(t,e){for(var n=[],s=0;s<t.length;s++){var a=t[s],c=e["task".concat(s)];c=Number.parseInt(c),(a.sign<1?a.num1-a.num2:a.num1+a.num2)===c?n.push({task:a,result:c,right:1}):n.push({task:a,result:c,right:0})}return n}(s,u);a(t)},children:"\u0413\u043e\u0442\u043e\u0432\u043e!"}):Object(_.jsx)("div",{className:"form__button form__button_inactive",children:"\u0413\u043e\u0442\u043e\u0432\u043e!"})]})})),E=(n(205),function(t){var e=t.task,n=t.result,s=t.right,a="result__text ".concat(!s&&"result__text_red");return Object(_.jsx)("div",{className:"result",children:Object(_.jsxs)("div",{className:"result__text-group",children:[Object(_.jsx)("p",{className:a,children:e.num1}),Object(_.jsx)("p",{className:a,children:1===e.sign?" + ":" - "}),Object(_.jsx)("p",{className:a,children:"".concat(e.num2," =")}),Object(_.jsx)("p",{className:a,children:n})]})})});n(206);var A=Object(u.b)((function(t){return{resultValues:t.finalResult,userName:t.userName}}),null)((function(t){var e=t.resultValues,n=t.userName,s=e.filter((function(t){return 1===t.right})).length;return Object(_.jsxs)("div",{className:"results",children:[Object(_.jsx)("p",{children:"".concat(n," - \u043c\u043e\u043b\u043e\u0434\u0435\u0446!")}),Object(_.jsx)("p",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432: ".concat(s," ")}),Object(_.jsx)("ul",{className:"results__list",children:e.map((function(t,e){return Object(_.jsx)("li",{children:Object(_.jsx)(E,{task:t.task,right:t.right,result:t.result})},e)}))})]})}));n(207),n(208);var I=function(){return Object(_.jsx)("div",{className:"page",children:Object(_.jsx)(u.a,{store:d,children:Object(_.jsxs)(r.d,{children:[Object(_.jsx)(r.b,{path:"/sign-in",children:Object(_.jsx)(S,{})}),Object(_.jsx)(r.b,{exact:!0,path:"/tasks",children:Object(_.jsx)(D,{})}),Object(_.jsx)(r.b,{exact:!0,path:"/results",children:Object(_.jsx)(A,{})}),Object(_.jsx)(r.a,{to:"/sign-in"})]})})})};a.a.render(Object(_.jsx)(c.a,{children:Object(_.jsx)(I,{})}),document.getElementById("root"))},93:function(t,e,n){}},[[209,1,2]]]);
//# sourceMappingURL=main.5286a173.chunk.js.map