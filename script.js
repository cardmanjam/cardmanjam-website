const EBAY_URL = 'https://ebay.us/m/N9yYVK';
const cards = [
  { title: 'Pokémon Preview Slot', price: 'LIVE ON EBAY', grade: 'CARD MAN JAM • POKÉMON', note: 'Real photo coming when inventory is uploaded.', art: 'fire' },
  { title: 'Yu-Gi-Oh! Preview Slot', price: 'LIVE ON EBAY', grade: 'CARD MAN JAM • YU-GI-OH!', note: 'Built-in art, no broken image links.', art: 'psychic' },
  { title: 'Sports / Slab Preview Slot', price: 'LIVE ON EBAY', grade: 'CARD MAN JAM • SLABS', note: 'Tap through to current storefront.', art: 'water' }
];

function makeStars(){
  const wrap=document.getElementById('stars');
  for(let i=0;i<70;i++){
    const s=document.createElement('span');s.className='star';
    s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';
    s.style.animationDelay=Math.random()*2+'s';wrap.appendChild(s);
  }
}
function renderCards(){
  const el=document.getElementById('cards');
  el.innerHTML = cards.map((c,i)=>`<article class="card">
    <div class="slabArt" data-grade="${c.grade}"><div class="fakeCard ${c.art}"></div></div>
    <p class="eyebrow">VAULT SLOT ${i+1}</p>
    <h3>${c.title}</h3>
    <div class="price">${c.price}</div>
    <p>${c.note}</p>
    <a class="btn small" href="${EBAY_URL}" target="_blank" rel="noopener">VIEW EBAY</a>
  </article>`).join('');
}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500)}

document.getElementById('pack').addEventListener('click',()=>toast('Vault preview opened — real inventory coming soon.'));
document.getElementById('pack').addEventListener('keydown',e=>{if(e.key==='Enter')toast('Vault preview opened — real inventory coming soon.')});
document.getElementById('helper').addEventListener('click',()=>toast('Card Man Jam: buying, selling, trading in NJ.'));
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));

makeStars();renderCards();
