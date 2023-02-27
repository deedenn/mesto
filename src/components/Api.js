export default class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    // получение информации о пользователе
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject());
    }

    // загрузка всех карточек

    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject());
    }

    // редактирование профиля
    editProfileInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject());
    }

    // поменять аватар

    changeAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.link,
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject());
        }

    // добавление новой карточки

    addNewCard(name, link) {
        console.log(name, link);
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link,
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject());
    }

    // удаление созданной карточки

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject());
    }

    // лайк карточке

    setLikeCard(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject());
    }

    // убрать лайк

    deleteLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject());
    }

}