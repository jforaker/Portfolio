!function(a){"use strict";function b(a,b,c,d){a.beginPath(),a.arc(b,c,d,0,s,!1),a.fill()}function c(a,b,c,d,e){a.beginPath(),a.moveTo(b,c),a.lineTo(d,e),a.stroke()}function d(a,c,d,e,f,g,h,i){var j=Math.cos(c*s),k=Math.sin(c*s);i-=h,b(a,d-k*f,e+j*g+.5*i,h+(1-.5*j)*i)}function e(a,b,c,e,f,g,h,i){var j;for(j=5;j--;)d(a,b+j/5,c,e,f,g,h,i)}function f(a,b,c,d,f,g,h){b/=3e4;var i=.21*f,j=.12*f,k=.24*f,l=.28*f;a.fillStyle=h,e(a,b,c,d,i,j,k,l),a.globalCompositeOperation="destination-out",e(a,b,c,d,i,j,k-g,l-g),a.globalCompositeOperation="source-over"}function g(a,b,d,e,f,g,h){b/=12e4;var i,j,k,l,m=.25*f-.5*g,n=.32*f+.5*g,o=.5*f-.5*g;for(a.strokeStyle=h,a.lineWidth=g,a.lineCap="round",a.lineJoin="round",a.beginPath(),a.arc(d,e,m,0,s,!1),a.stroke(),i=8;i--;)j=(b+i/8)*s,k=Math.cos(j),l=Math.sin(j),c(a,d+k*n,e+l*n,d+k*o,e+l*o)}function h(a,b,c,d,e,f,g){b/=15e3;var h=.29*e-.5*f,i=.05*e,j=Math.cos(b*s),k=j*s/-16;a.strokeStyle=g,a.lineWidth=f,a.lineCap="round",a.lineJoin="round",c+=j*i,a.beginPath(),a.arc(c,d,h,k+s/8,k+7*s/8,!1),a.arc(c+Math.cos(k)*h*t,d+Math.sin(k)*h*t,h,k+5*s/8,k+3*s/8,!0),a.closePath(),a.stroke()}function i(a,b,c,d,e,f,g){b/=1350;var h,i,j,k,l=.16*e,m=11*s/12,n=7*s/12;for(a.fillStyle=g,h=4;h--;)i=(b+h/4)%1,j=c+(h-1.5)/1.5*(1===h||2===h?-1:1)*l,k=d+i*i*e,a.beginPath(),a.moveTo(j,k-1.5*f),a.arc(j,k,.75*f,m,n,!1),a.fill()}function j(a,b,d,e,f,g,h){b/=750;var i,j,k,l,m=.1875*f;for(a.strokeStyle=h,a.lineWidth=.5*g,a.lineCap="round",a.lineJoin="round",i=4;i--;)j=(b+i/4)%1,k=Math.floor(d+(i-1.5)/1.5*(1===i||2===i?-1:1)*m)+.5,l=e+j*f,c(a,k,l-1.5*g,k,l+1.5*g)}function k(a,b,d,e,f,g,h){b/=3e3;var i,j,k,l,m=.16*f,n=.75*g,o=b*s*.7,p=Math.cos(o)*n,q=Math.sin(o)*n,r=o+s/3,t=Math.cos(r)*n,u=Math.sin(r)*n,v=o+2*s/3,w=Math.cos(v)*n,x=Math.sin(v)*n;for(a.strokeStyle=h,a.lineWidth=.5*g,a.lineCap="round",a.lineJoin="round",i=4;i--;)j=(b+i/4)%1,k=d+Math.sin((j+i/4)*s)*m,l=e+j*f,c(a,k-p,l-q,k+p,l+q),c(a,k-t,l-u,k+t,l+u),c(a,k-w,l-x,k+w,l+x)}function l(a,b,c,d,f,g,h){b/=3e4;var i=.21*f,j=.06*f,k=.21*f,l=.28*f;a.fillStyle=h,e(a,b,c,d,i,j,k,l),a.globalCompositeOperation="destination-out",e(a,b,c,d,i,j,k-g,l-g),a.globalCompositeOperation="source-over"}function m(a,b,c,d,e,f,g){var h=e/8,i=h/3,j=2*i,k=b%1*s,l=Math.cos(k),m=Math.sin(k);a.fillStyle=g,a.strokeStyle=g,a.lineWidth=f,a.lineCap="round",a.lineJoin="round",a.beginPath(),a.arc(c,d,h,k,k+Math.PI,!1),a.arc(c-i*l,d-i*m,j,k+Math.PI,k,!1),a.arc(c+j*l,d+j*m,i,k+Math.PI,k,!0),a.globalCompositeOperation="destination-out",a.fill(),a.globalCompositeOperation="source-over",a.stroke()}function n(a,b,c,d,e,f,g,h,i){b/=2500;var j,k,l,n,o=u[g],p=(b+g-v[g].start)%h,q=(b+g-v[g].end)%h,r=(b+g)%h;if(a.strokeStyle=i,a.lineWidth=f,a.lineCap="round",a.lineJoin="round",1>p){if(a.beginPath(),p*=o.length/2-1,j=Math.floor(p),p-=j,j*=2,j+=2,a.moveTo(c+(o[j-2]*(1-p)+o[j]*p)*e,d+(o[j-1]*(1-p)+o[j+1]*p)*e),1>q){for(q*=o.length/2-1,k=Math.floor(q),q-=k,k*=2,k+=2,n=j;n!==k;n+=2)a.lineTo(c+o[n]*e,d+o[n+1]*e);a.lineTo(c+(o[k-2]*(1-q)+o[k]*q)*e,d+(o[k-1]*(1-q)+o[k+1]*q)*e)}else for(n=j;n!==o.length;n+=2)a.lineTo(c+o[n]*e,d+o[n+1]*e);a.stroke()}else if(1>q){for(a.beginPath(),q*=o.length/2-1,k=Math.floor(q),q-=k,k*=2,k+=2,a.moveTo(c+o[0]*e,d+o[1]*e),n=2;n!==k;n+=2)a.lineTo(c+o[n]*e,d+o[n+1]*e);a.lineTo(c+(o[k-2]*(1-q)+o[k]*q)*e,d+(o[k-1]*(1-q)+o[k+1]*q)*e),a.stroke()}1>r&&(r*=o.length/2-1,l=Math.floor(r),r-=l,l*=2,l+=2,m(a,b,c+(o[l-2]*(1-r)+o[l]*r)*e,d+(o[l-1]*(1-r)+o[l+1]*r)*e,e,f,i))}var o,p;!function(){var b=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.mozCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame;b&&c?(o=function(a){function c(){d.value=b(c),a()}var d={value:null};return c(),d},p=function(a){c(a.value)}):(o=setInterval,p=clearInterval)}();var q=500,r=.08,s=2*Math.PI,t=2/Math.sqrt(2),u=[[-.75,-.18,-.7219,-.1527,-.6971,-.1225,-.6739,-.091,-.6516,-.0588,-.6298,-.0262,-.6083,.0065,-.5868,.0396,-.5643,.0731,-.5372,.1041,-.5033,.1259,-.4662,.1406,-.4275,.1493,-.3881,.153,-.3487,.1526,-.3095,.1488,-.2708,.1421,-.2319,.1342,-.1943,.1217,-.16,.1025,-.129,.0785,-.1012,.0509,-.0764,.0206,-.0547,-.012,-.0378,-.0472,-.0324,-.0857,-.0389,-.1241,-.0546,-.1599,-.0814,-.1876,-.1193,-.1964,-.1582,-.1935,-.1931,-.1769,-.2157,-.1453,-.229,-.1085,-.2327,-.0697,-.224,-.0317,-.2064,.0033,-.1853,.0362,-.1613,.0672,-.135,.0961,-.1051,.1213,-.0706,.1397,-.0332,.1512,.0053,.158,.0442,.1624,.0833,.1636,.1224,.1615,.1613,.1565,.1999,.15,.2378,.1402,.2749,.1279,.3118,.1147,.3487,.1015,.3858,.0892,.4236,.0787,.4621,.0715,.5012,.0702,.5398,.0766,.5768,.089,.6123,.1055,.6466,.1244,.6805,.144,.7147,.163,.75,.18],[-.75,0,-.7033,.0195,-.6569,.0399,-.6104,.06,-.5634,.0789,-.5155,.0954,-.4667,.1089,-.4174,.1206,-.3676,.1299,-.3174,.1365,-.2669,.1398,-.2162,.1391,-.1658,.1347,-.1157,.1271,-.0661,.1169,-.017,.1046,.0316,.0903,.0791,.0728,.1259,.0534,.1723,.0331,.2188,.0129,.2656,-.0064,.3122,-.0263,.3586,-.0466,.4052,-.0665,.4525,-.0847,.5007,-.1002,.5497,-.113,.5991,-.124,.6491,-.1325,.6994,-.138,.75,-.14]],v=[{start:.36,end:.11},{start:.56,end:.16}],w=function(a){this.list=[],this.interval=null,this.color=a&&a.color?a.color:"black",this.resizeClear=!(!a||!a.resizeClear)};w.CLEAR_DAY=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,f=Math.min(d,e);g(a,b,.5*d,.5*e,f,f*r,c)},w.CLEAR_NIGHT=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,f=Math.min(d,e);h(a,b,.5*d,.5*e,f,f*r,c)},w.PARTLY_CLOUDY_DAY=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,h=Math.min(d,e);g(a,b,.625*d,.375*e,.75*h,h*r,c),f(a,b,.375*d,.625*e,.75*h,h*r,c)},w.PARTLY_CLOUDY_NIGHT=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,g=Math.min(d,e);h(a,b,.667*d,.375*e,.75*g,g*r,c),f(a,b,.375*d,.625*e,.75*g,g*r,c)},w.CLOUDY=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,g=Math.min(d,e);f(a,b,.5*d,.5*e,g,g*r,c)},w.RAIN=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,g=Math.min(d,e);i(a,b,.5*d,.37*e,.9*g,g*r,c),f(a,b,.5*d,.37*e,.9*g,g*r,c)},w.SLEET=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,g=Math.min(d,e);j(a,b,.5*d,.37*e,.9*g,g*r,c),f(a,b,.5*d,.37*e,.9*g,g*r,c)},w.SNOW=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,g=Math.min(d,e);k(a,b,.5*d,.37*e,.9*g,g*r,c),f(a,b,.5*d,.37*e,.9*g,g*r,c)},w.WIND=function(a,b,c){var d=a.canvas.width,e=a.canvas.height,f=Math.min(d,e);n(a,b,.5*d,.5*e,f,f*r,0,2,c),n(a,b,.5*d,.5*e,f,f*r,1,2,c)},w.FOG=function(a,b,d){var e=a.canvas.width,f=a.canvas.height,g=Math.min(e,f),h=g*r;l(a,b,.5*e,.32*f,.75*g,h,d),b/=5e3;var i=Math.cos(b*s)*g*.02,j=Math.cos((b+.25)*s)*g*.02,k=Math.cos((b+.5)*s)*g*.02,m=Math.cos((b+.75)*s)*g*.02,n=.936*f,o=Math.floor(n-.5*h)+.5,p=Math.floor(n-2.5*h)+.5;a.strokeStyle=d,a.lineWidth=h,a.lineCap="round",a.lineJoin="round",c(a,i+.2*e+.5*h,o,j+.8*e-.5*h,o),c(a,k+.2*e+.5*h,p,m+.8*e-.5*h,p)},w.prototype={add:function(a,b){var c;"string"==typeof a&&(a=document.getElementById(a)),null!==a&&("string"==typeof b&&(b=b.toUpperCase().replace(/-/g,"_"),b=w.hasOwnProperty(b)?w[b]:null),"function"==typeof b&&(c={element:a,context:a.getContext("2d"),drawing:b},this.list.push(c),this.draw(c,q)))},set:function(a,b){var c;for("string"==typeof a&&(a=document.getElementById(a)),c=this.list.length;c--;)if(this.list[c].element===a)return this.list[c].drawing=b,void this.draw(this.list[c],q);this.add(a,b)},remove:function(a){var b;for("string"==typeof a&&(a=document.getElementById(a)),b=this.list.length;b--;)if(this.list[b].element===a)return void this.list.splice(b,1)},draw:function(a,b){var c=a.context.canvas;this.resizeClear?c.width=c.width:a.context.clearRect(0,0,c.width,c.height),a.drawing(a.context,b,this.color)},play:function(){var a=this;this.pause(),this.interval=o(function(){var b,c=Date.now();for(b=a.list.length;b--;)a.draw(a.list[b],c)},1e3/60)},pause:function(){this.interval&&(p(this.interval),this.interval=null)}},a.Skycons=w}(this);