const listings = [
  {title:'PSA / CGC Slab Grail', price:'Shop Now', meta:'Pokémon • Yu-Gi-Oh! • Vintage', img:'', url:'https://www.ebay.com/str/cardmanjam'},
  {title:'Recently Listed Vault Pick', price:'New Drop', meta:'Fresh inventory weekly', img:'', url:'https://www.ebay.com/str/cardmanjam'},
  {title:'Sealed Wax + Singles', price:'Browse', meta:'Always buying • selling • trading', img:'', url:'https://www.ebay.com/str/cardmanjam'}
];
function makeStars(){const s=document.getElementById('stars');for(let i=0;i<70;i++){const e=document.createElement('i');e.className='star';e.style.left=Math.random()*100+'%';e.style.animationDelay=Math.random()*7+'s';e.style.opacity=Math.random();s.appendChild(e)}}
function cardHTML(item){return `<article class="card"><div class="imgWrap">${item.img?`<img src="${item.img}" alt="${item.title}" onerror="this.remove();this.parentElement.innerHTML='<div class=fallback>?</div>'">`:`<div class="fallback">★</div>`}</div><h3>${item.title}</h3><p class="price">${item.price}</p><p class="meta">${item.meta}</p><a class="btn" target="_blank" rel="noopener" href="${item.url}">VIEW ON EBAY ↗</a></article>`}
document.getElementById('cards').innerHTML=listings.map(cardHTML).join('');
makeStars();
const toast=document.getElementById('toast');
function pop(){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}
document.getElementById('oak').onclick=pop;document.getElementById('pack').onclick=()=>{document.querySelector('.revealPanel').classList.remove('hidden');document.getElementById('grails').scrollIntoView({behavior:'smooth'});pop()};
document.getElementById('watchBtn').onclick=()=>{document.getElementById('ripText').textContent='Card Man Jam vault animation loading... check the newest eBay drops.';pop()};
document.getElementById('skipBtn').onclick=()=>document.getElementById('recent').scrollIntoView({behavior:'smooth'});
