/**
 * Created by AD on 8/22/2016.
 */
var dem=0;
$('#anh').click(function () {
    $(this).css("opacity", "0.7");
    dem++;
    $('p').html("Counter:" + dem);
})