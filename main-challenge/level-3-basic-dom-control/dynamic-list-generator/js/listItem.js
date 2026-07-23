export class ListItem {
  constructor() {
    this._id = null;
    this._text = null;
    this._isStruck = false;
  }

  getId() {
    return this._id;
  }

  setId(id) {
    this._id = id;
  }

  getText() {
    return this._text;
  }

  setText(text) {
    this._text = text;
  }

  getIsStruck() {
    return this._isStruck;
  }

  setIsStruck(boolean) {
    if (typeof boolean === "boolean") {
      this._isStruck = boolean;
    }
  }
}
