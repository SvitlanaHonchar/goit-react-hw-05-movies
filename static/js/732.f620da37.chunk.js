"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[732],{732:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,a=e(861),c=e(439),u=e(757),i=e.n(u),o=e(791),s=e(87),p=e(168),f=e(444).ZP.section(r||(r=(0,p.Z)(["\n  margin-left: 10px;\n\n  & h2 {\n    margin-left: 10px;\n\n    font-size: 22px;\n  }\n\n  & li {\n    list-style: square;\n  }\n\n  & a {\n    text-decoration: none;\n  }\n"]))),v=e(184),h=function(n){var t=n.trendingMovies;return(0,v.jsxs)(f,{children:[(0,v.jsx)("h2",{children:"Trending today"}),(0,v.jsx)("ul",{children:t.map((function(n){return(0,v.jsx)("li",{children:(0,v.jsx)(s.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})},d=e(823),l=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Z$)();case 3:t=n.sent,e=t.results,r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsx)(v.Fragment,{children:e.length>0?(0,v.jsx)(h,{trendingMovies:e}):(0,v.jsx)("p",{children:"Something went wrong... try to reload the page"})})}},823:function(n,t,e){e.d(t,{HA:function(){return f},Nj:function(){return p},Pl:function(){return o},Z$:function(){return s},vb:function(){return v}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="520b1f5cc874bee72fc625fe9511a989",o=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=732.f620da37.chunk.js.map