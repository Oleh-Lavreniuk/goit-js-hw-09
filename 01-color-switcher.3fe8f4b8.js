const e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),t=document.querySelector("body");e.addEventListener("click",(function(){if(r)return;r=!0,n=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log("Color is change",n)}),1e3)})),o.addEventListener("click",(function(){clearInterval(n),console.log("Stop change color",n),r=!1}));let n=null,r=!1;
//# sourceMappingURL=01-color-switcher.3fe8f4b8.js.map
