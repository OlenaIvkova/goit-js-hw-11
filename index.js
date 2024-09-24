/* empty css                      */import{S as u,i as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m="46125856-848a47cf49f0e2da350750fba",p="https://pixabay.com/api/",d=t=>fetch(`${p}?key=${m}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error("Error fetching images");return r.json()}).then(r=>r.hits),y=new u(".gallery a"),h=t=>{const r=document.querySelector(".gallery");if(r.innerHTML="",t.length===0){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const s=t.map(({webformatURL:i,largeImageURL:e,tags:o,likes:n,views:a,comments:c,downloads:l})=>`
            <li class="gallery-item">
                <a href="${e}" class="gallery-link">
                    <img src="${i}" alt="${o}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes:</span> ${n}</p>
                    <p class="info-item"><span>Views:</span> ${a}</p>
                    <p class="info-item"><span>Comments:</span> ${c}</p>
                    <p class="info-item"><span>Downloads:</span> ${l}</p>
                </div>
            </li>
        `).join("");r.innerHTML=s,y.refresh()},g=()=>{const t=document.querySelector(".loader");t&&(t.style.display="block")},L=()=>{const t=document.querySelector(".loader");t&&(t.style.display="none")},q=document.querySelector(".search-form");q.addEventListener("submit",t=>{t.preventDefault();const r=document.querySelector('input[name="query"]').value.trim();if(!r){iziToast.error({title:"Error",message:"Search query cannot be empty."});return}g(),d(r).then(s=>{h(s)}).catch(s=>{console.error(s),iziToast.error({title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
