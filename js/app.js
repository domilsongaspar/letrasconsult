(function ()  {
    /**
     * Animate elements on page load
     */

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
            entry.target.classList.add('md:animate__fadeInUp', entry.isIntersecting);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.to-slide').forEach(el => obs.observe(el));

    const flipElements = document.querySelectorAll('[id^="flip-"]');

    flipElements.forEach((el, index) => {
        el.classList.add('animate__animated', 'animate__flipInX');
        el.style.setProperty('--animate-delay', `${index * 0.2}s`);
        el.classList.add('animate__delay-custom');
    });

})();