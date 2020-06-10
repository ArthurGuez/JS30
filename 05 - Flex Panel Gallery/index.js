const everyPanel = document.querySelectorAll('.panel');

function animPanneaux() {
    this.classList.toggle('open');
}

function animParas(e) {
    if (e.propertyName === 'flex-grow') {
        this.classList.toggle('anim-paras');
    }
}

everyPanel.forEach(panel => {
    panel.addEventListener('click', animPanneaux);
})

everyPanel.forEach(panel => {
    panel.addEventListener('transitionend', animParas);
})