/**
 * 人员列表模块
 */
// text使用text插件路径加感叹号加模块路径
define(["jquery", "text!tpls/personalList.html", "arttemplate","personal/show","personal/add","personal/edit"],
 function ($, personalListTpl, template,personalShow,personalAdd,personalEdit) {


    //获取人员列表模板内容并渲染到指定位置
    return function () {


        $.ajax({
            url: "https://api.douban.com/v2/movie/in_theaters",
            dataType: 'jsonp',
            crossDomain: true,
            success: function (res) {
                //  失败
                if (!res.code == 200) {
                    console.log(res.msg);
                    return;
                }
                // 数据成功接收
                // console.log(res)

                var personalList = template.render(personalListTpl, res);
                // 为了给查看按钮绑定事件，使用事件委托的方法，委托给人员列表的容器,
                //将字符串转换为jquery对象
                var $personalList=$(personalList)
                $personalList.on("click",".btn-show",function(){
                    var movie_id=$(this).parent().attr("movie_id");
                   personalShow(movie_id);
                }).on("click",".btn-add-personal",function(){
                    personalAdd();
                }).on("click",".btn-edit",function(){
                     var movie_id=$(this).parent().attr("movie_id");
                    personalEdit(movie_id);
                }).on('click'," .btn-delete",function(){
                        $(this).parent().parent().remove();
                })
                // 添加人员

                
                // 清空父元素再添加新内容
                 $(".menu-content").empty().html($personalList);
            }
        })


    }
})