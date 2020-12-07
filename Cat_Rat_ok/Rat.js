class Rat {
    constructor(_name, _weight, _speed) {
        this._status = true;
        this._name = _name;
        this._weight = _weight;
        this._speed = _speed;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    sound(){
        return this._name + " chít chít";
    }
}