(this.webpackJsonppart16=this.webpackJsonppart16||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var r,n=a(1),s=a(0),c=a.n(s),o=a(31),i=a.n(o),l=(a(75),a(76),a(9)),j=a(6),u=a(5),d=a(3),b=a(22),O=a(28),p=a.n(O),_=function(e){var t=e.type,a=e.onChange,r=e.onChangeText,c=e.onKeyPress,o=e.onEnter,i=e.error,l=e.className,j=e.spanClassName,O=e.errorMes,_=e.onBlur,h=e.setError,m=e.value,f=Object(b.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","errorMes","onBlur","setError","value"]),x=Object(s.useState)(!1),g=Object(u.a)(x,2),E=g[0],v=g[1],S="".concat(p.a.error," ").concat(j||""),N="".concat(p.a.superInput," ").concat(E&&i?p.a.errorInput:l?p.a[l]:"");return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",Object(d.a)({type:t||"text",onChange:function(e){a&&a(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&o&&o()},className:N,onBlur:function(e){i?(_&&_(e),v(!0)):m?v(!1):(_&&_(e),v(!0),h&&h(!0))}},f)),E&&i?Object(n.jsx)("span",{className:S,children:O}):Object(n.jsx)("span",{className:S,children:"\xa0"})]})},h=a(4),m=a(41),f=a.n(m),x=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,s=(e.spanClassName,e.children),c=Object(b.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(f.a.checkbox," ").concat(r||"");return Object(n.jsxs)("label",{children:[Object(n.jsx)("input",Object(d.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),s&&Object(n.jsx)("span",{className:f.a.spanClassName,children:s})]})},g=a(42),E=a.n(g),v=function(e){var t=e.red,a=(e.className,Object(b.a)(e,["red","className"])),r="".concat(t?E.a.button_red:E.a.button_default);return Object(n.jsx)("button",Object(d.a)({className:r},a))},S=a(23),N=a.n(S),T=a(57),w=a.n(T).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),R=function(e,t,a){return w.post("/auth/login",{email:e,password:t,rememberMe:a})},C=function(){return w.delete("/auth/me")},I=function(e){return w.post("/auth/forgot",{email:e,message:"<div style=\"background-color: lime; padding: 15px\">\t\n\tpassword recovery link: \n\t<a href='http://localhost:3000/#/resPassword/$token$'>\n\tlink</a></div>"})},P=function(){return w.post("/auth/me")},A=function(e){return w.put("/auth/me",{name:e})},y=function(e,t){return w.post("/auth/set-new-password",{password:e,resetPasswordToken:t})},M=function(e,t){return w.post("auth/register",{email:e,password:t})},k={profile:void 0};!function(e){e.SET_PROFILE="PROFILE/SET_PROFILE",e.CLEAN_PROFILE="PROFILE/CLEAN_PROFILE"}(r||(r={}));var L,G=function(e){return{type:r.SET_PROFILE,payload:e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_PROFILE:return Object(d.a)(Object(d.a)({},e),{},{profile:Object(d.a)({},t.payload)});case r.CLEAN_PROFILE:return Object(d.a)(Object(d.a)({},e),{},{profile:void 0});default:return e}},H={isInitial:!1};!function(e){e.SET_INITIAL_APP="APP/INITIAL_APP"}(L||(L={}));var U,W={isLogin:!1,status:"succeeded",errorMes:void 0};!function(e){e.SET_LOGIN="AUTH/SET_LOGIN",e.SET_STATUS="AUTH/SET_STATUS",e.SET_ERROR_MES="AUTH/SET_ERROR_MES"}(U||(U={}));var D,q=function(e){return{type:U.SET_LOGIN,payload:{isLogin:e}}},B=function(e){return{type:U.SET_LOGIN,payload:{status:e}}},K=function(e){return{type:U.SET_ERROR_MES,payload:{errorMes:e}}},X=function(){return function(e){e(B("loading")),P().then((function(t){console.log(t),e(K("")),e(G(t.data)),e(q(!0)),e(B("succeeded"))})).catch((function(t){var a=t.response?t.response.data.error:t.message+", more details in the console";console.log(a),console.log("Error:",Object(d.a)({},t)),e(q(!1))})).finally((function(){var t;e((t=!0,{type:L.SET_INITIAL_APP,payload:{isInitial:t}})),e(B("succeeded"))}))}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.SET_LOGIN:case U.SET_STATUS:case U.SET_ERROR_MES:return Object(d.a)(Object(d.a)({},e),t.payload)}return e},z=a(58),$=a.n(z),J=function(){for(var e=[],t=1;t<21;t++)e.push({"--i":t});return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)("section",{children:Object(n.jsx)("div",{className:$.a.loader,children:e.map((function(e,t){return Object(n.jsx)("span",{style:e},t)}))})})})},V=function(e,t,a,r){var n=/(?=.*\d)(?=.*[a-zA-Z]).{6,}/;e(t),""===t.trim()?(a("Password Required"),r(!0)):n.test(t)?(a(""),r(!1)):(console.log(n.test(t)),r(!0),a("the password must contain one digit, and length must be 6 and more"))},Q=function(){var e=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,t=Object(s.useState)(),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(s.useState)(!1),i=Object(u.a)(o,2),b=i[0],O=i[1],p=Object(s.useState)(),m=Object(u.a)(p,2),f=m[0],g=m[1],E=Object(s.useState)("Login Required"),S=Object(u.a)(E,2),T=S[0],w=S[1],C=Object(s.useState)("Password Required"),I=Object(u.a)(C,2),P=I[0],A=I[1],y=Object(s.useState)(!1),M=Object(u.a)(y,2),k=M[0],L=M[1],F=Object(s.useState)(!1),H=Object(u.a)(F,2),U=H[0],W=H[1],D=Object(h.c)((function(e){return e.auth.isLogin})),X=Object(h.c)((function(e){return e.auth.status})),Z=Object(h.c)((function(e){return e.auth.errorMes}));console.log(Z);var z=Object(h.b)();return D?Object(n.jsx)(j.a,{to:"/profile"}):Object(n.jsx)("div",{className:N.a.container,children:Object(n.jsxs)("div",{className:N.a.auth_main,children:[Object(n.jsx)("h3",{children:"Login"}),Object(n.jsxs)("div",{className:N.a.auth_wrapper,children:[Object(n.jsxs)("div",{className:N.a.input_block,children:[Object(n.jsx)(_,{value:r,onChangeText:function(t){c(t),""===t.trim()?(w("Email Required"),O(!0)):e.test(t)?(w(""),O(!1)):(O(!0),w("Email invalid"))},error:b,placeholder:"E-mail",errorMes:T,setError:O,className:"otherInput"}),Object(n.jsx)(_,{value:f,onChangeText:function(e){V(g,e,A,L)},error:k,placeholder:"Password",errorMes:P,setError:L,type:"password",className:"otherInput"}),Object(n.jsxs)("div",{className:N.a.auth_link,children:[Object(n.jsx)("span",{children:Object(n.jsx)(l.c,{to:we.registration,children:"Registration"})}),Object(n.jsx)("span",{children:Object(n.jsx)(l.c,{to:we.resPass,children:"Forgot Pas?"})})]})]}),Object(n.jsxs)("div",{className:N.a.btn_check,children:[Object(n.jsx)(x,{onChangeChecked:W,children:" Remember "}),Object(n.jsx)(v,{onClick:function(){z(r&&f?function(e,t,a){return function(r){r(B("loading")),R(e,t,a).then((function(e){r(G(e.data)),r(q(!0)),r(K("")),r(B("succeeded"))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";console.log(t),console.log("Error:",Object(d.a)({},e)),r(K(t)),r(B("failed"))}))}}(r,f,U):K("Password and Email Required"))},disabled:"loading"===X,children:"Login"})]})]}),"loading"===X?Object(n.jsx)(J,{}):"failed"===X?Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:Z})}):"",Z?Object(n.jsxs)("h5",{className:N.a.errorMesOp,children:[" ",Z]}):""]})})},Y={isRegistration:!1,status:"succeeded",data:{email:"",error:void 0}};!function(e){e.SET_IS_REGISTRATION="REGISTRATION_CONTAINER/SET_IS_REGISTRATION",e.SET_STATUS="REGISTRATION_CONTAINER/SET_STATUS",e.SET_DATA="REGISTRATION_CONTAINER/SET_DATA",e.SET_ERROR="REGISTRATION_CONTAINER/SET_ERROR"}(D||(D={}));var ee,te=function(e){return{type:D.SET_STATUS,payload:e}},ae=function(e,t){return function(a){a(te("loading")),M(e,t).then((function(e){a(te("succeeded")),D.SET_IS_REGISTRATION})).catch((function(e){var t=e.response?e.response.data.error:e.response.data.error+"check console";console.log(t),console.log("errors:",Object(d.a)({},e)),a(function(e){return{type:D.SET_ERROR,payload:e}}(t)),a(te("failed"))}))}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.SET_DATA:return Object(d.a)(Object(d.a)({},e),{},{data:t.payload});case D.SET_ERROR:return Object(d.a)(Object(d.a)({},e),{},{data:Object(d.a)(Object(d.a)({},e.data),{},{error:t.payload})});case D.SET_IS_REGISTRATION:return Object(d.a)(Object(d.a)({},e),{},{isRegistration:t.payload});case D.SET_STATUS:return Object(d.a)(Object(d.a)({},e),{},{status:t.payload})}return e},ne=a(36),se=a.n(ne),ce=a(112),oe=function(e){Object.assign({},e);var t=Object(h.c)((function(e){return e.registration.isRegistration})),a=Object(h.c)((function(e){return e.registration.status})),r=Object(h.c)((function(e){return e.registration.data})),c=Object(h.b)(),o=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,i=/(?=.*\d)(?=.*[a-zA-Z]).{6,}/,l=Object(s.useState)(r.email),d=Object(u.a)(l,2),b=d[0],O=d[1],p=Object(s.useState)(),m=Object(u.a)(p,2),f=m[0],x=m[1],g=Object(s.useState)(),E=Object(u.a)(g,2),S=E[0],N=E[1],T=Object(s.useState)(!1),w=Object(u.a)(T,2),R=w[0],C=w[1],I=Object(s.useState)(!1),P=Object(u.a)(I,2),A=P[0],y=P[1],M=Object(s.useState)(!1),k=Object(u.a)(M,2),L=k[0],G=k[1],F=Object(s.useState)("Login Required"),H=Object(u.a)(F,2),U=H[0],W=H[1],D=Object(s.useState)("Password must be with number and A-Z, a-z letters, length must be 6 and more"),q=Object(u.a)(D,2),B=q[0],K=q[1],X=Object(s.useState)("passwords must match"),Z=Object(u.a)(X,2),z=Z[0],$=Z[1];return t?Object(n.jsx)(j.a,{to:we.auth}):Object(n.jsxs)("div",{className:se.a.container,children:[Object(n.jsx)("h1",{children:"Registration"}),Object(n.jsxs)(ce.a,{className:se.a.reg_wrapper,children:[Object(n.jsx)("h2",{children:"E-mail:"}),Object(n.jsx)(ce.a,{children:Object(n.jsx)(_,{value:b,onChangeText:function(e){O(e),""===e.trim()?(W("Email is Required"),C(!0)):o.test(e)?(W(""),C(!1)):(W("Invalid Email"),C(!0))},error:R,placeholder:"E-mail",errorMes:U,setError:C,className:"otherInput"})}),Object(n.jsx)("h2",{children:"Password:"}),Object(n.jsx)(ce.a,{children:Object(n.jsx)(_,{value:f,onChangeText:function(e){x(e),""===e.trim()&&e.length>8?(y(!0),K("Password area is Required")):i.test(e)?(y(!1),K("")):(y(!0),K("the password must contain one digit, and length must be 8 and more"))},error:A,placeholder:"Password",errorMes:B,setError:y,className:"otherInput",type:"password"})}),Object(n.jsx)("h2",{children:"Confirm Password:"}),Object(n.jsx)(ce.a,{children:Object(n.jsx)(_,{value:S,onChangeText:function(e){N(e),e!==f?(G(!0),$("Passwords must be the sames!")):(G(!1),$(""))},error:L,placeholder:"Confirm Password",errorMes:z,setError:y,className:"otherInput",type:"password"})})]}),Object(n.jsx)("div",{children:Object(n.jsx)(v,{onClick:function(){b&&f&&S&&c(ae(b,f))},disabled:"loading"===a,className:se.a.btn,children:"Registration"})}),Object(n.jsx)("div",{children:"loading"===a?Object(n.jsx)(J,{}):"failed"===a?Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:r.error})}):""})]})},ie=a(16),le=a.n(ie),je=a(29),ue=a.n(je),de=function(e){var t=e.modal,a=e.setModal,r=e.children,s="".concat(ue.a.modal," ").concat(t?ue.a.active:""),c="".concat(ue.a.modal_content," ").concat(t?ue.a.active:"");return Object(n.jsx)("div",{className:s,onClick:function(){return a(!1)},children:Object(n.jsx)("div",{className:c,onClick:function(e){return e.stopPropagation()},children:r})})},be=function(e){var t=e.errorMes,a=Object(s.useState)(),r=Object(u.a)(a,2),c=r[0],o=r[1],i=Object(s.useState)(!1),l=Object(u.a)(i,2),j=l[0],b=l[1],O=Object(h.b)();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("span",{className:le.a.change_name,onClick:function(){return b(!0)},children:"Change name"}),Object(n.jsxs)(de,{modal:j,setModal:b,children:[Object(n.jsx)(_,{value:c,onChangeText:o,placeholder:"New-Name"}),Object(n.jsx)(v,{onClick:function(){c&&(O(function(e){return function(t){t(B("loading")),A(e).then((function(e){console.log(e),t(K("")),t(G(e.data.updatedUser)),t(B("succeeded"))})).catch((function(e){var a=e.response?e.response.data.error:e.message+", more details in the console";console.log(a),t(K(a)),console.log("Error:",Object(d.a)({},e)),t(B("failed"))}))}}(c)),b(!1))},children:"Change Name"}),t?Object(n.jsx)("span",{children:"errorMes"}):null]})]})},Oe=function(){var e=Object(h.c)((function(e){return e.auth.isLogin})),t=Object(h.c)((function(e){return e.profile.profile})),a=Object(h.c)((function(e){return e.auth.status})),r=Object(h.c)((function(e){return e.auth.errorMes})),s=Object(h.b)();if(console.log(document.cookie),!e||!t)return Object(n.jsx)(j.a,{to:"/auth"});return"loading"===a?Object(n.jsx)(J,{}):"failed"===a?Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"something wrong"})}):t?Object(n.jsxs)("div",{className:le.a.profile_main_wrapper,children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Profile"})}),Object(n.jsxs)("div",{className:le.a.profile_item_wrapper,children:[Object(n.jsxs)("div",{className:le.a.profile_item,children:[Object(n.jsx)("span",{className:le.a.item_title,children:"E-mail:"})," ",Object(n.jsx)("span",{children:t.email})]}),Object(n.jsxs)("div",{className:le.a.profile_item,children:[Object(n.jsx)("span",{className:le.a.item_title,children:"name:"})," ",Object(n.jsx)("span",{children:t.name}),Object(n.jsx)(be,{errorMes:r})]}),Object(n.jsxs)("div",{className:le.a.profile_item,children:[Object(n.jsx)("span",{className:le.a.item_title,children:"id:"}),Object(n.jsx)("span",{children:t._id})]})]}),Object(n.jsx)(l.b,{to:we.auth,onClick:function(){s((function(e){e(B("loading")),C().then((function(t){console.log(t),e(K("")),e(q(!1)),e(B("succeeded"))})).catch((function(t){var a=t.response?t.response.data.error:t.message+", more details in the console";console.log(a),e(K(a)),console.log("Error:",Object(d.a)({},t)),e(B("failed"))}))}))},children:Object(n.jsx)("span",{children:"Log Out"})})]}):Object(n.jsx)("div",{})},pe=function(e){var t=e.title;Object(b.a)(e,["title"]);return Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:t})})},_e=a(68),he=a(37),me=a.n(he),fe=a(46),xe=a.n(fe),ge=a(65),Ee={checkWith:!1,status:"succeeded"};!function(e){e.SET_CHECK_WITH="RES-PASS/SET-CHECK-WITH",e.SET_STATUS="RES-PASS/SET_STATUS"}(ee||(ee={}));var ve,Se=function(e){return{type:ee.SET_STATUS,payload:{status:e}}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.SET_STATUS:case ee.SET_CHECK_WITH:return Object(d.a)(Object(d.a)({},e),t.payload)}return e},Te=function(e){Object.assign({},e);var t=Object(h.c)((function(e){return e.resPas.checkWith})),a=Object(h.c)((function(e){return e.resPas.status})),r=Object(h.b)(),s=Object(_e.a)({initialValues:{email:""},onSubmit:function(e){var t;r((t=e.email,function(){var e=Object(ge.a)(xe.a.mark((function e(a){var r;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(Se("loading")),e.prev=1,e.next=4,I(t);case 4:a((n=!0,{type:ee.SET_CHECK_WITH,payload:{checkWith:n}})),a(Se("succeeded")),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),r=e.t0.response?e.t0.response.data.error:e.t0.message+", more details in the console",console.log(r),a(Se("failed"));case 13:case"end":return e.stop()}var n}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())),s.resetForm()},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t}});return"loading"===a?Object(n.jsx)(J,{}):"failed"===a?Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"something wrong"})}):t?Object(n.jsx)(j.a,{to:we.resPass}):Object(n.jsxs)("div",{className:me.a.res_Password_wrapper,children:[Object(n.jsx)(pe,{title:"Reset Password Page"}),Object(n.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(n.jsx)("div",{className:me.a.input_style,children:Object(n.jsx)(_,Object(d.a)({type:"email",placeholder:"E-mail"},s.getFieldProps("email")))}),s.touched.email&&s.errors.email?Object(n.jsx)("div",{className:me.a.error,children:s.errors.email}):null,Object(n.jsx)(v,{type:"submit",children:"Send email"})]})]})};!function(e){e.NEW_CHANGE_MES="NEW_PAS/NEW_CHANGE_MES",e.ERROR_MES="NEW_PAS/ERROR_MES",e.LOADING="NEW_PAS/LOADING"}(ve||(ve={}));var we,Re={changeMes:void 0,errorMes:void 0,loading:!1},Ce=function(e){return{type:ve.LOADING,payload:{loading:e}}},Ie=function(e,t){return function(a){a(Ce(!0)),y(e,t).then((function(e){console.log(e)})).catch((function(e){var t,r=e.response?e.response.data.error:e.message+", more details in the console";console.log(r),console.log("Error:",Object(d.a)({},e)),a((t=r,{type:ve.ERROR_MES,payload:{errorMes:t}}))})).finally((function(){a(Ce(!1))}))}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.NEW_CHANGE_MES:case ve.ERROR_MES:case ve.LOADING:return Object(d.a)(Object(d.a)({},e),t.payload);default:return e}},Ae=a(47),ye=a.n(Ae),Me=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(),o=Object(u.a)(c,2),i=o[0],l=o[1],d=Object(s.useState)("Password Required"),b=Object(u.a)(d,2),O=b[0],p=b[1],m=Object(s.useState)("Confirm password Required'"),f=Object(u.a)(m,2),x=f[0],g=f[1],E=Object(s.useState)(!0),S=Object(u.a)(E,2),N=S[0],T=S[1],w=Object(s.useState)(!1),R=Object(u.a)(w,2),C=R[0],I=R[1],P=Object(h.c)((function(e){return e.newPas.errorMes})),A=Object(h.c)((function(e){return e.newPas.loading})),y=Object(h.b)(),M=Object(j.g)().location.pathname.replace(/(\/.+\/)/gm,"");return Object(n.jsx)("div",{className:ye.a.wrapper_main,children:Object(n.jsxs)("div",{className:ye.a.wrapper_items,children:[Object(n.jsx)(_,{value:a,onChangeText:function(e){V(r,e,p,T)},placeholder:"New Password",error:N,errorMes:O,setError:T,type:"password"}),Object(n.jsx)(_,{value:i,onChangeText:function(e){V(l,e,g,I),e!==a?(I(!0),g("passwords must match")):I(!1)},placeholder:"Confirm Password",error:C,errorMes:x,setError:I,type:"password"}),Object(n.jsx)("div",{children:Object(n.jsx)(v,{onClick:function(){a&&y(Ie(a,M)),r("")},disabled:A||a!==i,children:"Change password"})}),A?Object(n.jsx)(J,{}):null,P?Object(n.jsx)("span",{children:"errorMes"}):null]})})},ke=a(8),Le=a.n(ke),Ge=function(){return Object(n.jsx)("div",{className:Le.a.wrapped,children:Object(n.jsxs)("figure",{children:[Object(n.jsx)("div",{className:Le.a.sadMac}),Object(n.jsx)(l.c,{to:"/",children:"GO TO HOME"}),Object(n.jsxs)("figcaption",{children:[Object(n.jsx)("span",{className:Le.a.srText,children:"Error 404: Not Found"}),Object(n.jsx)("span",{className:Le.a.e}),Object(n.jsx)("span",{className:Le.a.r}),Object(n.jsx)("span",{className:Le.a.r}),Object(n.jsx)("span",{className:Le.a.o}),Object(n.jsx)("span",{className:Le.a.r}),Object(n.jsx)("span",{className:Le.a._4}),Object(n.jsx)("span",{className:Le.a._0}),Object(n.jsx)("span",{className:Le.a._4}),Object(n.jsx)("span",{className:Le.a.n}),Object(n.jsx)("span",{className:Le.a.o}),Object(n.jsx)("span",{className:Le.a.t}),Object(n.jsx)("span",{className:Le.a.f}),Object(n.jsx)("span",{className:Le.a.o}),Object(n.jsx)("span",{className:Le.a.u}),Object(n.jsx)("span",{className:Le.a.n}),Object(n.jsx)("span",{className:Le.a.d})]})]})})},Fe=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(Ge,{})})};!function(e){e.auth="/auth",e.registration="/registration",e.profile="/profile",e.error="/404",e.resPass="/resPassword",e.newPass="/set-new-password"}(we||(we={}));var He,Ue=function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(n.jsx)(j.a,{to:we.profile})}}),Object(n.jsx)(j.b,{exact:!0,path:we.auth,render:function(){return Object(n.jsx)(Q,{})}}),Object(n.jsx)(j.b,{exact:!0,path:we.registration,render:function(){return Object(n.jsx)(oe,{})}}),Object(n.jsx)(j.b,{exact:!0,path:we.profile,render:function(){return Object(n.jsx)(Oe,{})}}),Object(n.jsx)(j.b,{exact:!0,path:we.resPass,render:function(){return Object(n.jsx)(Te,{})}}),Object(n.jsx)(j.b,{path:we.newPass,render:function(){return Object(n.jsx)(Me,{})}}),Object(n.jsx)(j.b,{path:we.error,render:function(){return Object(n.jsx)(Fe,{})}}),Object(n.jsx)(j.a,{from:"*",to:we.error})]})})},We=a(25),De=a.n(We),qe=function(){return Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:De.a.wrapper,children:[Object(n.jsx)(l.c,{to:we.auth,activeClassName:De.a.active,children:"Auth"}),Object(n.jsx)(l.c,{to:we.registration,activeClassName:De.a.active,children:"Registration"}),Object(n.jsx)(l.c,{to:we.profile,activeClassName:De.a.active,children:"Profile"}),Object(n.jsx)(l.c,{to:we.resPass,activeClassName:De.a.active,children:"Password Recovery"}),Object(n.jsx)(l.c,{to:we.error,activeClassName:De.a.active,children:"ERROR"})]})})},Be=function(){var e=Object(h.c)((function(e){return e.app.isInitial})),t=Object(h.b)();return Object(s.useEffect)((function(){t(X())}),[]),e?Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(qe,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(Ue,{})})]}):Object(n.jsx)(J,{})},Ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,113)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))},Xe=a(66),Ze=a(24),ze={};He||(He={});var $e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Je=a(67),Ve=Object(Ze.combineReducers)({auth:Z,newPas:Pe,error:$e,profile:F,registration:re,resPas:Ne,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.SET_INITIAL_APP:return Object(d.a)(Object(d.a)({},e),t.payload);default:return e}}}),Qe=Object(Ze.applyMiddleware)(Xe.a),Ye=Object(Ze.createStore)(Ve,Object(Je.composeWithDevTools)(Qe)),et=Ye;window.store=Ye,i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(l.a,{children:Object(n.jsx)(h.a,{store:et,children:Object(n.jsx)(Be,{})})})}),document.getElementById("root")),Ke()},16:function(e,t,a){e.exports={profile_main_wrapper:"ProfileContainer_profile_main_wrapper__2a3Dk",profile_item_wrapper:"ProfileContainer_profile_item_wrapper__XPMEa",profile_item:"ProfileContainer_profile_item__-cCfy",item_title:"ProfileContainer_item_title__10420",change_name:"ProfileContainer_change_name__2W3Xx"}},23:function(e,t,a){e.exports={auth_wrapper:"AuthContainer_auth_wrapper__3xmiu",auth_main:"AuthContainer_auth_main__55BT0",container:"AuthContainer_container__2Fyee",auth_link:"AuthContainer_auth_link__1H-Fo",input_block:"AuthContainer_input_block__2jeT6",btn_check:"AuthContainer_btn_check__2t9Ni",errorMesOp:"AuthContainer_errorMesOp__r6aXx"}},25:function(e,t,a){e.exports={wrapper:"NavigationContainer_wrapper__3XXBF",active:"NavigationContainer_active__3-qgj"}},28:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3j43T",errorInput:"SuperInputText_errorInput__3LuDo",error:"SuperInputText_error__SXMyI",otherInput:"SuperInputText_otherInput__357lS"}},29:function(e,t,a){e.exports={modal:"Modal_modal__2x7V_",modal_content:"Modal_modal_content__htyMa",active:"Modal_active__3Woi9"}},36:function(e,t,a){e.exports={reg_wrapper:"Registration_reg_wrapper__HTqCc",container:"Registration_container__kwRfK"}},37:function(e,t,a){e.exports={res_Password_wrapper:"ResPassword_res_Password_wrapper__3SEjR",error:"ResPassword_error__1r8lw"}},41:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__1jVN_",spanClassName:"SuperCheckbox_spanClassName__3ovd3"}},42:function(e,t,a){e.exports={button_default:"SuperButton_button_default__2YlOl",button_red:"SuperButton_button_red__27PBR"}},47:function(e,t,a){e.exports={wrapper_main:"NewPasswordContainer_wrapper_main__2o0wu",wrapper_items:"NewPasswordContainer_wrapper_items__1DBeO"}},58:function(e,t,a){e.exports={loader:"Spinner_loader__1n8Zh",animates:"Spinner_animates__qkhBs",animateBg:"Spinner_animateBg__SDpl5"}},75:function(e,t,a){},76:function(e,t,a){},8:function(e,t,a){e.exports={wrapped:"Error404_wrapped__2cju2",sadMac:"Error404_sadMac__18_lj",srText:"Error404_srText__1QIQw",_0:"Error404__0__33zfg",_4:"Error404__4__2weUf",d:"Error404_d__1DG7G",e:"Error404_e__1CWJu",f:"Error404_f__36djJ",n:"Error404_n__1_g75",o:"Error404_o__2hPGy",r:"Error404_r__xG2zs",t:"Error404_t__2bRXN",u:"Error404_u__mp2gD"}}},[[100,1,2]]]);
//# sourceMappingURL=main.3bb0af44.chunk.js.map