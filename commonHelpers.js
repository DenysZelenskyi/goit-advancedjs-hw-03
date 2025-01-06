import{i as u,S as d}from"./assets/vendor-96ed78f5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=o(r);fetch(r.href,t)}})();const m=function(e){return fetch(`https://pixabay.com/api/?key=10567451-e89d654aa7ed9140fe488f539&q=${e}&image_type=photo&orientation=horizontal&safesearch=true`).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})},g=e=>`
    <a href="${e.largeImageURL}" class="gallery-item">
      <div class="gallery-card">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        <div class="info">
          <p><strong>Likes:</strong> ${e.likes}</p>
          <p><strong>Views:</strong> ${e.views}</p>
          <p><strong>Comments:</strong> ${e.comments}</p>
          <p><strong>Downloads:</strong> ${e.downloads}</p>
        </div>
      </div>
    </a>
  `,p=(e,s,o)=>{s.innerHTML=e,o.refresh()},c=e=>{u.error({title:"Error",message:e})},h=e=>{u.warning({title:"No results",message:e})};let f=new d(".js-gallery a");const y=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader"),L=e=>{e.preventDefault();const s=e.currentTarget.elements.user_query.value.trim();if(!s){c("Please enter a search query."),a.innerHTML="",l.classList.add("is-hidden");return}l.classList.remove("is-hidden"),m(s).then(o=>{if(o.hits.length===0)a.innerHTML="",l.classList.add("is-hidden"),h("Sorry, there are no images matching your search query. Please try again!");else{const n=o.hits.map(g).join("");p(n,a,f)}}).catch(o=>{c(`Something went wrong: ${o.message}`)})};y.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
