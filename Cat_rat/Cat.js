class Cat {
    constructor(name,weight,speed) {
        this._name=name;
        this._weight=weight;
        this._speed=speed;
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
    catch(rat){
        if(this._speed>rat._speed){
            return this._name + "đã bắt được chuột"+ rat._name;
        }
    }
    eat(rat){
        if(rat._status){
            rat._status=false;
            this.weight+=rat._weight;
        }
    }
}