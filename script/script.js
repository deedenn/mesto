const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');
const popupShowimg = document.querySelector('.popup__shomimg');
const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const popupCloseBtn = document.querySelector('.popup__btn-close');
const popupSaveBtn = document.querySelector('.popup__btn-submit');
const popupImage = document.querySelector('.popup__showimg');
const popupBigImage = document.querySelector('.big-popup__image');
const popupBigName = document.querySelector('.big-popup__name');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.popup__input_el_name');
const inputDescription = document.querySelector('.popup__input_el_description');
const inputTitle = document.querySelector('.popup__input_el_title');
const inputLink = document.querySelector('.popup__input_el_link');
const formEditElement = document.querySelector('.form__edit');
const formAddElement = document.querySelector('.form__add');
const ElementImage = document.querySelector('.element__image');
const ElementName = document.querySelector('.element__name');
const ElementContainer = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
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

  cardImage.addEventListener('click', () => {
    renderBigPopup(dataCard);
    popupOpen(popupImage);
  });

  const CardLikeBtn = newCard.querySelector('.element__btn-like');

  // удаление карточки
  const deleteBtn = newCard.querySelector('.element__btn-del');
  
  return newCard;
}

const deleteCard = (evt) => {
  evt.target.closest('.element').remove();
}

const like = (evt) => {
  evt.target.closest('.element').classList.toggle('element__btn-like_active');
}
 
// добавление карточки

const renderCard = (dataCard) => {
  ElementContainer.prepend(generateCard(dataCard));
}

// рендер всех карточек

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

// открыть попап

function popupOpen (popup) {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
};

// закрыть попап

function popupClose (popup) {
    console.log(popup);
    popup.classList.remove('popup_opened');
};

// сохранить изменения Edit

function popupEditSave (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    popupClose(popupEdit);
};

// сохранить изменения Add

function popupAddSave (evt) {
  evt.preventDefault();
  renderCard({name: inputTitle.value, link: inputLink.value});
  popupClose(popupAdd);
  inputTitle.value = '';
  inputLink.value = '';
}

// обработка событий кнопок

profileEditBtn.addEventListener('click',
    () => {
        popupOpen(popupEdit);
    }
);

profileAddBtn.addEventListener('click',
    () => {
        popupOpen(popupAdd);
    }
);

popupCloseBtn.addEventListener('click',
    () => {
      popupClose();
      }
);

formAddElement.addEventListener('submit', popupAddSave);

// добавляем лайки

//const CardLike = (evt) => {
//  evt.target.classList.toggle('.element__btn-like_active');
//}

// большой попап

const renderBigPopup = (dataCard) => {
  popupBigImage.src = dataCard.link;
  popupBigName.textContent = dataCard.name;
}