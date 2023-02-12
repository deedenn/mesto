export default class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector('.popup__btn-close')
        this._escClose = this._handleEscClose.bind(this);
    }

    open () {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._escClose);
    }

    close () {
        this._popup.classList.remove('popup_opened');
        document.addEventListener('keydown', this._escClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners () {
        this._closeButton.addEventListener('click', () => {
            this.close();
        });
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
        });

    }
}