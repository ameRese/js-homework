(() => {
    const $counter = document.getElementById('js-counter');

    const clickHandler = () => {
        const randomLeft = Number.parseInt(document.getElementById('js-random-left').value);
        const randomRight = Number.parseInt(document.getElementById('js-random-right').value);
        const min = randomLeft <= randomRight ? randomLeft : randomRight;
        const max = randomLeft <= randomRight ? randomRight : randomLeft;
        const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
        $counter.textContent = randomValue;
    };

    document.getElementById('js-random-button').addEventListener('click', clickHandler);
})();
