const btnOpenMenu = document.getElementById('btnOpenMenu');
const contentMenu = document.getElementById('contentMenu');

btnOpenMenu.addEventListener('mouseenter', () => {
 contentMenu.style.display = 'block';
});

contentMenu.addEventListener('mouseleave', () => {
 contentMenu.style.display = 'none';
});

contentMenu.addEventListener('mouseenter', () => {
 contentMenu.style.display = 'block';
});


let menuMap = [
 {
  title: "Heroes",
  url: "#",
 },
 {
  title: "Youtube",
  url: "#",
 },
 {
  title: "Cara download script",
  url: "https://chess.com",
 },
 {
  title: "Request / Report script",
  url: "https://chess.com",
 },
 {
  title: "Donate",
  url: "https://youtube.com",
 }
];

function createMenu() {
 const contentMenu = document.getElementById('contentMenu');
   
 if (!contentMenu) {
  console.error("Element dengan id 'contentMenu' tidak ditemukan!");
  return;}
 contentMenu.innerHTML = '';
 const boxMenu = document.createElement('div');
 boxMenu.className = 'boxMenu';
 menuMap.forEach(item => {
  const link = document.createElement('a');
  link.href = item.url;
  link.innerHTML = `
      <span class="titleMenu">${item.title}</span>
      <span class="material-symbols-outlined iconMenu">chevron_forward</span>`;
  link.className = 'btnMenu';
  boxMenu.appendChild(link);});
 contentMenu.appendChild(boxMenu);}
document.addEventListener('DOMContentLoaded', createMenu);
