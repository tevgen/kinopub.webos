(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[26],{1125:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return v}));var n=r(59),s=r(95),i=r(13),c=r(2),u=r(198),a=r.n(u),o=r(903),l=r(895),d=r(253),h=r(896),f=r(898),p=r(3);function b(e,t){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},t.type,t.payload))}var v=function(){var e=Object(f.a)("serverLocations").data,t=Object(c.useReducer)(b,{}),r=Object(n.a)(t,2),s=r[0],i=r[1],u=Object(c.useState)(!1),v=Object(n.a)(u,2),O=v[0],m=v[1],y=Object(c.useState)(!1),j=Object(n.a)(y,2),R=j[0],S=j[1],g=Object(c.useState)(""),x=Object(n.a)(g,2),Q=x[0],E=x[1],w=Object(c.useMemo)((function(){return a()(null===e||void 0===e?void 0:e.items,(function(e){var t=e.name,r=e.location;return{name:t,location:r,server:"https://".concat(r,"-speed.streambox.in"),dlURL:"/garbage.php",ulURL:"/empty.php",pingURL:"/empty.php",getIpURL:"/getIP.php"}}))}),[null===e||void 0===e?void 0:e.items]),C=Object(c.useMemo)((function(){return R||window.Speedtest?a()(w,(function(e){var t=new window.Speedtest;return t._settings.test_order="IP_D",t._settings.xhr_dlMultistream=1,t.setSelectedServer(e),t.onupdate=function(t){var r=t.testState,n=t.dlStatus;i({type:e.location,payload:n||(1===r||2===r)&&"\u041d\u0430\u0447\u0438\u043d\u0430\u0435\u043c"||""})},t})):[]}),[w,i,R]),I=Object(c.useState)(0),T=Object(n.a)(I,2),U=T[0],k=T[1],F=Object(c.useCallback)((function(){m(!0),k(0)}),[]),N=Object(c.useCallback)((function(){m(!1)}),[]);return Object(c.useEffect)((function(){C[U]?O?(C[U].onend=function(){k(U+1)},3!==C[U]._state&&C[U].start()):3===C[U]._state&&C[U].abort():N()}),[O,C,U,N]),Object(c.useEffect)((function(){return function(){N()}}),[N]),Object(c.useEffect)((function(){var e=document.createElement("script");return e.src="./speedtest.js",e.async=!0,e.onload=function(){S(!0)},e.onerror=function(e){E("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u0440\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438: ".concat(e))},document.head.appendChild(e),function(){document.head.removeChild(e)}}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{title:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438"}),Object(p.jsx)(h.a,{className:"mb-10",children:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438"}),Q?Object(p.jsx)("div",{className:"m-1 mb-10",children:Object(p.jsx)(d.a,{className:"text-red-600",children:Q})}):R&&w.length>0&&!C.length&&Object(p.jsx)("div",{className:"m-1 mb-10",children:Object(p.jsx)(d.a,{className:"text-red-600",children:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0432\u043e\u0440\u043a\u0435\u0440\u0430 \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u0440\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438"})}),Object(p.jsx)("div",{className:"flex justify-around",children:a()(null===e||void 0===e?void 0:e.items,(function(t){return Object(p.jsxs)("div",{className:"flex flex-col items-center w-1/".concat(null===e||void 0===e?void 0:e.items.length),children:[Object(p.jsx)(d.a,{children:t.name}),s[t.location]||"0.00",Object(p.jsx)(d.a,{children:"Mbit/s"})]},t.id)}))}),Object(p.jsx)("div",{className:"flex justify-center pt-12",children:O?Object(p.jsx)(o.a,{icon:"stop",onClick:N,children:"\u0421\u0442\u043e\u043f"}):Object(p.jsx)(o.a,{icon:"play_arrow",onClick:F,disabled:!C.length,children:"\u041d\u0430\u0447\u0430\u0442\u044c"})})]})}},895:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(13),s=r(899),i=r(3),c=function(e){return Object(i.jsx)(s.a,Object(n.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},896:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(13),s=r(60),i=r(55),c=r.n(i),u=r(253),a=r(3),o=["children","className"],l=function(e){var t=e.children,r=e.className,i=Object(s.a)(e,o);return t?Object(a.jsx)(u.a,Object(n.a)(Object(n.a)({},i),{},{className:c()("flex justify-between items-center m-1 mb-3 min-h-9",r),as:"div",children:t})):null}},898:function(e,t,r){"use strict";var n=r(107),s=r(2),i=r(939),c=r(252);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0,u=Object(s.useMemo)((function(){return new c.c}),[]),a=Object(i.a)([e].concat(Object(n.a)(t)),(function(){return u[e].apply(u,Object(n.a)(t))}),r);return a}},903:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(13),s=r(60),i=r(2),c=r(55),u=r.n(c),a=r(255),o=r(254),l=r(3),d=["children","icon","iconOnly","autoFocus","className"],h=function(e){var t=e.children,r=e.icon,c=e.iconOnly,h=void 0===c?!t:c,f=e.autoFocus,p=e.className,b=Object(s.a)(e,d),v=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e;return f&&(e=requestAnimationFrame((function(){var e,t;null===(e=v.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[v,f]),Object(l.jsx)(o.a,Object(n.a)(Object(n.a)({},b),{},{ref:v,className:u()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",p),role:"button",children:Object(l.jsxs)("div",{className:"flex items-center",children:[r&&Object(l.jsx)(a.a,{className:u()({"mr-2":!h}),name:r}),!h&&t]})}))}},904:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(2),s=r.n(n),i=r(25);function c(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var u=s.a.createContext(c()),a=r(268);function o(e,t){var r=s.a.useRef(!1),n=s.a.useState(0)[1],c=Object(a.b)(),o=s.a.useContext(u),l=c.defaultQueryObserverOptions(e);l.optimisticResults=!0,l.onError&&(l.onError=i.a.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=i.a.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=i.a.batchCalls(l.onSettled)),l.suspense&&"number"!==typeof l.staleTime&&(l.staleTime=1e3),(l.suspense||l.useErrorBoundary)&&(o.isReset()||(l.retryOnMount=!1));var d=s.a.useState((function(){return new t(c,l)}))[0],h=d.getOptimisticResult(l);if(s.a.useEffect((function(){r.current=!0,o.clearReset();var e=d.subscribe(i.a.batchCalls((function(){r.current&&n((function(e){return e+1}))})));return d.updateResult(),function(){r.current=!1,e()}}),[o,d]),s.a.useEffect((function(){d.setOptions(l,{listeners:!1})}),[l,d]),l.suspense&&h.isLoading)throw d.fetchOptimistic(l).then((function(e){var t=e.data;null==l.onSuccess||l.onSuccess(t),null==l.onSettled||l.onSettled(t,null)})).catch((function(e){o.clearReset(),null==l.onError||l.onError(e),null==l.onSettled||l.onSettled(void 0,e)}));if((l.suspense||l.useErrorBoundary)&&h.isError&&!h.isFetching)throw h.error;return"tracked"===l.notifyOnChangeProps&&(h=d.trackResult(h)),h}},938:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(7),s=r(31),i=r(5),c=r(25),u=r(120),a=r(73),o=r(159),l=r(74),d=function(e){function t(t,r){var n;return(n=e.call(this)||this).client=t,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(s.a)(t,e);var r=t.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),h(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnReconnect||!1!==t.refetchOnReconnect&&p(e,t));var e,t},r.shouldFetchOnWindowFocus=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnWindowFocus||!1!==t.refetchOnWindowFocus&&p(e,t));var e,t},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(e,t){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var s=this.hasListeners();s&&f(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),r=this.client.getQueryCache().build(this.client,t);return this.createResult(r,t)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(e){var t=this,r={};return Object.keys(e).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return t.trackedProps.includes(r)||t.trackedProps.push(r),e[r]}})})),r},r.getNextResult=function(e){var t=this;return new Promise((function(r,n){var s=t.subscribe((function(t){t.isFetching||(s(),t.isError&&(null==e?void 0:e.throwOnError)?n(t.error):r(t))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(e){return this.fetch(Object(n.a)({},e,{meta:{refetchPage:null==e?void 0:e.refetchPage}}))},r.fetchOptimistic=function(e){var t=this,r=this.client.defaultQueryObserverOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return t.createResult(n,r)}))},r.fetch=function(e){var t=this;return this.executeFetch(e).then((function(){return t.updateResult(),t.currentResult}))},r.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return(null==e?void 0:e.throwOnError)||(t=t.catch(i.i)),t},r.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!i.e&&!this.currentResult.isStale&&Object(i.f)(this.options.staleTime)){var t=Object(i.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}},r.updateRefetchInterval=function(){var e=this;this.clearRefetchInterval(),!i.e&&!1!==this.options.enabled&&Object(i.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.options.refetchIntervalInBackground||u.a.isFocused())&&e.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(e,t){var r,n=this.currentQuery,s=this.options,c=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,l=e!==n,d=l?e.state:this.currentQueryInitialState,b=l?this.currentResult:this.previousQueryResult,v=e.state,O=v.dataUpdatedAt,m=v.error,y=v.errorUpdatedAt,j=v.isFetching,R=v.status,S=!1,g=!1;if(t.optimisticResults){var x=this.hasListeners(),Q=!x&&h(e,t),E=x&&f(e,n,t,s);(Q||E)&&(j=!0,O||(R="loading"))}if(t.keepPreviousData&&!v.dataUpdateCount&&(null==b?void 0:b.isSuccess)&&"error"!==R)r=b.data,O=b.dataUpdatedAt,R=b.status,S=!0;else if(t.select&&"undefined"!==typeof v.data)if(c&&v.data===(null==u?void 0:u.data)&&t.select===(null==a?void 0:a.select)&&!this.previousSelectError)r=c.data;else try{r=t.select(v.data),!1!==t.structuralSharing&&(r=Object(i.n)(null==c?void 0:c.data,r)),this.previousSelectError=null}catch(C){Object(o.a)().error(C),m=C,this.previousSelectError=C,y=Date.now(),R="error"}else r=v.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof r&&("loading"===R||"idle"===R)){var w;if((null==c?void 0:c.isPlaceholderData)&&t.placeholderData===(null==a?void 0:a.placeholderData))w=c.data;else if(w="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof w)try{w=t.select(w),!1!==t.structuralSharing&&(w=Object(i.n)(null==c?void 0:c.data,w)),this.previousSelectError=null}catch(C){Object(o.a)().error(C),m=C,this.previousSelectError=C,y=Date.now(),R="error"}"undefined"!==typeof w&&(R="success",r=w,g=!0)}return{status:R,isLoading:"loading"===R,isSuccess:"success"===R,isError:"error"===R,isIdle:"idle"===R,data:r,dataUpdatedAt:O,error:m,errorUpdatedAt:y,failureCount:v.fetchFailureCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>d.dataUpdateCount||v.errorUpdateCount>d.errorUpdateCount,isFetching:j,isLoadingError:"error"===R&&0===v.dataUpdatedAt,isPlaceholderData:g,isPreviousData:S,isRefetchError:"error"===R&&0!==v.dataUpdatedAt,isStale:p(e,t),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(e,t){if(!t)return!0;if(e===t)return!1;var r=this.options,n=r.notifyOnChangeProps,s=r.notifyOnChangePropsExclusions;if(!n&&!s)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var i="tracked"===n?this.trackedProps:n;return Object.keys(e).some((function(r){var n=r,c=e[n]!==t[n],u=null==i?void 0:i.some((function(e){return e===r})),a=null==s?void 0:s.some((function(e){return e===r}));return c&&!a&&(!i||u)}))},r.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(i.p)(this.currentResult,t)){var r={cache:!0};!1!==(null==e?void 0:e.listeners)&&this.shouldNotifyListeners(this.currentResult,t)&&(r.listeners=!0),this.notify(Object(n.a)({},r,e))}},r.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}},r.onQueryUpdate=function(e){var t={};"success"===e.type?t.onSuccess=!0:"error"!==e.type||Object(l.c)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},r.notify=function(e){var t=this;c.a.batch((function(){e.onSuccess?(null==t.options.onSuccess||t.options.onSuccess(t.currentResult.data),null==t.options.onSettled||t.options.onSettled(t.currentResult.data,null)):e.onError&&(null==t.options.onError||t.options.onError(t.currentResult.error),null==t.options.onSettled||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))},t}(a.a);function h(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||function(e,t){return!1!==t.enabled&&e.state.dataUpdatedAt>0&&("always"===t.refetchOnMount||!1!==t.refetchOnMount&&p(e,t))}(e,t)}function f(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&("error"!==e.state.status||!1===n.enabled)&&p(e,r)}function p(e,t){return e.isStaleByTime(t.staleTime)}},939:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(938),s=r(5),i=r(904);function c(e,t,r){var c=Object(s.l)(e,t,r);return Object(i.a)(c,n.a)}}}]);
//# sourceMappingURL=26.0897a893.chunk.js.map