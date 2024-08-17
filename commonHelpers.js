import{i as c,S as u}from"./assets/vendor-96ed78f5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const d=e=>{const s=`https://pixabay.com/api/?per_page=10&image_type=photo&orientation=horizontal&safesearch=true&q=${e}&key=10567451-e89d654aa7ed9140fe488f539`;return fetch(s).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})},m=e=>`
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
  `,g=(e,o,s)=>{o.innerHTML=e,s.refresh()},a=e=>{c.error({title:"Error",message:e})},p=e=>{c.warning({title:"No results",message:e})},y=document.querySelector(".js-search-form"),f=document.querySelector(".js-gallery"),l=document.querySelector(".js-loader");let h=new u(".js-gallery a");const L=e=>{e.preventDefault();const o=e.target.elements.user_query.value.trim();if(!o){a("Please enter a search query.");return}l.classList.remove("is-hidden"),d(o).then(s=>{if(s.hits.length===0)p("Sorry, there are no images matching your search query. Please try again!");else{const n=s.hits.map(m).join("");g(n,f,h)}}).catch(s=>{a(`Something went wrong: ${s.message}`)}).finally(()=>{l.classList.add("is-hidden")})};y.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
