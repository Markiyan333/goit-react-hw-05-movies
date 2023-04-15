"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[602],{602:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(439),s=t(689),a=t(87),i=t(791),c="MoviesInfo_MoviesInfo__XVELf",o="MoviesInfo_MoviesInfoImg__l98tc",u=t(10),l=t(184),f=function(e){var n=e.movie,t=n.title,r=n.overview,s=n.genres,a=void 0===s?[]:s,i=n.poster_path,f=n.vote_average,d=u.f_+i,v=Math.floor(10*f);return(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("img",{src:d,alt:"",className:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:t}),(0,l.jsxs)("p",{children:["User score: ",v,"%"]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:r}),(0,l.jsx)("h2",{children:"Genres"}),(0,l.jsx)("p",{children:a.map((function(e){return e.name})).join(", ")})]})]})},d="MovieDetails_Link__aMqle",v="MovieDetails_LinkStyled__0gwjZ",p="MovieDetails_LinkStyledList__osg94",h="MovieDetails_AdditionalLinkStyled__qgWU4",m=function(){var e,n,t=(0,i.useState)([]),c=(0,r.Z)(t,2),o=c[0],m=c[1],x=(0,s.UO)().movieId,_=(0,s.TH)(),g=(0,i.useRef)(null!==(e=null===(n=_.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");return(0,i.useEffect)((function(){(0,u.TP)(x).then((function(e){return m(e)})).catch((function(e){return console.log(e)}))}),[x]),console.log(x),console.log(o),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.rU,{to:g.current,className:d,children:"Back to movie list"}),(0,l.jsx)(f,{movie:o,movieId:x}),(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("h2",{children:"Additional information"}),(0,l.jsxs)("ul",{className:p,children:[(0,l.jsx)("li",{className:v,children:(0,l.jsx)(a.rU,{to:"cast",className:d,children:"Cast"})}),(0,l.jsx)("li",{className:v,children:(0,l.jsx)(a.rU,{to:"reviews ",className:d,children:"Reviews"})})]})]}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(s.j3,{})})]})}},10:function(e,n,t){t.d(n,{Df:function(){return f},M1:function(){return h},Op:function(){return d},TP:function(){return v},f_:function(){return c},tx:function(){return p}});var r=t(861),s=t(757),a=t.n(s),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"1efdf9e7a9ff7e2165fc0b365172fcf9"};var c="https://image.tmdb.org/t/p/w500",o="/trending/movie/week",u="/search/movie",l="/movie/",f=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(o);case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{query:n}},e.next=3,i.Z.get(u,t);case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(l+n);case 2:return t=e.sent,console.log(t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(l+n+"/reviews");case 2:return t=e.sent,console.log(t.data.results),e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(l+n+"/credits");case 2:return t=e.sent,console.log(t.data.cast),e.abrupt("return",t.data.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.059b3982.chunk.js.map