(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(298)},113:function(e,t,a){},134:function(e,t,a){},287:function(e,t,a){},290:function(e,t,a){},292:function(e,t,a){},296:function(e,t,a){},298:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a.n(l),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(113);var s=a(43),u=a(44),m=a(49),d=a(45),h=a(50),p=a(22),f=a(60),b=a.n(f),y=a(5),v="http://192.168.1.3:3001/api/people",E=[{name:"First Name",camelCase:"firstName",type:"text",required:!0,def:"Oliver"},{name:"Family Name",camelCase:"familyName",type:"text",required:!0,def:"Plummer"},{name:"Gender",camelCase:"gender",type:"selection",required:!0,selections:[{name:"Male",camelCase:"male"},{name:"Female",camelCase:"female"},{name:"Other",camelCase:"other"}]},{name:"Date of Birth",camelCase:"dob",type:"date",required:!0},{name:"Phone Number",camelCase:"mobileNumber",type:"mobileNumber",required:!0},{name:"Email",camelCase:"email",type:"email",required:!0,def:"oliver.plummer@outlook.com"},{name:"State/Territory",camelCase:"state",type:"selection",required:!0,def:2,selections:[{name:"Australian Capital Territory",camelCase:"act"},{name:"Jervis Bay Territory",camelCase:"jby"},{name:"New South Wales",camelCase:"nsw"},{name:"Northern Territory",camelCase:"nt"},{name:"Queensland",camelCase:"qld"},{name:"South Australia",camelCase:"sa"},{name:"Tasmania",camelCase:"tas"},{name:"Victoria",camelCase:"vic"},{name:"Western Australia",camelCase:"wa"}]},{name:"Would you like to recieve emails from us?",camelCase:"emailUpdates",type:"boolean",required:!0,booleanText:"Yes/No",def:!1}],g=(a(134),function(e){return r.a.createElement("pre",{className:"AxiosError__pre"},JSON.stringify(e.obj,null,2))}),C=function(e){return e.err.response&&console.error(e.err.response.data),r.a.createElement("div",{className:"AxiosError"},r.a.createElement("h1",{className:"AxiosError__h1"},"Axios Error "),r.a.createElement("ul",null,["config","response"].map(function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("h2",{className:"AxiosError__h2"},Object(y.upperFirst)(t),":"),r.a.createElement(g,{obj:e.err[t]||{}}))})))},O=a(25),j=a(20),N=a(48),x=a(46),w=a.n(x),S=a(23),k=a.n(S),q=["<",">","script"],A={required:!1,helperText:"",selections:[],def:null,placeholder:"",maxLength:256,min:-256,max:256,validation:[]},F=["January","February","March","April","May","June","July","August","September","October","Novemeber","December"],_=Object(N.a)(Array(60)).map(function(e,t){return w()().year()-t}),T=function(e,t){return Object(N.a)(Array(function(e,t){return w()("".concat(t,"-").concat(e+1),"YYYY-MM").daysInMonth()}(e,t))).map(function(e,t){return t+1})},W=function(e){return e.reduce(function(e,t){var a=t.type,n=t.def,r=t.camelCase,l=t.selections;return"text"===a||"email"===a?e[r]=Object(y.isNull)(n)?"":n:"number"===a?e[r]=Object(y.isNull)(n)?0:n:"date"===a?e[r]=Object(y.isNull)(n)?{year:2e3,month:0,day:1}:n:"selection"===a?e[r]=Object(y.isNull)(n)?l[0].camelCase:l[n].camelCase:"mobileNumber"===a?e[r]=Object(y.isNull)(n)?{countryCode:"+61",phoneNumber:"0431694866"}:n:"boolean"===a&&(e[r]=!!Object(y.isNull)(n)||n),e},{})},R=function(e,t){return e.reduce(function(e,a){return e[a.camelCase]=t,e},{})},P=function(e){return{fields:W(e),fieldsErr:R(e,[]),status:{code:null,text:""}}},I=function(e,t){return e.reduce(function(e,a){return t.includes(a)&&(e=!0),e},!1)},L=function(e){return e.map(function(e){var t=e.val,a=e.type,n=e.required,r=e.maxLength,l=e.min,i=e.max,c=e.selections,o=[];if("text"===a&&(Object(y.isString)(t)?n&&""===t?o.push("Field is required."):I(q,t)?o.push("Potentially malicious input."):t.length>r&&o.push("Input too long."):o.push("Invalid data type.")),"number"===a&&(Object(y.isNumber)(t)?!1===Object(y.inRange)(t,l,i)&&o.push("Number is out of range."):o.push("Invalid data type.")),"date"===a&&(Object(y.isObject)(t)&&!1!==Object(y.isNumber)(t.year)&&!1!==Object(y.isNumber)(t.month)&&!1!==Object(y.isNumber)(t.day)||o.push("Invalid data type.")),"selection"===a)if(Object(y.isString)(t))if(I(q,t))o.push("Potentially malicious input.");else{var s=c.map(function(e){return e.camelCase});!1===I(s,t)&&o.push("Value not in selection list.")}else o.push("Invalid data type.");return"mobileNumber"===a&&(Object(y.isObject)(t)&&Object(y.isString)(t.countryCode)&&Object(y.isString)(t.phoneNumber)?!1===Object(y.startsWith)(t.countryCode,"+")&&o.push("Country code must start with a '+'."):o.push("Invalid data type.")),"boolean"===a&&!1===Object(y.isBoolean)(t)&&o.push("Invalid data type."),Object(j.a)({},e,{errors:o})})},J=function(e,t){return(a=e,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return t(e)},a)})(function(e){return function(t){return t.map(function(t){return Object(j.a)({},t,{val:e[t.camelCase]})})}}(t),L);var a},M=function(e){return e.reduce(function(e,t){return e[t.camelCase]=t.errors,e},{})},B=function(e){return e.reduce(function(e,t){return 0!==t.errors.length&&(e=!0),e},!1)},Y=a(16),U=a.n(Y),D=a(47),V=a.n(D),G=function(e){var t=e.text;return""===t?null:r.a.createElement(V.a,null,t)},Q=a(105),$=a.n(Q),z=function(e,t){return e+(t?" *":"")},H=function(e){var t=e.name,a=e.required;return r.a.createElement($.a,{shirnk:"true",children:z(t,a)})};H.defaultProps={required:!1};var K=H,X=function(e){var t=e.val,a=e.handleChange,n=e.name,l=e.camelCase,i=e.type,c=e.placeholder,o=e.required,s=e.helperText;return r.a.createElement("div",{className:"Field"},r.a.createElement(K,{name:n,required:o}),r.a.createElement("div",{className:"Field__row"},r.a.createElement(U.a,{type:"tel",autoComplete:"tel",name:"countryCode",value:t.countryCode,onChange:a(i,l),style:{width:30,marginRight:5},inputProps:{maxLength:3}}),r.a.createElement(U.a,{type:"tel",autoComplete:"tel",name:"phoneNumber",value:t.phoneNumber,onChange:a(i,l),style:{width:90},inputProps:{maxLength:10},placeholder:c})),r.a.createElement(G,{text:s}))},Z=a(106),ee=a.n(Z),te=function(e){var t=e.val,a=e.handleChange,n=e.name,l=e.camelCase,i=e.type,c=e.helperText,o=e.booleanText;return r.a.createElement("div",{className:"Field"},r.a.createElement(K,{name:n}),r.a.createElement("div",{className:"Field__row"},r.a.createElement("p",{className:"Field__row-p"},o),r.a.createElement(ee.a,{onChange:a(i,l),checked:t})),r.a.createElement(G,{text:c}))},ae=a(31),ne=a.n(ae),re=a(30),le=a.n(re),ie=function(e){var t=e.val,a=e.handleChange,n=e.name,l=e.camelCase,i=e.type,c=e.helperText,o=e.required,s=e.selections;return r.a.createElement("div",{className:"Field"},r.a.createElement(K,{name:n,required:o}),r.a.createElement(le.a,{value:t,onChange:a(i,l),input:r.a.createElement(U.a,null),style:{marginRight:8}},s.map(function(e){return r.a.createElement(ne.a,{key:k.a.generate(),value:e.camelCase,children:e.name})})),r.a.createElement(G,{text:c}))},ce=function(e){var t=e.errors;return 0===t.length?null:r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(V.a,{key:t,style:{color:"#F44336"},children:e})}))},oe=function(e){var t=e.val,a=e.errors,n=e.handleChange,l=e.name,i=e.camelCase,c=e.type,o=e.placeholder,s=e.helperText,u=e.required,m=e.maxLength;return r.a.createElement("div",{className:"Field"},r.a.createElement(K,{name:l,required:u}),r.a.createElement(U.a,{type:c,value:t,onChange:n(c,i),placeholder:o,inputProps:{maxLength:m},fullWidth:!0}),r.a.createElement(G,{text:s}),r.a.createElement(ce,{errors:a}))},se=function(e){var t=e.val,a=e.handleChange,n=e.name,l=e.camelCase,i=e.type,c=e.required,o=e.helperText;return r.a.createElement("div",{className:"Field"},r.a.createElement(K,{name:n,required:c}),r.a.createElement("div",{className:"Field__row"},r.a.createElement(le.a,{name:"year",value:t.year,onChange:a(i,l),input:r.a.createElement(U.a,null),style:{marginRight:8},autoWidth:!0,children:_.map(function(e){return r.a.createElement(ne.a,{key:k.a.generate(),value:e,children:e})})}),r.a.createElement(le.a,{name:"month",value:t.month,onChange:a(i,l),input:r.a.createElement(U.a,null),style:{marginRight:8},children:F.map(function(e,t){return r.a.createElement(ne.a,{key:k.a.generate(),value:t,children:e})})}),r.a.createElement(le.a,{name:"day",value:t.day,onChange:a(i,l),input:r.a.createElement(U.a,null),children:T(t.month,t.year).map(function(e,t){return r.a.createElement(ne.a,{key:k.a.generate(),value:e,children:e})})})),r.a.createElement(G,{text:o}))},ue=(a(287),function(e){var t=e.type;return"text"===t||"number"===t||"email"===t?r.a.createElement(oe,e):"date"===t?r.a.createElement(se,e):"mobileNumber"===t?r.a.createElement(X,e):"selection"===t?r.a.createElement(ie,e):"boolean"===t?r.a.createElement(te,e):null}),me=function(e){var t=e.state,a=e.handleChange,n=e.fields;return r.a.createElement("div",{className:"Form__fields"},n.map(function(e){return r.a.createElement(ue,Object.assign({},e,{val:t.fields[e.camelCase],errors:t.fieldsErr[e.camelCase],handleChange:a}))}))},de=a(107),he=a.n(de),pe=function(e){var t,a=e.handleSubmit,n=e.status;return r.a.createElement("div",{className:"Form__submit"},r.a.createElement(he.a,{onClick:a,variant:"contained",children:"Submit"}),null===n.code?null:r.a.createElement("p",{style:{color:(t=n.code,Object(y.inRange)(t,100,199)?"#333333":Object(y.inRange)(t,200,399)?"#4CAF50":Object(y.inRange)(t,400,599)?"#F44336":void 0)},children:"".concat(n.code," - ").concat(n.text),className:"Form__status"}))},fe=(a(290),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e,t){return function(n){var r=n.target,l=r.value,i=r.name;"text"!==e&&"number"!==e&&"selection"!==e&&"email"!==e||a.setState(function(a){return{fields:Object(j.a)({},a.fields,Object(O.a)({},t,"number"===e?Object(y.toNumber)(l):l))}}),"date"!==e&&"mobileNumber"!==e||a.setState(function(e){return{fields:Object(j.a)({},e.fields,Object(O.a)({},t,Object(j.a)({},e.fields[t],Object(O.a)({},i,l))))}}),"boolean"===e&&a.setState(function(e){return{fields:Object(j.a)({},e.fields,Object(O.a)({},t,!e.fields[t]))}})}},a.handleSubmit=function(){var e=J(a.props.fields,a.state.fields);B(e)?a.setState({fieldsErr:M(e)}):(a.props.handleSubmit(a.state.fields,function(e){return a.handleStatus(e)}),a.setState(P(a.props.fields)))},a.handleStatus=function(e){a.setState({status:{code:e.status,text:e.statusText}},function(){setTimeout(function(){return a.setState({status:{code:null,text:""}})},5e3)})},a.state=P(a.props.fields),a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Form"},r.a.createElement(me,{state:this.state,handleChange:this.handleChange,fields:this.props.fields}),r.a.createElement(pe,{handleSubmit:this.handleSubmit,status:this.state.status}))}}]),t}(r.a.Component)),be=function(e){return r.a.createElement(fe,Object.assign({},e,{fields:(t=e.fields,t.map(function(e){return Object(j.a)({},A,e,{key:k.a.generate()})}))}));var t},ye=(a(292),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).addEmployee=function(e,t){b.a.post(v,e).then(function(e){t(e),a.setState({employees:Object(y.concat)(a.state.employees,e.data)})}).catch(function(e){return console.error(e)})},a.state={employees:null},a.addEmployee=a.addEmployee.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get(v).then(function(t){return e.setState({employees:t.data})}).catch(function(t){return e.setState({employees:t})})}},{key:"render",value:function(){return Object(y.isError)(this.state.employees)?r.a.createElement("div",{className:"Employees"},r.a.createElement(C,{err:this.state.employees})):Object(y.isNull)(this.state.employees)?r.a.createElement("div",{className:"Employees"},r.a.createElement("p",null,"Loading...")):Object(y.isArray)(this.state.employees)?r.a.createElement("div",{className:"Employees"},r.a.createElement("h1",{className:"Employees__title"},"Employees"),r.a.createElement("pre",null,JSON.stringify(this.state.employees,null,2)),r.a.createElement(be,{heading:"Add Employee",fields:E,handleSubmit:this.addEmployee})):null}}]),t}(r.a.Component)),ve=(a(294),a(296),function(e){return r.a.createElement("div",{id:"App"},r.a.createElement(ye,null))});i.a.render(r.a.createElement(ve,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");c?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):o(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):o(t,e)})}}()}},[[108,2,1]]]);
//# sourceMappingURL=main.cdf7ff60.chunk.js.map