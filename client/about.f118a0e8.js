import{S as a,i as e,s as r,e as t,f as s,g as o,d as n,k as c,z as l,l as i,A as m,t as p,a as h,B as f,h as d,b as u,m as g,C as v,o as k,D as b,c as w,q as E,j as y,n as I,p as A,r as x,u as $}from"./client.d8456c24.js";function M(a){let e,r,p;return{c(){e=t("div"),this.h()},l(a){e=s(a,"DIV",{class:!0,style:!0}),o(e).forEach(n),this.h()},h(){c(e,"class","donate-image"),l(e,"background-image","url("+a[1][a[0]]+")")},m(t,s){i(t,e,s),r||(p=m(e,"click",a[4]),r=!0)},p(a,r){1&r&&l(e,"background-image","url("+a[1][a[0]]+")")},d(a){a&&n(e),r=!1,p()}}}function D(a){let e,r,l,w,E,y,I,A,x,$,D,_,j,q,N,S,V,H,O,R,T,z,B=a[0]&&M(a);return{c(){e=t("div"),r=t("a"),l=t("div"),w=p("Patreon"),E=h(),y=t("a"),I=t("img"),x=h(),$=t("a"),D=t("img"),q=h(),N=t("a"),S=t("img"),O=h(),B&&B.c(),R=f(),this.h()},l(a){e=s(a,"DIV",{class:!0});var t=o(e);r=s(t,"A",{class:!0,href:!0,target:!0,rel:!0});var c=o(r);l=s(c,"DIV",{});var i=o(l);w=d(i,"Patreon"),i.forEach(n),c.forEach(n),E=u(t),y=s(t,"A",{class:!0,href:!0,target:!0,rel:!0});var m=o(y);I=s(m,"IMG",{src:!0}),m.forEach(n),x=u(t),$=s(t,"A",{class:!0,href:!0});var p=o($);D=s(p,"IMG",{src:!0}),p.forEach(n),q=u(t),N=s(t,"A",{class:!0,href:!0});var h=o(N);S=s(h,"IMG",{src:!0}),h.forEach(n),t.forEach(n),O=u(a),B&&B.l(a),R=f(),this.h()},h(){c(r,"class","donate-group"),c(r,"href","https://www.patreon.com/gera2ld"),c(r,"target","_blank"),c(r,"rel","noreferrer noopener"),I.src!==(A="donate/paypal.svg")&&c(I,"src","donate/paypal.svg"),c(y,"class","donate-group"),c(y,"href","https://www.paypal.me/gera2ld/5"),c(y,"target","_blank"),c(y,"rel","noopener noreferrer"),D.src!==(_="donate/alipay.svg")&&c(D,"src","donate/alipay.svg"),c($,"class",j="donate-group "+(a[0]===G?"active":"")),c($,"href","#"),S.src!==(V="donate/wechat.svg")&&c(S,"src","donate/wechat.svg"),c(N,"class",H="donate-group "+(a[0]===P?"active":"")),c(N,"href","#"),c(e,"class","flex text-center mt-6 mb-2 overflow-x-auto")},m(t,s){i(t,e,s),g(e,r),g(r,l),g(l,w),g(e,E),g(e,y),g(y,I),g(e,x),g(e,$),g($,D),g(e,q),g(e,N),g(N,S),i(t,O,s),B&&B.m(t,s),i(t,R,s),T||(z=[m($,"click",v(a[2])),m(N,"click",v(a[3]))],T=!0)},p(a,[e]){1&e&&j!==(j="donate-group "+(a[0]===G?"active":""))&&c($,"class",j),1&e&&H!==(H="donate-group "+(a[0]===P?"active":""))&&c(N,"class",H),a[0]?B?B.p(a,e):(B=M(a),B.c(),B.m(R.parentNode,R)):B&&(B.d(1),B=null)},i:k,o:k,d(a){a&&n(e),a&&n(O),B&&B.d(a),a&&n(R),T=!1,b(z)}}}const G="ap",P="we";function _(a,e,r){let t;return[t,{[G]:"donate/qr_alipay.png",[P]:"donate/qr_wechat.png"},()=>{r(0,t=G)},()=>{r(0,t=P)},()=>{r(0,t=null)}]}class j extends a{constructor(a){super(),e(this,a,_,D,r,{})}}function q(a){let e,r,l,m,f,v,b,M,D,G,P,_,q,N,S,V,H,O,R,T,z,B,C,F,J,K;return J=new j({}),{c(){e=h(),r=t("h1"),l=p("About markmap-lib"),m=h(),f=t("p"),v=p("Markmap is a combination of Markdown syntax and mindmap. It is first implemented by "),b=t("a"),M=p("markmap"),D=p("."),G=h(),P=t("p"),_=t("strong"),q=p("markmap-lib"),N=p(" is a reimplementation of "),S=t("strong"),V=p("markmap"),H=p(", with some additional features."),O=h(),R=t("h2"),T=p("Donation"),z=h(),B=t("p"),C=p("If this project is helpful to you, please consider to buy me a coffee."),F=h(),w(J.$$.fragment),this.h()},l(a){E('[data-svelte="svelte-1ine71f"]',document.head).forEach(n),e=u(a),r=s(a,"H1",{});var t=o(r);l=d(t,"About markmap-lib"),t.forEach(n),m=u(a),f=s(a,"P",{});var c=o(f);v=d(c,"Markmap is a combination of Markdown syntax and mindmap. It is first implemented by "),b=s(c,"A",{href:!0,target:!0,rel:!0});var i=o(b);M=d(i,"markmap"),i.forEach(n),D=d(c,"."),c.forEach(n),G=u(a),P=s(a,"P",{});var p=o(P);_=s(p,"STRONG",{});var h=o(_);q=d(h,"markmap-lib"),h.forEach(n),N=d(p," is a reimplementation of "),S=s(p,"STRONG",{});var g=o(S);V=d(g,"markmap"),g.forEach(n),H=d(p,", with some additional features."),p.forEach(n),O=u(a),R=s(a,"H2",{class:!0});var k=o(R);T=d(k,"Donation"),k.forEach(n),z=u(a),B=s(a,"P",{});var w=o(B);C=d(w,"If this project is helpful to you, please consider to buy me a coffee."),w.forEach(n),F=u(a),y(J.$$.fragment,a),this.h()},h(){document.title="About",c(b,"href","https://github.com/dundalek/markmap"),c(b,"target","_blank"),c(b,"rel","noreferrer noopener"),c(R,"class","mt-2")},m(a,t){i(a,e,t),i(a,r,t),g(r,l),i(a,m,t),i(a,f,t),g(f,v),g(f,b),g(b,M),g(f,D),i(a,G,t),i(a,P,t),g(P,_),g(_,q),g(P,N),g(P,S),g(S,V),g(P,H),i(a,O,t),i(a,R,t),g(R,T),i(a,z,t),i(a,B,t),g(B,C),i(a,F,t),I(J,a,t),K=!0},p:k,i(a){K||(A(J.$$.fragment,a),K=!0)},o(a){x(J.$$.fragment,a),K=!1},d(a){a&&n(e),a&&n(r),a&&n(m),a&&n(f),a&&n(G),a&&n(P),a&&n(O),a&&n(R),a&&n(z),a&&n(B),a&&n(F),$(J,a)}}}export default class extends a{constructor(a){super(),e(this,a,null,q,r,{})}}
