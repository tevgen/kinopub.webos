(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[17],{1109:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var c=n(59),r=n(2),i=n(32),o=n(198),a=n.n(o),u=n(969),s=n(265),l=n(895),f=n(253),b=n(107),d=n(55),j=n.n(d),v=n(255),O=n(897),h=n(6),p=n(901),x=n(3),g=function(e){var t=e.collection,n=e.className,c=Object(i.h)(),o=Object(r.useMemo)((function(){return(null===t||void 0===t?void 0:t.views)&&Object(p.a)(null===t||void 0===t?void 0:t.views)||""}),[null===t||void 0===t?void 0:t.views]),a=Object(r.useCallback)((function(){(null===t||void 0===t?void 0:t.id)&&c.push(Object(h.b)(h.a.Collection,{collectionId:t.id}),{collection:t,title:t.title})}),[t,c]);return Object(x.jsx)(O.a,{onClick:a,source:null===t||void 0===t?void 0:t.posters.medium,caption:null===t||void 0===t?void 0:t.title,className:j()("h-72",n),children:o&&Object(x.jsxs)("div",{className:"absolute top-2 right-2 h-6 pr-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:[Object(x.jsx)(v.a,{name:"visibility"}),o]})})},m=n(894),w=n(896),N=function(e){var t=e.title,n=e.collections,c=e.loading,r=e.onScrollToEnd,i=e.scrollable,o=void 0===i||i,u=Object(x.jsxs)("div",{children:[Object(x.jsx)(w.a,{children:t}),Object(x.jsxs)("div",{className:"flex flex-wrap pr-2",children:[a()(n,(function(e){return Object(x.jsx)(g,{collection:e},e.id)})),c&&a()(Object(b.a)(new Array(15)),(function(e,t){return Object(x.jsx)(g,{},t)}))]})]});return o?Object(x.jsx)(m.b,{onScrollToEnd:r,children:u}):u},P=n(919),y=function(e){var t=e.title,n=e.queryResult,r=e.processItems,i=Object(P.a)(n,r),o=Object(c.a)(i,3),a=o[0],u=o[1],s=o[2];return Object(x.jsx)(N,{title:t,collections:a,loading:u,onScrollToEnd:s})},C=n(928),k={created:"\u041d\u043e\u0432\u044b\u0435",watchers:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435",views:"\u041f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u043c\u044b\u0435"},M=function(){var e=Object(i.j)().collectionType,t=void 0===e?"created":e,n=Object(r.useState)(""),o=Object(c.a)(n,2),b=o[0],d=o[1],j=Object(C.a)("collections",[b,"".concat(t,"-")]),v=function(e){return(e?k[e]:e)||""}(t),O=Object(r.useCallback)((function(e){d(e)}),[d]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(l.a,{title:"\u041f\u043e\u0434\u0431\u043e\u0440\u043a\u0438: ".concat(v)}),Object(x.jsx)(y,{title:Object(x.jsxs)("div",{className:"w-full",children:[Object(x.jsxs)("div",{className:"flex justify-between items-center mb-3",children:[Object(x.jsx)(f.a,{children:v}),Object(x.jsx)("div",{className:"flex",children:a()(k,(function(e,n){return Object(x.jsx)(s.a,{className:"mr-2",replace:!0,active:t===n,href:Object(h.b)(h.a.Collections,{collectionType:n}),children:e},n)}))})]}),Object(x.jsx)("div",{className:"mr-2",children:Object(x.jsx)(u.a,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0431\u043e\u0440\u043a\u0438...",value:b,onChange:O})})]}),queryResult:j})]})}},894:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return v}));var c=n(13),r=n(60),i=n(2),o=n(55),a=n.n(o),u=n(59),s=n(108),l=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},r=t.onEnterViewport,o=t.onLeaveViewport,a=Object(i.useState)(),l=Object(u.a)(a,2),f=l[1],b=Object(i.useRef)(null),d=Object(i.useRef)(!1),j=Object(i.useRef)(!1),v=Object(i.useRef)(0),O=Object(i.useRef)(0),h=Object(i.useCallback)((function(){if(e.current&&b.current){var t=Object(s.findDOMNode)(e.current);t&&b.current.observe(t)}}),[e,b]),p=Object(i.useCallback)((function(){if(e.current&&b.current){var t=Object(s.findDOMNode)(e.current);t&&(b.current.unobserve(t),b.current.disconnect(),b.current=null)}}),[e,b]),x=Object(i.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,i=t.intersectionRatio,a="undefined"!==typeof n?n:i>0;if(!j.current&&a)return j.current=!0,null===r||void 0===r||r(),v.current+=1,d.current=a,void f(a);j.current&&!a&&(j.current=!1,null===o||void 0===o||o(),c.disconnectOnLeave&&b.current&&b.current.disconnect(),O.current+=1,d.current=a,f(a))}),[b,c.disconnectOnLeave,r,o]),g=Object(i.useCallback)((function(){b.current||(b.current=new IntersectionObserver(x,n))}),[b,n,x]);return Object(i.useEffect)((function(){return g(),h(),function(){p()}}),[g,h,p]),{inViewport:d.current,enterCount:v.current,leaveCount:O.current}},f=n(1104);var b=function(e){var t=Object(f.a)();return Object(i.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},d=n(3),j=["children","className","onScrollToEnd"],v=Object(i.createContext)({}),O=function(e){var t=e.children,n=e.className,o=e.onScrollToEnd,u=Object(r.a)(e,j),s=Object(i.useRef)(null),f=b("scrollable"),O=Object(i.useMemo)((function(){return{id:f}}),[f]);return l(s,{onEnterViewport:o}),Object(d.jsxs)("div",Object(c.a)(Object(c.a)({className:a()("overflow-y-auto h-full",n)},u),{},{id:f,children:[Object(d.jsx)(v.Provider,{value:O,children:t}),o&&Object(d.jsx)("div",{className:"h-40",ref:s})]}))}},895:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(13),r=n(899),i=n(3),o=function(e){return Object(i.jsx)(r.a,Object(c.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(13),r=n(60),i=n(55),o=n.n(i),a=n(253),u=n(3),s=["children","className"],l=function(e){var t=e.children,n=e.className,i=Object(r.a)(e,s);return t?Object(u.jsx)(a.a,Object(c.a)(Object(c.a)({},i),{},{className:o()("flex justify-between items-center m-1 mb-3 min-h-9",n),as:"div",children:t})):null}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var c=n(13),r=n(60),i=n(55),o=n.n(i),a=n(2),u=n(930),s=n.n(u),l=n(894),f=n(3),b=function(e){var t=Object(a.useContext)(l.a).id;return Object(f.jsx)(s.a,Object(c.a)(Object(c.a)({once:!0,offset:100,scrollContainer:t&&"#".concat(t)},e),{},{placeholder:Object(f.jsx)("div",{className:"w-full h-full"})}))};var d=b,j=n(254),v=["className","wrapperClassName","source","caption","children"],O=function(e){var t=e.className,n=e.wrapperClassName,i=e.source,a=e.caption,u=e.children,s=Object(r.a)(e,v);return Object(f.jsxs)(j.a,Object(c.a)(Object(c.a)({},s),{},{className:o()("rounded-xl w-1/5 cursor-pointer",n),children:[Object(f.jsxs)(d,{className:o()("h-40 m-1 flex flex-col relative",t),children:[Object(f.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:i,alt:a}),u]}),a&&Object(f.jsx)("div",{className:"px-2",children:Object(f.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden overflow-ellipsis whitespace-nowrap",children:a})})]}))}},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(906),r=n.n(c);function i(e){return r()(e)}},908:function(e,t,n){var c=n(379),r=n(920);e.exports=function(e,t){return e&&e.length?r(e,c(t,2)):[]}},919:function(e,t,n){"use strict";var c=n(59),r=n(2),i=n(907),o=n.n(i),a=n(931),u=n.n(a),s=n(908),l=n.n(s);t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"items",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"id",a=e.data,s=e.isLoading,f=e.isFetchingNextPage,b=e.fetchNextPage,d=Object(r.useState)(!1),j=Object(c.a)(d,2),v=j[0],O=j[1],h=Object(r.useMemo)((function(){return l()(o()(u()(null===a||void 0===a?void 0:a.pages,(function(e){return e[n]}))),i)}),[null===a||void 0===a?void 0:a.pages,n,i]),p=Object(r.useMemo)((function(){return t?t(h):h}),[h,t]),x=Object(r.useCallback)((function(){v&&(b(),O(!1))}),[v,b]);return Object(r.useEffect)((function(){O(!0)}),[h.length]),[p,s||f,x]}},920:function(e,t,n){var c=n(386),r=n(921),i=n(925),o=n(387),a=n(926),u=n(381);e.exports=function(e,t,n){var s=-1,l=r,f=e.length,b=!0,d=[],j=d;if(n)b=!1,l=i;else if(f>=200){var v=t?null:a(e);if(v)return u(v);b=!1,l=o,j=new c}else j=t?[]:d;e:for(;++s<f;){var O=e[s],h=t?t(O):O;if(O=n||0!==O?O:0,b&&h===h){for(var p=j.length;p--;)if(j[p]===h)continue e;t&&j.push(h),d.push(O)}else l(j,h,n)||(j!==d&&j.push(h),d.push(O))}return d}},921:function(e,t,n){var c=n(922);e.exports=function(e,t){return!!(null==e?0:e.length)&&c(e,t,0)>-1}},922:function(e,t,n){var c=n(917),r=n(923),i=n(924);e.exports=function(e,t,n){return t===t?i(e,t,n):c(e,r,n)}},923:function(e,t){e.exports=function(e){return e!==e}},924:function(e,t){e.exports=function(e,t,n){for(var c=n-1,r=e.length;++c<r;)if(e[c]===t)return c;return-1}},925:function(e,t){e.exports=function(e,t,n){for(var c=-1,r=null==e?0:e.length;++c<r;)if(n(t,e[c]))return!0;return!1}},926:function(e,t,n){var c=n(388),r=n(927),i=n(381),o=c&&1/i(new c([,-0]))[1]==1/0?function(e){return new c(e)}:r;e.exports=o},927:function(e,t){e.exports=function(){}},928:function(e,t,n){"use strict";var c=n(13),r=n(107),i=n(2),o=n(968),a=n(252);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,u=Object(i.useMemo)((function(){return new a.c}),[]),s=Object(o.a)([e].concat(Object(r.a)(t)),(function(n){var c=n.pageParam;return u[e].apply(u,Object(r.a)(t).concat([c]))}),Object(c.a)({getNextPageParam:function(e){var t;return(null===e||void 0===e||null===(t=e.pagination)||void 0===t?void 0:t.current)+1||1}},n));return s}},931:function(e,t,n){var c=n(933),r=n(198);e.exports=function(e,t){return c(r(e,t),1)}},933:function(e,t,n){var c=n(391),r=n(934);e.exports=function e(t,n,i,o,a){var u=-1,s=t.length;for(i||(i=r),a||(a=[]);++u<s;){var l=t[u];n>0&&i(l)?n>1?e(l,n-1,i,o,a):c(a,l):o||(a[a.length]=l)}return a}},934:function(e,t,n){var c=n(156),r=n(262),i=n(61),o=c?c.isConcatSpreadable:void 0;e.exports=function(e){return i(e)||r(e)||!!(o&&e&&e[o])}},968:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(7),r=n(31),i=n(938),o=n(264),a=function(e){function t(t,n){return e.call(this,t,n)||this}Object(r.a)(t,e);var n=t.prototype;return n.bindMethods=function(){e.prototype.bindMethods.call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)},n.setOptions=function(t){e.prototype.setOptions.call(this,Object(c.a)({},t,{behavior:Object(o.c)()}))},n.getOptimisticResult=function(t){return t.behavior=Object(o.c)(),e.prototype.getOptimisticResult.call(this,t)},n.fetchNextPage=function(e){return this.fetch({cancelRefetch:!0,throwOnError:null==e?void 0:e.throwOnError,meta:{fetchMore:{direction:"forward",pageParam:null==e?void 0:e.pageParam}}})},n.fetchPreviousPage=function(e){return this.fetch({cancelRefetch:!0,throwOnError:null==e?void 0:e.throwOnError,meta:{fetchMore:{direction:"backward",pageParam:null==e?void 0:e.pageParam}}})},n.createResult=function(t,n){var r,i,a,u,s,l,f=t.state,b=e.prototype.createResult.call(this,t,n);return Object(c.a)({},b,{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Object(o.a)(n,null==(r=f.data)?void 0:r.pages),hasPreviousPage:Object(o.b)(n,null==(i=f.data)?void 0:i.pages),isFetchingNextPage:f.isFetching&&"forward"===(null==(a=f.fetchMeta)||null==(u=a.fetchMore)?void 0:u.direction),isFetchingPreviousPage:f.isFetching&&"backward"===(null==(s=f.fetchMeta)||null==(l=s.fetchMore)?void 0:l.direction)})},t}(i.a),u=n(5),s=n(904);function l(e,t,n){var c=Object(u.l)(e,t,n);return Object(s.a)(c,a)}},969:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var c=n(13),r=n(60),i=n(2),o=n(108),a=n(976),u=n.n(a),s=n(55),l=n.n(s),f=n(3),b=["className","onChange","autoFocus"],d=function(e){var t=e.className,n=e.onChange,a=e.autoFocus,s=Object(r.a)(e,b),d=Object(i.useRef)(null),j=Object(i.useCallback)((function(e){var t=e.value;null===n||void 0===n||n(t)}),[n]);return Object(i.useEffect)((function(){var e;return a&&(e=requestAnimationFrame((function(){var e,t=Object(o.findDOMNode)(d.current);null===t||void 0===t||null===(e=t.querySelector("input"))||void 0===e||e.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[d,a]),Object(f.jsx)(u.a,Object(c.a)(Object(c.a)({},s),{},{ref:d,className:l()("w-full",t),onChange:j}))}}}]);
//# sourceMappingURL=17.aa686380.chunk.js.map