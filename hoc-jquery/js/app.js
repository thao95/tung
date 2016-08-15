/**
 * Created by AD on 8/15/2016.
 */
/*var chuoi="chen chứ";
$('#id1').html(chuoi);*/

/*$('#btn').hover(function () {
    $("#btn").text("click you");
});*/
/*var class1 = $(".class2").attr('class');
alert(class1);*/

/*var src = $("script").attr('src');
alert(src);*/

/*$('#demo1').mouseenter(function () {
     $('#demo1').attr('src','img/img2.png');
});
$('#demo1').mouseleave(function () {
     $('#demo1').attr('src','img/img1.png');
});*/
/$("#batden").attr('disabled', '');
$("#batden").click(function () {
     $("body").css('background','#fff');//học hàm
     $(this).attr('disabled', '');
     $("#tatden").removeAttr('disabled');
});
$("#tatden").click(function () {
     $("body").css('background','black');
     $(this).attr('disabled', '');
     $("#batden").removeAttr('disabled');
});




