class Battery{
    constructor() {
        this.energy = 100;
    }

    getEnergy(){
        return this.energy;
    }

    isEmpty(){
        return this.energy <= 0;
    }

    decrease(){
        if(!this.isEmpty()){
            this.energy -= 25;
        }else {
            alert("Het pin roi")
        }
    }

    setFullEnergy(){
        this.energy = 100;
    }
}