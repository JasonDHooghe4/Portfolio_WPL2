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