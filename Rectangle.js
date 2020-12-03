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
// function Rectangle(width,height) {
//     this.width=width;
//     this.height=height;
//     this.area=function () {
//         return this.width*this.height;
//         // return width*height;
//
//     }
//     this.perimeter=function () {
//         return (this.width+this.height)*2;
//     }
//     this.draw=function () {
//         document.write("<br>Hinh chu nhat co chieu dai: "+this.width+" chieu rong: "+this.height);
//     }
//
// }
class Rectangle{
    constructor (width,height){
        this.width=width;
        this.height=height;
    }

    get width() {
        return  this.width;
    }

    set width(value) {
        this.width = value;
    }

    get height() {
        return this.height;
    }

    set height(value) {
        this.height = value;
    }
    get area() {
        return this.width*this.height;
    }
    get perimeter() {
        return (this.height+this.width)*2;
    }

}


