import{S as l,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d=a=>{const t=`https://pixabay.com/api/?${new URLSearchParams({key:"43654443-0aa2ac279d0400a8e119738dd",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>o.hits).catch(o=>{throw o})},i=document.querySelector(".gallery"),f=a=>{i.innerHTML="";const s=a.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href=${t.largeImageURL}>
                <img
                    url=${t.webformatURL}
                    alt=${t.tags}
                />
            </a>
                 <div>
                <p>Likes: ${t.likes}</p>
                <p>Views: ${t.views}</p>
                <p>Comments: ${t.comments}</p>
                <p>Downloads: ${t.downloads}</p>
            </div>
                </li>`).join("");i.insertAdjacentHTML("beforeend",s),new l(".gallery a",{captionsData:"alt",captionDelay:250})},c=document.querySelector("form");c.addEventListener("submit",a=>{a.preventDefault();const s=c.elements.search.value.trim();s&&d(s).then(t=>f(t)).catch(t=>u.show({message:"Sorry, there are no images matching your search query. Please try again!"}))});
//# sourceMappingURL=commonHelpers.js.map
