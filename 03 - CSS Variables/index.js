const spacingToggle = document.getElementById('spacing');
const blurToggle = document.getElementById("blur");
const colorToggle = document.getElementById('base');

var body = document.body;

spacingToggle.addEventListener('input', (e) => {
    body.style.setProperty('--main-padding', e.target.value + e.target.dataset.sizing);
})

blurToggle.addEventListener('input', (e) => {
    body.style.setProperty('--main-blur', e.target.value + e.target.dataset.sizing);
})

colorToggle.addEventListener('input', (e) => {
    body.style.setProperty('--main-color', e.target.value);
})

    