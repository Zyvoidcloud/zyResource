(function() {
 const preconnect1 = document.createElement('link');
 preconnect1.rel = 'preconnect';
 preconnect1.href = 'https://fonts.googleapis.com';
 document.head.appendChild(preconnect1);
 
 const preconnect2 = document.createElement('link');
 preconnect2.rel = 'preconnect';
 preconnect2.href = 'https://fonts.gstatic.com';
 preconnect2.crossOrigin = '';
 document.head.appendChild(preconnect2);
 
 const fontLink = document.createElement('link');
 fontLink.rel = 'stylesheet';
 fontLink.href = 'https://fonts.googleapis.com/css2?family=Audiowide&family=Electrolize&family=Orbitron:wght@400..900&family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
 document.head.appendChild(fontLink);
 
 const materialLink = document.createElement('link');
 materialLink.rel = 'stylesheet';
 materialLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
 document.head.appendChild(materialLink);
})();
