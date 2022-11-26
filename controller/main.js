function getEle(id) {
  return document.getElementById(id);
}

var dsnv = new DanhSachNhanVien();

const tinhTongLuong = (chucVu, luongCoBan) => {
  const loaiNhanVien = {
    boss: (luong) => (luong *= 3),
    leader: (luong) => (luong *= 2),
    employee: (luong) => (luong *= 1),
  };
  return loaiNhanVien?.[chucVu]?.(luongCoBan) ?? {};
};

const tinhXepLoaiNhanVien = (gioLam) => {
  // 192, 176, 160
  if (gioLam >= 192) return "xuat xac";
  if (gioLam >= 176 && gioLam < 192) return "gioi";
  if (gioLam >= 160 && gioLam < 176) return "kha";
  return "trung binh";
};

function layThongTinNhanVien() {
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCoBan = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;
  // var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam);
  const nv = {
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam,
    loaiNhanVien: tinhXepLoaiNhanVien(gioLam),
    tongLuong: tinhTongLuong(chucVu, luongCoBan),
  };
  // nv.tinhTongLuong(chucVu, luongCoBan);
  // nv.loaiNhanVien();
  return nv;
}

getEle("btnThemNV").onclick = function () {
  var nv = layThongTinNhanVien();
  dsnv.themNv(nv);
  renderTable(dsnv.arr);
};
// hiện thông tin
function renderTable(data) {
  var tableContent = "";

  for (var i = 0; i < data.length; i++) {
    var nv = data[i];
    tableContent += `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNhanVien}</td>
        <td>
            <button class="btn btn-info" onclick="editNv('${nv.taiKhoan}')">Edit</button>
            <button class="btn btn-danger" onclick="deleteNv('${nv.taiKhoan}')">Delete</button>
        </td>
        </tr>
        `;

    getEle("tableDanhSach").innerHTML = tableContent;
  }
}

// edit NV
function editNv(taiKhoan) {
  var nv = dsnv.layChiTietNV(taiKhoan);
  if (nv) {
    getEle("tknv").value = nv.taiKhoan;
    getEle("tknv").disabled = true;
    getEle("name").value = nv.hoTen;
    getEle("email").value = nv.email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCoBan;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;
  }
}

function deleteNv(taiKhoan) {
  dsnv.xoaNv(taiKhoan);
  renderTable(dsnv.arr);
}

// update nhân viên
getEle("btnCapNhat").addEventListener("click", function () {
  var nv = layThongTinNhanVien();
  dsnv.capNhatNv(nv);
  renderTable(dsnv.arr);
  
  console.log(nv);
});

// tim xếp loại nv
document.querySelector("#searchName").addEventListener("input", (e) => {
  const value = e?.target?.value;
  const _dsnv = dsnv.arr?.filter((item) => {
    const result = item?.chucVu?.match(`${value}`);
    if (result !== null) return item;
  });
  renderTable(_dsnv);
});

document.querySelector("#btnTimNV").addEventListener("click", () => {
  fakeData?.map((e) => {
    dsnv.themNv(e);
    renderTable(dsnv.arr);
  });
});
