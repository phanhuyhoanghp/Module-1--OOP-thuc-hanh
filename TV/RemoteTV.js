class TV{
    constructor(channel,volume) {
        this._channel=channel;
        this._volume=volume;
        this._status=false;
    }

    get channel() {
        return this._channel;
    }
    }
    set channel(channel) {
        this._channel=channel;
    }
    get volume() {
        return this._volume;
    }

    Mode() {
        if(this._status){
            return "TV ON";
        }
        else return  "TV OFF";
    }
}
class Remote {
    constructor(id) {
        this.id=id;
    }
    switchOnOff(tv){
        tv._status=!tv.status;
    }
    changeChannel(tv,channel){
        tv._channel=channel;
    }
    increaseVolume(tv,volume){
        tv.volume+=5
    }
    decreaseVolume(tv,volume){
        tv.volume-=5
    }
}