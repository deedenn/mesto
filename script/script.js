let popup = document.querySelector('.popup');
let profileEditBtn = document.querySelector('.profile__edit-btn');
let profileAddBtn = document.querySelector('.profile__add-btn');
let popupCloseBtn = document.querySelector('.popup__btn-close');
let popupSaveBtn = document.querySelector('.popup__btn-submit');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let inputName = document.querySelector('.popup__input_el_name');
let inputDescription = document.querySelector('.popup__input_el_description');
let formElement = document.querySelector('.form');

function popupOpen () {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
};

function popupClose () {
    popup.classList.remove('popup_opened');
};

function popupSave (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    popupClose();
};

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

formElement.addEventListener('submit', popupSave);