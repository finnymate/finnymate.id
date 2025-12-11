document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    let currentIndex = 0;

    // Create dots
    slideElements.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideElements.length;
        goToSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideElements.length) % slideElements.length;
        goToSlide(currentIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide
    setInterval(nextSlide, 5000);
});
