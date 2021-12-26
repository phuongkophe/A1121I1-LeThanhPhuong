function diemTB(){
    let a = parseFloat(prompt('Nhập điểm môn vật lý:'));
    let b = parseFloat(prompt("Nhập điểm môn hóa học:"));
    let c = parseFloat(prompt("Nhập điểm môn toán;"));
    let d = (a +b + c)/3;
    document.write('Điểm trung bình của sinh viên là: '+ d);
}
function chuyenĐoi(){
    let a = prompt('Nhập vào độ C bạn muốn chuyển đổi:');
    let b = (9 * a)/5 +32;
    let c = a + "(0C)" + ' = ' + b + '(0F)';
    document.write(c);
}
function dienTich(){
    let r = prompt("Nhập vào bán kính đường tròn:");
    let S = 3.14*r*r;
    document.write("Diện tích hình tròn là: " + S);
}
function chuVi(){
    let r = prompt("Nhập vào bán kính đường tròn:");
    let V = 2*3.14*r;
    document.write("Chu vi hình tròn là: " + V);
}