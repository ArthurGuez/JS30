const mdp = [38,38,40,40,37,39,37,39,66,65];
const inputMdp = [];
const div = document.getElementById('ma-div');

window.addEventListener('keydown', (e) => {
    if (inputMdp.length > 10) {
        inputMdp.length = 0;
    }

    inputMdp.push(e.keyCode);
    div.innerHTML = e.key;
})

if (mdp === inputMdp) {
    cornify_add();
}

console.log(- mdp.length - 1);




