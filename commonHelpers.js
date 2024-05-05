import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const n=document.querySelector(".loader");n.style.display="none";const f=a=>{const s=`https://pixabay.com/api/?${new URLSearchParams({key:"43654443-0aa2ac279d0400a8e119738dd",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return n.style.display="flex",e.json()}).then(e=>{const t=e.hits;return n.style.display="none",t}).catch(e=>{throw n.style.display="none",e})},i=document.querySelector(".gallery"),y=a=>{i.innerHTML="";const o=a.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href=${e.largeImageURL}>
                <img
                    src=${e.webformatURL}
                    alt=${e.tags}
                />
            </a>
                 <div>
                <p>Likes ${e.likes}</p>
                <p>Views ${e.views}</p>
                <p>Comments ${e.comments}</p>
                <p>Downloads ${e.downloads}</p>
            </div>
                </li>`).join("");i.insertAdjacentHTML("beforeend",o),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},c=document.querySelector("form");c.addEventListener("submit",a=>{a.preventDefault();const o=c.elements.search.value.trim();o&&f(o).then(s=>y(s)).catch(s=>d.show({message:"Sorry, there are no images matching your search query. Please try again!"}))});
//# sourceMappingURL=commonHelpers.js.map
