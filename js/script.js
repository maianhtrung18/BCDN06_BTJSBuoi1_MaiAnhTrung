// BAI TAP 1

function TinhTienLuong(){
    var soNgayLam = document.getElementById("soNgayLam").value;
    var tienLuong = soNgayLam * 100000;
    

    document.getElementById("kqTienLuong").innerHTML = "Tien Luong la: " + tienLuong.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

document.getElementById("tinhTienLuong").onclick = TinhTienLuong;

// BAI TAP 2
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

// BAI TAP 3

function TinhTien(){
    var soTienVN = document.getElementById("soTienVN").value;
    var tien = soTienVN * 23500;
    

    document.getElementById("kqTien").innerHTML = "So Tien VN: " + tien.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

document.getElementById("tinhTien").onclick = TinhTien;


// BAI TAP 4

function TinhChuViDienTich(){
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var chuVi = (Number(chieuDai) + Number(chieuRong))*2;
    var dienTich = chieuDai * chieuRong;

    document.getElementById("kqChuViDienTich").innerHTML = "<p>Chu Vi: " + chuVi + "</p><p>Dien Tich: " + dienTich + "</p>";

}

document.getElementById("tinhDienTichChuVi").onclick = TinhChuViDienTich;


// BAI TAP 5

function TinhTongKySo(){
    var so = document.getElementById("soCoHaiChuSo").value;
    var hangChuc = Math.floor(so/10); 
    var hangDonVi = so % 10;
    var tong = hangChuc + hangDonVi;

    document.getElementById("kqTongKySo").innerHTML = "Tổng 2 Ký Số: " + tong;
}

document.getElementById("tinhTongKySo").onclick = TinhTongKySo;