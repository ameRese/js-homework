(() => {
    const $counter = document.getElementById('js-counter');

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        const currentCounter = Number.parseInt($counter.textContent);
        const countUnit = Number.parseInt(document.getElementById('js-count-unit').value);
        if ($targetButton.textContent === '+') {
            $counter.textContent = currentCounter + countUnit;
        } else {
            $counter.textContent = currentCounter - countUnit;
        }
    };

    for (let i = 0; i < document.getElementsByClassName('js-button').length; i++) {
        document.getElementsByClassName('js-button')[i].addEventListener('click', (e) => clickHandler(e));
    }
})();
