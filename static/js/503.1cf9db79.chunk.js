"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[503],{503:function(A,n,t){t.r(n),t.d(n,{default:function(){return d}});var i,r=t(861),a=t(439),e=t(757),o=t.n(e),g=t(791),s=t(689),c=t(823),p=t(652),h=t(168),Q=t(444).ZP.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  /* justify-content: space-around; */\n\n  & li {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    width: 200px;\n    padding: 10px 25px;\n\n    background-color: #f0f0f0;\n\n    list-style: none;\n    /* border: solid gray 1px; */\n    box-shadow: 3px 3px 3px #d6d6d6;\n\n    border-radius: 5px;\n\n    & h3 {\n      margin: 0;\n      margin-bottom: 5px;\n    }\n\n    & p {\n      margin: 0;\n      margin-bottom: 5px;\n      font-size: 18px;\n    }\n\n    & img {\n      width: 200px;\n      height: 300px;\n    }\n  }\n"]))),I=t(184),l=function(A){var n=A.castMembers;return(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(Q,{children:n.map((function(A){return(0,I.jsxs)("li",{children:[(0,I.jsx)("h3",{children:A.name}),(0,I.jsx)("p",{children:(0,I.jsx)("i",{children:A.character})}),null===A.profile_path?(0,I.jsx)("img",{src:p,alt:"empty",width:"150"}):(0,I.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(A.profile_path),alt:A.character,width:"150"})]},A.id)}))})})},d=function(){var A=(0,s.UO)().id,n=(0,g.useState)([]),t=(0,a.Z)(n,2),i=t[0],e=t[1];(0,g.useEffect)((function(){p(A)}),[A]);var p=function(){var A=(0,r.Z)(o().mark((function A(n){var t,i;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,c.HA)(n);case 3:t=A.sent,i=t.cast,e(i),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),console.log(A.t0);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(n){return A.apply(this,arguments)}}();return(0,I.jsx)(I.Fragment,{children:i.length>0?(0,I.jsx)(l,{castMembers:i}):(0,I.jsx)("p",{children:"no cast for the movie"})})}},652:function(A){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=503.1cf9db79.chunk.js.map