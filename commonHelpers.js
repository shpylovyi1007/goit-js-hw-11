import{S as c,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u=document.querySelector("form"),d=u.elements.search.value.trim(),f=new URLSearchParams({key:"43654443-0aa2ac279d0400a8e119738dd",q:d,image_type:"photo",orientation:"horizontal",safesearch:"true"}),m=`https://pixabay.com/api/images?${f}`,p=s=>fetch(m).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}),i=document.querySelector(".gallery"),y=s=>{i.innerHTML="";const r=s.map(o=>`<li class="gallery-item">
            <a class="gallery-link" href=${o.largeImageURL}>
                <img
                    url=${o.webformatURL}
                    alt=${o.tags}
                />
            </a>
                 <div>
                <p>Likes: ${o.likes}</p>
                <p>Views: ${o.views}</p>
                <p>Comments: ${o.comments}</p>
                <p>Downloads: ${o.downloads}</p>
            </div>
                </li>`).join("");i.insertAdjacentHTML("beforeend",r),new c(".gallery a",{captionsData:"alt",captionDelay:250})},h=document.querySelector("form");h.addEventListener("submit",s=>{s.preventDefault(),p().then(r=>y(r)).catch(r=>l.show({message:"Sorry, there are no images matching your search query. Please try again!"}))});
//# sourceMappingURL=commonHelpers.js.map
