<!DOCTYPE html>
<html lang="de-DE" class="no-js">
  <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  
    
    <!-- Begin Jekyll SEO tag v2.9.0 -->
<title>AXLAN | AXLAN – die LAN-Party. Neuigkeiten im Blog, Packliste und das Orga-Team auf einen Blick.</title>
<meta name="generator" content="Jekyll v4.4.1" />
<meta property="og:title" content="AXLAN" />
<meta name="author" content="Klaus Kruse" />
<meta property="og:locale" content="de_DE" />
<meta name="description" content="AXLAN – die LAN-Party. Neuigkeiten im Blog, Packliste und das Orga-Team auf einen Blick." />
<meta name="twitter:description" property="og:description" content="AXLAN – die LAN-Party. Neuigkeiten im Blog, Packliste und das Orga-Team auf einen Blick." />
<link rel="canonical" href="https://axlan.de/assets/javascripts/main.js" />
<meta property="og:url" content="https://axlan.de/assets/javascripts/main.js" />
<meta property="og:site_name" content="AXLAN" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="AXLAN" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebPage","author":{"@type":"Person","name":"Klaus Kruse"},"description":"AXLAN – die LAN-Party. Neuigkeiten im Blog, Packliste und das Orga-Team auf einen Blick.","headline":"AXLAN","publisher":{"@type":"Organization","logo":{"@type":"ImageObject","url":"https://axlan.de/assets/img/web-app-manifest-192x192.png"},"name":"Klaus Kruse"},"url":"https://axlan.de/assets/javascripts/main.js"}</script>
<!-- End Jekyll SEO tag -->

  

  <script>
    /* Cut the mustard */
    if ( 'querySelector' in document && 'addEventListener' in window ) {
      document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + 'js';
    }
  </script>

  <link rel="stylesheet" href="/assets/stylesheets/main.css">
  

  
    
    <link rel="alternate" type="application/atom+xml" title="AXLAN" href="/feed.xml">
  

  
  
<link rel="icon" type="image/png" href="/assets/img/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg" />
<link rel="shortcut icon" href="/assets/img/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png" />
<link rel="manifest" href="/assets/img/site.webmanifest" />


</head>


  <body class="layout--page ">

    <nav class="skip-links">
  <h2 class="screen-reader-text">Skip links</h2>
  <ul>
    <li><a href="#primary-nav" class="screen-reader-shortcut">Skip to primary navigation</a></li>
    <li><a href="#main" class="screen-reader-shortcut">Skip to content</a></li>
    <li><a href="#footer" class="screen-reader-shortcut">Skip to footer</a></li>
  </ul>
</nav>


    <div class="canvas">
      <div class="wrapper">
        



<header id="masthead">
  <div class="inner">
    <div class="title-area">
      
        <p class="site-title">
          <a href="/">
            <img src="/assets/img/web-app-manifest-192x192.png" alt="" class="site-logo">
            <span>AXLAN</span>
          </a>
        </p>
      
    </div>

    <nav class="masthead-nav" aria-label="Hauptnavigation">
      <a href="/">Start</a>
      
        
        
          <a href="/termin/">Termin</a>
        
      
        
        
          <a href="/infos/">Infos</a>
        
      
        
        
          <a href="/packliste/">Packliste</a>
        
      
        
        
          <a href="/impressum/">Impressum</a>
        
      
        
        
          <a href="/datenschutz/">Datenschutz</a>
        
      
      
        <a href="https://discord.gg/hhEyCExNm4" target="_blank" rel="noopener">Discord</a>
      
    </nav>
  </div>
</header>

        <div class="initial-content">
          <header class="intro">
  

  <div class="inner">
    <div class="intro-text">
      <h1 id="page-title" class="intro-title">AXLAN
</h1>
      

      

      

      
    </div>
  </div>
</header>


<main id="main" class="page-content" aria-label="Content">
  <div class="inner">
    <article class="entry-wrap">
      <div class="entry-content">
        /*!
 * Basically Basic Jekyll Theme 1.4.5
 * Copyright 2017-2018 Michael Rose - mademistakes | @mmistakes
 * Free for personal and commercial use under the MIT license
 * https://github.com/mmistakes/jekyll-theme-basically-basic/blob/master/LICENSE
*/

var menuItems = document.querySelectorAll('#sidebar li');

// Get vendor transition property
var docElemStyle = document.documentElement.style;
var transitionProp = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';

// Animate sidebar menu items
function animateMenuItems() {
  for (var i = 0; i < menuItems.length; i++) {
    var item = menuItems[i];
    // Stagger transition with transitionDelay
    item.style[transitionProp + 'Delay'] = (i * 75) + 'ms';
    item.classList.toggle('is--moved');
  }
};

var myWrapper = document.querySelector('.wrapper');
var myMenu = document.querySelector('.sidebar');
var myToggle = document.querySelector('.toggle');
var myInitialContent = document.querySelector('.initial-content');
var mySearchContent = document.querySelector('.search-content');
var mySearchToggle = document.querySelector('.search-toggle');

// Toggle sidebar visibility
function toggleClassMenu() {
  myMenu.classList.add('is--animatable');
  if (!myMenu.classList.contains('is--visible')) {
    myMenu.classList.add('is--visible');
    myToggle.classList.add('open');
    myWrapper.classList.add('is--pushed');
  } else {
    myMenu.classList.remove('is--visible');
    myToggle.classList.remove('open');
    myWrapper.classList.remove('is--pushed');
  }
}

// Animation smoother
function OnTransitionEnd() {
  myMenu.classList.remove('is--animatable');
}

myMenu.addEventListener('transitionend', OnTransitionEnd, false);
myToggle.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
myMenu.addEventListener('click', function () {
  toggleClassMenu();
  animateMenuItems();
}, false);
if (mySearchToggle) {
  mySearchToggle.addEventListener('click', function () {
    toggleClassSearch();
  }, false);
}

// Toggle search input and content visibility
function toggleClassSearch() {
  mySearchContent.classList.toggle('is--visible');
  myInitialContent.classList.toggle('is--hidden');
  setTimeout(function () {
    document.querySelector('.search-content input').focus();
  }, 400);
}

      </div>
    </article>
  </div>
</main>

        </div>
      </div>
    </div>

    <footer id="footer" class="site-footer">
  <div class="inner">
    <div class="copyright">
      
        <p>AXLAN</p>

      
    </div>
  </div>
</footer>

    

<script async src="/assets/javascripts/main.js"></script>




  </body>

</html>
