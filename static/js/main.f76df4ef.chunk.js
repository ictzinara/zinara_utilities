(this["webpackJsonpzinara-utilities"]=this["webpackJsonpzinara-utilities"]||[]).push([[0],{108:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){},289:function(e,t,a){},290:function(e,t,a){},613:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),c=a.n(n),i=a(43),l=a.n(i),r=(a(281),a.p,a(108),a(15)),o=(a(282),a(51)),j=(a(287),a.p+"static/media/icon.943da642.png");var h=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!0),l=Object(r.a)(i,2),h=(l[0],l[1]),d=function(){window.innerWidth<=960?h(!1):h(!0)};return Object(n.useEffect)((function(){d()}),[]),window.addEventListener("resize",d),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"navbar-container",children:[Object(s.jsx)(o.b,{to:"/",className:"navbar-logo",onClick:function(){return c(!1)},children:Object(s.jsx)("img",{className:"logo",src:j,alt:"Zinara Utilities"})}),Object(s.jsx)("div",{className:"menu-icon",onClick:function(){return c(!a)},children:Object(s.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(s.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(s.jsxs)(o.b,{to:"/tollgates",className:"nav-links",children:[Object(s.jsx)("i",{className:"fas fa-calculator"})," ",Object(s.jsx)("span",{children:"__"})," Tollgate Calculator"]}),Object(s.jsxs)(o.b,{to:"/vehicles",className:"nav-links",children:[Object(s.jsx)("i",{className:"fas fa-car"})," ",Object(s.jsx)("span",{children:"__"})," Vehicle Registration"]})]})]})})})};a(288);var d=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("li",{className:"cards__item",children:Object(s.jsxs)(o.b,{className:"cards__item__link",to:e.path,children:[Object(s.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(s.jsx)("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})}),Object(s.jsx)("div",{className:"cards__item__info",children:Object(s.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var u=function(){return Object(s.jsx)("div",{className:"cards",children:Object(s.jsx)("div",{className:"cards__container",children:Object(s.jsx)("div",{className:"cards__wrapper",children:Object(s.jsxs)("ul",{className:"cards__items",children:[Object(s.jsx)(d,{src:"images/toll.jpg",text:"Calculate Tollgate  inter City Routes",label:"tollgate",path:"/tollgates"}),Object(s.jsx)(d,{src:"images/exp.jpg",text:"Cherk Vehicle Registration Status",label:"vehicles",path:"/vehicles"})]})})})})};a(289);var b=function(){return Object(s.jsx)("div",{className:"hero-container"})};a(290);var O=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u,{}),Object(s.jsx)(b,{})]})},x=a(63),g=a(37),m=a(38),p=a(76),f=a(88),v=a(93),y=a(623),_=a(624),T=a(250),C=a(637),k=a(625),S=a(628),N=a(619),V=a(620),R=a(621),D=a(622),F=a(629),w=a(630),G=a(631),A=a(632),E=a(626),M=a(627),z=a(94),I={width:"100%",height:"80%"},P=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).displayMarkers=function(){return n.state.Tollgates.map((function(e,t){return Object(s.jsx)(z.Marker,{id:t,label:""+e.name,position:{lat:-e.lat,lng:e.long},onClick:function(){return console.log("You clicked me!")}},t)}))},n.state={Tollgates:[],stores:[{lat:17.2743,lng:30.0416},{latitude:47.359423,longitude:-122.021071},{latitude:47.2052192687988,longitude:-121.988426208496},{latitude:47.6307081,longitude:-122.1434325},{latitude:47.3084488,longitude:-122.2140121},{latitude:47.5524695,longitude:-122.0425407}]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({color:"white"})}),2e3),this.apiGetTollgates()}},{key:"apiGetTollgates",value:function(){var e=this;fetch("http://41.60.204.194:8082/api/tollgates").then((function(e){return e.json()})).then((function(t){console.log(t),t.length>0&&e.setState({Tollgates:t})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return Object(s.jsx)(z.Map,{google:this.props.google,zoom:8,style:I,initialCenter:{lat:-17.8277,lng:31.0534},children:this.displayMarkers()})}}]),a}(n.Component),q=(Object(z.GoogleApiWrapper)({apiKey:"AIzaSyASFEIozS-cq6MMSSPSR0_54A8j6l8PyE0"})(P),{width:"100%",height:"80%"}),L=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).displayMarkers=function(){return n.state.Route.map((function(e,t){return Object(s.jsx)(z.Marker,{id:t,label:""+e.name,position:{lat:-e.lat,lng:e.long},onClick:function(){return console.log("You clicked me!")}},t)}))},n.myChangeHandler=function(e){var t=e.target.name,a=e.target.value,c="";"id"===t&&(""===a||Number(a)||(c=Object(s.jsx)("strong",{children:"Your id must be a number"}))),n.setState({errormessage:c}),n.setState(Object(x.a)({},t,a))},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.apiGetTarrif=n.apiGetTarrif.bind(Object(p.a)(n)),n.apiGetCity=n.apiGetCity.bind(Object(p.a)(n)),n.state={Route:[],Tollgates:[],Tarrifs:[],Cities:[],tollgates:null,amount:null,VClass:"",From:"",Via:"",To:"",errormessage:"",vehicle_class:"",rtgs:"",usd:"",pula:"",rand:""},n}return Object(m.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(x.a)({},t,a))}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({color:"white"})}),2e3),this.apiGetTarrif(),this.apiGetCity(),this.apiGetTollgates()}},{key:"apiGetTollgates",value:function(){var e=this;fetch("http://41.60.204.194:8082/api/tollgates").then((function(e){return e.json()})).then((function(t){console.log(t),t.length>0&&e.setState({Tollgates:t})})).catch((function(e){return console.log("error",e)}))}},{key:"apiGetTarrif",value:function(){var e=this;fetch("http://41.60.204.194:8082/api/tarrif").then((function(e){return e.json()})).then((function(t){console.log(t),t.length>0&&e.setState({Tarrifs:t})})).catch((function(e){return console.log("error",e)}))}},{key:"apiGetCity",value:function(){var e=this;fetch("http://41.60.204.194:8082/api/cities").then((function(e){return e.json()})).then((function(t){console.log(t),t.length>0&&e.setState({Cities:t})})).catch((function(e){return console.log("error",e)}))}},{key:"apiGetToll",value:function(e){var t=this,a=this.state.From,s=this.state.Via,n=this.state.To;fetch("http://41.60.204.194:8082/api/tollquerys/"+a).then((function(e){return e.json()})).then((function(a){if(a.length>0)for(var c=0;c<a.length;c++)if(a[c].city_via===s)if(a[c].city_to===n){console.log(a[c]);var i=a[c].city_via;t.updateData(a[c].number_of_tollgates,i,e)}else console.log("No Valid Destination"),t.apiGetRevToll(e);else if(console.log("No Detour"),a[c].city_to===n){console.log(a[c]);var l=a[c].city_via;t.updateData(a[c].number_of_tollgates,l,e)}else t.apiGetRevToll(e)})).catch((function(e){return console.log("error",e)}))}},{key:"apiGetRevToll",value:function(e){var t=this,a=this.state.From,s=this.state.Via,n=this.state.To;fetch("http://41.60.204.194:8082/api/tollquerys/"+a).then((function(e){return e.json()})).then((function(a){if(a.length>0)for(var c=0;c<a.length;c++)if(a[c].city_via===s)if(a[c].city_to===n){console.log(a[c]);var i=a[c].city_via;t.updateData(a[c].number_of_tollgates,i,e)}else console.log("No Valid Destination");else if(console.log("No Detour"),a[c].city_to===n){console.log(a[c]);var l=a[c].city_via;t.updateData(a[c].number_of_tollgates,l,e)}})).catch((function(e){return console.log("error",e)}))}},{key:"handleSubmit",value:function(e){this.handleData(),e.preventDefault()}},{key:"handleData",value:function(){for(var e=null,t=this.state.Tarrifs,a=0;a<t.length;a++)this.state.VClass===t[a].vehicle_class?(t[a].vehicle_class,e=t[a].rtgs,t[a].usd,t[a].pula,t[a].rand,this.updateCost(e),this.setState({rtgs:t[a].rtgs,usd:t[a].usd,pula:t[a].pula,rand:t[a].rand})):console.log("Error")}},{key:"updateCost",value:function(e){this.apiGetToll(e)}},{key:"updateData",value:function(e,t,a){for(var s=[],n=0;n<this.state.Tollgates.length;n++){var c=this.state.Tollgates[n];c.city==this.state.From&&(s.push(c),console.log("Route toll"),console.log(c)),(c.city=this.state.To)&&(s.push(c),console.log("Route toll"),console.log(c))}var i=a*e;this.setState({Route:s,amount:a,tollgates:e,total:i,detour:t})}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(N.a,{fluid:!0,children:[Object(s.jsx)(b,{}),Object(s.jsx)(V.a,{fluid:!0,children:Object(s.jsx)("form",{onSubmit:this.handleSubmit,children:Object(s.jsxs)(V.a,{children:[Object(s.jsx)(R.a,{children:Object(s.jsx)(D.a,{children:"Define a route to calculate the tolling Fee"})}),Object(s.jsx)("hr",{}),Object(s.jsxs)(R.a,{children:[Object(s.jsx)(D.a,{children:"Departure"}),Object(s.jsx)(D.a,{children:"Via Route"}),Object(s.jsx)(D.a,{children:"Destination"}),Object(s.jsx)(D.a,{children:"Vehicle Type"}),Object(s.jsx)(D.a,{})]}),Object(s.jsxs)(R.a,{children:[Object(s.jsx)(D.a,{children:Object(s.jsxs)(y.a,{children:[Object(s.jsx)(_.a,{addonType:"prepend",children:Object(s.jsx)(T.a,{children:"From"})}),Object(s.jsxs)(C.a,{type:"select",name:"From",id:"From",value:this.state.From,onChange:this.handleChange,children:[Object(s.jsx)("option",{}),this.state.Cities.map((function(e,t){return Object(s.jsx)("option",{children:e.city})}))]})]})}),Object(s.jsx)(D.a,{children:Object(s.jsxs)(y.a,{children:[Object(s.jsx)(_.a,{addonType:"prepend",children:Object(s.jsx)(T.a,{children:"Via"})}),Object(s.jsx)(C.a,{type:"select",name:"Via",id:"Via",value:this.state.Via,onChange:this.handleChange,children:this.state.Cities.map((function(e,t){return Object(s.jsx)("option",{children:e.city})}))})]})}),Object(s.jsx)(D.a,{children:Object(s.jsxs)(y.a,{children:[Object(s.jsx)(_.a,{addonType:"prepend",children:Object(s.jsx)(T.a,{children:"To"})}),Object(s.jsx)(C.a,{type:"select",name:"To",id:"To",value:this.state.To,onChange:this.handleChange,children:this.state.Cities.map((function(e,t){return Object(s.jsx)("option",{children:e.city})}))})]})}),Object(s.jsx)(D.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)(k.a,{children:Object(s.jsxs)(C.a,{type:"select",name:"VClass",id:"VClass",value:this.state.VClass,onChange:this.handleChange,children:[Object(s.jsx)("option",{}),Object(s.jsx)("option",{children:"Light Motor Vehicles"}),Object(s.jsx)("option",{children:"Minibuses"}),Object(s.jsx)("option",{children:"Buses"}),Object(s.jsx)("option",{children:"Heavy Vehicles"}),Object(s.jsx)("option",{children:"Haulage Trucks"})]})})})}),Object(s.jsx)(D.a,{children:Object(s.jsx)("input",{className:"btn btn-success btn-sm",type:"submit",value:"Calculate Route"})})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(R.a,{children:[Object(s.jsx)(D.a,{xs:"3"}),Object(s.jsx)(D.a,{xs:"auto"}),Object(s.jsx)(D.a,{xs:"3"})]})]})})})]}),Object(s.jsx)(z.Map,{google:this.props.google,zoom:8,style:q,initialCenter:{lat:-17.8277,lng:31.0534},children:this.displayMarkers()}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("hr",{}),Object(s.jsxs)(R.a,{children:[Object(s.jsx)(D.a,{sm:"3",children:Object(s.jsx)(E.a,{children:Object(s.jsxs)(M.a,{children:[Object(s.jsx)(S.a,{children:"Your Route"}),Object(s.jsx)("hr",{}),Object(s.jsx)(C.a,{value:this.state.From,disabled:!0}),Object(s.jsx)("br",{}),Object(s.jsx)(C.a,{value:this.state.detour,disabled:!0}),Object(s.jsx)("br",{}),Object(s.jsx)(C.a,{value:this.state.To,disabled:!0}),Object(s.jsx)("br",{})]})})}),Object(s.jsx)(D.a,{sm:"3",children:Object(s.jsx)(E.a,{children:Object(s.jsxs)(M.a,{children:[Object(s.jsx)(S.a,{children:"Tollgates"}),Object(s.jsx)("hr",{}),Object(s.jsx)(F.a,{children:Object(s.jsxs)(w.a,{className:"justify-content-between",children:[this.state.From," - ",this.state.detour,"- ",this.state.To,Object(s.jsx)(G.a,{pill:!0,children:this.state.tollgates})]})})]})})}),Object(s.jsx)(D.a,{sm:"6",children:Object(s.jsx)(E.a,{children:Object(s.jsxs)(M.a,{children:[Object(s.jsx)(S.a,{children:"Tolling Cost"}),Object(s.jsx)("hr",{}),Object(s.jsxs)(F.a,{children:[Object(s.jsx)(w.a,{className:"justify-content-between",children:this.state.VClass}),Object(s.jsx)(w.a,{className:"justify-content-between"}),Object(s.jsx)(w.a,{className:"justify-content-between",children:Object(s.jsx)("strong",{})})]}),Object(s.jsxs)(A.a,{bordered:!0,children:[Object(s.jsx)("thead",{style:{backgroundColor:"transparent"},children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Tollgates"}),Object(s.jsx)("th",{children:"USD"}),Object(s.jsx)("th",{children:"RTGS$"}),Object(s.jsx)("th",{children:"RAND"}),Object(s.jsx)("th",{children:"PULA"})]})}),Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:this.state.tollgates}),Object(s.jsx)("td",{children:this.state.usd*this.state.tollgates}),Object(s.jsx)("td",{children:this.state.rtgs*this.state.tollgates}),Object(s.jsx)("td",{children:this.state.rand*this.state.tollgates}),Object(s.jsx)("td",{children:this.state.pula*this.state.tollgates})]})})]})]})})})]})]})]})}}]),a}(c.a.Component),Y=Object(z.GoogleApiWrapper)({apiKey:"AIzaSyASFEIozS-cq6MMSSPSR0_54A8j6l8PyE0"})(L),B=a(147),H=a(636),U=a(633),W=a(634),J=a(635),K=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).keyExtractor=function(e,t){return t.toString()},n.renderItem=function(e){var t=e.item;e.index;return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{children:Object(s.jsxs)(E.a,{children:[Object(s.jsx)(M.a,{children:Object(s.jsxs)(U.a,{tag:"h5",children:["Reg Number : ",t.reg_no+"\n","  Chassis : ***",t.chassis.slice(-4)]})}),Object(s.jsxs)(M.a,{children:[Object(s.jsx)(W.a,{}),Object(s.jsxs)(J.a,{tag:"h6",className:"mb-2 text-muted",children:["Amount Owing :",t.amount_owing]}),Object(s.jsxs)(J.a,{children:["Arrear : ",t.arrear_amount]}),0==t.non_registered&&Object(s.jsx)(k.a,{check:!0,inline:!0,children:Object(s.jsxs)(S.a,{check:!0,children:[Object(s.jsx)(C.a,{type:"checkbox"})," Registered"]})}),1==t.non_registered&&Object(s.jsx)(k.a,{check:!0,inline:!0,children:Object(s.jsxs)(S.a,{check:!0,children:[Object(s.jsx)(C.a,{type:"checkbox"})," Registered"]})}),Object(s.jsxs)(H.a,{style:{color:"red"},href:"#",children:["Current Expiry Date :",t.current_licence_exp_date]})]})]})})})},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.state={errormessage:!1,error_message:"",VRN:"",VSTATE:[]},n}return Object(m.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(x.a)({},t,a))}},{key:"handleSubmit",value:function(e){this.handleData(),e.preventDefault()}},{key:"handleData",value:function(){var e=this;fetch("http://41.60.204.194:8082/api/reg/"+this.state.VRN).then((function(e){return e.json()})).then((function(t){console.log(t),t.length>0?e.setState({VSTATE:t}):(alert("Vehicle Reg Number not Found!!"),e.setState({errormessage:!0,error_message:"data not found"}))})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(B.NativeBaseProvider,{children:[Object(s.jsx)("hr",{style:{marginTop:10,color:"white"}}),Object(s.jsxs)(V.a,{children:[Object(s.jsx)(N.a,{fluid:!0,children:Object(s.jsx)(B.Center,{flex:1,children:Object(s.jsx)("form",{onSubmit:this.handleSubmit,children:Object(s.jsxs)(V.a,{children:[Object(s.jsx)("hr",{style:{marginTop:10,color:"#eec714"}}),Object(s.jsxs)(R.a,{children:[Object(s.jsx)(D.a,{children:Object(s.jsxs)(y.a,{children:[Object(s.jsx)(_.a,{addonType:"prepend",children:Object(s.jsx)(T.a,{children:"VRN"})}),Object(s.jsx)(C.a,{name:"VRN",id:"VRN",value:this.state.VRN,onChange:this.handleChange})]})}),Object(s.jsx)(D.a,{children:Object(s.jsx)("input",{className:"btn btn-success btn-sm",type:"submit",value:"Cherk Status"})})]})]})})})}),Object(s.jsx)("hr",{style:{marginTop:10,color:"#eec714"}})]}),Object(s.jsx)("div",{children:Object(s.jsxs)(B.Center,{children:[this.state.VSTATE.length>0&&Object(s.jsx)(B.FlatList,{data:this.state.VSTATE,renderItem:this.renderItem,keyExtractor:this.keyExtractor})," "]})})]})})}}]),a}(c.a.Component),Z=a(41);var $=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(h,{}),Object(s.jsxs)(Z.c,{children:[Object(s.jsx)(Z.a,{path:"/",exact:!0,component:O}),Object(s.jsx)(Z.a,{path:"/tollgates",exact:!0,component:Y}),Object(s.jsx)(Z.a,{path:"/vehicles",exact:!0,component:K})]})]})})};a(612);l.a.render(Object(s.jsx)($,{}),document.getElementById("root"))}},[[613,1,2]]]);
//# sourceMappingURL=main.f76df4ef.chunk.js.map