"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[505],{505:function(e,t,i){i.r(t);var n=i(439),r=i(791),s=i(689),a=i(87),c=i(179),o=i(100),l=i(184);t.default=function(e){e.cast,e.reviews;var t,i=(0,r.useState)([]),d=(0,n.Z)(i,2),h=d[0],u=d[1],v=(0,s.UO)().movieId,m=(0,s.s0)(),p=(null===(t=(0,s.TH)().state)||void 0===t?void 0:t.from)||"/movie";(0,r.useEffect)((function(){var e="https://api.themoviedb.org/3/movie/".concat(v,"?api_key=").concat("7456877804751c2ee672618d82b01711","&language=en-US");c.Z.get(e).then((function(e){var t=e.data;return u(t)}))}),[v]);var f=h.original_title,j=h.poster_path,x=h.popularity,g=h.overview,k=h.genres,w=(void 0===k?[]:k).map((function(e){return e.name})).join(", ");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("button",{type:"button",onClick:function(){return m(p)},children:"Go back"}),(0,l.jsx)("img",{src:j?"https://image.tmdb.org/t/p/original".concat(j):o,alt:"#",width:240}),(0,l.jsx)("h2",{children:f}),(0,l.jsxs)("p",{children:["User Score: ",Math.round(x),"%"]}),(0,l.jsx)("h3",{children:"Overviev"}),(0,l.jsx)("p",{children:g}),(0,l.jsx)("h3",{children:"Genres"}),(0,l.jsx)("p",{children:w})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)(a.OL,{state:{from:p},to:"/movie/".concat(v,"/cast"),children:(0,l.jsx)("li",{children:"Cast"})}),(0,l.jsx)(a.OL,{state:{from:p},to:"/movie/".concat(v,"/reviews"),children:(0,l.jsx)("li",{children:"Reviews"})})]})]}),(0,l.jsx)(s.j3,{})]})}},100:function(e,t,i){e.exports=i.p+"static/media/image_template.4f826f4ee7ae2fd4cf9f.jpg"}}]);
//# sourceMappingURL=505.d8ab7b9f.chunk.js.map