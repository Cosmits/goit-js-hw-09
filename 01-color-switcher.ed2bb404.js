const t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};let n;function e(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.btnStart.style.marginLeft="calc(50% - 80px)",t.btnStart.style.fontSize="30px",t.btnStop.style.fontSize="30px",t.btnStart.style.padding="15px",t.btnStop.style.padding="15px",t.btnStop.disabled=!0,t.btnStart.addEventListener("click",(function(){n=setInterval(e,1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1})),t.btnStop.addEventListener("click",(function(){clearTimeout(n),t.btnStart.disabled=!1,t.btnStop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.ed2bb404.js.map
