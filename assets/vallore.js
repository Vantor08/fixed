/* Vallore theme — inline SVG icons + section interactions */
var ICONS={
 check:'<polyline points="4 12 10 17.5 20 6.5"/>',
 check_circle:'<polyline points="4 12 10 17.5 20 6.5"/>',
 verified:'<path d="M12 3l6.5 2.8v4.7c0 4.3-2.8 7.1-6.5 8.5-3.7-1.4-6.5-4.2-6.5-8.5V5.8z"/><polyline points="9 12 11.3 14.3 15.5 9.5"/>',
 verified_user:'<path d="M12 3l6.5 2.8v4.7c0 4.3-2.8 7.1-6.5 8.5-3.7-1.4-6.5-4.2-6.5-8.5V5.8z"/><polyline points="9 12 11.3 14.3 15.5 9.5"/>',
 science:'<path d="M9 3h6M10 3v5.5L5.3 16.8A2 2 0 0 0 7 20h10a2 2 0 0 0 1.7-3.2L14 8.5V3"/><path d="M8 14h8"/>',
 battery_2_bar:'<rect x="3" y="7" width="15.5" height="10" rx="2"/><path d="M21 10.5v3"/><rect x="5.3" y="9.3" width="5" height="5.4" rx="1" fill="currentColor" stroke="none"/>',
 sentiment_dissatisfied:'<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.8 16c1.6-1.4 4.8-1.4 6.4 0"/>',
 sentiment_sad:'<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.8 16.3c1.6-1.6 4.8-1.6 6.4 0"/><path d="M6.6 12.5c0 1-.9 1.6-.9 2.6"/>',
 medication:'<path d="M5 13.2 13.2 5a4 4 0 0 1 5.8 5.8L10.8 19A4 4 0 0 1 5 13.2z"/><path d="M9 9l6 6"/>',
 spa:'<circle cx="12" cy="12" r="2.6"/><path d="M12 9.4V4M12 14.6V20M9.4 12H4M14.6 12H20"/>',
 bolt:'<path d="M13 2 4.5 13.5H10l-1 8.5L19.5 10H13z" fill="currentColor" stroke="none"/>',
 favorite:'<path d="M12 20.5S4.5 15.8 4.5 10A3.9 3.9 0 0 1 12 7.6 3.9 3.9 0 0 1 19.5 10c0 5.8-7.5 10.5-7.5 10.5z"/>',
 grain:'<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z"/><path d="M12 10v8"/>',
 psychology:'<path d="M12 3l1.5 5.3L19 10l-5.5 1.7L12 17l-1.5-5.3L5 10l5.5-1.7z" fill="currentColor" stroke="none"/>',
 coffee:'<path d="M5 8h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M16 9h2.2a2 2 0 0 1 0 4H16"/><path d="M7 3v2M11 3v2"/>',
 nutrition:'<path d="M12 8.2c-3-2.2-7.5 0-7.5 4.3C4.5 16.5 7.8 20 10 20c1 0 1.2-.6 2-.6s1 .6 2 .6c2.2 0 5.5-3.5 5.5-7.5 0-4.3-4.5-6.5-7.5-4.3z"/><path d="M12 8.2c0-2 1.2-3.2 3.2-3.7"/>',
 eco:'<path d="M5.5 19c0-8 6-13.5 14-13.5 0 8.5-5.5 14.5-13.5 14.5-.6 0-1.4-.2-.5-1z"/><path d="M9.5 15.5c2-2.3 4.3-3.6 7-4.5"/>',
 play_circle:'<circle cx="12" cy="12" r="8.5"/><path d="M10 8.5l5.5 3.5L10 15.5z" fill="currentColor" stroke="none"/>',
 add:'<path d="M12 5v14M5 12h14"/>',
 photo_camera:'<rect x="3" y="7.5" width="18" height="12.5" rx="2.5"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7.5 9.5 5h5L16 7.5"/>',
 image:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="8" cy="10" r="1.7"/><path d="M4.5 17.5 10 12l4 4 2.5-2.5 3 3"/>'
};
function vInitIcons(root){
  (root||document).querySelectorAll('.msym').forEach(function(s){
    if(s.dataset.done)return;
    var n=(s.textContent||'').trim(), d=ICONS[n]; if(!d)return;
    s.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>';
    s.dataset.done="1";
  });
}
function vInit(root){
  vInitIcons(root);
  (root||document).querySelectorAll('.faq-q').forEach(function(q){
    if(q.dataset.b)return; q.dataset.b="1";
    q.addEventListener('click',function(){q.parentElement.classList.toggle('open')});
  });
  (root||document).querySelectorAll('.kit').forEach(function(k){
    if(k.dataset.b)return; k.dataset.b="1";
    k.addEventListener('click',function(){k.closest('.kits').querySelectorAll('.kit').forEach(function(x){x.classList.remove('sel')});k.classList.add('sel')});
  });
  (root||document).querySelectorAll('.buyopt').forEach(function(o){
    if(o.dataset.b)return; o.dataset.b="1";
    o.addEventListener('click',function(){o.closest('.buyopts').querySelectorAll('.buyopt').forEach(function(x){x.classList.remove('sel')});o.classList.add('sel')});
  });
  (root||document).querySelectorAll('.bags button').forEach(function(b){
    if(b.dataset.b)return; b.dataset.b="1";
    b.addEventListener('click',function(e){e.stopPropagation();this.parentElement.querySelectorAll('button').forEach(function(x){x.classList.remove('on')});this.classList.add('on')});
  });
  (root||document).querySelectorAll('.scitem').forEach(function(i){
    if(i.dataset.b)return; i.dataset.b="1";
    i.addEventListener('click',function(){i.classList.toggle('on')});
  });
  (root||document).querySelectorAll('[data-scbtn]').forEach(function(btn){
    if(btn.dataset.b)return; btn.dataset.b="1";
    btn.addEventListener('click',function(){
      var card=btn.closest('.selfcheck');
      var n=card.querySelectorAll('.scitem.on').length;
      var t=card.querySelector('.sctext'); var res=card.querySelector('.scresult');
      if(n>=3){t.textContent="That's exactly who Vallore is made for. You don't have to brace for the bad weeks anymore.";}
      else if(n>=1){t.textContent="Even one of these is worth feeling steadier about. Vallore was built for exactly this.";}
      else{t.textContent="If any of this ever sounds like you, Vallore was made for those days.";}
      res.classList.add('show');
    });
  });
}
document.addEventListener('DOMContentLoaded',function(){vInit(document)});
/* Shopify theme editor: re-init a section when reloaded */
document.addEventListener('shopify:section:load',function(e){vInit(e.target)});
