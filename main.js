//Font
function loadGoogleFonts() {
 const links = [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'crossorigin' },
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Audiowide&family=Oxanium:wght@200..800&display=swap' }
 ];
 
 links.forEach(link => {
  const el = document.createElement('link');
  Object.assign(el, link);
  document.head.appendChild(el);
 });
}

window.addEventListener('DOMContentLoaded', loadGoogleFonts);


//Nav
document.addEventListener("DOMContentLoaded", () => {
 const myNav = document.getElementById("myNav");
 if (!myNav) return;
 
 const elements = [
  { tag: "h2", text: "Zyvoid", class: "brand" },
  { tag: "h2", text: ".cloud", class: "domain" }
 ];
 
 elements.forEach(item => {
  const el = document.createElement(item.tag);
  el.textContent = item.text;
  el.classList.add(item.class);
  myNav.appendChild(el);
  
 });
});

const zyPw = "Zyvoid2025";
