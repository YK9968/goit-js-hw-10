import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as p}from"./assets/vendor-77e16229.js";const y="/goit-js-hw-10/assets/x-octagon-1e41ecdc.svg";let c,u;const a=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),L=document.querySelector("span[data-days]"),S=document.querySelector("span[data-hours]"),g=document.querySelector("span[data-minutes]"),v=document.querySelector("span[data-seconds]");e.setAttribute("disabled","");e.classList.add("disabled-btn");a.classList.add("input-check");const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<Date.now()?(p.show({iconUrl:y,title:"Error",titleColor:"#ffffff",message:"Please choose a date in the future",messageColor:"#ffffff",backgroundColor:"#EF4040",position:"topRight",maxWidth:902,titleSize:16,messageSize:16,close:!1}),e.classList.add("disabled-btn"),e.classList.remove("active-btn"),e.setAttribute("disabled","")):(e.removeAttribute("disabled"),a.classList.add("input-disabled"),e.classList.add("active-btn"),e.classList.remove("disabled-btn"),c=t[0])}};h("#datetime-picker",C);function V(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),b=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:b}}function s(t){return t<10?String(t).padStart(2,"0"):t}function d(){const t=c-Date.now();if(t<=0){clearInterval(u);return}else e.classList.add("disabled-btn"),e.classList.remove("active-btn"),e.setAttribute("disabled",""),a.setAttribute("disabled",""),a.classList.remove("input-check");const{days:o,hours:n,minutes:i,seconds:r}=V(t);L.textContent=s(o),S.textContent=s(n),g.textContent=s(i),v.textContent=s(r)}e.addEventListener("click",k);function k(){d(),u=setInterval(d,1e3)}
//# sourceMappingURL=commonHelpers.js.map