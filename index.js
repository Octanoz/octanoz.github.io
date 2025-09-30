const certificates = document.querySelector('#certificates');
const carousel = document.querySelector('.carousel');
const nextButton = document.getElementById('js-next');
const prevButton = document.getElementById('js-prev');

nextButton.onclick = () => {
    carousel.append(carousel.querySelector('img:first-child'));
}

prevButton.onclick = () => {
    carousel.prepend(carousel.querySelector('img:last-child'));
}

document.querySelectorAll('.carousel img').forEach(img => {
    img.addEventListener('click', () => {
        certificates.classList.toggle('full-width');
        carousel.classList.toggle('full-width');
        img.classList.toggle('full-width');
        img.classList.toggle('zoomed');
    });
});



