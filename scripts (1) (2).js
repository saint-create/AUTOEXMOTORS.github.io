

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
document.querySelectorAll('.carousel').forEach((carousel) => {
    const images = carousel.querySelectorAll('.carousel-image');
    const prevButton = carousel.previousElementSibling.querySelector('.prev');
    const nextButton = carousel.previousElementSibling.querySelector('.next');
    
    let currentIndex = 0;
    
 
    function showImage(index) {
    
        const offset = -100 * index + '%';
        carousel.style.transform = `translateX(${offset})`;
    }

    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; 
        showImage(currentIndex);
    });

  
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; 
    });
});
