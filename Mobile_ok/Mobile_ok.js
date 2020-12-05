class Mobile{
    constructor(battery,draft,inbox,sent) { // tham số
        this._battery=battery; // thuộc tính = giá trị
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
    // Viết hàm soạn tin nhắn
    writeMessage(mess){
        if(this._status){
            this._draft=mess;
        }
        else {
            console.log("DT đang tắt")
        }
    }
    // Viết hàm gửi tin nhắn
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
    receive(mobile){ // Hàm nhận tin nhắn
        if (this._status){
            this._inbox.push(mobile._draf); // Thêm vào danh sách hộp thư đến thư nháp của tham số mobile
            mobile._sent.push(mobile._draf); // Thêm vào danh sách hộp thư đã gửi thư nháp của tham số mobile
            mobile._draf="";// Làm trống như nháp của tham só mobile
            this._battery--;
        }
        else {
            console.log("DT đang tắt")
        }
    }
    deleteAllSend(){ // Xóa tất cả tin nhắn đã gửi
        if(this._status){
            this._sent=[];
        }
        else {
            console.log("DT đang tắt")
        }
    }
    deleteSend(i){ // Xóa 1 tin nhẵn đã gửi
        if(this._status){
            this._sent.splice(i);
        }
        else {
            console.log("DT đang tắt")
        }
    }
    deleteAllInbox(){ // Xóa tất cả tin nhắn đã nhận
        if(this._status){
            this._inbox=[];
        }
        else {
            console.log("DT đang tắt")
        }
    }
    deleteInbox(i){ // Xóa 1 tin nhắn
        if(this._status){
            this._inbox.splice(i);
        }
        else {
            console.log("DT đang tắt")
        }
    }
    turnOnOff(){ // Bật tắt đthoai
        this._status = !this._status;
    }
}
let nokia=new Mobile(22,"",[],[]);
let samsung=new Mobile(22,"",[],[]);
let motorola=new Mobile(22,"",[],[]);