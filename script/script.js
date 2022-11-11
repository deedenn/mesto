let popup = document.querySelector('.popup');
let profileEditBtn = document.querySelector('.profile__edit-btn');
let profileAddBtn = document.querySelector('.profile__add-btn');
let popupCloseBtn = document.querySelector('.popup__btn-close');
let popupSaveBtn = document.querySelector('.popup__btn-submit');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let formInputName = document.querySelector('.popup__input-name');
let formInputDescription = document.querySelector('.popup__input-description');
let formElement = document.querySelector('.form');

function popupOpen () {
    popup.classList.add('popup_opened');
    formInputName.value = profileName.textContent;
    formInputDescription.value = profileDescription.textContent;
}

function popupClose () {
    popup.classList.remove('popup_opened');
}

function popupSave (evt) {
    evt.preventDefault();
    profileName.textContent = formInputName.value;
    profileDescription.textContent = formInputDescription.value;
    popupClose();
}

profileEditBtn.addEventListener('click',
    () => {
        popupOpen();
    }
);

popupCloseBtn.addEventListener('click',
    () => {
        popupClose();
    }    
);

formElement.addEventListener('submit', popupSave());