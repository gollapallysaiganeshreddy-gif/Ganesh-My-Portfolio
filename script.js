var backBtn = document.createElement('button');
    backBtn.textContent = '↑ Top';
    backBtn.style.cssText =
      'position:fixed; bottom:30px; right:30px; padding:10px 16px;' +
      'background: #00bcd4; color:white; border:none; border-radius:6px;' +
      'font-weight:bold; cursor:pointer; display:none; font-size:14px;';
    document.body.appendChild(backBtn);

    window.addEventListener('scroll', function() {
      backBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });