import './index.css';
import { validationConfig } from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import UserInfo from '../components/UserInfo.js';
import {
  profileEditBtn,
  profileAddBtn,
  profileAvatarBtn,
  elementBtnDel,
  formEditElement,
  formAddElement,
  formAvatarElement,
  cradsContainer,
} from '../utils/constants.js';
import Api from '../components/Api.js';

const configApi = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '088400de-a8be-47a0-9e64-a3f51543a3fa',
    'Content-Type': 'application/json'
  }
};

const api = new Api(configApi);

let userId;

// загрузка начальных карточек

const cardSection = new Section({
  renderer: (data) => {
    cardSection.addItem(createCard(data));
  }
}, '.elements'
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([info, cards]) => {
    profileInputValues.setUserInfo(info);
    userId = info._id;
    cardSection.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(err);
  });

// класс UserInfo

const profileInputValues = new UserInfo({
  name: '.profile__name',
  about: '.profile__description',
  avatar: '.profile__avatar',
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
    popupEditForm.setBtnText('Сохранение...');
    api.editProfileInfo(formData)
      .then((formData) => {
        profileInputValues.setUserInfo(formData);
        popupEditForm.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupEditForm.setBtnText('Сохранить'));
  },
});
popupEditForm.setEventListeners();

// кнопка открытия попапа редактирования
profileEditBtn.addEventListener('click', () => {
  popupEditForm.setInputValues(profileInputValues.getUserInfo());
  popupEditForm.open();
  validationFormEdit.resetValidaition();
});

// попап редактирования аватара

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.popup_new-avatar',
  handleFormSubmit: (formData) => {
    popupEditAvatar.setBtnText('Сохранение...');
    api.changeAvatar(formData)
      .then((formData) => {
        profileInputValues.setUserInfo(formData);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => popupEditAvatar.setBtnText('Сохранить'));
  },
});
popupEditAvatar.setEventListeners();

// кнопка открытия попапа изменения аватара

profileAvatarBtn.addEventListener('click', () => {
  popupEditAvatar.open();
  popupEditAvatar.resetValidaition();
});

// попап новой карточки

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_add',
  handleFormSubmit: (formData) => {
    popupAddCard.setBtnText('Сохранение...');
    api.addNewCard(formData.name, formData.link)
    .then(formData => {
      cardSection.addItem(createCard(formData));
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => popupAddCard.setBtnText('Сохранить')) 
  }
});
popupAddCard.setEventListeners();

// кнопка открытия попапа добавления карточки

profileAddBtn.addEventListener('click', () => {
  popupAddCard.open();
  validationFormAdd.resetValidaition();
})

// попап удаления карточки

const popupDelCard = new PopupDeleteCard({popupSelector: '.popup_submit'});
popupDelCard.setEventListeners();

// создание карточек

function createCard(data) {
  const card = new Card({
    data,
    templateSelector: '#element-template',
    userId,
    handleCardClick,
    handleSetLike: (cardId) => {
      api.setLikeCard(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(err)
        });
    },
    handleDeleteLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDeleteCard: (cardId) => {
      popupDelCard.open();
      popupDelCard.handleFormSubmit(() => {
        popupDelCard.setBtnText('Удаление...')
        api.deleteCard(cardId)
        .then(() => {
          card.removeCard();
          popupDelCard.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupDelCard.setBtnText('Да');
        })
      })
    }
  });
  const cardElement = card.getView();
  return cardElement;
};

// включение валидации

const validationFormAdd = new FormValidator(validationConfig, formAddElement);
validationFormAdd.enableValidation();

const validationFormEdit = new FormValidator(validationConfig, formEditElement);
validationFormEdit.enableValidation();

const validationFormAvatar = new FormValidator(validationConfig, formAvatarElement);
validationFormAvatar.enableValidation();