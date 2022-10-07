// BAI TAP 1
/**  Khối 1: Input
 *      Số ngày làm việc
 * 
 *   Khối 2: Các bước xử lý
 *      B1: Tạo hàm tính tiền lương
 *      B2: Gắn hàm vào sự kiên click button
 *      B3: Lấy giá trị từ form
 *      B4: Lập công thức tính toán
 *          Tiền lương = Số ngày làm việc * tiền lương 1 ngày
 *      B5: Thông báo kết quả
 * 
 *   Khối 3: Output
 *      Tiền lương
 *      
 */


function TinhTienLuong(){
    var soNgayLam = document.getElementById("soNgayLam").value;
    var tienLuong = soNgayLam * 100000;
    

    document.getElementById("kqTienLuong").innerHTML = "Tien Luong la: " + tienLuong.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

document.getElementById("tinhTienLuong").onclick = TinhTienLuong;


//BAI TAP 2
/**  Khối 1: Input
 *      Số 1, Số 2, Số 3, Số 4, Số 5
 * 
 *   Khối 2: Các bước xử lý
 *      B1: Tạo hàm tính trung bình
 *      B2: Gắn hàm vào sự kiên click button
 *      B3: Lấy giá trị từ form
 *      B4: Lập công thức tính toán
 *          Tổng 5 số = Số 1 + Số 2 + Số 3 + Số 4 + Số 5
 *          Trung Bình Cộng 5 Số = Tổng 5 số / 5
 *      B5: Thông báo kết quả
 * 
 *   Khối 3: Output
 *      Trung bình cộng 5 số
 *      
 */

function TinhTrungBinh(){
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;
    var so4 = document.getElementById("so4").value;
    var so5 = document.getElementById("so5").value;

    var ketQua = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5))/5;

    document.getElementById("kqTrungBinh").innerHTML = "Ket qua la: " + ketQua;
}

document.getElementById("tinhTrungBinh").onclick = TinhTrungBinh;


//BAI TAP 3
/**  Khối 1: Input
 *      Số tiền Việt Nam muốn quy đổi
 * 
 *   Khối 2: Các bước xử lý
 *      B1: Tạo hàm tính tiền 
 *      B2: Gắn hàm vào sự kiên click button
 *      B3: Lấy giá trị từ form
 *      B4: Lập công thức tính toán
 *          Tiền sau khi quy đổi = số tiền VN muốn quy đổi * Giá USD
 *      B5: Thông báo kết quả
 * 
 *   Khối 3: Output
 *      Tiền sau khi quy đổi
 *      
 */


function TinhTien(){
    var soTienVN = document.getElementById("soTienVN").value;
    var tien = soTienVN * 23500;
    

    document.getElementById("kqTien").innerHTML = "So Tien VN: " + tien.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

document.getElementById("tinhTien").onclick = TinhTien;


// BAI TAP 4

/**  Khối 1: Input
 *      Chiều dài, chiều rộng
 * 
 *   Khối 2: Các bước xử lý
 *      B1: Tạo hàm tính diện tích và chu vi
 *      B2: Gắn hàm vào sự kiên click button
 *      B3: Lấy giá trị từ form
 *      B4: Lập công thức tính toán
 *          Diện tích = chiều dài * chiều rộng
 *          Chu vi = (chiều dài + chiều rộng) * 2
 *      B5: Thông báo kết quả
 * 
 *   Khối 3: Output
 *      Diện tích, chu vi
 *      
 */

function TinhChuViDienTich(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var chuVi = (Number(chieuDai) + Number(chieuRong))*2;
    var dienTich = chieuDai * chieuRong;

    document.getElementById("kqChuViDienTich").innerHTML = "<p>Chu Vi: " + chuVi + "</p><p>Dien Tich: " + dienTich + "</p>";

}

document.getElementById("tinhDienTichChuVi").onclick = TinhChuViDienTich;


// BAI TAP 5

/**  Khối 1: Input
 *      Số có 2 chữ số
 * 
 *   Khối 2: Các bước xử lý
 *      B1: Tạo hàm tính tổng ký số
 *      B2: Gắn hàm vào sự kiên click button
 *      B3: Lấy giá trị từ form
 *      B4: Lập công thức tính toán
 *          hàng chục = Math.floor(số / 10)
 *          hàng đơn vị = số / 10 => lấy phần sư (số % 10)
 *          Tổng ký số = hàng chục + hàng đơn vị
 *      B5: Thông báo kết quả
 * 
 *   Khối 3: Output
 *      Tổng Ký số
 *      
 */

function TinhTongKySo(){
    var so = document.getElementById("soCoHaiChuSo").value;
    var hangChuc = Math.floor(so/10); 
    var hangDonVi = so % 10;
    var tong = hangChuc + hangDonVi;

    document.getElementById("kqTongKySo").innerHTML = "Tổng 2 Ký Số: " + tong;
}

document.getElementById("tinhTongKySo").onclick = TinhTongKySo;