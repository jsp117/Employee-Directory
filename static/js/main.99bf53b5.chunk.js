(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),r=c(13),l=c.n(r),o=(c(20),c(21),c(3));c(22);var i=function(e){var t=e.loading,c=e.users;return Object(s.jsx)("div",{id:"table",children:Object(s.jsxs)("table",{className:"container-fluid",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{className:"row pt-5",children:[Object(s.jsx)("th",{className:"col",children:"Picture"}),Object(s.jsx)("th",{className:"col",children:"Name"}),Object(s.jsx)("th",{className:"col",children:"Phone"}),Object(s.jsx)("th",{className:"col",children:"Email"}),Object(s.jsx)("th",{className:"col",children:"Date of Birth"})]})}),Object(s.jsx)("tbody",{children:t?"Loading...":c.map((function(e){return Object(s.jsxs)("tr",{className:"row",children:[Object(s.jsx)("td",{className:"col",children:Object(s.jsx)("img",{src:e.picture.medium,alt:e.name.first+" "+e.name.last})}),Object(s.jsx)("td",{className:"col",children:e.name.title+" "+e.name.first+" "+e.name.last}),Object(s.jsx)("td",{className:"col",children:e.phone}),Object(s.jsx)("td",{className:"col",children:e.email}),Object(s.jsx)("td",{className:"col",children:e.dob.date.split("T")[0]})]},e.login.uuid)}))})]})})};var u=function(e){var t=e.onSubmit,c=e.results;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("br",{}),Object(s.jsxs)("form",{className:"form-group",children:[Object(s.jsx)("input",{className:"form-control",type:"text",placeholder:"Enter Employee Name",onChange:t,value:c}),Object(s.jsx)("br",{})]})]})};var j=function(e){var t=e.onSubmit,c=e.results;return Object(s.jsxs)("h3",{className:"header container-fluid",children:["Employee Directory",Object(s.jsx)(u,{onSubmit:t,results:c})]})},d=c(14),b=c.n(d),m=function(){return b.a.get("https://randomuser.me/api/?results=200&nat=us")};c(40);var h=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),l=Object(o.a)(r,2),u=l[0],d=l[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),O=h[0],f=h[1],x=Object(a.useState)([]),p=Object(o.a)(x,2),v=p[0],g=p[1],N=Object(a.useState)("name"),w=Object(o.a)(N,2);return w[0],w[1],Object(a.useEffect)((function(){return console.log("running"),m().then((function(e){console.log(e.data.results),n(e.data.results),g(e.data.results),d(!1)})),function(){console.log("cleanup")}}),[]),Object(a.useEffect)((function(){console.log("new search")}),[v]),Object(s.jsxs)("div",{children:[Object(s.jsx)(j,{onSubmit:function(e){e.preventDefault(),f(e.target.value),console.log(e.target.value),console.log("search",O);var t=c.filter((function(t){return t.name.first.toLowerCase().includes(e.target.value.toLowerCase())||t.name.last.toLowerCase().includes(e.target.value.toLowerCase())||t.phone.includes(e.target.value)||t.email.toLowerCase().includes(e.target.value.toLowerCase())||t.dob.date.split("T")[0].includes(e.target.value)}));g(t)},results:O}),Object(s.jsx)(i,{loading:u,users:v})]})};var O=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(h,{})})};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.99bf53b5.chunk.js.map