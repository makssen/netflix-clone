(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),i=(a(109),a(19)),s=a(11),l=(a(110),a(42)),j=a.n(l),d=a(57),h=a(94),u=a(16),b=a(2),f=Object(n.createContext)({films:[],watchFilms:[],addToWatch:function(){},deleteToWatch:function(){},randomFilm:{}}),m=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(u.a)(a,2),r=c[0],o=c[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),l=s[0],m=s[1],O=Object(n.useState)({}),p=Object(u.a)(O,2),x=p[0],g=p[1],v=function(e,t,a){m((function(n){return n.find((function(t){return t.title===e}))?n:[].concat(Object(h.a)(n),[{title:e,overview:t,poster_path:a}])}))},w=function(e){m((function(t){return t.filter((function(t){return t.title!==e}))}))},N=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a="popular",fetch("".concat("https://api.themoviedb.org/3/movie","/").concat(a,"?").concat("api_key=108a3dcad1f9a8ddef8c60eac64385d7")).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 2:t=e.sent,o(t),g(t.results[Math.floor(20*Math.random())]);case 5:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N()}),[]),Object(n.useEffect)((function(){if(null===localStorage.getItem("watchFilms"))localStorage.setItem("watchFilms",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("watchFilms"));m(e)}}),[]),Object(n.useEffect)((function(){localStorage.setItem("watchFilms",JSON.stringify(l))}),[l]);var S=Object(n.useMemo)((function(){return{films:r,addToWatch:v,watchFilms:l,deleteToWatch:w,randomFilm:x}}),[r,v,l]);return Object(b.jsx)(f.Provider,{value:S,children:t})},O=a(50),p=a(51),x=a(4),g=a(159),v=a(18),w=a(181),N=a(161),S=a(163),y=a(164),k=a(167),C=a(166),B=a(165),F=a(87),_=a.n(F),T=a(88),W=a.n(T),I=a(89),L=a.n(I),P=a(168),D=a(169),E=a(170),M=a.p+"static/media/logo.774e8c16.png",G=240,z=Object(g.a)((function(e){return{root:{display:"flex",backgroundColor:"#181818",minHeight:"100vh",color:"#fff"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#000"},appBarShift:{width:"calc(100% - ".concat(G,"px)"),marginLeft:G,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2),color:"#fff"},hide:{display:"none"},drawer:{width:G,flexShrink:0},drawerPaper:{width:G,backgroundColor:"#000",color:"#fff"},drawerHeader:Object(p.a)(Object(p.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},menuBtn:{color:"#fff"},logo:{width:110},cartGrid:{flexGrow:1},iconColor:{color:"#fff"},menuItem:{textDecoration:"none",color:"#fff"}}})),H=function(e){var t=e.children,a=e.routes,r=z(),o=Object(v.a)(),s=c.a.useState(!1),l=Object(u.a)(s,2),j=l[0],d=l[1],h=Object(n.useState)(0),f=Object(u.a)(h,2);f[0],f[1];return Object(b.jsxs)("div",{className:r.root,children:[Object(b.jsx)(N.a,{}),Object(b.jsx)(S.a,{position:"fixed",className:Object(x.a)(r.appBar,Object(O.a)({},r.appBarShift,j)),children:Object(b.jsxs)(y.a,{children:[Object(b.jsx)(B.a,{color:"inherit","aria-label":"open drawer",onClick:function(){d(!0)},edge:"start",className:Object(x.a)(r.menuButton,j&&r.hide),children:Object(b.jsx)(_.a,{})}),Object(b.jsx)("img",{className:r.logo,src:M,alt:"logo"})]})}),Object(b.jsxs)(w.a,{className:r.drawer,variant:"persistent",anchor:"left",open:j,classes:{paper:r.drawerPaper},children:[Object(b.jsx)("div",{className:r.drawerHeader,children:Object(b.jsx)(B.a,{className:r.menuBtn,onClick:function(){d(!1)},children:"ltr"===o.direction?Object(b.jsx)(W.a,{}):Object(b.jsx)(L.a,{})})}),Object(b.jsx)(C.a,{}),Object(b.jsx)(k.a,{children:a.map((function(e){return Object(b.jsx)(i.c,{className:r.menuItem,to:e.path,children:Object(b.jsxs)(P.a,{button:!0,children:[Object(b.jsx)(D.a,{className:r.iconColor,children:e.icon}),Object(b.jsx)(E.a,{primary:e.label})]})},e.label)}))})]}),Object(b.jsxs)("main",{className:Object(x.a)(r.content,Object(O.a)({},r.contentShift,j)),children:[Object(b.jsx)("div",{className:r.drawerHeader}),t]})]})},J=a(172),A=a(173),R=a(176),q=a(175),U=a(174),V=a(177),Y=a(63),K=a(171),Q=Object(g.a)({root:{backgroundColor:"#181818",color:"#fff"},media:{height:250},description:{color:"#a3a3a3"}}),X=Object(g.a)({root:{maxWidth:400,backgroundColor:"#181818",color:"#fff"},media:{height:180},description:{color:"#a3a3a3",minHeight:160},linkStyle:{textDecoration:"none",color:"#fff"}}),Z=function(e){var t=e.id,a=e.title,c=e.overview,r=e.poster_path,o=X(),s=Object(n.useContext)(f).addToWatch;return Object(b.jsxs)(J.a,{className:o.root,children:[Object(b.jsx)(i.c,{className:o.linkStyle,to:"/film_preview#".concat(t),children:Object(b.jsxs)(A.a,{children:[Object(b.jsx)(U.a,{className:o.media,image:"https://image.tmdb.org/t/p/w500/".concat(r)}),Object(b.jsxs)(q.a,{children:[Object(b.jsx)(Y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a}),Object(b.jsx)(Y.a,{className:o.description,variant:"body2",component:"p",children:c})]})]})}),Object(b.jsx)(R.a,{children:Object(b.jsx)(V.a,{onClick:function(){return s(a,c,r)},size:"small",color:"secondary",children:"Add to Watch"})})]})},$=Object(g.a)({root:{backgroundColor:"#181818",color:"#fff"},media:{height:500},description:{color:"#a3a3a3"},linkStyle:{textDecoration:"none",color:"#fff"}}),ee=function(e){e.films;var t=$(),a=Object(n.useContext)(f),c=a.randomFilm,r=a.addToWatch;return Object(b.jsxs)(J.a,{className:t.root,children:[Object(b.jsx)(i.c,{className:t.linkStyle,to:"/film_preview#".concat(c.id),children:Object(b.jsxs)(A.a,{children:[Object(b.jsx)(U.a,{className:t.media,image:"https://image.tmdb.org/t/p/w500/".concat(c.poster_path)}),Object(b.jsxs)(q.a,{children:[Object(b.jsx)(Y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:c.title}),Object(b.jsx)(Y.a,{className:t.description,variant:"body2",component:"p",children:c.overview})]})]})}),Object(b.jsx)(R.a,{children:Object(b.jsx)(V.a,{onClick:function(){return r(c.title,c.overview,c.poster_path)},size:"small",color:"secondary",children:"Add to Watch"})})]})},te=a(90),ae=a.n(te),ne=Object(g.a)({cartGrid:{flexGrow:1},iconColor:{color:"#fff"}}),ce=a(96),re=a(179),oe=a(182),ie=function(e){var t=e.rating;return Object(b.jsx)("div",{children:Object(b.jsxs)(re.a,{component:"fieldset",mb:3,borderColor:"transparent",children:[Object(b.jsx)(Y.a,{component:"legend",children:"Rating"}),Object(b.jsx)(oe.a,{name:"customized-10",defaultValue:2,max:10,value:Math.floor(t),readOnly:!0})]})})},se=Object(g.a)((function(){return{filmPost:{backgroundColor:"#181818",color:"#fff",display:"flex"},release:{marginTop:24},text:{color:"#a3a3a3"},img:{height:"100%"}}})),le=function(){var e=se(),t=Object(n.useContext)(f).addToWatch,a=Object(n.useState)([]),c=Object(u.a)(a,2),r=c[0],o=c[1];return Object(n.useEffect)((function(){var e=+window.location.hash.substring(1).split("#")[1];fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=108a3dcad1f9a8ddef8c60eac64385d7")).then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(ce.a,{className:e.filmPost,elevation:3,children:[Object(b.jsx)("div",{className:"Post",children:Object(b.jsx)("img",{className:e.img,src:r.poster_path?"https://image.tmdb.org/t/p/w500/".concat(r.poster_path):"",alt:"film"})}),Object(b.jsx)(re.a,{p:3,children:Object(b.jsxs)("div",{className:"Description",children:[Object(b.jsx)(Y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:r.title}),Object(b.jsx)(Y.a,{className:e.text,variant:"body2",component:"p",children:r.overview}),Object(b.jsxs)(Y.a,{className:e.release,variant:"body2",component:"p",children:["Release date: ",r.release_date]}),Object(b.jsx)(Y.a,{className:e.release,variant:"body2",component:"p",children:Object(b.jsx)(ie,{rating:r.vote_average})}),Object(b.jsx)(V.a,{onClick:function(){return t(r.title,r.overview,r.poster_path)},size:"small",color:"secondary",children:"Add to Watch"})]})})]})})},je=a(178),de=Object(g.a)((function(e){return{root:{"& .MuiInputBase-root":{color:"#fff",width:300},"& .MuiFormLabel-root":{color:"#a3a3a3"}},filmPost:{backgroundColor:"#181818",color:"#fff"},searchList:{display:"block"},searchLink:{textDecoration:"none",color:"#000"},searchItem:{padding:10,borderBottom:"1px solid #a3a3a3"}}})),he=a(91),ue=a.n(he),be=a(92),fe=a.n(be),me=a(93),Oe=a.n(me),pe=[{label:"Films",exact:!0,path:"/",icon:Object(b.jsx)(ue.a,{}),component:function(){ne();var e=Object(n.useContext)(f).films;return Object(b.jsxs)(K.a,{container:!0,justify:"center",spacing:3,children:[Object(b.jsx)(K.a,{item:!0,xs:12,children:Object(b.jsx)(ee,{films:e})}),e.results&&e.results.map((function(e,t){return Object(b.jsx)(K.a,{item:!0,children:Object(b.jsx)(ae.a,{left:!0,children:Object(b.jsx)(Z,Object(p.a)({},e))})},"".concat(e.title,"-").concat(t))}))]})}},{label:"Watch",path:"/watch",icon:Object(b.jsx)(fe.a,{}),component:function(){var e=Q(),t=Object(n.useContext)(f),a=t.watchFilms,c=t.deleteToWatch;return Object(b.jsx)(K.a,{container:!0,spacing:3,children:a.length>0?a.map((function(t){return Object(b.jsx)(K.a,{item:!0,xs:12,children:Object(b.jsxs)(J.a,{className:e.root,children:[Object(b.jsxs)(A.a,{children:[Object(b.jsx)(U.a,{className:e.media,image:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path)}),Object(b.jsx)(q.a,{children:Object(b.jsx)(Y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title})})]}),Object(b.jsx)(R.a,{children:Object(b.jsx)(V.a,{onClick:function(){return c(t.title)},size:"small",color:"secondary",children:"Delete"})})]})})})):Object(b.jsx)(K.a,{item:!0,xs:12,children:Object(b.jsx)(J.a,{className:e.root,children:Object(b.jsx)(A.a,{children:Object(b.jsx)(q.a,{children:Object(b.jsxs)(Y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["You have no movies available to watch. Go to ",Object(b.jsx)(i.b,{style:{color:"#fff"},to:"/",children:"Films"})]})})})})})})}},{label:"Search Film",path:"/search",icon:Object(b.jsx)(Oe.a,{}),component:function(){var e=de(),t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),l=s[0],h=s[1],f=function(e,t){var a=Object(n.useState)(e),c=Object(u.a)(a,2),r=c[0],o=c[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){o(e)}),t);return function(){clearTimeout(a)}}),[e,t]),r}(c,800),m=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=3;break}return e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=108a3dcad1f9a8ddef8c60eac64385d7&language=en-US&page=1&include_adult=false&query=".concat(f)).then((function(e){return e.json()})).then((function(e){return e.errors?h([]):h(e.results)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){m()}),[f]),Object(b.jsx)(ce.a,{className:e.filmPost,elevation:3,children:Object(b.jsxs)(re.a,{p:3,children:[Object(b.jsx)(Y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Search"}),Object(b.jsx)(je.a,{onChange:function(e){e.preventDefault(),r(e.target.value)},className:e.root,id:"outlined-textarea",label:"Search film",placeholder:"Enter film",multiline:!0,variant:"outlined",color:"secondary",value:c}),Object(b.jsx)(J.a,{style:{width:300},children:Object(b.jsx)("ul",{className:e.searchList,children:l.map((function(t,a){return Object(b.jsxs)(i.c,{className:e.searchLink,to:"/film_preview#".concat(t.id),children:[" ",Object(b.jsx)("li",{className:e.searchItem,children:t.title})]},"".concat(t,"-").concat(a))}))})})]})})}}];var xe=function(){return Object(b.jsx)(m,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(H,{routes:pe,children:Object(b.jsxs)(s.c,{children:[pe.map((function(e){return Object(b.jsx)(s.a,{exact:e.exact,path:e.path,component:e.component},e.label)})),Object(b.jsx)(s.a,{path:"/film_preview",component:le})]})})})})},ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,185)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(xe,{})}),document.getElementById("root")),ge()}},[[121,1,2]]]);
//# sourceMappingURL=main.79b24cd9.chunk.js.map