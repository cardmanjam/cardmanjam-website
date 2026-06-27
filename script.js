const start = document.getElementById('startScreen');
const press = document.getElementById('pressStart');
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

function playStartSound(){
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99];
    notes.forEach((freq,i)=>{
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, ctx.currentTime + i*.09);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + i*.09 + .015);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i*.09 + .08);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + i*.09);
      osc.stop(ctx.currentTime + i*.09 + .1);
    });
  }catch(e){}
}

press?.addEventListener('click',()=>{
  playStartSound();
  start.classList.add('flicker');
  document.querySelector('.site-shell')?.classList.add('booting');
  document.querySelectorAll('main section').forEach((el,i)=>setTimeout(()=>el.classList.add('fade-in'),i*120));
  setTimeout(()=>start.classList.add('hide'), 520);
  localStorage.setItem('cmjStarted','yes');
});

if(localStorage.getItem('cmjStarted')==='yes'){
  start.style.display = 'none';
}

menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(800px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-3px)`;
  });
  card.addEventListener('mouseleave',()=> card.style.transform = '');
});

setInterval(()=>{
  const s = document.createElement('span');
  s.className = 'sparkle';
  s.style.left = Math.random()*innerWidth + 'px';
  s.style.top = (Math.random()*innerHeight) + 'px';
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),1100);
}, 450);

const buddy = document.querySelector('.snorlax');
buddy?.addEventListener('click',()=>{
  buddy.textContent = buddy.textContent === '💤' ? '😳' : '💤';
  playStartSound();
});


document.getElementById('replayIntro')?.addEventListener('click',()=>{
  localStorage.removeItem('cmjStarted');
  location.reload();
});
