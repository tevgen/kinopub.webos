(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[25],{1124:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return S}));var n=t(27),a=t.n(n),l=t(95),i=t(50),s=t(13),r=t(59),u=t(2),o=t(907),d=t.n(o),j=t(988),b=t.n(j),f=t(198),O=t.n(f),v=t(252),h=t(903),x=t(910),m=t(935),p=t(895),k=t(253),N=t(896),g=t(898),C=t(259),w=t(366),y=t(260),_=t(3),F=function(e){var c=e.setting,t=e.onChange;return Object(_.jsx)(x.a,{className:"w-full",defaultChecked:c.value===v.a.True,onChange:t,children:c.label})},M=function(e){var c=e.setting,t=e.onChange,n=Object(u.useMemo)((function(){return O()(c.value,(function(e){return"".concat(e.label," ").concat(e.description?"(".concat(e.description,")"):"")}))}),[c.value]);return Object(_.jsx)(m.a,{defaultValue:b()(c.value,(function(e){return e.selected===v.a.True})),label:c.label,onChange:t,options:n})},S=function(){var e,c,t=Object(g.a)("user").data,n=Object(g.a)("deviceInfo").data,o=Object(C.a)("saveDeviceSettings").saveDeviceSettingsAsync,j=Object(C.a)("deactivate").deactivate,b=Object(u.useState)({}),f=Object(r.a)(b,2),m=f[0],S=f[1],T=Object(y.a)("is_hls.js_active"),A=Object(r.a)(T,2),E=A[0],D=A[1],I=Object(y.a)("is_ac3_by_default_active"),J=Object(r.a)(I,2),K=J[0],R=J[1],V=Object(y.a)("is_forced_by_default_active"),q=Object(r.a)(V,2),H=q[0],L=q[1],P=Object(y.a)("is_pause_by_ok_click_active"),U=Object(r.a)(P,2),W=U[0],z=U[1],B=Object(w.a)(),G=B.software,Q=B.hardware,X=Object(u.useMemo)((function(){var e;return d()(O()(null===n||void 0===n||null===(e=n.device)||void 0===e?void 0:e.settings,(function(e,c){return Object(s.a)(Object(s.a)({},e),{},{key:c})})),(function(e){return"undefined"===typeof e.type}))}),[null===n||void 0===n||null===(e=n.device)||void 0===e?void 0:e.settings]),Y=Object(u.useMemo)((function(){var e;return d()(O()(null===n||void 0===n||null===(e=n.device)||void 0===e?void 0:e.settings,(function(e,c){return Object(s.a)(Object(s.a)({},e),{},{key:c})})),(function(e){return"list"===e.type}))}),[null===n||void 0===n||null===(c=n.device)||void 0===c?void 0:c.settings]),Z=Object(u.useCallback)((function(e){D(e)}),[D]),$=Object(u.useCallback)((function(e){R(e)}),[R]),ee=Object(u.useCallback)((function(e){L(e)}),[L]),ce=Object(u.useCallback)((function(e){z(e)}),[z]),te=Object(u.useCallback)((function(e){return function(){var c=Object(i.a)(a.a.mark((function c(t){return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:S(Object(s.a)(Object(s.a)({},m),{},Object(l.a)({},e.key,t?v.a.True:v.a.False)));case 1:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}),[m]),ne=Object(u.useCallback)((function(e){return function(c){S(Object(s.a)(Object(s.a)({},m),{},Object(l.a)({},e.key,e.value[c].id)))}}),[m]),ae=Object(u.useCallback)(Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o([null===n||void 0===n?void 0:n.device.id,m]);case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),[m,null===n||void 0===n?void 0:n.device,o]),le=Object(u.useCallback)((function(){j([])}),[j]);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(p.a,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(_.jsxs)("div",{className:"h-screen relative",children:[Object(_.jsx)(N.a,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"}),Object(_.jsx)("div",{className:"flex flex-col",children:(null===n||void 0===n?void 0:n.device)&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(X,(function(e){return Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(F,{setting:e,onChange:te(e)})},e.key)}))},"bool-".concat(null===n||void 0===n?void 0:n.device.updated)),Object(_.jsxs)("div",{className:"flex flex-wrap pb-4",children:[Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(x.a,{className:"w-full",defaultChecked:!1!==E,onChange:Z,children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c HLS.js"})},"use-hls.js"),Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(x.a,{className:"w-full",defaultChecked:K,onChange:$,children:"AC3 \u0430\u0443\u0434\u0438\u043e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"})},"use-ac3_by_default"),Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(x.a,{className:"w-full",defaultChecked:W,onChange:ce,children:"\u041f\u0430\u0443\u0437\u0430 \u043f\u043e \u043a\u043b\u0438\u043a\u0443 \u043d\u0430 \u041e\u041a"})}),Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(x.a,{className:"w-full",defaultChecked:H,onChange:ee,children:"Forced \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"})},"use-forced_by_default")]}),Object(_.jsx)("div",{className:"flex flex-wrap pb-4",children:O()(Y,(function(e){return Object(_.jsx)("div",{className:"flex w-1/2 pr-4",children:Object(_.jsx)(M,{setting:e,onChange:ne(e)})},e.key)}))},"list-".concat(null===n||void 0===n?void 0:n.device.updated))]}),Object(_.jsx)("div",{className:"flex my-8",children:Object(_.jsx)(h.a,{icon:"done",onClick:ae,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})}),Object(_.jsxs)("div",{className:"flex justify-between absolute bottom-0 left-0 right-0 py-2",children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(k.a,{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(_.jsxs)("div",{className:"flex items-center",children:[(null===t||void 0===t?void 0:t.user)&&Object(_.jsxs)(k.a,{className:"mr-4",children:[t.user.profile.name||t.user.username," (",Math.floor(t.user.subscription.days)," \u0434\u043d.)"]}),Object(_.jsx)(h.a,{icon:"logout",onClick:le,children:"\u0412\u044b\u0445\u043e\u0434"})]})]}),Object(_.jsxs)("div",{className:"flex flex-col items-end pr-4",children:[Object(_.jsx)(k.a,{children:Q}),Object(_.jsx)(k.a,{children:G})]})]})]})]})}},895:function(e,c,t){"use strict";t.d(c,"a",(function(){return i}));var n=t(13),a=t(899),l=t(3),i=function(e){return Object(l.jsx)(a.a,Object(n.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},896:function(e,c,t){"use strict";t.d(c,"a",(function(){return o}));var n=t(13),a=t(60),l=t(55),i=t.n(l),s=t(253),r=t(3),u=["children","className"],o=function(e){var c=e.children,t=e.className,l=Object(a.a)(e,u);return c?Object(r.jsx)(s.a,Object(n.a)(Object(n.a)({},l),{},{className:i()("flex justify-between items-center m-1 mb-3 min-h-9",t),as:"div",children:c})):null}},898:function(e,c,t){"use strict";var n=t(107),a=t(2),l=t(939),i=t(252);c.a=function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,s=Object(a.useMemo)((function(){return new i.c}),[]),r=Object(l.a)([e].concat(Object(n.a)(c)),(function(){return s[e].apply(s,Object(n.a)(c))}),t);return r}},902:function(e,c,t){"use strict";var n=t(59),a=t(2);c.a=function(e){var c=Object(a.useState)(e),t=Object(n.a)(c,2),l=t[0],i=t[1];return Object(a.useEffect)((function(){i(e)}),[e]),[l,i]}},903:function(e,c,t){"use strict";t.d(c,"a",(function(){return j}));var n=t(13),a=t(60),l=t(2),i=t(55),s=t.n(i),r=t(255),u=t(254),o=t(3),d=["children","icon","iconOnly","autoFocus","className"],j=function(e){var c=e.children,t=e.icon,i=e.iconOnly,j=void 0===i?!c:i,b=e.autoFocus,f=e.className,O=Object(a.a)(e,d),v=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e;return b&&(e=requestAnimationFrame((function(){var e,c;null===(e=v.current)||void 0===e||null===(c=e.node)||void 0===c||c.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[v,b]),Object(o.jsx)(u.a,Object(n.a)(Object(n.a)({},O),{},{ref:v,className:s()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",f),role:"button",children:Object(o.jsxs)("div",{className:"flex items-center",children:[t&&Object(o.jsx)(r.a,{className:s()({"mr-2":!j}),name:t}),!j&&c]})}))}},910:function(e,c,t){"use strict";t.d(c,"a",(function(){return j}));var n=t(13),a=t(60),l=t(2),i=t(55),s=t.n(i),r=t(254),u=t(261),o=t(3),d=["defaultChecked","checked","onChange","className","children","disabled"],j=function(e){var c=e.defaultChecked,t=e.checked,i=e.onChange,j=e.className,b=e.children,f=e.disabled,O=Object(a.a)(e,d),v=Object(l.useRef)(null),h=Object(l.useCallback)((function(e){null===i||void 0===i||i(e.target.checked,e)}),[i]),x=Object(l.useCallback)((function(e){var c;Object(u.a)(e,"Enter")&&(null===(c=v.current)||void 0===c||c.click())}),[]);return Object(o.jsx)(r.a,{component:"label",className:s()("text-gray-200 p-2",j),onKeyPress:x,role:"button",disabled:f,children:Object(o.jsxs)("div",{className:"inline-flex items-center cursor-pointer",children:[Object(o.jsx)("input",Object(n.a)(Object(n.a)({type:"checkbox"},O),{},{ref:v,className:"inline-block w-4 h-4",defaultChecked:c,checked:t,onChange:h,disabled:f})),Object(o.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:b})]})})}},929:function(e,c,t){"use strict";t.d(c,"a",(function(){return f}));var n=t(59),a=t(2),l=t(55),i=t.n(l),s=t(255),r=t(254),u=t(253),o=t(902),d=t(1105);var j=function(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=arguments.length>2?arguments[2]:void 0;return Object(d.a)(e,c,t)},b=t(3),f=function(e){var c=e.open,t=e.onToggle,l=e.title,d=e.subtitle,f=e.className,O=e.children,v=e.disabled,h=Object(o.a)(c),x=Object(n.a)(h,2),m=x[0],p=x[1],k=Object(a.useCallback)((function(){if(!v){var e=!m;null===t||void 0===t||t(e),p(e)}}),[v,m,p,t]),N=j(k);return Object(b.jsxs)("div",{className:"flex flex-col w-full",children:[Object(b.jsx)(r.a,{onClick:N,className:i()("p-1 cursor-pointer",f),disabled:v,children:Object(b.jsxs)("div",{className:"flex flex-col",children:[Object(b.jsxs)("div",{className:"flex items-center",children:[Object(b.jsx)(u.a,{children:l}),!v&&Object(b.jsx)(s.a,{name:m?"expand_less":"expand_more"})]}),!m&&d&&Object(b.jsx)(u.a,{className:"mt-2",children:d})]})}),m&&O]})}},935:function(e,c,t){"use strict";t.d(c,"a",(function(){return b}));var n=t(59),a=t(2),l=t(198),i=t.n(l),s=t(929),r=t(13),u=t(910),o=t(3),d=function(e){return Object(o.jsx)(u.a,Object(r.a)(Object(r.a)({},e),{},{type:"radio"}))},j=t(902),b=function(e){var c=e.label,t=e.options,l=e.defaultValue,r=e.value,u=e.onChange,b=e.closeOnChange,f=void 0===b||b,O=e.className,v=e.splitIn,h=e.disabled,x=Object(a.useState)(!1),m=Object(n.a)(x,2),p=m[0],k=m[1],N=Object(j.a)(r||l),g=Object(n.a)(N,2),C=g[0],w=g[1],y=Object(a.useMemo)((function(){return Array.isArray(t)?t.map((function(e,c){return"object"===typeof e?e:{title:e,value:c}})):[]}),[t]),_=Object(a.useMemo)((function(){return y.find((function(e){return e.value===C}))}),[y,C]),F=Object(a.useCallback)((function(e){w(e),null===u||void 0===u||u(e),f&&k(!1)}),[w,u,f]),M=Object(a.useCallback)((function(e){return function(c){c&&F(e.value)}}),[F]);return Object(o.jsx)(s.a,{open:p,onToggle:k,title:c,subtitle:null===_||void 0===_?void 0:_.title,className:O,disabled:h,children:Object(o.jsx)("div",{className:"flex flex-wrap",children:i()(y,(function(e){return Object(o.jsx)(d,{className:v?"w-1/".concat(v):"w-full",checked:e.value===C,onChange:M(e),children:e.title},e.value)}))})})}}}]);
//# sourceMappingURL=25.b4340b55.chunk.js.map