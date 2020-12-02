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
function Rectangle(width,height) {
    this.width=width;
    this.height=height;

    this.area=function () {
        return this.width*this.height;
        // return width*height;

    }
    this.perimeter=function () {
        return (this.width+this.height)*2;
    }
    this.draw=function () {
        document.write("<br>Hinh chu nhat co chieu dai: "+this.width+" chieu rong: "+this.height);
    }

}