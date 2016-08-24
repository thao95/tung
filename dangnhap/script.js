/**
 * Created by AD on 8/13/2016.
 */
demo2.onclick=function () {
    var ten=document.getElementById("demo").value;
    var matkhau=document.getElementById("demo1").value;
    if((ten=="admin")&&(matkhau=="123456"))
        document.getElementById("demo3").innerHTML="Đăng nhập thành công";
    else
        document.getElementById("demo3").innerHTML="Đăng Nhập Không Thành công";
}

