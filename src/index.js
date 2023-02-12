import './pages/index.css';

import Card from './script/Card.js';
import FormValidator from './script/FormValidator.js';
import Section from './script/Section.js';
import PopupWithImage from './script/PopupWithImage.js';
import PopupWithForm from './script/PopupWithForm.js';
import UserInfo from './script/UserInfo.js';

const profileEditBtn = document.querySelector('.profile__edit-btn');
const profileAddBtn = document.querySelector('.profile__add-btn');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.popup__input_el_name');
const inputDescription = document.querySelector('.popup__input_el_description');
const inputTitle = document.querySelector('.popup__input_el_title');
const inputLink = document.querySelector('.popup__input_el_link');
const formEditElement = document.querySelector('.form_edit');
const formAddElement = document.querySelector('.form_add');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Санкт-Петербург',
    link: 'https://ixbt.online/live/topics/preview/00/02/98/75/afa6c05860.jpg',
  },
  {
    name: 'Архангельск',
    link: 'https://img.geliophoto.com/arkh/27_arkh.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];

// загрузка начальных карточек

const cardList = new Section ({
  items: initialCards,
  renderer: (data) => {
    cardList.addItem(renderCard(data));
  }
}, '.elements'
);

cardList.renderItems();

// класс UserInfo

const profileInputValues = new UserInfo ({
  name: profileName,
  description: profileDescription
})

// большой попап

const popupBigWithImage = new PopupWithImage('.popup_showimg');
popupBigWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupBigWithImage.open(name, link);
}

// попап редактирования профиля

const popupEditForm = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleFormSubmit: (formData) => {
    profileInputValues.setUserInfo(formData.name, formData.description);
    popupEditForm.close();
  },
});
popupEditForm.setEventListeners();

// попап новой карточки

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (formData) => {
    const card = {
      name: inputTitle.value,
      link: inputLink.value
    };
    const cardElement = renderCard(card);
    cardList.addItem(cardElement);
    popupAddCard.close();
   }
  });
popupAddCard.setEventListeners();

// кнопка открытия попапа редактирования
profileEditBtn.addEventListener('click', () => {
  popupEditForm.open();
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
});

// кнопка открытия попапа добавления карточки

profileAddBtn.addEventListener('click', () => {
  popupAddCard.open();
})

// рендер всех карточек

 function renderCard (data) {
   const card = new Card(data, '#element-template', handleCardClick);
   const cardElement = card.getView();
 //  elementContainer.prepend(cardElement);
   return cardElement;
 };

// конфигурация для валидации

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn-submit',
  deactiveButtonClass: 'popup__btn-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  spanErrorClass: 'popup__input-error',
  errorClass: 'popup__input-error_active'
};

// включение валидации

const validationFormAdd = new FormValidator(validationConfig, formAddElement);
  validationFormAdd.enableValidation();

const valdationFormEdit = new FormValidator(validationConfig, formEditElement);
  valdationFormEdit.enableValidation();