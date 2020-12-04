class Mobile1 {
    constructor(battery,draf,inbox,sent) {// tham số
        this._battery=battery;// thuộc tính = giá trị
        this._draf=draf;
        this._inbox=inbox;
        this._sent=sent; // nokia._battery
    }
    get tralaitaopin() {
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
        mobile._draf="";
        this._battery--;
    }
    send (mobile){
        this._sent.push(this._draf);
        mobile._inbox.push(this._draf);
        this._draf=[];
        this._battery --;
    }
    deleteAllSent(){
        this._sent=[];
    }
    deleteSent(i,j){
        this._sent.splice(i,1);
        this._sent.splice(j,1);
    }
}
let nokia=new Mobile1(22,"",[],[])// đối tượng mới của lớp Mobile 1
let motorola=new Mobile1(22,"",[],[])
let samsung=new Mobile1(22,"",[],[])