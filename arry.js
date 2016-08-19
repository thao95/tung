/**
 * Created by AD on 8/18/2016.
 */
var tacgia=["Tung", "Mark Zuckerberg", "Steve Job", "abc","Bill Gates"];
var kho=["Sáng dạy muộn thì phí một ngày, tuổi thanh xuân không hoc thi phí một đời. <br/>- Tung -",
    "Hãy chuyển động thật nhanh phá vỡ mọi thứ. Trừ khi bạn phá một điều gì đó , bạn chưa đủ nhanh. <br/> - Mark Zuckerberg - "
    ,"You time limited , so don't waste it living someone else's life <br/> - Steve Jobs - "
    ,"Mọi thứ người sẽ không bao giờ ngó đến lòng tự trọng của bạn,điều mà quan tâm chính là thành tựu mà bạn đạt được",
     "Kiên nhẫn là yếu tố quan trọng để thành công.<br/> -Bill Gates-"];
$('button').click(function () {
    var x=Math.floor(Math.random()*5);
    var y=$('#node2').html(kho[x]);
    $('#node2').html(tacgia[y]);
})
var time=0;
var t=0;
$('#node3').text(time);
setInterval(function () {
    time++;
    $('#node3').text(time + "giây");
    if(time==60)
    {
        time=-1;
        t++;
        $('#node3').text( time + " giây" );
        time++;
    }
    $('#node3').text(t + " phút " + time + " giây" );
},1000)
