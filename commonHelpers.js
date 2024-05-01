import{S as i,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector("form"),u=l.elements.search,d=new URLSearchParams({key:"43654443-0aa2ac279d0400a8e119738dd",q:u.value,image_type:"photo",orientation:"horizontal",safesearch:"true"}),f=()=>fetch(`https://pixabay.com/api/images?${d}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}),m=document.querySelector(".gallery"),y=o=>{const s=o.map(r=>`< li class="gallery-item" >
            <a class="gallery-link" href=${r.largeImageURL}>
                <img
                    class="gallery-image"
                    url=${r.webformatURL}
                    alt=${r.tags}
                    <b>Likes</b>: ${r.likes}
                    <b>Views</b>: ${r.views}
                    <b>Comments</b>: ${r.comments}
                    <b>Downloads</b>: ${r.downloads}
                /></a></li >`).join("");m.insertAdjacentHTML("beforeend",s),new i(".gallery a",{captionsData:"alt",captionDelay:250})},h=document.querySelector("form");h.addEventListener("submit",o=>{o.preventDefault(),f().then(s=>y(s)).catch(s=>c.show({message:"Sorry, there are no images matching your search query. Please try again!"}))});
//# sourceMappingURL=commonHelpers.js.map
