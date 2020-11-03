'use strict';
(function () {
    const MINUS_BUTTON_CLASS = 'minus';
    const PLUS_BUTTON_CLASS = 'plus';
    const adults = document.querySelector('.adults');
    const adultsInput = adults.querySelector('#adults');
    const children = document.querySelector('.children');
    const childrenInput = children.querySelector('#children');
    const modalButton = document.querySelector('.modal-button');
    const modal = document.querySelector('.modal-booking');

    modal.classList.add('show-modal');

    modalButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.toggle('hide-modal');
        modal.classList.toggle('show-modal');
      });

    adults.addEventListener('click', evt => {
        changeGuestsNumber(evt, adultsInput);
    });

    children.addEventListener('click', evt => {
        changeGuestsNumber(evt, childrenInput);
    }); 

    function changeGuestsNumber(evt, guestsType) {
        const classList = evt.target.classList;
        if (classList.contains(MINUS_BUTTON_CLASS) || classList.contains(PLUS_BUTTON_CLASS)) {
            evt.preventDefault();

            if (classList.contains(MINUS_BUTTON_CLASS) && guestsType.value > 0) guestsType.value--;
            if (classList.contains(PLUS_BUTTON_CLASS)) guestsType.value++;
        }
    }
})();