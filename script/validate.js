// блок валидности форм

// классы для валидации

const validationConfig = {
    formSelector: '.form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-submit',
    deactiveButtonClass: 'popup__btn-submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    spanErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_active'
  };
  
  // добавление класса с ошибкой
  
  const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
  };
  
  // удаление класса с ошибкой
  
  const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(validationConfig.errorClass);
  };
  
  // проверка валидности поля инпута
  
  const isValid = (formElement, inputElement) => {
    
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    } else {
      hideInputError(formElement, inputElement, validationConfig);
    };
  };
  
  // проверка валидности всех полей формы
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
  // изменение статус кнопки "сохранить"
  
  const toggleBtnState = (inputList, buttonElement, validationConfig) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(validationConfig.deactiveButtonClass);
      buttonElement.disabled=true;
    } else {
      buttonElement.classList.remove(validationConfig.deactiveButtonClass);
      buttonElement.disabled=false;
    }
  };
  
  // listener для инпутов
  
  const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleBtnState(inputList, buttonElement, validationConfig);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
        toggleBtnState(inputList, buttonElement, validationConfig);
      });
    });
  };
  
  // listener для форм
  
  const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, validationConfig);
    });
  };
  
  enableValidation(validationConfig);
  