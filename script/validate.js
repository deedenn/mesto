// блок валидности форм

// классы для валидации

const validationConfig = {
    formSelector: '.form',
    inputSelector: '.form__item',
    submitButtonSelector: '.form__btn-submit',
    deactiveButtonClass: 'form__btn-submit_error',
    inputErrorClass: 'form__item_line-error',
    errorClass: 'form__item-error_active'
  };
  
  // добавление класса с ошибкой
  
  const showInputError = (formElement, inputElement, errMessage, validationConfig) => {
    const errorElement = formElement.querySelector('.${inputElement.id}-error');
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errMessage;
    errorElement.classList.add(validationConfig.errorClass);
  };
  
  // удаление класса с ошибкой
  
  const hideInputError = (formElement, inputElement, errMessage, validationConfig) => {
    const errorElement = formElement.querySelector('.${inputElement.id}-error');
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
    }
  };
  
  // проверка валидности всех полей формы
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
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
    const inputList= array.from(formELement.querySelectorAll(validationConfig.inputSelector));
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
    const formList = array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, validationConfig);
    });
  };
  
  enableValidation(validationConfig);
  