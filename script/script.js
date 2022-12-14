const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popups = document.querySelectorAll('.popup');
const popupShowimg = document.querySelector('.popup_shomimg');
const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const popupsCloseBtn = document.querySelectorAll('.popup__btn-close');
const popupSaveBtn = document.querySelector('.popup__btn-submit');
const popupsSaveBtn = document.querySelectorAll('.popup__btn-submit');
const popupImage = document.querySelector('.popup_showimg');
const popupBigImage = document.querySelector('.big-popup__image');
const popupBigName = document.querySelector('.big-popup__name');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.popup__input_el_name');
const inputDescription = document.querySelector('.popup__input_el_description');
const inputTitle = document.querySelector('.popup__input_el_title');
const inputLink = document.querySelector('.popup__input_el_link');
const formEditElement = document.querySelector('.form_edit');
const formAddElement = document.querySelector('.form_add');
const elementImage = document.querySelector('.element__image');
const elementName = document.querySelector('.element__name');
const elementContainer = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
];

// шаблоны

const cardTemplate = document.querySelector('#element-template').content.querySelector('.element');

// генерация карточки

const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true);
  
  const cardName = newCard.querySelector('.element__name');
  cardName.textContent = dataCard.name;

  const cardImage = newCard.querySelector('.element__image');
  cardImage.src = dataCard.link;
  cardImage.alt = dataCard.alt;

  cardImage.addEventListener('click', () => {
    renderBigPopup(dataCard);
    openPopup(popupImage);
  });

  // добавление лайков
  const cardLikeBtn = newCard.querySelector('.element__btn-like');
  cardLikeBtn.addEventListener('click', toggleLike);

  // удаление карточки
  const deleteBtn = newCard.querySelector('.element__btn-del');
  deleteBtn.addEventListener('click', deleteCard);
  
  return newCard;
};

const deleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

const toggleLike = (evt) => {
  evt.target.classList.toggle('element__btn-like_active');
};

// добавление карточки

const renderCard = (dataCard) => {
  elementContainer.prepend(generateCard(dataCard));
};

// рендер всех карточек

initialCards.forEach(renderCard);

// открыть попап

function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeOnEsc);
};

// закрыть попап

popupsCloseBtn.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});



// закрыть попап по Esc

const closeOnEsc = (evt) => {
  if (evt.key === 'Escape') {    
      closePopup(document.querySelector('.popup_opened'));
    }
  }

// закрыть попап на оверлей

popups.forEach(function(popup) {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  })
})

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEsc);
};

// сохранить изменения Edit

function savePopupEdit (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup(popupEdit);
};

// сохранить изменения Add

function savePopupAdd (evt) {
  evt.preventDefault();
  renderCard({name: inputTitle.value, link: inputLink.value});
  closePopup(popupAdd);
  inputTitle.value = '';
  inputLink.value = '';
  const popupAddBtnSave = this.querySelector('.popup__btn-submit');
  popupAddBtnSave.classList.add('popup__btn-submit_disabled');
}

// обработка событий кнопок

profileEditBtn.addEventListener('click', () => {
        openPopup(popupEdit);
        inputName.value = profileName.textContent;
        inputDescription.value = profileDescription.textContent;
    }
);

profileAddBtn.addEventListener('click', () => {
        openPopup(popupAdd);
    }
);

formEditElement.addEventListener('submit', savePopupEdit);
formAddElement.addEventListener('submit', savePopupAdd);

// большой попап

const renderBigPopup = (dataCard) => {
  popupBigImage.src = dataCard.link;
  popupBigName.textContent = dataCard.name;
  popupBigImage.alt = dataCard.alt;
};