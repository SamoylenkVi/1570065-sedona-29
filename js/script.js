'use strict';
(function () {
    const MINUS_BUTTON_CLASS = 'minus';
    const PLUS_BUTTON_CLASS = 'plus';

    const modalButton = document.querySelector('.modal-button');
    const modal = document.querySelector('.modal-booking');
    if (modalButton && modal) {
        modal.classList.remove('modal-booking-no-js');
        modal.classList.add('hide-modal');

        modalButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            modal.classList.remove('invalid-modal');
            modal.classList.toggle('hide-modal');
            modal.classList.toggle('show-modal');
        });

        const form = modal.querySelector('.booking-form');

        if (form && modal) {
            form.addEventListener(
                'invalid',
                () => {
                    modal.classList.remove('invalid-modal');
                    void modal.offsetWidth;
                    modal.classList.add('invalid-modal');
                },
                true
            );
        }
    }

    const adults = document.querySelector('.adults');
    const children = document.querySelector('.children');
    if (adults && children) {
        const adultsInput = adults.querySelector('#adults');
        const childrenInput = children.querySelector('#children');

        if (adultsInput && childrenInput) {
            adults.addEventListener('click', evt => {
                changeGuestsNumber(evt, adultsInput);
            });

            children.addEventListener('click', evt => {
                changeGuestsNumber(evt, childrenInput);
            });
        }
    }

    function changeGuestsNumber(evt, guestsType) {
        const classList = evt.target.classList;
        if (classList.contains(MINUS_BUTTON_CLASS) || classList.contains(PLUS_BUTTON_CLASS)) {
            evt.preventDefault();

            if (classList.contains(MINUS_BUTTON_CLASS) && guestsType.value > 0) guestsType.value--;
            if (classList.contains(PLUS_BUTTON_CLASS)) guestsType.value++;
        }
    }
})();