(() => {
    const $counter = document.getElementById('js-counter');
    const min = -99;
    const max = 99;

    const clickHandler = () => {
        const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
        $counter.textContent = randomValue;
    }

    document.getElementById('js-random-button').addEventListener('click', clickHandler);
})();
