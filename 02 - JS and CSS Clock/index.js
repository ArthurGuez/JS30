const aiguilleSec = document.querySelector('.second-hand');
const aiguilleMin = document.querySelector('.min-hand');
const aiguilleHr = document.querySelector('.hour-hand');

function horloge() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    aiguilleSec.style.transform = `rotate(${seconds / 60 * 360 + 90}deg)`;
    
    aiguilleMin.style.transform = `rotate(${minutes / 60 * 360 + 90}deg)`;

    aiguilleHr.style.transform = `rotate(${(hours - 12) / 12 * 360 + 90}deg)`;
}

setInterval(horloge, 1000);