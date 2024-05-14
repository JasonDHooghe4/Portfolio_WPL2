function filterImages(category) {
    const images = document.querySelectorAll('.filterable');

    images.forEach((image) => {
        const imageCategory = image.getAttribute('data-category');

        if (category === 'all' || category === imageCategory) {
            image.parentNode.style.display = 'block';
        } else {
            image.parentNode.style.display = 'none';
        }
    });
}