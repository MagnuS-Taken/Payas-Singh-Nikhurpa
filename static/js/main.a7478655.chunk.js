(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){},28:function(e,t,i){},29:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var a=i(1),c=i.n(a),s=i(9),r=i.n(s),n=i(4),l=i(63),o=i(64),d=i(57),j=i(58),m=(i(20),i(0));function b(e){var t=e.menuState,i=e.setMenuState,a=e.darkActive;return Object(m.jsx)("div",{className:"topbar "+(t&&"active ")+(a&&" dark"),children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("a",{href:"#intro",className:"logo",children:"PAYAS SINGH NIKHURPA"}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsx)("a",{href:"https://mail.google.com/mail/u/0/?fs=1&to=payasnikhurpa@gmail.com&tf=cm",target:"_blank",rel:"noreferrer","aria-label":"Direct to mail",children:Object(m.jsx)(d.a,{className:"icon"})})}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/payas-singh-nikhurpa/",target:"_blank",rel:"noreferrer","aria-label":"Direct to linkedin",children:Object(m.jsx)(j.a,{className:"icon"})})})]}),Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"hamburger",onClick:function(){return i(!t)},children:[Object(m.jsx)("span",{className:"line"}),Object(m.jsx)("span",{className:"line"}),Object(m.jsx)("span",{className:"line"})]})})]})})}i(26);function f(e){var t=e.menuState,i=e.setMenuState,a=e.darkActive,c=function(){i(!t)};return Object(m.jsx)("div",{className:"menu "+(t&&"active ")+(a&&" dark"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){return c()},children:Object(m.jsx)("a",{href:"#intro",children:"Home"})}),Object(m.jsx)("li",{onClick:function(){return c()},children:Object(m.jsx)("a",{href:"#skills",children:"Skills"})}),Object(m.jsx)("li",{onClick:function(){return c()},children:Object(m.jsx)("a",{href:"#project",children:"Projects"})}),Object(m.jsx)("li",{onClick:function(){return c()},children:Object(m.jsx)("a",{href:"#certificates",children:"Certificates"})})]})})}var h=i(59),p=i(11);i(27);function g(e){var t=e.darkActive,i=Object(a.useRef)();return Object(a.useEffect)((function(){Object(p.a)(i.current,{showCursor:!0,backDelay:1300,backSpeed:60,strings:["Aspiring Sofware Developer","Student & Learner"]})}),[]),Object(m.jsxs)("div",{className:t?"intro dark":"intro",id:"intro",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{src:"/Payas-Singh-Nikhurpa/assets/image.png",alt:""})})}),Object(m.jsx)("div",{className:"right",children:Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{children:"Hi There,I'm"}),Object(m.jsx)("h1",{children:"PAYAS SINGH NIKHURPA"}),Object(m.jsx)("h1",{className:"text-effect",children:Object(m.jsx)("span",{ref:i})}),Object(m.jsx)("a",{href:"#portfolio","aria-label":"go-below",children:Object(m.jsx)(h.a,{className:"icon"})})]})})})]})}i(28),i(29);var u=i(12);function O(e){var t=e.videoID;return Object(m.jsx)("div",{children:Object(m.jsx)(u.a,{videoId:t,opts:{height:"290",width:"640",playerVars:{autoplay:0}},onReady:function(e){e.target.pauseVideo()}})})}function v(e){var t=e.darkActive,i=Object(a.useState)("featured"),c=Object(n.a)(i,2),s=c[0],r=c[1],l=Object(a.useState)(""),o=Object(n.a)(l,2),d=o[0],j=o[1],b=Object(a.useState)([]),f=Object(n.a)(b,2),h=f[0],p=f[1];return Object(a.useEffect)((function(){switch(s){case"featured":p(k),j(k[3].vid);break;case"ecomm":p(x),j(x[3].vid);break;case"cowin":p(N),j(N[3].vid);break;default:p()}}),[s]),Object(m.jsxs)("div",{id:"project",className:"project "+(t&&" dark"),children:[Object(m.jsx)("h1",{children:"Projects"}),Object(m.jsx)("ul",{children:S.map((function(e){return Object(m.jsx)("li",{className:"projectList "+(s===e.id?"projectList active ":"projectList ")+(t&&" dark"),onClick:function(){return r(e.id)},children:e.title},e.id)}))}),Object(m.jsx)("div",{className:"container",children:h.map((function(e){return 4!==e.id?Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("img",{src:e.img,alt:e.title}),Object(m.jsx)("h3",{children:e.title})]},e.id):null}))}),Object(m.jsx)(O,{videoID:d})]})}var k=[{id:1,title:"Landing Page",img:"https://firebasestorage.googleapis.com/v0/b/auth-development-c5af6.appspot.com/o/portfolio%2Fsocial%2F1.JPG?alt=media&token=5013d883-31ac-44dd-b8ce-703b8334576c"},{id:2,title:"Profile Page",img:"https://firebasestorage.googleapis.com/v0/b/auth-development-c5af6.appspot.com/o/portfolio%2Fsocial%2F2.JPG?alt=media&token=af554d3c-de07-46e0-9b36-5c8ea7a0329b"},{id:3,title:"Edit Profile",img:"https://firebasestorage.googleapis.com/v0/b/auth-development-c5af6.appspot.com/o/portfolio%2Fsocial%2F3.JPG?alt=media&token=13b899e0-5750-441b-874f-5a213cd7bb7d"},{id:4,vid:"2Y-jxgM8NQg"}],x=[{id:1,title:"Landing Page",img:"https://firebasestorage.googleapis.com/v0/b/auth-development-c5af6.appspot.com/o/portfolio%2Fecomm%2Fprod2.JPG?alt=media&token=9915febd-93ce-4b6f-90ab-9003e1d65be0"},{id:2,title:"Cart",img:"https://firebasestorage.googleapis.com/v0/b/auth-development-c5af6.appspot.com/o/portfolio%2Fecomm%2Fprod4.JPG?alt=media&token=4274168a-7fd7-42a4-af34-c04191d1941d"},{id:3,title:"Admin Sign-in",img:"https://firebasestorage.googleapis.com/v0/b/auth-development-c5af6.appspot.com/o/portfolio%2Fecomm%2F3.JPG?alt=media&token=33eab884-7d17-4ec6-a9e9-21fef0e85957"},{id:4,vid:"n_dhS6ssbpA"}],N=[{id:1,title:"Main image",img:"https://firebasestorage.googleapis.com/v0/b/auth-development-c5af6.appspot.com/o/portfolio%2Fcowin%2Fpic1.JPG?alt=media&token=fce9e832-3c46-46df-9eff-b6114fb43f06"},{id:2,title:"Output Screen",img:"https://firebasestorage.googleapis.com/v0/b/auth-development-c5af6.appspot.com/o/portfolio%2Fcowin%2Fpic2.JPG?alt=media&token=d1584208-c35a-466c-bca8-d8a9ddf6c732"},{id:3,title:"Helper",img:"https://firebasestorage.googleapis.com/v0/b/auth-development-c5af6.appspot.com/o/portfolio%2Fcowin%2F3.JPG?alt=media&token=9ee619c3-f65f-4be9-b2ed-17b20227772d"},{id:4,vid:"Rj4nDM1wx5M"}],S=[{id:"featured",title:"Social Media"},{id:"ecomm",title:"E-commerce App"},{id:"cowin",title:"Cowin Notification App"}],w=(i(42),i(60)),C=i(61),P=i(62);function _(e){var t=e.darkActive,i=Object(a.useState)(0),c=Object(n.a)(i,2),s=c[0],r=c[1],l=function(e){"left"===e?r(s>0?s-1:"".concat(o.length-1)):s<"".concat(o.length-1)?r(s+1):r(0)},o=[{id:"1",title:"Programming Languages",desc1:"Full algorithmic programming proficiency in Java and full modern JavaScript knowledge (ECMA and ES6)",link1:"https://www.hackerrank.com/payasnikhurpa?hr_r=1",link1_desc:"HackerRank Profile",link2:"https://www.codechef.com/users/payas_2001",link2_desc:"CodeChef Profile",img:"/Payas-Singh-Nikhurpa/assets/img1.png"},{id:"2",title:"MERN STACK",desc1:"Strong knowledge of JavaScript ,CSS & Sass, React.Js, node.js, MongoDB and familiar with in CSS frameworks like Bootstrap and Bulma",img_link:"https://github.com/MagnuS-Taken",img:"/Payas-Singh-Nikhurpa/assets/img2.jpg"},{id:"3",icon:"./assets/writing.png",title:"Additional Skills",desc1:"Knowledge of Operating Systems and Database Management Systems (MySQL)",desc2:"Version Control Systems: Git & Github",img:"/Payas-Singh-Nikhurpa/assets/img3.jpg"}];return Object(m.jsxs)("div",{className:"skills "+(t&&" dark"),id:"skills",children:[Object(m.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:o.map((function(e){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsxs)("div",{className:"leftContainer",children:[Object(m.jsx)("h2",{children:e.title}),Object(m.jsx)("p",{children:e.desc1}),Object(m.jsx)("p",{children:e.desc2}),void 0===e.img_link?Object(m.jsx)("p",{}):Object(m.jsxs)("a",{href:e.img_link,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)(w.a,{}),"Link to GitHub"]}),void 0===e.link1?Object(m.jsx)("p",{}):Object(m.jsx)("a",{href:e.link1,target:"_blank",rel:"noreferrer",children:e.link1_desc}),void 0===e.link1?Object(m.jsx)("p",{}):Object(m.jsx)("a",{href:e.link2,target:"_blank",rel:"noreferrer",children:e.link2_desc})]})}),Object(m.jsx)("div",{className:"right",children:Object(m.jsx)("img",{src:e.img,alt:e.title})})]})},e.id)}))}),Object(m.jsx)(C.a,{className:"arrow left",onClick:function(){return l("left")}}),Object(m.jsx)(P.a,{className:"arrow right",onClick:function(){return l("right")}})]})}i(43);function A(e){var t=e.darkActive,i=Object(a.useState)(0),c=Object(n.a)(i,2),s=c[0],r=c[1],l=function(e){"left"===e?r(s>0?s-1:"".concat(o.length-1)):s<"".concat(o.length-1)?r(s+1):r(0)},o=[{id:"1",title:"Data Structures",link1:"https://coursera.org/share/e2defb87a8dd2cbcc193284b4511e135",img:"/assets/c1.JPG",img_alt:"DS_C"},{id:"2",title:"Database Management Essentials",link1:"https://coursera.org/share/048e2a904fa2f76014573e1f6e66356f",img:"/assets/c2.JPG",img_alt:"DBMS_C"},{id:"3",title:"Introduction to Web Development",link1:"https://coursera.org/share/3f8a73fc3dbdf711b5102f11e6761b7d",img:"/assets/c3.JPG",img_alt:"WD_C"},{id:"4",title:"Java (Basic) Certificate",link1:"https://www.hackerrank.com/certificates/e2b0e25f486f",img:"/assets/c4.JPG",img_alt:"J_H"},{id:"5",title:"JavaScript (Basic) Certificate",link1:"https://www.hackerrank.com/certificates/3930d7c77718",img:"/assets/c5.JPG",img_alt:"JS_C"}];return Object(m.jsxs)("div",{className:"certificates "+(t&&" dark"),id:"certificates",children:[Object(m.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:o.map((function(e){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsxs)("div",{className:"leftContainer",children:[Object(m.jsx)("h2",{children:e.title}),Object(m.jsx)("a",{href:e.link1,target:"_blank",rel:"noreferrer",children:"Certificate Link"})]})}),Object(m.jsx)("div",{className:"right",children:Object(m.jsx)("img",{src:"/Payas-Singh-Nikhurpa"+e.img,alt:e.img_alt})})]})},e.id)}))}),Object(m.jsx)(C.a,{className:"arrow left",onClick:function(){return l("left")}}),Object(m.jsx)(P.a,{className:"arrow right",onClick:function(){return l("right")}})]})}i(44);var J=function(){var e=Object(a.useState)(!1),t=Object(n.a)(e,2),i=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(n.a)(s,2),d=r[0],j=r[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("div",{className:"toggle",onClick:function(){j(!d)},children:d?Object(m.jsx)(l.a,{className:"on"}):Object(m.jsx)(o.a,{className:"off"})}),Object(m.jsx)(b,{menuState:i,setMenuState:c,darkActive:d}),Object(m.jsx)(f,{menuState:i,setMenuState:c,darkActive:d}),Object(m.jsxs)("div",{className:"sections",children:[Object(m.jsx)(g,{darkActive:d}),Object(m.jsx)(_,{darkActive:d}),Object(m.jsx)(v,{darkActive:d}),Object(m.jsx)(A,{darkActive:d})]})]})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a7478655.chunk.js.map