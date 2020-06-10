const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function itemToList(event) {
    event.preventDefault();
    const input = this.querySelector('[name=item]').value;
    const item = {
        input,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.input}</label>
            </li>
        `;
    }).join('');

function toggleDone(e) {
    
}    

}

addItems.addEventListener('submit', itemToList);

populateList(items, itemsList);

