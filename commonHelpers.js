import{S as c,i as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const l=document.querySelector(".loader"),d=s=>{const a=`https://pixabay.com/api/?${new URLSearchParams({key:"43654443-0aa2ac279d0400a8e119738dd",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(a).then(e=>{if(!e.ok)throw new Error(e.status);return l.style.display="flex",e.json()}).then(e=>{const t=e.hits;return l.style.display="none",t}).catch(e=>{throw l.style.display="none",e})},i=document.querySelector(".gallery"),f=s=>{i.innerHTML="";const o=s.map(e=>`<li class="gallery-item">
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
                </li>`).join("");i.insertAdjacentHTML("beforeend",o),new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},m=document.querySelector("form");m.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.search.value.trim();d(o).then(a=>f(a)).catch(a=>u.show({message:"Sorry, there are no images matching your search query. Please try again!"}))});
//# sourceMappingURL=commonHelpers.js.map
