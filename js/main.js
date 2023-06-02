const dsnv = new DanhSachNhanVien();
const validation = new Validation();

//Khởi tạo
function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));

}

function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("DSNV"));
    if(dataLocal !== null) {
        hienThiTable(dataLocal);
        dsnv.mangNV = dataLocal;
    }
}
getLocalStorage()

function themNhanVien() {
    var tk = document.getElementById("tknv").value;
    var ten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mk = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCoBan = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var soGio = document.getElementById("gioLam").value;

}




//Hiển thị bảng nhân viên
function hienThiTable(mang){
    var content = "";

    mang.map(function (nv, index) {

        var trNV = `<tr>
            <td>${nv.tkNV}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
        </tr>`
        content += trNV;
            
    })
    document.getElementById("tableDanhSach").innerHTML = content;
}

//Cập nhật nhân viên
function capNhatNV(){
    var tk = document.getElementById("tknv").value;
    var ten = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mk = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCoBan = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var soGio = document.getElementById("gioLam").value;

    var nv = new themNhanVien(tk,ten,email,mk,ngayLam,luongCoBan,chucVu,soGio);
    
}