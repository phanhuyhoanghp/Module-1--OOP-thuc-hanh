// function Rectangle(width, height) {
//     this.width = width;
//     this.height.height;
//     this.area = function () {
//         return this.width * this.height;
//         // return width.height
//     }
// }
//
// this.perimeter = function () {
//     return (this.width + this.height) * 2;
// }
// this.draw = function () {
//     document.write('Hinh chữ nhật có chiều dài: ' + this.width + ' chiều rộng' + this.height);
// }

class Rectangle{
    constructor (width,height){
        this._width=width;
        this._height=height;
    }

    get width() {
        return  this._width;
    }
    set width(value) {
        this.width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this.height = value;
    }
    get area() {
        return this._width*this._height;
    }
    get perimeter() {
        return (this._height+this._width)*2;
    }

}


