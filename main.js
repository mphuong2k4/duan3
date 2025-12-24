/*
Nhập vào một chuỗi từ bàn phím
1. đếm xem có bao nhiêu ký tự in thường
2. đếm xem có bao nhiêu ký tự in hoa
3. đếm xem có bao nhiêu ký tự số
4. đếm xem có bao nhiêu ký tự space

let chuoi = prompt("Mời bạn nhập vào 1 chuỗi");
let countInThuong = 0;
let countInHoa = 0;
let countSo = 0;
let countSpace = 0;

console.log("Chuỗi bạn nhập là: " + chuoi);

for (let i = 0; i < chuoi.length; i++) {
    if (chuoi[i] >= "a" && chuoi[i] <= "z") {
        countInThuong += 1;
    } else if (chuoi[i] >= "A" && chuoi[i] <= "Z") {
        countInHoa += 1;
    } else if (chuoi[i] >= "0" && chuoi[i] <= "9") {
        countSo += 1;
    } else if (chuoi[i] === " ") {
        countSpace += 1;
    }
}

console.log(`Số ký tự thường là: ${countInThuong}
    Số ký tự hoa là: ${countInHoa}
    Số ký tự số là: ${countSo}
    Số ký tự trắng là: ${countSpace}`);

*/
/*
Kiểm tra mật khẩu hợp lệ:
- Hợp lệ khi có ít nhất 6 kí tự
- Chứa ít nhất 1 số
- ít nhất 1 chữ viết hoa
- ít nhất 1 chữ viết thường
*Cho người dùng nhập vào mật khẩu để login/so sánh, nếu đúng mở cửa/sai quá 5 lần khóa đăng nhập thoát chương trình
*/

function isPasswordValid() {
    if (string)
};