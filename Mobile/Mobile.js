class Mobile{
    constructor(battery, draf, inbox, sent) {
        this._battery = battery;
        this._draf = draf;
        this._inbox = inbox;
        this._sent = sent;
    }
    get battery() {
        return this._battery;
    }
    set battery(value) {
        this._battery = value;
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
    //Soạn tin nhắn
    writeMessage(mess){
        this._draf = mess;
    }
    //Nhận tin nhắn
    receive(mobile){
        //thêm vào danh sách hộp thư đến thư nháp của tham số mobile
        this._inbox.push(mobile._draf);
        //thêm vào danh sách hộp thư gửi thư nháp của tham số mobile
        mobile._sent.push(mobile._draf);
        //làm trắng thư nháp
        mobile._draf = "";
    }
    //Gửi tin nhắn
    send(mobile){
        // thêm vào danh sách hộp thư đến của tham số mobile thư nháp của đt hiện tại
        mobile._inbox.push(this._draf);
        // thêm vào danh sách thư đã gửi của đt hiện tại thư nháp
        this._sent.push(this._draf);
        // làm trắng thư nháp
        this._draf = "";
        this._battery --;
    }
}
let dtCuaTrung = new Mobile(11, "", [], []);
let dtCuaThinh = new Mobile(11, "", [], []);
let dtCuaDAT = new Mobile(11, "", [], []);