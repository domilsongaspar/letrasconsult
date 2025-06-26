(function ()  {
    let btn_whats = document.querySelector('#btn_whats');

    setInterval(() => {
        if (btn_whats.classList.contains('animate__shakeX'))
        {
            btn_whats.classList.remove('animate__shakeX');
        }
        else
        {
            btn_whats.classList.add('animate__shakeX');
        }
    }, 3000);

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.add('animate__fadeInUp', entry.isIntersecting);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.to-slide').forEach(el => obs.observe(el));

})();