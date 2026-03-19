window.addEventListener('scroll',function(){var n=document.getElementById('nav');if(n)n.classList.toggle('scrolled',window.scrollY>60);});
var ro=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('in');});},{threshold:0.1});
document.querySelectorAll('.anim').forEach(function(el){ro.observe(el);});
var bo=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.querySelectorAll('[data-w]').forEach(function(b){setTimeout(function(){b.style.transition='width 1.4s cubic-bezier(0.25,0.8,0.25,1)';b.style.width=b.dataset.w;},200);});}});},{threshold:0.2});
document.querySelectorAll('.bars-wrap').forEach(function(el){bo.observe(el);});
function toggleNav(){var d=document.getElementById('mobDrawer');if(d)d.classList.toggle('open');}
