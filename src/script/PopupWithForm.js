import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    _getInputValues () {
        this._inputValues = {};
        this._inputList.forEach ((input) => {
            const name = input.name;
            const value = input.value;
            this._inputValues[name] = value;
        });
        return this._inputValues;
    }

// слушатели формы

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
    }

// закрытие попапов

    close() {
        super.close();
        this._form.reset();
    }

}