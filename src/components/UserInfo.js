export default class UserInfo {
    constructor({ nameSelector, descriptionSelector }) {
        this._nameSelector = document.querySelector(nameSelector);
        this._descriptionSelector = document.querySelector(descriptionSelector);
    }

    getUserInfo() {
        this._profileInfo = {
            name: this._nameSelector.textContent,
            description: this._descriptionSelector.textContent,
        }
        return this._profileInfo;
    }

    setUserInfo(formData) {
        this._nameSelector.textContent = formData.name;
        this._descriptionSelector.textContent = formData.description;
    }

}