!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():t.zenscroll=e()}(this,function(){"use strict";var t=function(t,e,n){e=e||999,n&&0===n||(n=9);var o,i=document.documentElement,r=function(){return"smooth"===(t?t:document.body).style.scrollBehavior},c=function(){return t?t.scrollTop:window.scrollY||i.scrollTop},u=function(){return t?Math.min(t.offsetHeight,window.innerHeight):window.innerHeight||i.clientHeight},f=function(e){return t?e.offsetTop-t.offsetTop:e.getBoundingClientRect().top+c()-i.offsetTop},l=function(){clearTimeout(o),o=0},a=function(n,f){if(l(),r())(t||window).scrollTo(0,n);else{var a=c(),s=Math.max(n,0)-a;f=f||Math.min(Math.abs(s),e);var d=(new Date).getTime();!function h(){o=setTimeout(function(){var e=Math.min(((new Date).getTime()-d)/f,1),n=Math.max(Math.floor(a+s*(.5>e?2*e*e:e*(4-2*e)-1)),0);t?t.scrollTop=n:window.scrollTo(0,n),1>e&&u()+n<(t||i).scrollHeight?h():setTimeout(l,99)},9)}()}},s=function(t,e){a(f(t)-n,e)},d=function(t,e){var o=t.getBoundingClientRect().height+2*n,i=u(),r=f(t),l=r+o,d=c();n>r-d||o>i?s(t,e):n>d+i-l&&a(l-i,e)},h=function(t,e,n){a(Math.max(f(t)-u()/2+(n||t.getBoundingClientRect().height/2),0),e)},m=function(t,o){t&&(e=t),(0===o||o)&&(n=o)};return{setup:m,to:s,toY:a,intoView:d,center:h,stop:l,moving:function(){return!!o}}},e=t();if("addEventListener"in window&&"smooth"!==document.body.style.scrollBehavior&&!window.noZensmooth){var n=function(t){try{history.replaceState({},"",window.location.href.split("#")[0]+t)}catch(e){}};window.addEventListener("click",function(t){for(var o=t.target;o&&"A"!==o.tagName;)o=o.parentNode;if(!(!o||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){var i=o.getAttribute("href")||"";if(0===i.indexOf("#"))if("#"===i)t.preventDefault(),e.toY(0),n("");else{var r=o.hash.substring(1),c=document.getElementById(r);c&&(t.preventDefault(),e.to(c),n("#"+r))}}},!1)}return{createScroller:t,setup:e.setup,to:e.to,toY:e.toY,intoView:e.intoView,center:e.center,stop:e.stop,moving:e.moving}});