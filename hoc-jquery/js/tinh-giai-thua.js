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
};
$("#inp").keypress(function(event) {
    if (event.which == 1){
        var n=$("#inp").val();
        $('#p12').html("kết quả là  " + tinhgiaithua(n));
    }
})




