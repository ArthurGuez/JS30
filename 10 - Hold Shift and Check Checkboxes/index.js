const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(box => box.addEventListener('click', handleCheck));

let dernierCheck;

function handleCheck(e) {
    let checkage = false;
    
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(petitCarré => {
            console.log(petitCarré);
            if (petitCarré === this || petitCarré === dernierCheck) {
                checkage = !checkage;
                console.log("Checkage a changé de valeur!")
            }
            if (checkage) {
                petitCarré.checked = true;
            }
        })  
    }
    dernierCheck = this;
}