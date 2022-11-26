function NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLam,
    _loaiNhanVien
){
    //property
        this.taiKhoan = _taiKhoan;
        this.hoTen = _hoTen;
        this.email = _email;
        this.matKhau = _matKhau;
        this.ngayLam = _ngayLam;
        this.luongCoBan = _luongCoBan;
        this.chucVu = _chucVu;
        this.gioLam = _gioLam;
        this.tongLuong = 0;
        this.loaiNhanVien = _loaiNhanVien;
    //method
        this.tinhTongLuong = function(){
             this.tongLuong = (parseFloat(this.gioLam) * parseFloat(this.luongCoBan));
        }
}