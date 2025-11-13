document.addEventListener("DOMContentLoaded", function() {
 const nav = document.createElement('nav');
 nav.className = 'myNav';
 
 const brandBtn = document.createElement('button');
brandBtn.id = 'myBrand';
brandBtn.addEventListener('click', () => {
 window.location.href = "https://www.zyvoid.cloud";
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
  { text: 'Dashboard', link: 'https://www.zyvoid.cloud/2025/11/home.html' },
  { text: 'Heroes', link: 'https://www.zyvoid.cloud/2025/11/heroes.html' },
  { text: 'Battle Effect', link: 'https://www.zyvoid.cloud/2025/11/effect-battle.html' },
  { text: 'Apa Yang Baru', link: 'https://www.zyvoid.cloud/2025/11/what-new.html' },
  {text: 'Tutorial Pasang', link: 'https://youtu.be/dRdj8-grSNk?si=BOq-qqYWUucNTW24' },
  { text: 'Request/Laporkan Script', link: 'https://youtu.be/5l7dcO5kReE?si=SnEECP7nTsUGFAXE' },
  { text: 'Youtube', link: 'https://youtube.com/@zyvoid?si=kSWHK5t1K8KVC1zE' }
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
