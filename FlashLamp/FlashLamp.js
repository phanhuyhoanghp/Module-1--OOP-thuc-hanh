
class FlashLamp {
    constructor() {
        this._battery=Battery;
        this._status=false;
    }
    connectToBattery(battery){
        this._battery = battery;
    }

    turnOn() {
        this._battery.decrease();
        if(!this._battery.isEmpty()){
            alert("Den sang. Pin con lai la " + this._battery.getEnergy());
        }

    }

    turnOff(){
        alert("Tat den")
    }

    switchLamp(){
        this._status = !this._status;
        if(this._status){
            this.turnOn();
        }else {
            this.turnOff();
        }
    }

}

