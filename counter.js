(() => {
    const $counter = document.getElementById('js-counter');

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        const currentCounter = Number.parseInt($counter.textContent);
        if ($targetButton.textContent === '+') {
            $counter.textContent = currentCounter + 1;
        } else {
            $counter.textContent = currentCounter - 1;
        }
    }

    for (let i = 0; i < document.getElementsByClassName('js-button').length; i++) {
        document.getElementsByClassName('js-button')[i].addEventListener('click', (e) => clickHandler(e));
    }
})();
