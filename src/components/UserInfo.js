export default class UserInfo {
    constructor({ name, description }) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUserInfo() {
        this._profileInfo = {
            name: this._name.textContent,
            description: this._description.textContent,
        }
        return this._profileInfo;
    }

    setUserInfo(formData) {
        this._name.textContent = formData.name;
        this._description.textContent = formData.description;
    }

}