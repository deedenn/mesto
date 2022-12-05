const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupShowimg = document.querySelector('.popup_shomimg');
const popupAll = document.querySelectorAll('.popup');
const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const popupCloseBtn = document.querySelectorAll('.popup__btn-close');
const popupSaveBtn = document.querySelector('.popup__btn-submit');
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
const ElementImage = document.querySelector('.element__image');
const ElementName = document.querySelector('.element__name');
const ElementContainer = document.querySelector('.elements');

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

const cardArea = document.querySelector('#element-template').content.querySelector('.element');

// генерация карточки

const generateCard = (dataCard) => {
  const newCard = cardArea.cloneNode(true);
  
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
  cardLikeBtn.addEventListener('click', likeCard);

  // удаление карточки
  const deleteBtn = newCard.querySelector('.element__btn-del');
  deleteBtn.addEventListener('click', deleteCard);
  
  return newCard;
};

const deleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

const likeCard = (evt) => {
  evt.target.closest('.element__btn-like').classList.toggle('element__btn-like_active');
};

// добавление карточки

const renderCard = (dataCard) => {
  ElementContainer.prepend(generateCard(dataCard));
};

// рендер всех карточек

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

// открыть попап

function openPopup (popup) {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
};

// закрыть попап

popupCloseBtn.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

function closePopup (popup) {
    popup.classList.remove('popup_opened');
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
};

// обработка событий кнопок

profileEditBtn.addEventListener('click', () => {
        openPopup(popupEdit);
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
};