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

function WPL1() {
    document.getElementById('WPL1').style.display = 'block';
    document.getElementById('WPL2').style.display = 'none';
}

function WPL2() {
    document.getElementById('WPL1').style.display = 'none';
    document.getElementById('WPL2').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', (event) => {
    WPL2();
});