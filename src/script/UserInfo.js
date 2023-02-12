export default class UserInfo {
    constructor( {name, description}) {
        this._nameSelector = name;
        this._descriptionSelector = description;
        this._nameInput = document.querySelector('.popup__input_el_name');
        this._nameDescription = document.querySelector('.popup__input_el_description');
    }

    getUserInfo() {
        this._profileInfo = {
            name: this._nameSelector.textContent,
            description: this._descriptionSelector.textContent,
        }
        return this._profileInfo;
    }

    setUserInfo() {
        this._nameSelector.textContent = this._nameInput.value;
        this._descriptionSelector.textContent = this._nameDescription.value;
    }

}