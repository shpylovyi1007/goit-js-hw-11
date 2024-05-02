import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u=document.querySelector("form"),d=u.elements.search.value.trim(),m=new URLSearchParams({key:"43654443-0aa2ac279d0400a8e119738dd",q:d,image_type:"photo",orientation:"horizontal",safesearch:"true"}),f=`https://pixabay.com/api/images?${m}`,p=s=>fetch(f).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}),i=document.querySelector(".gallery"),y=s=>{i.innerHTML="";const t=s.map(o=>`< li class="gallery-item" >
            <a class="gallery-link" href=${o.largeImageURL}>
                <img
                    class="gallery-image"
                    url=${o.webformatURL}
                    alt=${o.tags}
                /></a>
                 <div>
                <p>Likes: ${o.likes}</p>
                <p>Views: ${o.views}</p>
                <p>Comments: ${o.comments}</p>
                <p>Downloads: ${o.downloads}</p>
            </div>
                </li >`).join("");i.insertAdjacentHTML("beforeend",t),new c(".gallery a",{captionsData:"alt",captionDelay:250})},h=document.querySelector("form");h.addEventListener("submit",s=>{s.preventDefault(),p().then(t=>y(t)).catch(t=>l.show({message:"Sorry, there are no images matching your search query. Please try again!"}))});
//# sourceMappingURL=commonHelpers.js.map
