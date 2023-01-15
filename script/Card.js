class Card {
    constructor(data, templateSelector, popupImage, popupBigImage, popupBigName, openPopup) {
        this._name = data.name;
        this._image = data.link;
        this._alt = data.alt;
        this._popupImage = popupImage;
        this._popupBigImage = popupBigImage;
        this._popupBigName = popupBigName;
        this._openPopup = openPopup;
        this._templateSelector = templateSelector;
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

        const imageElement = this._element.querySelector('.element__image');
        imageElement.src = this._image;

        const altElement = this._element.querySelector('.element__image');
        altElement.alt = this._alt;
    }

// метод для удаления карточки

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

// метод для лайка карточки

    _toggleLike() {
        this._element.querySelector('.element__btn-like').classList.toggle('element__btn-like_active');
    }

// метод для открытия попапа с большой картинкой
    
    _showPopupBigImage() {
        this._popupBigImage.src = this._image;
        this._popupBigName.textContent = this._name;
        this._popupBigImage.alt = this._alt;
        this._openPopup(this._popupImage);
    }

// метод инициализации слушателей

    _setEventListeners() {
        const deleteBtn = this._element.querySelector('.element__btn-del');
        deleteBtn.addEventListener('click', () => {    
            this._deleteCard();
        });
        
        const cardLikeBtn = this._element.querySelector('.element__btn-like');
        cardLikeBtn.addEventListener('click', () => {
            this._toggleLike();
        });

        const bigImage = this._element.querySelector('.element__image');
        bigImage.addEventListener('click', () => {
            this._showPopupBigImage();
        })
    }

    getView() {
        this._element = this._getTemplate();
        this._setData();
        this._setEventListeners();

        return this._element;
    }

}

export default Card;