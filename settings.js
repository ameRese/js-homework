(() => {
    const $form = document.getElementById('js-form');

    // 設定フォーム表示切替
    const clickHandler = () => {
        if ($form.hidden) {
            $form.hidden = false;
        } else {
            $form.hidden = true;
        }
    };

    // 小数点や空欄への対応
    const changeHandler = (e) => {
        const $targetInput = e.currentTarget;
        let validatedInputNumber = $targetInput.value.replace(/[^0-9-]/g, '');
        validatedInputNumber ||= 0;
        $targetInput.value = validatedInputNumber;
    };

    document.getElementById('js-settings-button').addEventListener('click', clickHandler);

    for (let i = 0; i < document.getElementsByClassName('js-input-number').length; i++) {
        document.getElementsByClassName('js-input-number')[i].addEventListener('change', (e) => changeHandler(e));
    }
})();
