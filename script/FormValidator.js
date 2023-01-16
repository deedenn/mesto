class FormValidator {
    constructor(config, form) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._deactiveButtonClass = config.deactiveButtonClass;
        this._spanErrorClass = config.spanErrorClass;
        this._errorClass = config.errorClass;
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._btnEl = this._form.querySelector(this._submitButtonSelector);
    }

// метод поиска ошибки

    _showInputError = (inputEl, errorMessage) => {
        this._errorEl = this._form.querySelector(`.${inputEl.id}-error`);
        inputEl.classList.add(this._inputErrorClass);
        this._errorEl.textContent = errorMessage;
        this._errorEl.classList.add(this._errorClass);
    }

// метод удаления ошибки

    _hideInputError = (inputEl) => {
        this._errorEl = this._form.querySelector(`.${inputEl.id}-error`);
        inputEl.classList.remove(this._inputErrorClass);
        this._errorEl.textContent = '';
        this._errorEl.classList.remove(this._errorClass);
    };

// метод для проверки ошибки

    _checkValidity = (inputEl) => {
        if (!inputEl.validity.valid) {
            this._showInputError(inputEl, inputEl.validationMessage);
        } else {
            this._hideInputError(inputEl);
        }
    };

// проверка поля на невалидность
    _hasInvalidInput = () => {
        return this._inputList.some((inputEl) => {
            return !inputEl.validity.valid;
        });
    };

// переключение кнопок
    changeBtnPosition = () => {
        if (this._hasInvalidInput()) {
            this._btnEl.classList.add(this._deactiveButtonClass);
            this._btnEl.disabled = true;
        } else {
            this._btnEl.classList.remove(this._deactiveButtonClass);
            this._btnEl.disabled = false;
        }
    };

    _setEventListeners = () => {
        this.changeBtnPosition(this._inputList, this._btnForm);

        this._inputList.forEach((inputEl) => {
            inputEl.addEventListener('keydown', () => {
                this._checkValidity(inputEl);

                this.changeBtnPosition(this._inputList, this._btnForm);
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners();
    };
}

export default FormValidator;