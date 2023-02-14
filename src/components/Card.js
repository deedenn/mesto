class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._name = data.name;
        this._image = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }

    // метод для получения разметки

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    // метод для установки данных

    _setData() {
        const nameElement = this._element.querySelector('.element__name');
        nameElement.textContent = this._name;

        this._imageElement = this._element.querySelector('.element__image');
        this._imageElement.src = this._image;
        this._imageElement.alt = this._name;
    }

    // метод для удаления карточки

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    // метод лайк карточки

    _handleLikeCard() {
        this._cardLikeBtn.classList.toggle('element__btn-like_active');
    }

    // метод инициализации слушателей

    _setEventListeners() {
        this._btnDelete = this._element.querySelector('.element__btn-del');
        this._btnDelete.addEventListener('click', () => {
            this._deleteCard();
        });

        this._cardLikeBtn = this._element.querySelector('.element__btn-like');
        this._cardLikeBtn.addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._imageElement.addEventListener('click', () => {
            this._handleCardClick(this._name, this._image);
        });
    }

    getView() {
        this._element = this._getTemplate();
        this._setData();
        this._setEventListeners();
        return this._element;
    }

}

export default Card;