class Mobile1 {
    constructor(battery,draf,inbox,sent) {
        this._battery=battery;
        this._draf=draf;
        this._inbox=inbox;
        this._sent=sent;
    }
    get battery() {
        return this._battery;
    }
    get draf() {
        return this._draf;
    }

    set draf(value) {
        this._draf = value;
    }

    get inbox() {
        return this._inbox;
    }

    set inbox(value) {
        this._inbox = value;
    }

    get sent() {
        return this._sent;
    }

    set sent(value) {
        this._sent = value;
    }
    writeMessage(mess){
        this._draf=mess;
    }
    receive(mobile){
        this._inbox.push(mobile._draf);
        mobile._sent.push(mobile._draf);
        this._draf="";
        this._battery--;
    }
    sent(mobile){
        mobile._inbox.push(this._draf);
        this._sent.push(this._draf);
        this._draf="";
        this._battery--;
    }
}
let nokia=new Mobile1(22,"",[],[])
let motorola=new Mobile1(22,"",[],[])
let samsung=new Mobile1(22,"",[],[])
console.log(nokia.battery)
console.log(nokia.writeMessage("jfhsj"));
console.log(nokia.draf)
console.log(motorola.inbox);
console.log(motorola.sent(samsung))