export const initialCards = [
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

// конфигурация для валидации

export const validationConfig = {
    formSelector: '.form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-submit',
    deactiveButtonClass: 'popup__btn-submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    spanErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
};

export const profileEditBtn = document.querySelector('.profile__edit-btn');
export const profileAddBtn = document.querySelector('.profile__add-btn');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const formEditElement = document.querySelector('.form_edit');
export const formAddElement = document.querySelector('.form_add');
export const elementContainer = document.querySelector(".elements")