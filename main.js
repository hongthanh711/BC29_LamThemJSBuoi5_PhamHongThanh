function getEle(id) {
  return document.getElementById(id);
}

// Bài 1
/**
 * Input:
 *  +Họ tên
 *  +Tổng thu nhập
 *  +Số người phụ thuộc
 * Process:
 *  TNCT = TTNN - 4Tr - Số người phụ thuộc*1.6
 *  Nhân thuế suất theo lũy tiến
 * Output:
 *  Tiền Thuế
 */

getEle("btn-tinhThue").onclick = function () {
  var tongThuNhap = getEle("tongThuNhap").value * 1;
  var soNguoiPhuThuoc = getEle("soNguoiPhuThuoc").value * 1;

  var TNCT = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
  var tienThue = 0;
  var bac1 = 0;
  var bac2 = 0;
  var bac3 = 0;
  var bac4 = 0;
  var bac5 = 0;
  var bac6 = 0;
  var bac7 = 0;

  if (TNCT > 0) {
    if (TNCT <= 60) {
      bac1 = TNCT * 0.05;
      tienThue = bac1;
    } else if (TNCT <= 120) {
      bac1 = 60 * 0.05;
      bac2 = (TNCT - 60) * 0.1;
      tienThue = bac1 + bac2;
    } else if (TNCT <= 210) {
      bac1 = 60 * 0.05;
      bac2 = 60 * 0.1;
      bac3 = (TNCT - 120) * 0.15;
      tienThue = bac1 + bac2 + bac3;
    } else if (TNCT <= 384) {
      bac1 = 60 * 0.05;
      bac2 = 60 * 0.1;
      bac3 = 90 * 0.15;
      bac4 = (TNCT - 210) * 0.2;
      tienThue = bac1 + bac2 + bac3 + bac4;
    } else if (TNCT <= 624) {
      bac1 = 60 * 0.05;
      bac2 = 60 * 0.1;
      bac3 = 90 * 0.15;
      bac4 = 174 * 0.2;
      bac5 = (TNCT - 384) * 0.25;
      tienThue = bac1 + bac2 + bac3 + bac4 + bac5;
    } else if (TNCT <= 960) {
      bac1 = 60 * 0.05;
      bac2 = 60 * 0.1;
      bac3 = 90 * 0.15;
      bac4 = 174 * 0.2;
      bac5 = 240 * 0.25;
      bac6 = (TNCT - 624) * 0.3;
      tienThue = bac1 + bac2 + bac3 + bac4 + bac5 + bac6;
    } else {
      bac1 = 60 * 0.05;
      bac2 = 60 * 0.1;
      bac3 = 90 * 0.15;
      bac4 = 174 * 0.2;
      bac5 = 240 * 0.25;
      bac6 = 336 * 0.3;
      bac7 = (TNCT - 960) * 0.35;
      tienThue = bac1 + bac2 + bac3 + bac4 + bac5 + bac6 + bac7;
    }
  } else {
    tienThue = 0;
  }

  var result = "Thuế thu nhập cá nhân là: " + tienThue + " triệu đồng";
  // Show kq
  getEle("ketqua-tinhThue").innerHTML = result;
};

// Bài 2
/**
 * Input:
 *  Loại KH
 *  Phí xử lý
 *  Phí Dịch vụ
 *  Phí thuê
 *  Số kết nối
 *  Số Kênh cao cấp
 * Process:
 * Output: Tiền cấp
 */

// Khai báo số liệu
const PHI_HD_DAN = 4.5;
const PHI_DV_DAN = 20.5;
const PHI_THUE_KENH_DAN = 7.5;

const PHI_HD_DN = 15;
const PHI_DV_DN = 75;
const PHI_DV_THEM_DN = 5;
const PHI_THUE_KENH_DN = 50;

var tienKetNoi = 0;
var tienThueKenh = 0;

// if (getEle("loaiKhachHang").value === "dn") {
//   getEle("soKetNoi").style.display = "block";
// }

// Onclick
getEle("btn-tinhTien").onclick = function () {
  // Dom số liệu
  var loaiKH = getEle("loaiKhachHang").value;
  var soKetNoi = getEle("soKetNoi");
  var soKenhCaoCap = getEle("soKenhCaoCap");

  tienThueKenh = soKenhCaoCap * PHI_THUE_KENH_DAN;
};
