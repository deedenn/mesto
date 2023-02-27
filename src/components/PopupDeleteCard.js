import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor({ popupSelector }) {
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
    }

    handleFormSubmit(submit) {
        this._handleFormSubmit = submit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit();
        });
    }
}