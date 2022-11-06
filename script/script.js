let popup = document.querySelector('.popup');
let profileEditBtn = document.querySelector('.profile__edit-btn');
let profileAddBtn = document.querySelector('.profile__add-btn');
let popupCloseBtn = document.querySelector('.popup__btn-close');
let popupSaveBtn = document.querySelector('.popup__btn-submit');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let inputName = document.querySelector('.popup__input-name');
let inputDescription = document.querySelector('.popup__input-description');

function popupOpen () {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
}

function popupClose () {
    popup.classList.remove('popup_opened');
}

function popupSave () {
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
}

profileEditBtn.addEventListener('click',
    () => {
        popupOpen();
    }
)

popupCloseBtn.addEventListener('click',
    () => {
        popupClose();
    }    
);

popupSaveBtn.addEventListener('click',
    () => {
        popupSave();
    }
);