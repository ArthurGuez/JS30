const allItems = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

const dragStarts = (e) => {
    isDown = true;
    allItems.classList.add('active');
    startX = e.pageX - allItems.offsetLeft;
    scrollLeft = allItems.scrollLeft;
}

const dragOff = () => {
    isDown = false;
    allItems.classList.remove('active');
}

const dragStops = () => {
    isDown = false;
    allItems.classList.remove('active');
}

const dragAndScroll = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const movingX = e.pageX - allItems.offsetLeft;
    const scrolling = (movingX - startX) * 3;
    allItems.scrollLeft = scrollLeft - scrolling;
}

allItems.addEventListener('mousedown', dragStarts);

allItems.addEventListener('mouseleave', dragOff);

allItems.addEventListener('mouseup', dragStops);

allItems.addEventListener('mousemove', dragAndScroll);