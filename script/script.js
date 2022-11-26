const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');
const popupShowimg = document.querySelector('.popup__shomimg');
const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const popupCloseBtn = document.querySelector('.popup__btn-close');
const popupSaveBtn = document.querySelector('.popup__btn-submit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.popup__input_el_name');
const inputDescription = document.querySelector('.popup__input_el_description');
const inputTitle = document.querySelector('.popup__input_el_title');
const inputLink = document.querySelector('.popup__input_el_link');
const formElement = document.querySelector('.form');
const ElementImage = document.querySelector('.element__image');
const ElementName = document.querySelector('.element__name');
const ElementBtnLike = document.querySelector('.element__btn-like');
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
  console.log(cardImage.link);

  return newCard;
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
    popup.classList.remove('popup_opened');
};

// сохранить изменения

function popupSave (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    popupClose();
};

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
      popupClose(popupAdd);  
      popupClose(popupEdit);
      }
);

formElement.addEventListener('submit', popupSave);

function btnLike () {
    ElementBtnLike.classList.add('element__btn-like_active');
    ElementBtnLike.classList.remove('element__btn-like');
  } 


// добавляем лайки

const handleCardLike = (evt) => {
  evt.target.classList.toggle('element__like_active');
}