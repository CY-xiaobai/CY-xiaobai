"use strict";window.addEventListener("DOMContentLoaded",function(){function e(){localStorage.setItem("bookmark"+location.pathname,window.scrollY)}function n(){var e=localStorage.getItem("bookmark"+location.pathname);e=parseInt(e,10),isNaN(e)||""!==location.hash||window.anime({targets:[document.documentElement,document.body],duration:200,easing:"linear",scrollTop:e})}var o,t;o=CONFIG.bookmark.save,t=document.querySelector(".book-mark-link"),window.addEventListener("scroll",function(){0===window.scrollY?t.classList.add("book-mark-link-fixed"):t.classList.remove("book-mark-link-fixed")}),"auto"===o&&(window.addEventListener("beforeunload",e),window.addEventListener("pjax:send",e)),t.addEventListener("click",function(){e(),window.anime({targets:t,duration:200,easing:"linear",top:-30,complete:function(){setTimeout(function(){t.style.top=""},400)}})}),n(),window.addEventListener("pjax:success",n)});