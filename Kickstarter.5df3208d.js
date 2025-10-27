document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){var t=this.getAttribute("href").slice(1),n=document.getElementById(t);n&&(e.preventDefault(),n.scrollIntoView({behavior:"smooth"}))})});
//# sourceMappingURL=Kickstarter.5df3208d.js.map
