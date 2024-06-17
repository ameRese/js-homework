(() => {
    const $form = document.getElementById('js-form');

    const clickHandler = () => {
        if ($form.hidden) {
            $form.hidden = false;
        } else {
            $form.hidden = true;
        }
    }

    document.getElementById('js-settings-button').addEventListener('click', clickHandler);
})();


