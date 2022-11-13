let popup = document.querySelector('.popup');
let profileEditBtn = document.querySelector('.profile__edit-btn');
let profileAddBtn = document.querySelector('.profile__add-btn');
let popupCloseBtn = document.querySelector('.popup__btn-close');
let popupSaveBtn = document.querySelector('.popup__btn-submit');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popup__input_el_name = document.querySelector('.popup__input-name');
let popup__input_el_description = document.querySelector('.popup__input-description');
let formElement = document.querySelector('.form');

function popupOpen () {
    popup.classList.add('popup_opened');
    popup__input_el_name.value = profileName.textContent;
    popup__input_el_description.value = profileDescription.textContent;
};

function popupClose () {
    popup.classList.remove('popup_opened');
};

function popupSave (evt) {
    evt.preventDefault();
    profileName.textContent = popup__input_el_name.value;
    profileDescription.textContent = popup__input_el_description.value;
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