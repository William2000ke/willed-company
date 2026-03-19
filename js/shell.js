(function(){
  var r=!window.location.pathname.includes('/pages/')?'':'../';
  var p=function(s){return r+'pages/'+s;};
  var cur=window.location.pathname.split('/').pop()||'index.html';
  var lnk=function(href,label){
    var a=(href.includes(cur)&&cur!=='index.html')||( href.endsWith('index.html')&&cur==='index.html')?'active':'';
    return '<a href="'+href+'" class="'+a+'">'+label+'</a>';
  };
  document.body.insertAdjacentHTML('afterbegin',
    '<nav id="nav">'+
    '<a href="'+r+'index.html" class="nav-logo">'+
    '<img src="'+r+'images/logo.png" alt="Willed Company Limited"/>'+
    '</a>'+
    '<div class="nav-links">'+
    lnk(r+'index.html','Home')+
    lnk(p('about.html'),'About')+
    lnk(p('services.html'),'Services')+
    lnk(p('market.html'),'Market')+
    lnk(p('partnership.html'),'Partnership')+
    lnk(p('financials.html'),'Financials')+
    lnk(p('roadmap.html'),'Roadmap')+
    '<a href="'+p('contact.html')+'" class="nav-cta">Get In Touch</a>'+
    '</div>'+
    '<button class="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></button>'+
    '</nav>'+
    '<div class="mob-drawer" id="mobDrawer">'+
    '<a href="'+r+'index.html">Home</a>'+
    '<a href="'+p('about.html')+'">About Us</a>'+
    '<a href="'+p('services.html')+'">Services</a>'+
    '<a href="'+p('market.html')+'">Market</a>'+
    '<a href="'+p('partnership.html')+'">Partnership</a>'+
    '<a href="'+p('financials.html')+'">Financials</a>'+
    '<a href="'+p('roadmap.html')+'">Roadmap</a>'+
    '<a href="'+p('contact.html')+'" class="mob-cta">Get In Touch</a>'+
    '</div>'
  );
  document.body.insertAdjacentHTML('beforeend',
    '<div class="footer-strip"></div>'+
    '<footer>'+
    '<div class="footer-top">'+
    '<div class="footer-logo-wrap">'+
    '<img src="'+r+'images/logo.png" alt="Willed Company Limited"/>'+
    '<div class="footer-tagline">"Seeing further, delivering better."</div>'+
    '<div class="footer-est">Est. 2026 &middot; Nairobi, Kenya &middot; Private Ltd</div>'+
    '</div>'+
    '<div class="footer-col"><h5>Company</h5>'+
    '<a href="'+r+'index.html">Home</a>'+
    '<a href="'+p('about.html')+'">About Us</a>'+
    '<a href="'+p('services.html')+'">Services</a>'+
    '<a href="'+p('market.html')+'">Market</a></div>'+
    '<div class="footer-col"><h5>Business Plan</h5>'+
    '<a href="'+p('partnership.html')+'">Partnership</a>'+
    '<a href="'+p('financials.html')+'">Financials</a>'+
    '<a href="'+p('roadmap.html')+'">Roadmap</a>'+
    '<a href="'+p('contact.html')+'">Contact</a></div>'+
    '<div class="footer-col"><h5>Founded By</h5>'+
    '<span>Edwin William Otieno</span>'+
    '<span>Managing Director</span>'+
    '<span>Nairobi, Kenya</span>'+
    '<a href="mailto:otienowilliam86@gmail.com" class="f-teal" style="margin-top:0.5rem">otienowilliam86@gmail.com</a>'+
    '<a href="'+p('contact.html')+'" class="f-teal">Send a Message &rarr;</a>'+
    '</div></div>'+
    '<div class="footer-bottom">'+
    '<span>&copy; 2026 Willed Company Limited. All rights reserved.</span>'+
    '<span>Confidential &mdash; For Authorised Parties Only</span>'+
    '</div></footer>'
  );
})();
