!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var l=o("h6c0i");const r={delayEl:document.querySelector('[name="delay"]'),stepEl:document.querySelector('[name="step"]'),amountEl:document.querySelector('[name="amount"]'),submitBtnEl:document.querySelector("button")};function u(e,t,n){return new Promise(((o,l)=>{const r=Math.random()>.3,u=t+(e-1)*n;setTimeout((()=>{r?o(`✅ Fulfilled promise ${e} in ${u} ms`):l(`❌ Rejected promise ${e} in ${u} ms`)}),u)}))}r.submitBtnEl.addEventListener("click",(function(e){e.preventDefault();const t=Number(r.delayEl.value),n=Number(r.stepEl.value),o=Number(r.amountEl.value);for(let e=1;e<=o;e++)u(e,t,n).then((e=>{l.Notify.success(e),console.log(e)})).catch((e=>{l.Notify.failure(e),console.log(e)}))}))}();
//# sourceMappingURL=03-promises.0db93fc5.js.map
