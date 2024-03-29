export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._btnClose = this._popup.querySelector('.popup__btn-close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._btnSave = this._popup.querySelector('.popup__btn-submit');
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._btnClose.addEventListener('click', () => {
            this.close();
        });
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
        });
    }

    setBtnText(text) {
        if (this._btnSave) {
            this._btnSave.textContent = text;
        }
    }
}