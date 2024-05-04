import{S as l,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d=a=>{const r=`https://pixabay.com/api/?${new URLSearchParams({key:"43654443-0aa2ac279d0400a8e119738dd",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(r).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>(console.log(t),t.hits)).catch(t=>{throw t})},i=document.querySelector(".gallery"),f=a=>{i.innerHTML="";const s=a.map(r=>`<li class="gallery-item">
            <a class="gallery-link" href=${r.largeImageURL}>
                <img
                    url=${r.webformatURL}
                    alt=${r.tags}
                />
            </a>
                 <div>
                <p>Likes: ${r.likes}</p>
                <p>Views: ${r.views}</p>
                <p>Comments: ${r.comments}</p>
                <p>Downloads: ${r.downloads}</p>
            </div>
                </li>`).join("");i.insertAdjacentHTML("beforeend",s),new l(".gallery a",{captionsData:"alt",captionDelay:250})},c=document.querySelector("form");c.addEventListener("submit",a=>{a.preventDefault();const s=c.elements.search.value.trim();s&&d(s).then(r=>f(r)).catch(r=>u.show({message:"Sorry, there are no images matching your search query. Please try again!"}))});
//# sourceMappingURL=commonHelpers.js.map
