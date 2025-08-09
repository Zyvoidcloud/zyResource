const nav = document.createElement("nav");
nav.className = "myNav";
nav.innerHTML = `
  <h2 class="brand">ZYVOID</h2>
  <button id="btnOpenMenu">
    <span class="material-symbols-outlined iconOpenMenu">stacks</span>
  </button>`;document.body.appendChild(nav);let zyVOID = "ZYVOID2025"
const menuItems = [
 {
   title: "Heroes",
   icon: "apparel",
   url: "https://www.zyvoid.cloud/2025/08/heroes.html"
 },{
   title: "Effect Battle",
   icon: "function",
   url: "https://www.zyvoid.cloud/2025/07/effectBattle.html"
 },{
   title: "Tutorial",
   icon: "indeterminate_question_box",
   url: "https://youtu.be/dRdj8-grSNk?si=MSeOoeCHbuaMci3t"
 },{
   title: "Request / Report File",
   icon: "folder_info",
   url: "https://youtu.be/5l7dcO5kReE?si=Uhv5lzQ0h2F-yeTo"
 },{
   title: "Youtube",
   icon: "live_tv",
   url: "https://youtube.com/@zyvoid?si=mSTaRgrGB72tWpyW"}                 
];

const containerMenu = document.createElement("containerMenu");
itBtnMenu = false;

function openMenu() {
 let openMenu = document.getElementById("btnOpenMenu");
 if (!itBtnMenu) {
  openMenu.style.borderColor = "#eee"
  containerMenu.style.right = "0px"
  itBtnMenu = true
 } else {
   openMenu.classList.remove("activeOpenMenu")
   openMenu.style.borderColor = "#444"
  containerMenu.style.right = "-200px"
  itBtnMenu = false
 }openMenu.style.transition = "0.4s";
  containerMenu.style.transition = "0.4s";}
document.getElementById("btnOpenMenu").addEventListener("click", openMenu);

containerMenu.classList.add("containerMenu")
const contentMenu = document.createElement("div");
 contentMenu.className = "contentMenu";
 menuItems.forEach((item) => {
 const link = document.createElement("a");
  link.className = "btnMenu";
  link.href = item.url || "https://www.zyvoid.cloud";
 const icon = document.createElement("span");
  icon.className = "material-symbols-outlined iconMenu";
  icon.textContent = item.icon;
 const titleMenu = document.createElement("span");
  titleMenu.className = "textMenu";
  titleMenu.textContent = item.title;
  link.appendChild(icon);
  link.appendChild(titleMenu);
  contentMenu.appendChild(link);});
  containerMenu.appendChild(contentMenu);
  document.body.appendChild(containerMenu);
let contentAccess = document.getElementById("contentAccess")
let cdnUrl = `https://cdn.jsdelivr.net/gh/Zyvoidcloud`;
contentAccess.innerHTML = `
 <div class="boxAccess">
  <h6 class="subAccess">PEMBERITAHUAN</h6>
  <div class="boxTextAccess">
  <span class="textAccess">
   - Untuk mengakses website zyvoid, silahkan lewati iklan safelinku terlebih dahulu (1×). Dengan cara mengklik tombol dibawah</span>
  <span class="textAccess">
   - Setelah berhasil lewati iklan, anda bebas mengunduh file script tanpa iklan apapun lagi</span>
  <span class="textAccess">
   - Akses ini akan di riset setiap 2-4hari sekali</span>
  <span class="textAccess">
   - Tutorial lewati iklan safelinku <a class="tutorialAccess" href="https://youtu.be/AC_uX0Rnark?si=n3TJZTh6S9-sH2E4">[Tutorial]</a></span></div>
  <button id="btnAccess">Dapatkan Akses</button>
 </div>`
 
let btnAccess = document.getElementById("btnAccess")
btnAccess.addEventListener("click", function(){
 localStorage.setItem("fromHeroes", "Fzy")
 setTimeout(() => {
  window.location.href = "https://www.zyvoid.cloud/2025/08/access.html";},300);});
