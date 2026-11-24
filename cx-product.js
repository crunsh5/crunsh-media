/* كرانش بلس — محسّن صفحة المنتج (يُلصق في JS المخصص للثيم)
   يعمل فقط في صفحة المنتج، وفقط إذا بدأ الوصف بسطر المزايا المفصول بـ «·».
   بدون مكتبات. لا يلمس السلة ولا الدفع. */
(function () {
  function run() {
    var body = document.body;
    if (!body || !body.classList.contains('product-single') || body.classList.contains('cx-on')) return;
    var desc = document.querySelector('.product__description');
    if (!desc) return;
    var first = desc.querySelector('p');
    if (!first || (first.textContent.match(/·/g) || []).length < 3) return;
    body.classList.add('cx-on');
    var cxs = document.createElement('style'); cxs.id = 'cx-desc-css'; cxs.textContent = ".cx-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}.cx-chips span{font-size:12.5px;line-height:1.5;color:#e9eeee;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);padding:4px 11px;border-radius:99px}.cx-val{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px}.cx-val div{font-size:13px;line-height:1.5;font-weight:700;color:#fff;border-radius:12px;padding:11px 10px;text-align:center}.cx-val .cx-safe{background:rgba(27,154,160,.18);border:1px solid rgba(114,218,217,.45)}.cx-val .cx-gift{background:rgba(255,252,0,.1);border:1px solid rgba(255,252,0,.4)}.cx-barp{flex:none;font-size:19px;font-weight:700;color:#fff;white-space:nowrap;padding-inline-end:2px}@media (min-width:768px){.cx-barp{display:none}}.product-single.cx-on .tabs__product{display:grid!important;grid-template-columns:1fr 1fr;gap:6px;padding:5px;border-radius:14px;background:rgba(11,20,22,.94);border:1px solid rgba(255,255,255,.1);margin-bottom:12px}.product-single.cx-on .tabs__product .tab-trigger{display:flex;align-items:center;justify-content:center;gap:6px;min-height:44px;border-radius:10px!important;border:0!important;font-size:14.5px;font-weight:700;color:#B9C2C2;background:transparent}.product-single.cx-on #product-tabs:has(#product-tabs-details.is-active) .description-tab,.product-single.cx-on #product-tabs:has(#product-tabs-faqs.is-active) .reveiws-tab{background:#F88818!important;color:#0B1416!important}.product-single.cx-on .tabs-wrapper__product{background:transparent!important;border:0!important;box-shadow:none!important}.product-single.cx-on #product-tabs-details{padding:0!important}.cxd{--or:#F88818;--orl:#FFB35C;--tq:#1B9AA0;--tql:#72DAD9;--mu:#B9C2C2;--gold:#FFD25C;--ln:rgba(255,255,255,.1);display:grid;gap:14px;color:#fff;direction:rtl;text-align:right;padding:0!important;overflow:visible!important}.cxd .cx-hide{display:none}.cxd h2,.cxd p,.cxd summary{text-wrap:balance}.cxs{position:relative;overflow:hidden;border-radius:24px;padding:24px 16px;border:1px solid var(--ln);background:#16211F}.cxs>*{margin:0}.cxs h2{font-size:22px!important;line-height:1.45!important;font-weight:700;color:#fff}.cxs p{text-align:right!important}.cxs>p{font-size:15px!important;line-height:1.8!important;color:#dfe5e5;margin-top:8px!important}.cxs img{display:block;max-width:100%;height:auto}.cxs ul{list-style:none!important;padding:0!important;display:grid;gap:10px;margin:16px 0 0!important}.cxs li{list-style:none!important;display:block!important;margin:0!important;border-radius:16px;padding:14px 8px 12px;text-align:center!important;font-size:12.5px!important;line-height:1.55!important;color:#dfe5e5;background:rgba(0,0,0,.28);border:1px solid var(--ln)}.cxs li::marker{content:\"\"}.cxs li strong{display:block;font-size:14.5px!important;color:#fff!important;margin-bottom:2px}.cxs strong{color:#fff}.cxs-1{background:linear-gradient(160deg,#3b2408 0%,#22180c 45%,#16211F 100%);border-color:rgba(248,136,24,.55);padding-left:128px;min-height:214px}.cxs-1>p:nth-of-type(1){margin-top:10px}.cxs-1>p:nth-of-type(1) strong{font-size:22px;line-height:1.2;color:var(--or)!important}.cxs-1>p:last-of-type{position:absolute;left:-26px;bottom:-14px;width:176px;margin:0}.cxs-1>p:last-of-type img{width:176px;max-width:none}.cxs-2{background:linear-gradient(170deg,#0d3a3d 0%,#102b2c 55%,#16211F 100%);border-color:rgba(114,218,217,.4)}.cxs-2>p a{color:var(--tql)}.cxs-2>p:nth-of-type(2){display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}.cxs-2>p:nth-of-type(2) img{width:100%;aspect-ratio:9/13;object-fit:cover;object-position:top;border-radius:18px;border:1.5px solid rgba(255,255,255,.2)}.cxs-2>p:nth-of-type(2) img:last-child{border-color:var(--or);box-shadow:0 16px 34px -16px rgba(248,136,24,.8)}.cxs-2>ul{grid-template-columns:1fr 1fr}.cxs-2>ul li:nth-child(1){background:rgba(27,154,160,.2);border-color:rgba(114,218,217,.4)}.cxs-2>ul li:nth-child(2){background:rgba(255,210,92,.13);border-color:rgba(255,210,92,.4)}.cxs-2>ul li:nth-child(3){background:rgba(229,68,58,.16);border-color:rgba(255,107,94,.4)}.cxs-2>ul li:nth-child(4){background:rgba(248,136,24,.16);border-color:rgba(248,136,24,.5)}.cxs-2>p:last-of-type{text-align:center!important;font-size:13.5px!important;margin-top:12px!important}.cxs-2>p:last-of-type strong{color:var(--gold)!important;font-size:16px}.cx-vid{position:relative;display:block;margin-top:18px;border-radius:18px;overflow:hidden;border:1.5px solid rgba(114,218,217,.6);background:#05090A;color:#fff!important}.cx-vid img{width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top;filter:brightness(.62)}.cx-vp{position:absolute;inset:0;margin:auto;width:64px;height:64px;border-radius:50%;background:var(--or);display:grid;place-items:center;box-shadow:0 0 0 8px rgba(248,136,24,.28)}.cx-vp::after{content:\"\";border:12px solid transparent;border-right:0;border-left:19px solid #0B1416;margin-left:-5px}.cx-vb{position:absolute;top:10px;right:10px;font-size:12px;font-weight:700;line-height:1.5;padding:3px 10px;border-radius:99px;background:#e5443a}.cx-vc{position:absolute;left:0;right:0;bottom:0;padding:26px 12px 10px;font-size:14.5px;font-weight:700;text-align:center;background:linear-gradient(transparent,rgba(5,9,10,.92))}.cx-video{display:block;width:100%;max-height:520px;margin-top:18px;border-radius:18px;background:#000}.cxs-3{background:linear-gradient(170deg,#2c1c08 0%,#16211F 60%);border-color:rgba(248,136,24,.6)}.cxs-3>ul{grid-template-columns:repeat(3,1fr);gap:8px}.cxs-3>ul li{padding:14px 4px 12px;font-size:12px}.cxs-3>ul li strong{font-size:13.5px!important}.cxs-3>ul li:nth-child(1){border-color:rgba(255,252,0,.45)}.cxs-3>ul li:nth-child(2){border-color:rgba(248,136,24,.6)}.cxs-3>ul li:nth-child(3){border-color:rgba(255,210,92,.5)}.cxs-3>h3{margin-top:14px;padding:12px 14px 0;border-radius:14px 14px 0 0;background:rgba(255,252,0,.08);border:1px dashed rgba(255,252,0,.45);border-bottom:0;font-size:14.5px!important;line-height:1.7!important;color:#fff;text-align:center}.cxs-3>h3+p{margin-top:0!important;text-align:center!important;padding:0 14px 12px;border-radius:0 0 14px 14px;background:rgba(255,252,0,.08);border:1px dashed rgba(255,252,0,.45);border-top:0;font-size:13.5px;line-height:1.7;color:#f1f1d8;text-align:center}.cxs-2>ul li::before,.cxs-3>ul li::before{content:\"\";display:block;width:42px;height:42px;border-radius:13px;margin:0 auto 8px;background-color:var(--tql);background-repeat:no-repeat;background-position:center;background-size:23px}.cxs-2>ul li:nth-child(1)::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B1416' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 11h12v9H6zM8 11V8a4 4 0 0 1 7.500-2'/%3E%3C/svg%3E\")}.cxs-2>ul li:nth-child(2)::before{background-color:var(--gold);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B1416' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 8h10v12H9zM15 8V5H5v11h4'/%3E%3C/svg%3E\")}.cxs-2>ul li:nth-child(3)::before{background-color:#ff8a7e;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B1416' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 4v11M7.500 10.500 12 15l4.500-4.500M5 20h14'/%3E%3C/svg%3E\")}.cxs-2>ul li:nth-child(4)::before{background-color:var(--or);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B1416' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3l2.700 5.600 6.100.900-4.400 4.300 1 6.100L12 17l-5.400 2.900 1-6.100L3.200 9.500l6.100-.900z'/%3E%3C/svg%3E\")}.cxs-3>ul li::before{border-radius:50%}.cxs-3>ul li:nth-child(1)::before{background-color:#FFFC00;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B1416' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 10h16v10H4zM4 14h16M12 10v10M12 10c-1.500-4-6-3.500-4.500-.800.800 1.200 3 .800 4.500.800zm0 0c1.500-4 6-3.500 4.500-.800-.800 1.200-3 .800-4.500.800z'/%3E%3C/svg%3E\")}.cxs-3>ul li:nth-child(2)::before{background-color:var(--or);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B1416' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='8.500'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E\")}.cxs-3>ul li:nth-child(3)::before{background-color:var(--gold);background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B1416' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z'/%3E%3C/svg%3E\")}.cxs-4{background:linear-gradient(165deg,#3a2c08 0%,#1d1a0d 50%,#16211F 100%);border:1.5px solid rgba(255,210,92,.65);box-shadow:0 20px 44px -26px rgba(255,210,92,.9)}.cxs-4>h2{color:var(--gold)!important}.cxs-4>ul{gap:0!important;margin-top:20px!important;position:relative}.cxs-4>ul li{position:relative;text-align:right!important;background:rgba(0,0,0,.3);border:1px solid rgba(255,210,92,.3);border-radius:16px;padding:13px 62px 13px 12px;font-size:13.5px!important;color:#e9e4d2;margin-bottom:10px!important}.cxs-4>ul li:last-child{margin-bottom:0!important}.cxs-4>ul li strong{font-size:15.5px!important;color:#fff!important}.cxs-4>ul li::before{content:\"24\";position:absolute;right:10px;top:50%;transform:translateY(-50%);width:42px;height:42px;border-radius:50%;background:var(--tql);color:#0B1416;font-size:15px;font-weight:700;display:grid;place-items:center}.cxs-4>ul li:nth-child(2)::before{content:\"1\";background:var(--gold)}.cxs-4>ul li:nth-child(3)::before{content:\"2\";background:var(--or)}.cxs-4>ul li:nth-child(1){border-color:rgba(114,218,217,.5)}.cxs-4>p:last-of-type{margin-top:14px!important;font-size:12.5px!important;color:#cfc8ae;text-align:center!important}.cxs-5>h2,.cxs-5>p:nth-of-type(1){padding-left:124px}.cxs-5>p:nth-of-type(1){min-height:62px}.cxs-5>p:nth-of-type(2){position:absolute;left:10px;top:16px;width:118px;margin:0!important}.cxs-5>ul{grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px!important}.cxs-5>ul li{padding:12px 4px;font-size:12px;color:var(--mu)}.cxs-5>ul li strong{font-size:18px!important}.cxs-5>ul li:first-child{grid-column:1/-1;padding:14px 10px;background:linear-gradient(120deg,rgba(248,136,24,.34),rgba(248,136,24,.1));border:1.5px solid var(--or);font-size:14px;font-weight:700;color:#fff}.cxs-5>ul li:first-child strong{font-size:40px!important;line-height:1.1;color:var(--orl)!important}.cxs-5>ul li:nth-child(2) strong{color:var(--gold)!important}.cx-voice{margin:8px 0 0;border-radius:14px;padding:10px 12px;background:rgba(37,211,102,.1);border:1px solid rgba(37,211,102,.35)}.cx-voice span{display:block;font-size:12.5px;color:#c9f0d8;margin-bottom:6px}.cx-voice audio{width:100%;height:36px;display:block}.cxs-6>ul{grid-template-columns:repeat(3,1fr);gap:8px;counter-reset:cx;margin-top:26px}.cxs-6>ul li{position:relative;overflow:visible;padding:24px 6px 14px;counter-increment:cx}.cxs-6>ul li::before{content:counter(cx)!important;position:absolute;top:-13px;right:50%;transform:translateX(50%);width:28px;height:28px;border-radius:50%;background:var(--tql);color:#0B1416;font-size:14px;font-weight:700;display:grid;place-items:center}.cxs-6{overflow:visible}.cx-q{border:1px solid var(--ln);background:rgba(0,0,0,.25);border-radius:14px;padding:0 14px;margin-top:8px!important}.cxs-7>h2+.cx-q{margin-top:14px!important}.cx-q summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:52px;font-size:14.5px!important;line-height:1.6!important;font-weight:700;color:#fff}.cx-q summary::-webkit-details-marker{display:none}.cx-q summary::after{content:\"+\";flex:none;width:26px;height:26px;border-radius:50%;background:rgba(248,136,24,.2);display:grid;place-items:center;font-size:17px;color:var(--orl)}.cx-q[open] summary::after{content:\"−\"}.cx-q p{font-size:14px!important;line-height:1.8!important;color:#dfe5e5;padding:0 0 14px;margin:0!important}.cxs-7>p{margin-top:16px!important;font-size:12px!important;line-height:1.8!important;color:#93a0a0;text-align:center!important}.cxs-7>p a,.cxs-7>ul a{color:var(--tql);text-decoration:underline}.cxs-7>h3{margin-top:22px;font-size:15px!important;color:#fff}.cxs-7>ul{margin-top:8px;gap:6px}.cxs-7>ul li{padding:10px;font-size:13.5px!important;text-align:right!important}@media (min-width:768px){.cxs{padding:30px 26px}.cxs h2{font-size:27px!important}.cxs>p{font-size:16.5px}.cxs-1{padding-left:220px;min-height:260px}.cxs-1>p:last-of-type,.cxs-1>p:last-of-type img{width:250px}.cxs-2>p:nth-of-type(2){max-width:420px;margin-left:auto;margin-right:auto}.cxs-2>ul{grid-template-columns:repeat(4,1fr)}.cxs li{font-size:14px}.cxs li strong{font-size:16px}}"; document.head.appendChild(cxs);

    var main = document.querySelector('.main-content');
    var num = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); };

    /* 1) سطر المزايا تحت السعر: كبسولات + بطاقتا القيمة */
    var items = first.textContent.replace(/\.\s*$/, '').split('·').map(function (t) { return t.trim(); }).filter(Boolean);
    first.classList.add('cx-hide');
    var priceEl = main && main.querySelector(':scope > .price');
    if (priceEl && items.length) {
      var chips = document.createElement('div');
      chips.className = 'cx-chips';
      items.slice(0, 2).forEach(function (t) { var s = document.createElement('span'); s.textContent = t; chips.appendChild(s); });
      var val = document.createElement('div');
      val.className = 'cx-val';
      items.slice(2, 4).forEach(function (t, i) { var d = document.createElement('div'); d.className = i ? 'cx-gift' : 'cx-safe'; d.textContent = t; val.appendChild(d); });
      priceEl.after(chips, val);
    }

    /* 2) عدد مرات الشراء: رقم بفواصل + «مرة شراء» */
    var sold = document.querySelector('.is-sold .sold-count');
    var soldN = sold ? parseInt(sold.textContent.replace(/\D/g, ''), 10) : 0;
    if (sold && soldN) {
      sold.textContent = num(soldN);
      var lab = document.querySelector('.is-sold .details__title span');
      if (lab) lab.textContent = 'مرة شراء';
    }
    var stars = document.querySelector('.main-content salla-rating-stars');
    var revN = stars ? parseInt(stars.getAttribute('reviews') || '0', 10) : 0;
    var rate = stars ? stars.getAttribute('value') : '';

    /* 3) السعر داخل شريط الشراء السفلي */
    var bar = document.querySelector('.sticky-product-bar .container');
    var tp = document.querySelector('.main-content .price .total-price');
    if (bar && tp && !bar.querySelector('.cx-barp')) {
      var bp = document.createElement('span');
      bp.className = 'cx-barp';
      bp.textContent = tp.textContent.replace(/\s+/g, ' ').trim() + ' ر.س';
      bar.prepend(bp);
    }

    /* 4) تقسيم الوصف إلى لوحات حسب عناوين H2 */
    desc.classList.add('cxd');
    var nodes = Array.prototype.slice.call(desc.children), sec = null, n = 0;
    nodes.forEach(function (el) {
      if (el.tagName === 'H2') {
        sec = document.createElement('section');
        sec.className = 'cxs cxs-' + (++n);
        desc.insertBefore(sec, el);
      }
      if (sec) sec.appendChild(el);
    });

    /* 5) الأرقام الحية داخل لوحة الثقة */
    var trust = desc.querySelector('.cxs-5');
    if (trust) {
      var st = trust.querySelectorAll('ul:first-of-type li strong');
      if (st[0] && soldN) st[0].textContent = num(soldN);
      if (st[1] && rate) st[1].textContent = rate + ' ★';
      if (st[2] && revN) st[2].textContent = num(revN);
    }

    /* 6) روابط الصوت ← مشغّل، رابط الفيديو ← تشغيل داخل الصفحة عند الضغط */
    desc.querySelectorAll('a[href$=".m4a"],a[href$=".mp3"]').forEach(function (a) {
      var w = document.createElement('div');
      w.className = 'cx-voice';
      var s = document.createElement('span'); s.textContent = a.textContent;
      var au = document.createElement('audio');
      au.controls = true; au.preload = 'none'; au.src = a.href;
      w.appendChild(s); w.appendChild(au);
      (a.closest('p') || a).replaceWith(w);
    });
    desc.querySelectorAll('a[href$=".mp4"]').forEach(function (a) {
      var img = a.querySelector('img');
      a.classList.add('cx-vid');
      var badge = document.createElement('span'); badge.className = 'cx-vb'; badge.textContent = 'فيديو · 15 ثانية';
      var play = document.createElement('span'); play.className = 'cx-vp';
      var cap = document.createElement('span'); cap.className = 'cx-vc'; cap.textContent = 'شوف المتجر من الداخل';
      a.appendChild(badge); a.appendChild(play); a.appendChild(cap);
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var v = document.createElement('video');
        v.className = 'cx-video';
        v.controls = true; v.playsInline = true; v.muted = true; v.autoplay = true;
        if (img) v.poster = img.src;
        v.src = a.href;
        a.replaceWith(v);
      });
    });

    /* 7) الأسئلة: H4 + فقرة ← سؤال يفتح بالضغط */
    desc.querySelectorAll('h4').forEach(function (h) {
      var p = h.nextElementSibling;
      if (!p || p.tagName !== 'P') return;
      var d = document.createElement('details'); d.className = 'cx-q';
      var s = document.createElement('summary'); s.textContent = h.textContent;
      h.replaceWith(d); d.appendChild(s); d.appendChild(p);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  document.addEventListener('theme::ready', run);
  setTimeout(run, 1500);
})();
