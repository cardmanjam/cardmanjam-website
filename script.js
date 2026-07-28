let cart = JSON.parse(localStorage.getItem("cmj-cart") || "[]");
let currentFilter = "all";

const cards = document.getElementById("cards");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const toast = document.getElementById("toast");

function money(value){ return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(value); }
function saveCart(){ localStorage.setItem("cmj-cart", JSON.stringify(cart)); updateCart(); }
function showToast(text){ toast.textContent=text; toast.classList.add("show"); setTimeout(()=>toast.classList.remove("show"),1800); }

function renderProducts(){
  const filtered = PRODUCTS.filter(p => currentFilter === "all" ? p.status !== "sold" : currentFilter === "sold" ? p.status === "sold" : p.category === currentFilter && p.status !== "sold");
  cards.innerHTML = filtered.map(p => `
    <article class="card">
      <div class="badge ${p.status === "sold" ? "sold" : ""}">${p.badge}</div>
      <div class="imgWrap">${p.image ? `<img src="${p.image}" alt="${p.title}">` : `<div class="placeholder">JC</div>`}</div>
      <h3>${p.title}</h3>
      <p class="price">${money(p.price)}</p>
      <p class="meta">${p.meta}</p>
      <p class="vaultNote"><b>Why it’s in the Vault:</b><br>${p.note}</p>
      <div class="cardActions">
        ${p.status === "sold" ? `<span class="soldText">SOLD FROM THE VAULT</span>` : `<button class="btn addButton" data-id="${p.id}">ADD TO CART</button>`}
      </div>
    </article>
  `).join("") || "<p>No products in this section yet.</p>";

  document.querySelectorAll(".addButton").forEach(btn => btn.addEventListener("click", () => addToCart(btn.dataset.id)));
}

function addToCart(id){
  if(!cart.includes(id)) cart.push(id);
  saveCart();
  showToast("Added to the vault cart.");
}

function removeFromCart(id){
  cart = cart.filter(item => item !== id);
  saveCart();
}

function updateCart(){
  const products = cart.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  document.getElementById("cartCount").textContent = products.length;
  document.getElementById("cartItems").innerHTML = products.length ? products.map(p => `
    <div class="cartItem">
      <div><b>${p.title}</b><p>${money(p.price)}</p></div>
      <button class="remove" data-id="${p.id}">REMOVE</button>
    </div>
  `).join("") : "<p>Your vault cart is empty.</p>";
  document.getElementById("cartTotal").textContent = money(products.reduce((sum,p)=>sum+p.price,0));
  document.querySelectorAll(".remove").forEach(btn => btn.addEventListener("click",()=>removeFromCart(btn.dataset.id)));
}

function openCart(){ cartDrawer.classList.add("open"); overlay.classList.add("open"); }
function closeCart(){ cartDrawer.classList.remove("open"); overlay.classList.remove("open"); }

document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter = btn.dataset.filter;
  renderProducts();
}));

document.getElementById("cartButton").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
document.getElementById("checkoutButton").addEventListener("click",()=>showToast("Next step: connect Stripe Checkout."));
document.getElementById("pack").addEventListener("click",()=>{
  document.getElementById("dropBanner").classList.remove("hidden");
  document.getElementById("dropBanner").scrollIntoView({behavior:"smooth"});
});

for(let i=0;i<60;i++){
  const s=document.createElement("i");
  s.className="star";
  s.style.left=Math.random()*100+"%";
  s.style.animationDelay=Math.random()*7+"s";
  s.style.opacity=Math.random();
  document.getElementById("stars").appendChild(s);
}

renderProducts();
updateCart();
