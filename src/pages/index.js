import './index.css';
import { initialCards, validationConfig } from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  profileEditBtn,
  profileAddBtn,
  profileName,
  profileDescription,
  formEditElement,
  formAddElement,
  elementContainer
} from '../utils/constants.js';

// загрузка начальных карточек

const cardSection = new Section({
  items: initialCards,
  renderer: (data) => {
    cardSection.addItem(createCard(data));
  }
}, '.elements'
);

cardSection.renderItems();

// класс UserInfo

const profileInputValues = new UserInfo({
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description'
});

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
    profileInputValues.setUserInfo(formData);
    popupEditForm.close();
  },
});
popupEditForm.setEventListeners();

// попап новой карточки

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (formData) => {
    elementContainer.prepend(createCard(formData));
    popupAddCard.close();
  }
});
popupAddCard.setEventListeners();

// кнопка открытия попапа редактирования
profileEditBtn.addEventListener('click', () => {
  popupEditForm.open();

  const profileInfo = profileInputValues.getUserInfo();
  profileName.value = profileInfo.name;
  profileDescription.value = profileInfo.description;
});

// кнопка открытия попапа добавления карточки

profileAddBtn.addEventListener('click', () => {
  popupAddCard.open();
  validationFormAdd.resetValidaition();
})

// создание карточек

function createCard(data) {
  const card = new Card(data, '#element-template', handleCardClick);
  const cardElement = card.getView();
  return cardElement;
};

// включение валидации

const validationFormAdd = new FormValidator(validationConfig, formAddElement);
validationFormAdd.enableValidation();

const validationFormEdit = new FormValidator(validationConfig, formEditElement);
validationFormEdit.enableValidation();