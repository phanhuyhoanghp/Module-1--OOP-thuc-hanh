class Mobile_ok{
    constructor(battery,draft,inbox,sent) {
        this._battery=battery;
        this._draft=draft;
        this._inbox=inbox;
        this._sent=sent;
        this._status = true;
    }

    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }

    get draft() {
        return this._draft;
    }

    set draft(value) {
        this._draft = value;
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
        if(this._status){
            this._draft=mess;
        }
        else {
            console.log("DT đang tắt")
        }
    }
    send(mobile){
        if(this._status){
            this._sent.push(this._draft);
            mobile._inbox.push(this._draft);
            this._draft="";
            this._battery--;
            mobile._battery--;
        }
        else {
            console.log("DT đang tắt")
        }
    }
    receive(mobile){
        if (this._status){
            this._inbox.push(mobile._draf);
            mobile._sent.push(mobile._draf);
            mobile._draf=[];
            this._battery--;
        }
        else {
            console.log("DT đang tắt")
        }
    }
    deleteAllSend(){
        if(this._status){
            this._sent=[];
        }
        else {
            console.log("DT đang tắt")
        }
    }
    deleteSend(i){
        if(this._status){
            this._sent.splice(i);
        }
        else {
            console.log("DT đang tắt")
        }
    }
    deleteAllInbox(){
        if(this._status){
            this._inbox=[];
        }
        else {
            console.log("DT đang tắt")
        }
    }
    deleteInbox(i){
        if(this._status){
            this._inbox.splice(i);
        }
        else {
            console.log("DT đang tắt")
        }
    }
    turnOnOff(){
        this._status = !this._status;
    }
}
let nokia=new Mobile_ok(22,"",[],[]);
let samsung=new Mobile_ok(22,"",[],[]);
let motorola=new Mobile_ok(22,"",[],[]);