/**
 * Created by AD on 8/22/2016.
 */
function tinhgiaithua(n) {
    if(n <=1)
    {
        return 1;
    }
    else{
        return n * tinhgiaithua(n-1);
    }

$("#inp1").click(function () {
    var n=$("#inp").val();
    $('#p12').html("kết quả là  " + tinhgiaithua(n));
});




