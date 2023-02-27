export default class UserInfo {
    constructor({ name, about, avatar }) {
        this._name = document.querySelector(name);
        this._about = document.querySelector(about);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo() {
        this._profileInfo = {
            name: this._name.textContent,
            about: this._about.textContent,
            avatar: this._avatar.src,
        }
        return this._profileInfo;
    }

    setUserInfo(formData) {
        this._name.textContent = formData.name;
        this._about.textContent = formData.about;
        this._avatar.src = formData.avatar;
    }

}