const EBAY_URL = 'https://ebay.us/m/N9yYVK';
const cards = [
  { title: 'Featured Slab Slot', price: 'TBD', grade: 'CARD MAN JAM • PSA / CGC / BGS', note: 'Manual photo coming soon' },
  { title: 'Vault Pick Slot', price: 'TBD', grade: 'POKÉMON • YU-GI-OH! • SPORTS', note: 'No broken image links' },
  { title: 'Recent Listing Slot', price: 'LIVE ON EBAY', grade: 'SHOP CURRENT INVENTORY', note: 'Tap through to storefront' }
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
    <div class="slabArt" data-grade="${c.grade}"><div class="fakeCard"></div></div>
    <p class="eyebrow">◆ VAULT SLOT ${i+1}</p>
    <h3>${c.title}</h3>
    <div class="price">${c.price}</div>
    <p>${c.note}</p>
    <a class="btn small" href="${EBAY_URL}" target="_blank" rel="noopener">VIEW EBAY ↗</a>
  </article>`).join('');
}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500)}

document.getElementById('pack').addEventListener('click',()=>toast('✨ Vault foil opened — inventory import coming soon!'));
document.getElementById('pack').addEventListener('keydown',e=>{if(e.key==='Enter')toast('✨ Vault foil opened — inventory import coming soon!')});
document.getElementById('oak').addEventListener('click',()=>toast('Professor Jam says: peep the eBay vault.'));
document.getElementById('watchBtn').addEventListener('click',()=>toast('🎬 Rip animation unlocked for V7.'));
document.getElementById('skipBtn').addEventListener('click',()=>location.href='#recent');
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));

makeStars();renderCards();
