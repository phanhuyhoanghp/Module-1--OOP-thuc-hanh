function Rectangle(width,height) {
    this.width=width;
    this.height=height;

    this.getWidth=function () {
        return this.width;
    }
    this.getHeight=function () {
        return this.height;
    }
    this.setWidth=function (newWidth) {
        this.width=newWidth;
    }
    this.setHeight=function (newHeight) {
        this.height=newHeight;
    }

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
