import{d as _,u as h,p as f,r as a,q as g,s as x,c as M,a as e,k,t as i,l as r,x as y,y as E,o as L,z as X}from"./index-BGH-r2UU.js";const B="/irenemerino-photo/assets/coming-soon-oXzXUD7E.jpg",C={class:"coming-soon-view"},b={class:"wrapper"},q={class:"content"},w=1/30,N=_({__name:"ComingSoon",setup(D){const{t:n}=h(),u=f(),l=a(0),c=a(0),d=a(0),v=a(0),t=o=>{const s=Math.max(-100,Math.min(100,window.innerWidth/2-o.clientX)),m=Math.max(-100,Math.min(100,window.innerHeight/2-o.clientY));d.value=20*s/100,v.value=10*m/100},p=()=>{l.value+=(d.value-l.value)*w,c.value+=(v.value-c.value)*w;const o=`translate(${l.value}px, ${c.value}px) scale(1.1)`;document.querySelector("img").style.transform=o,window.requestAnimationFrame(p)};return g(()=>{u||(window.addEventListener("mousemove",t),window.addEventListener("click",t),p())}),x(()=>{u||(window.removeEventListener("mousemove",t),window.removeEventListener("click",t))}),(o,s)=>{const m=E("RouterLink");return L(),M("div",C,[e("div",b,[s[0]||(s[0]=e("div",{class:"img-wrapper"},[e("div",{class:"overlay"}),e("img",{src:B})],-1)),e("div",q,[e("h1",null,i(r(n)("coming-soon.error-type")),1),e("h2",null,i(r(n)("coming-soon.error-name")),1),e("p",null,i(r(n)("coming-soon.error-exp")),1),k(m,{to:{name:"home"}},{default:y(()=>[X(i(r(n)("not-found.button-text")),1)]),_:1})])])])}}});export{N as default};
