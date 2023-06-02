function DanhSachNhanVien() {
    this.mangNV = [];//mảng đối tượng
    //Phương thức
    this.themNV = function(nv){
        // sv: 1 sv mới cần thêm
        this.mangNV.push(nv);
    };
    this.timIndex = function(loaiNV) {
        var indexFind = -1;
        this.mangNV.map(function(nv,index){
            if(nv.loaiNV === loaiNV){
                //tìm thấy sv
                indexFind = index;
            }
        }) ;
        console.log(indexFind);
        return indexFind;
    };
    this.xoaNV = function(loaiNV) {
        // index: vị trí cần xóa
        var index = this.timIndex(loaiNV);
        console.log(index);
        if(index > -1){
            //tìm thấy
            //splice(vị trí bắt đầu của phần tử cần xóa,số lượng cần xóa)
            this.mangNV.splice(index,1);
        }
    }
    this.capNhat = function(nv){
        //tìm nv cần cập nhật
        var indexFind = this.timIndex(nv.loaiNV);
        if(indexFind > -1){
            //tìm thấy mới cập nhật
            //nv: chứa thông tin mới 
            // gán dư liệu mới vào vị trí của nhan vien cần cập nhật
            dsnv.mangNV[indexFind] = nv;
            return true;//đã cập nhật
        }else{
            return false;
        }
    }
    
}