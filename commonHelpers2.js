import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const o=document.querySelector(".form");let t,s;o.addEventListener("submit",n);function n(f){f.preventDefault(),t=o.elements.delay.value,s=o.elements.state.value;function l(e,r){return new Promise((a,m)=>{setTimeout(()=>{r==="fulfilled"&&a(e),m(e)},t),o.reset()})}l(t,s).then(e=>{i.success({message:`✅ Fulfilled promise in ${e}ms`,title:"OK",icon:"",backgroundColor:"#59A10D",titleColor:"#ffffff",messageColor:"#ffffff",close:!1,position:"topRight",titleSize:16,messageSize:16})}).catch(e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,icon:"",backgroundColor:"#EF4040",titleColor:"#ffffff",messageColor:"#ffffff",close:!1,position:"topRight",titleSize:16,messageSize:16})})}
//# sourceMappingURL=commonHelpers2.js.map
