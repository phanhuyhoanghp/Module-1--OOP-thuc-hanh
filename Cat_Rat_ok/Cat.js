class Cat {
    constructor(name, weight, speed) {
        this._name = name;
        this._weight = weight;
        this._speed = speed;
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
    scream(){
        return this._name + " meo, meo";
    }
    catch(rat){
        if (this._speed > rat._speed){
            return this._name + " da bat dc chuot " + rat._name;
        }
    }
    eat(rat){
        if (rat.status){
            rat.status = false;
            this.weight += rat.weight;
        }
    }
}
let chuot1 = new Rat("Dat", 30, 40);
let chuot2 = new Rat("Dat1", 32, 10);
let chuot3 = new Rat("Dat2", 34, 10);
let ky = new Cat("The Ky", 39, 30);