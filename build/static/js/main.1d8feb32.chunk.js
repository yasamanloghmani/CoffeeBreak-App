(this.webpackJsonpcoffeebreak=this.webpackJsonpcoffeebreak||[]).push([[0],{147:function(e,t,a){e.exports=a(271)},152:function(e,t,a){},155:function(e,t,a){},160:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},271:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(129),s=a.n(o),c=(a(152),a(10)),i=a.n(c),l=a(12),u=a(6),m=a(7),p=a(9),h=a(8),d=(a(154),a(155),a(36)),f=a(14),g=a(18),b=a(15),v=(a(160),function(e){var t=e.user?r.a.createElement("div",null,r.a.createElement(f.b,{to:"/",className:"Menu-link"},r.a.createElement(g.a,{icon:b.a,className:"icons"}),"Dashboard"),r.a.createElement(f.b,{to:"/group",className:"Menu-link"},r.a.createElement(g.a,{icon:b.g,className:"icons"}),"Channel"),r.a.createElement(f.b,{to:"/profile",className:"Menu-link"},r.a.createElement(g.a,{icon:b.f,className:"icons"}),"Profile"),r.a.createElement(f.b,{to:"",className:"Menu-link",onClick:e.handleLogout},r.a.createElement(g.a,{icon:b.d,className:"icons"}),"LOG OUT"),r.a.createElement("section",{className:"moodSection"},r.a.createElement(f.b,{onClick:e.toggleTheme,className:"light"===e.theme?"Menu-link moodLight":"Menu-link moodDark"},"light"===e.theme?r.a.createElement(g.a,{icon:b.e,className:"icons"}):r.a.createElement(g.a,{icon:b.b,className:"icons"})),r.a.createElement("p",null,"light"===e.theme?"Light":"Dark"," "))):r.a.createElement("div",null,r.a.createElement(f.b,{to:"/login",className:"Menu-link"},"LOG IN"),r.a.createElement(f.b,{to:"/signup",className:"Menu-link"},"SIGN UP"),r.a.createElement("section",{className:"moodSection"},r.a.createElement(f.b,{onClick:e.toggleTheme,className:"light"===e.theme?"Menu-link moodLight":"Menu-link moodDark"},"light"===e.theme?r.a.createElement(g.a,{icon:b.e,className:"icons"}):r.a.createElement(g.a,{icon:b.b,className:"icons"})),r.a.createElement("p",null,"light"===e.theme?"Light":"Dark"," ")));return r.a.createElement("div",{className:"Menu"},t)}),E=a(17);function x(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var y={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:x,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=x();return e?JSON.parse(atob(e.split(".")[1])):null}},k="/api/users/";var N={signup:function(e){return fetch(k+"signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Email already taken!")})).then((function(e){var t=e.token;y.setToken(t)}))},getUser:function(){return y.getUserFromToken()},logout:function(){y.removeToken()},login:function(e){return fetch(k+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return y.setToken(t)}))},getAllGroups:function(e){return fetch(k+e+"/groups").then((function(e){return e.json()}))},updateUser:function(e){return fetch(k+"update",{method:"PUT",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Couldn't update.")})).then((function(e){var t=e.token;return y.setToken(t)}))},deleteUser:function(e){return fetch(k+"delete",{method:"DELETE",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Couldn't delete.")})).then((function(e){var t=e.token;return y.setToken(t)}))}},O=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",limitOfExpense:"",limitOfCoffee:"",password:"",passwordConf:""},e.handleChange=function(t){e.props.updateMessage(""),e.setState(Object(E.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,N.signup(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.props.updateMessage(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"isFormInvalid",value:function(){return!(this.state.name&&this.state.email&&this.state.limitOfCoffee&&this.state.limitOfExpense&&this.state.password===this.state.passwordConf)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Sign"},r.a.createElement("header",{className:"header-footer"},r.a.createElement("h1",null,"Sign Up")),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",value:this.state.name,name:"name",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.password,name:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",value:this.state.passwordConf,name:"passwordConf",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Limit Of Cost",value:this.state.limitOfExpense,name:"limitOfExpense",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Limit Of Coffee",value:this.state.limitOfCoffee,name:"limitOfCoffee",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default",disabled:this.isFormInvalid()},"Sign Up"),"\xa0\xa0",r.a.createElement(f.b,{to:"/",className:"btn btn-default"},"Cancel")))),r.a.createElement("img",{src:"images/sign.png",className:"signImg"}))}}]),a}(n.Component),w=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).updateMessage=function(e){n.setState({message:e})},n.state={message:""},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SignupPage"},r.a.createElement(O,Object.assign({},this.props,{updateMessage:this.updateMessage})),r.a.createElement("p",null,this.state.message))}}]),a}(n.Component),j=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",pw:""},e.handleChange=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(l.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,N.login(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert("Invalid Credentials!");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginPage Sign"},r.a.createElement("header",{className:"header-footer"},r.a.createElement("h1",null,"Log In")),r.a.createElement("form",{className:"form-horizontal",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.pw,name:"pw",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"col-sm-12 text-center"},r.a.createElement("button",{className:"btn btn-default"},"Log In"),"\xa0\xa0\xa0",r.a.createElement(f.b,{to:"/",className:"btn btn-default"},"Cancel")))),r.a.createElement("img",{src:"images/sign.png",className:"signImg"}))}}]),a}(n.Component),C=(a(163),a(92)),S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleDelete=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,console.log(n.props.user),e.next=5,N.deleteUser(n.props.user);case 5:n.setState({isDeleted:!0}),n.props.handleDeleteProfile(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),n.state={isDeleted:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return this.state.isDeleted?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"ProfilePage"},r.a.createElement("div",{className:""},r.a.createElement("header",null,r.a.createElement("h2",{className:"basic-title font-weight-bold profile-title"},this.props.user.name,"'s Profile")),r.a.createElement("h4",{className:"headermargin"},"Do you want to delete your account ?"),r.a.createElement("button",{className:"btn btn-default",onClick:this.handleDelete},"Yes , Delete Account!")),r.a.createElement("div",{className:"about"},r.a.createElement("h5",null,"Developed by ",r.a.createElement("span",null,"Yasaman Loghmani")),r.a.createElement("a",{href:"https://linkedin.com/in/yasamanloghmani",className:"Menu-link"},r.a.createElement(g.a,{className:"icons",icon:C.b})),r.a.createElement("a",{href:"https://https://github.com/yasamanloghmani",className:"Menu-link"},r.a.createElement(g.a,{className:"icons",icon:C.a}))))}}]),a}(n.Component),D=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"headerbox fixed"},r.a.createElement("h1",null,this.props.lastGroup.name," Channel"),r.a.createElement("img",{src:"images/group.png",className:"HeaderImg"}),r.a.createElement("p",null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("h5",null,this.props.lastGroup.slogan))),r.a.createElement("p",{className:"pspan"},r.a.createElement("span",null,"Channel Password"),this.props.lastGroup._id))}}]),a}(n.Component);a(164),a(165);function L(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Members"),e.lastGroup.users.map((function(e){return r.a.createElement("div",{className:"members"},r.a.createElement("p",null,e.name.toUpperCase()))})))}function G(e){return console.log(e.lastGroup),r.a.createElement("div",{className:"dashboardbox"},r.a.createElement("h1",null,"Channel Tips"),r.a.createElement("div",{className:"gridtips"},e.lastGroup.tips.map((function(e){return r.a.createElement("p",null," ",e," ")}))),r.a.createElement(L,{lastGroup:e.lastGroup}))}var A=a(22),P=(a(166),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={formData:{content:""}},e.formRef=r.a.createRef(),e.handleSubmitPost=function(t){t.preventDefault(),e.props.handleAddPost(e.state.formData,e.props.lastGroup._id)},e.handleChange=function(t){var a=Object(A.a)(Object(A.a)({},e.state.formData),{},Object(E.a)({},t.target.name,t.target.value));e.setState({formData:a})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ChatBox"},r.a.createElement("h1",null,"Chatbox"),r.a.createElement("section",null,this.props.posts.slice(-3).map((function(e){return r.a.createElement("div",{className:"post"},r.a.createElement("p",null,e.content))}))),r.a.createElement("section",{id:"user",class:"boxshadow"},r.a.createElement("form",{className:"text-cenetr",onSubmit:this.handleSubmitPost},r.a.createElement("textarea",{id:"message",className:"form-control",onChange:this.handleChange,name:"content"}),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-default"},"Send")))))))}}]),a}(n.Component));var z={create:function(e){return fetch("/api/groups/",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer "+y.getToken()},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("New group could not be added.")}))},getAll:function(){return fetch("/api/groups/").then((function(e){return e.json()}))},join:function(e){return console.log("Join fn ",e),fetch("".concat("/api/groups/").concat(e,"/join"),{method:"PUT",headers:{"content-type":"application/json",Authorization:"Bearer "+y.getToken()},body:JSON.stringify()}).then((function(e){return e.json()}))},getGroup:function(e){return fetch("/api/groups/"+e).then((function(e){return e.json()}))}};var B={createPost:function(e,t){return fetch("/api/groups/"+t+"/posts",{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer "+y.getToken()},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("New post could not be added.")}))},getAllPosts:function(e){return fetch("/api/groups/"+e+"/posts").then((function(e){return e.json()}))}},T=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={posts:[],groups:[],lastGroup:{tips:[],users:[],posts:[]}},e.handleLastGroup=function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.getGroup(a);case 2:n=t.sent,e.setState({lastGroup:n}),e.handlePosts(n._id);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handlePosts=function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.getAllPosts(a);case 2:n=t.sent,e.setState({posts:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleAddPost=function(){var t=Object(l.a)(i.a.mark((function t(a,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.createPost(a,n);case 2:r=t.sent,e.setState({posts:r});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAllGroups(this.props.user.id);case 2:t=e.sent,this.setState({groups:t}),this.handleLastGroup(t[t.length-1]);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"GroupPage"},r.a.createElement("div",{className:"flexLeft"},r.a.createElement(D,{lastGroup:this.state.lastGroup}),r.a.createElement(G,{lastGroup:this.state.lastGroup})),r.a.createElement("div",{className:"flexRight"},r.a.createElement(P,{lastGroup:this.state.lastGroup,handleAddPost:this.handleAddPost,posts:this.state.posts})))}}]),a}(n.Component);var M={create:function(e,t){return fetch("/api/coffees/"+t,{method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer "+y.getToken()},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("New coffee could not be added.")}))},getAll:function(e){return fetch("/api/coffees/"+e).then((function(e){return e.json()}))}},J=(a(167),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"headerbox fixed"},r.a.createElement("h1",null,"CoffeeBreak"),r.a.createElement("p",null,"Hello ",this.props.user.name,", your limit of cost of today is ",this.props.user.limitOfExpense," and you can have just ",this.props.user.limitOfCoffee,"L per day."),r.a.createElement("p",null,"Good Luck"),r.a.createElement("img",{src:"images/main.png",className:"HeaderImg mainImg"}))}}]),a}(n.Component)),I=(a(168),a(169),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={invalidForm:!0,formData:{size:"0",price:"0"}},e.formRef=r.a.createRef(),e.handleSubmit=function(t){t.preventDefault(),e.props.handleAddCoffee(e.state.formData)},e.handleChange=function(t){var a=Object(A.a)(Object(A.a)({},e.state.formData),{},Object(E.a)({},t.target.name,t.target.value));e.setState({formData:a,invalidForm:!e.formRef.current.checkValidity()})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"AddCoffeeBtn chart"},r.a.createElement("form",{className:"coffeeForm",ref:this.formRef,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"col-auto"},r.a.createElement("label",{className:"sr-only"},"Coffee"),r.a.createElement("div",{className:"input-group mb-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"( L )")),r.a.createElement("input",{className:"form-control",name:"size",value:this.state.formData.size,onChange:this.handleChange,required:!0}))),r.a.createElement("div",{className:"col-auto"},r.a.createElement("label",{className:"sr-only"},"Cost"),r.a.createElement("div",{className:"input-group mb-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"( $ )")),r.a.createElement("input",{className:"form-control",name:"price",value:this.state.formData.price,onChange:this.handleChange,required:!0}))),r.a.createElement("button",{className:"addBtn",type:"submit",disabled:this.state.invalidForm},r.a.createElement(g.a,{icon:b.c,className:"icons "}),"Add")))}}]),a}(n.Component)),R=a(274),U=a(142),F=a(276),H=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"chart"},r.a.createElement("svg",{viewBox:"0 0 400 400",width:"100%",height:"100%"},r.a.createElement(R.a,{standalone:!1,animate:{duration:1e3},width:400,height:400,data:this.props.costdata,innerRadius:120,cornerRadius:25,labels:function(){return null},style:{data:{fill:function(e){var t=e.datum,a=t.y>80?"orangered":"blue";return 1===t.x?a:"transparent"}}}}),r.a.createElement(U.a,{duration:1e3,data:this.props.costdata},(function(t){return r.a.createElement(F.a,{textAnchor:"middle",verticalAnchor:"middle",x:200,y:200,text:"".concat(Math.round(e.props.costpercent),"%\n                        Cost"),style:{fontSize:45}})}))))}}]),a}(n.Component),q=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"chart"},r.a.createElement("svg",{viewBox:"0 0 400 400",width:"100%",height:"100%"},r.a.createElement(R.a,{standalone:!1,animate:{duration:1e3},width:400,height:400,data:this.props.sizedata,innerRadius:120,cornerRadius:25,labels:function(){return null},style:{data:{fill:function(e){var t=e.datum,a=t.y>80?"orangered":"blue";return 1===t.x?a:"transparent"}}}}),r.a.createElement(U.a,{duration:1e3,data:this.props.sizedata},(function(t){return r.a.createElement(F.a,{textAnchor:"middle",verticalAnchor:"middle",x:200,y:200,text:"".concat(Math.round(e.props.sizepercent),"% \n                        Coffee"),style:{fontSize:45}})}))))}}]),a}(n.Component),V=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboardbox"},r.a.createElement("h1",null,"Dashboard"),r.a.createElement("div",{className:"gridchart"},r.a.createElement(H,{costpercent:this.props.costpercent,costdata:this.props.costdata}),r.a.createElement(q,{sizepercent:this.props.sizepercent,sizedata:this.props.sizedata}),r.a.createElement(I,{handleAddCoffee:this.props.handleAddCoffee})))}}]),a}(n.Component),W=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={invalidForm:!0,formData:{groupId:""}},e.formRef=r.a.createRef(),e.handleSubmitJoin=function(t){t.preventDefault(),e.props.handleJoinGroup(e.state.formData.groupId)},e.handleChange=function(t){var a=Object(A.a)(Object(A.a)({},e.state.formData),{},Object(E.a)({},t.target.name,t.target.value));e.setState({formData:a,invalidForm:!e.formRef.current.checkValidity()})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"JoinGroup"},r.a.createElement("form",{className:"",ref:this.formRef,autoComplete:"off",onSubmit:this.handleSubmitJoin},r.a.createElement("div",{className:"col-auto"},r.a.createElement("label",{className:"sr-only"}),r.a.createElement("div",{className:"input-group mb-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"Password")),r.a.createElement("input",{className:"form-control",name:"groupId",value:this.state.formData.groupId,onChange:this.handleChange,required:!0}))),r.a.createElement("button",{className:"btn bg-primary",type:"submit",disabled:this.state.invalidForm},"Join Channel")))}}]),a}(n.Component),Y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={invalidForm:!0,formData:{name:""}},e.formRef=r.a.createRef(),e.handleSubmitGroup=function(t){t.preventDefault(),e.props.handleAddGroup(e.state.formData)},e.handleChange=function(t){var a=Object(A.a)(Object(A.a)({},e.state.formData),{},Object(E.a)({},t.target.name,t.target.value));e.setState({formData:a,invalidForm:!e.formRef.current.checkValidity()})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Public Channels"),r.a.createElement("p",null,"You can join to one of these three public channels by entering the passwords."),r.a.createElement("div",{className:"channelinfo"},r.a.createElement("h1",null,"Global health"),r.a.createElement("p",null,"5eb41f3a749b9f42f6ff285d"),r.a.createElement("h1",null,"Coffee Lovers"),r.a.createElement("p",null,"5eb41f7e749b9f42f6ff285e"),r.a.createElement("h1",null,"Health and Wellness"),r.a.createElement("p",null,"5eb41f9b749b9f42f6ff285f")),r.a.createElement(W,{handleJoinGroup:this.props.handleJoinGroup}))}}]),a}(n.Component),_=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={coffees:[],theme:"light",sumSize:0,sumCost:0,costpercent:0,costdata:e.getCostData(0),sizepercent:0,sizedata:e.getSizeData(0),group:[{}]},e.handleAddCoffee=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,r,o,s,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.create(a,e.props.user.id);case 2:n=t.sent,r=n.reduce((function(e,t){return e+t.size}),0),o=n.reduce((function(e,t){return e+t.price}),0),s=o/e.props.user.limitOfExpense*100,c=r/e.props.user.limitOfCoffee*100,e.setState({coffees:n,sumCost:o,sumSize:r,costpercent:s,costdata:e.getCostData(s),sizepercent:c,sizedata:e.getSizeData(c)});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleAddGroup=function(){var t=Object(l.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.create(a);case 2:n=t.sent,e.setState({group:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"getCostData",value:function(e){return[{x:1,y:e},{x:2,y:100-e}]}},{key:"getSizeData",value:function(e){return[{x:1,y:e},{x:2,y:100-e}]}},{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,n,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getAll(this.props.user.id);case 2:return t=e.sent,e.next=5,z.getAll();case 5:a=e.sent,n=t.reduce((function(e,t){return e+t.size}),0),r=t.reduce((function(e,t){return e+t.price}),0),o=r/this.props.user.limitOfExpense*100,s=n/this.props.user.limitOfCoffee*100,this.setState({coffees:t,sumCost:r,sumSize:n,costpercent:o,costdata:this.getCostData(o),sizepercent:s,sizedata:this.getSizeData(s),group:a});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"shouldComponentUpdate",value:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"MainDashboard"},r.a.createElement("div",{className:"flexLeft"},r.a.createElement(J,{user:this.props.user}),r.a.createElement(V,{user:this.props.user,handleAddCoffee:this.handleAddCoffee,costpercent:this.state.costpercent,costdata:this.state.costdata,sizepercent:this.state.sizepercent,sizedata:this.state.sizedata})),r.a.createElement("div",{className:"flexRight"},r.a.createElement(Y,{user:this.props.user,handleAddGroup:this.handleAddGroup,group:this.state.group,handleJoinGroup:this.props.handleJoinGroup})))}}]),a}(n.Component),$=a(71),K={body:"#f2f2f2",text:"#363537",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)",menuLinkBorder:" 2px solid rgba(255,255,255,.3)",menuLinkShadow:"4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)",mainBG:"linear-gradient(145deg, #ffffff, #d6dce6)",mainShadow:"9px 9px 17px #d6dce6, -9px -9px 17px #ffffff",menuLinkColor:"dimgray",hoverLinkShadow:"4px 4px 10px 0 rgba(0,0,0,.1), -4px -4px 10px rgba(255,255,255,1)",focusLinkShadow:"4px 4px 10px 0 rgba(0,0,0,.1), -4px -4px 10px rgba(255,255,255,1), 4px 4px 10px 0 rgba(0,0,0,.1) inset, -4px -4px 10px rgba(255,255,255,1) inset"},Q={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",menuLinkBorder:" 2px solid rgba(0,0,0,.3)",menuLinkShadow:"4px 4px 6px 0 rgba(255,255,255,.1), -4px -4px 6px rgba(0,0,0,1)",mainBG:"linear-gradient(145deg, #313032, #3a393b);",mainShadow:"20px 20px 41px #2e2d2f, -20px -20px 41px #3e3d3f",menuLinkColor:"lightgray",hoverLinkShadow:"4px 4px 10px 0 rgba(255,255,255,.1), -4px -4px 10px rgba(0,0,0,1)",focusLinkShadow:"4px 4px 10px 0 rgba(255,255,255,.1), -4px -4px 10px rgba(0,0,0,1), 4px 4px 10px 0 rgba(255,255,255,.1) inset, -4px -4px 10px rgba(0,0,0,1) inset"},X=a(138);function Z(){var e=Object(X.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n\n  }\n  .fixed{\n    position: relative;\n}\n.HeaderImg{\n    position: absolute;\n    right: 0;\n    bottom: -10px;\n    width: 30%;\n}\n  h1 {\n    font-size: 25px;\n    text-shadow:1px 1px 7px #d93a00d7;\n    color: orangered;\n    margin-bottom: 15px;\n    }\n  .Menu-link, .addBtn{\n    border: ",";\n    box-shadow: ",";\n    color : ","\n  }\n  .Menu{\n    border: ",";\n    background: ",";\n    box-shadow:  ",";\n  }\n  .Menu-link:hover , .addBtn:hover, .btn-default:hover{\n    box-shadow : ",";\n  }\n  .Menu-link:focus , .addBtn:focus, .btn-default:focus, .post{\n      box-shadow : ",";\n  }\n  .flexRight, .dashboardbox, .headerbox {\n    background: ",";\n    box-shadow:  ",";\n    border-radius: 20px;\n    padding:20px;\n    border: ",";\n  }\n  .addBtn{\n    background: ",";\n  }\n  svg, .AddCoffeeBtn{\n    width: 220px;\n    height: 220px;\n    padding:0;\n    margin:0;\n    border-radius: 50%;\n    box-shadow:  ",";\n  }\n  .input-group-text{\n    background: ",";\n    color : ",";\n  }\n  .pspan{\n    box-shadow: ",";\n    \n  }\n  .pspan > span {\n    box-shadow : ",";\n  }\n  .members {\n    box-shadow: ",";\n    margin: 10px;\n  }\n  .channelinfo > h1 {\n    font-size : 15px;\n  }\n  .ProfilePage, .LoginPage, .SignupPage{\n    box-shadow: ",";\n    border-radius: 20px;\n    padding:20px;\n    border: ",";\n    text-align : center;\n\n  }\n  .btn-default{\n    box-shadow: ",";\n    color : ","\n  }\n \n  "]);return Z=function(){return e},e}var ee=Object($.b)(Z(),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.menuLinkBorder}),(function(e){return e.theme.menuLinkShadow}),(function(e){return e.theme.menuLinkColor}),(function(e){return e.theme.menuLinkBorder}),(function(e){return e.theme.mainBG}),(function(e){return e.theme.mainShadow}),(function(e){return e.theme.hoverLinkShadow}),(function(e){return e.theme.focusLinkShadow}),(function(e){return e.theme.mainBG}),(function(e){return e.theme.mainShadow}),(function(e){return e.theme.menuLinkBorder}),(function(e){return e.theme.mainBG}),(function(e){return e.theme.mainShadow}),(function(e){return e.theme.mainBG}),(function(e){return e.theme.menuLinkColor}),(function(e){return e.theme.menuLinkShadow}),(function(e){return e.theme.focusLinkShadow}),(function(e){return e.theme.menuLinkShadow}),(function(e){return e.theme.menuLinkShadow}),(function(e){return e.theme.menuLinkBorder}),(function(e){return e.theme.menuLinkShadow}),(function(e){return e.theme.menuLinkColor})),te=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:N.getUser()},e.toggleTheme=function(){"light"===e.state.theme?e.setState({theme:"dark"}):e.setState({theme:"light"})},e.handleLogout=function(){N.logout(),e.setState({user:null})},e.handleSignupOrLogin=function(){e.setState({user:N.getUser()})},e.handleDeleteProfile=function(){e.setState({user:null})},e.handleJoinGroup=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.join(t);case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"shouldComponentUpdate",value:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement($.a,{theme:"light"===this.state.theme?K:Q},r.a.createElement("div",{className:"main-page"},r.a.createElement(ee,null),r.a.createElement(v,{user:this.state.user,handleLogout:this.handleLogout,toggleTheme:this.toggleTheme,theme:this.state.theme}),r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(t){var a=t.history;return N.getUser()?r.a.createElement(_,{history:a,user:e.state.user,handleJoinGroup:e.handleJoinGroup,usergroup:e.state.usergroup}):r.a.createElement(d.a,{to:"/login"})}}),r.a.createElement(d.b,{exact:!0,path:"/profile",render:function(t){var a=t.history;return N.getUser()?r.a.createElement(S,{history:a,user:e.state.user,handleDeleteProfile:e.handleDeleteProfile}):r.a.createElement(d.a,{to:"/login"})}}),r.a.createElement(d.b,{exact:!0,path:"/group",render:function(t){var a=t.history;return N.getUser()?r.a.createElement(T,{history:a,user:e.state.user,usergroup:e.state.usergroup}):r.a.createElement(d.a,{to:"/login"})}}),r.a.createElement(d.b,{exact:!0,path:"/signup",render:function(t){var a=t.history;return r.a.createElement(w,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(d.b,{exact:!0,path:"/login",render:function(t){var a=t.history;return r.a.createElement(j,{history:a,handleSignupOrLogin:e.handleSignupOrLogin})}})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f.a,null,r.a.createElement(d.b,{component:te})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[147,1,2]]]);
//# sourceMappingURL=main.1d8feb32.chunk.js.map