class Card {
    constructor({ data, templateSelector, userId, handleCardClick, handleSetLike, handleDeleteLike, handleDeleteCard }) {
        this._name = data.name;
        this._image = data.link;
        this._likes = data.likes;
        this._cardId = data._id;
        this._userId = userId;
        this._ownerId = data.owner._id;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleSetLike = handleSetLike;
        this._handleDeleteLike = handleDeleteLike;
        this._handleDeleteCard = handleDeleteCard;
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

    // метод лайк карточки

    handleLikeCard(data) {
        this._likes = data.likes;
        this._likesCounter.textContent = this._likes.length;
        this._cardLikeBtn.classList.toggle('element__btn-like_active');
    }

    // метод инициализации слушателей

    _setEventListeners() {
        this._btnDelete = this._element.querySelector('.element__btn-del');
        this._btnDelete.addEventListener('click', () => {
            this._handleDeleteCard(this._cardId);
        });

        this._cardLikeBtn = this._element.querySelector('.element__btn-like');
        this._cardLikeBtn.addEventListener('click', () => {
            if (this._cardLikeBtn.classList.contains('element__btn-like_active')) {
                this._handleDeleteLike(this._cardId);
            } else {
                this._handleSetLike(this._cardId);
            }
        });

        this._imageElement.addEventListener('click', () => {
            this._handleCardClick(this._name, this._image);
        });
    }

    _isMyLike() {
        if (this._likes.some((user) => { return this._userId === user._id })) {
            this._cardLikeBtn.classList.add('element__btn-like_active');
        } 
    }

    // статус кнопки удаления

    _setDeleteBtn() {
        if (this._userId !== this._ownerId) {
            this._btnDelete.remove();
        }
    }

    // удаление карточки

    removeCard() {
        this._element.remove();
    }

    getView() {
        this._element = this._getTemplate();
        this._setData();
        this._setEventListeners();
        this._isMyLike();
        this._setDeleteBtn();

        this._likesCounter = this._element.querySelector('.element__like_counter');
        this._likesCounter.textContent = this._likes.length;

        return this._element;
    }

}

export default Card;



