if ($('#menu').length > 0) {
    var menu = $('#menu');
    var dt = menu.find('dt');
    var dd = menu.find('dd');

    dt.each(function (i, item) {
        $(item).click(function(){
            //收缩其它菜单
            $(this).parent('dl').siblings('dl').find('dd').hide();
            //判断是否有二级菜单,有的return false,禁用超链接
            if($(this).next('dd').length > 0){
                //判断是否为当前页栏目,如果不是,二级菜单可以隐藏.
                if(!$(this).parent('dl').hasClass('current')){
                    $(this).next('dd').toggle();
                }
                return false;
            }
        });
    })
}
if($('.ipt-date1').length > 0){
    $('.ipt-date1').each(function(i, ipt){
        $(ipt).cxCalendar();
    });
}

//function
var selectAll = function($str){
    $($str).find('input[type=checkbox]').attr("checked", true);
    return false;
};
var allCancel = function($str){
    $($str).find('input[type=checkbox]').attr("checked", false);
    return false;

};