document.addEventListener("DOMContentLoaded", function() {
 const nav = document.createElement('nav');
 nav.className = 'myNav';
 
 const brandBtn = document.createElement('button');
brandBtn.id = 'myBrand';
brandBtn.addEventListener('click', () => {
 window.location.href = "#";
});
 
 brandBtn.textContent = 'ZYVOID';
 nav.appendChild(brandBtn);
 
 const openMenuBtn = document.createElement('button');
 openMenuBtn.id = 'btnOpenMenu';
 
 const menuIcon = document.createElement('span');
 menuIcon.className = 'material-symbols-outlined iconOpenMenu';
 menuIcon.textContent = 'stacks';
 openMenuBtn.appendChild(menuIcon);
 nav.appendChild(openMenuBtn);
 
 const containerMenu = document.createElement('div');
 containerMenu.id = 'containerMenu';
 
 const contentMenu = document.createElement('div');
 contentMenu.className = 'contentMenu';
 
 const boxMenu = document.createElement('div');
 boxMenu.className = 'boxMenu';
 
 const menuItems = [
  { text: 'Dashboard', link: '/dashboard' },
  { text: 'Heroes', link: '/heroes' },
  { text: 'Battle Effect', link: '/battle-effect' },
  { text: 'Apa Yang Baru', link: '/whats-new' },
  { text: 'Request Script', link: '/request-script' },
  { text: 'Laporkan Script', link: '/report-script' },
  { text: 'Youtube', link: 'https://youtube.com' }
 ];
 
 menuItems.forEach(item => {
  const menuLink = document.createElement('a');
  menuLink.className = 'btnMenu';
  menuLink.href = item.link;
  menuLink.textContent = item.text;
  
  if (item.link === '#') {
   menuLink.addEventListener('click', function(e) {
    e.preventDefault();
   });
  }
  
  boxMenu.appendChild(menuLink);
 });
 
 // Susun struktur
 contentMenu.appendChild(boxMenu);
 containerMenu.appendChild(contentMenu);
 
 // Tambahkan ke body
 document.body.appendChild(nav);
 document.body.appendChild(containerMenu);
 
 let isMenuOpen = false;
 openMenuBtn.addEventListener('click', function() {
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
   // Buka menu - atur height ke 100%
   btnOpenMenu.style.borderColor = "#aaa"
   containerMenu.style.width = '200px';
  } else {
   btnOpenMenu.style.borderColor = "#444"
   containerMenu.style.width = '0px';
  }
 });
});
