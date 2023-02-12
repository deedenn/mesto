export default class Section {
    constructor({ items, renderer}, containerSelector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._selector = document.querySelector(containerSelector);
    }

    renderItems() {
//        this._initialArray.forEach(item => {
//            this._renderer(item);
//        });
        this._initialArray.forEach(this._renderer);
    }

    addItem (element) {
        this._selector.prepend(element);
    }
}