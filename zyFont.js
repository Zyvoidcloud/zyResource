function addLink(rel, href, crossOrigin = false) {
 const link = document.createElement('link');
 link.rel = rel;
 link.href = href;
 if (crossOrigin) link.crossOrigin = 'crossorigin';
 document.head.appendChild(link);
}

document.addEventListener('DOMContentLoaded', () => {
 addLink('preconnect', 'https://fonts.googleapis.com');
 addLink('preconnect', 'https://fonts.gstatic.com', true);
 addLink('stylesheet', 'https://fonts.googleapis.com/css2?family=Audiowide&family=Oxanium:wght@200..800&display=swap');
 addLink('stylesheet', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');
});

const zyAccess = "zyAccess2025";
