var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector(".form"),l=document.querySelector('[type="submit"]');function s(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault(),l.disabled=!0;const t=+e.currentTarget.elements.step.value,n=+e.currentTarget.elements.amount.value;let o=+e.currentTarget.elements.delay.value;setTimeout((()=>{l.disabled=!1}),n*t+o);for(let e=1;e<=n;e+=1)s(e,o).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise  ${e} in ${t}ms`)})),o+=t}));
//# sourceMappingURL=03-promises.3a638220.js.map
