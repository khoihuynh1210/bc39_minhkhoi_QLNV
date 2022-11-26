function DanhSachNhanVien(){
    this.arr = [];

    
this.themNv = function(nv){
    dsnv.arr.push(nv);
};

this.timViTriNV = function(taiKhoan){
    var index = -1;
    for(var i = 0; i < this.arr.length; i++){
        var nv = this.arr[i];
        if(nv.taiKhoan === taiKhoan){
            index = i;
            break;
        }
    }
    return index;
};

this.xoaNv = function(taiKhoan){
    var index = this.timViTriNV(taiKhoan)
    if(index !== -1){
        this.arr.splice(index,1);
    }
};
this.suaNv = function(){

};

this.layChiTietNV = function(taiKhoan){
    var index = this.timViTriNV(taiKhoan);
    if(index !== -1){
        return this.arr[index];
    }
}

this.capNhatNv = function(nv){
    var index = this.timViTriNV(nv.hoTen);
    if (index !== - 1){
        this.arr[index] = nv
    }
};




this.timKiemNv = function(){};
}

