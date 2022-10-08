const progress = document.querySelector(".js-completed-bar");
if (progress) {
    progress.style.width = progress.getAttribute("data-complete") + "%";
    progress.style.opacity = 1;
}


function select(e) {
    if (e.target.innerHTML === 'Выбрать') {
        e.target.parentElement.children[2].style.display = 'inline';
        e.target.parentElement.children[3].style.display = 'inline';
        e.target.innerHTML = 'Поблагодарить'
        e.target.setAttribute('data-bs-dismiss', 'modal');
    } else if (e.target.innerHTML === 'Поблагодарить') {
        e.target.setAttribute('data-bs-dismiss', 'modal');
        sendThanks();
    }
}