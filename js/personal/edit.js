/**
 * 编辑讲师模块
 * Author:Wilbert
 *   Date:2017/8/1
 */
define(["jquery","text!tpls/personalEdit.html","arttemplate"],function($,personalEditTpl,template){
    
    
    return function(movie_id){
    $.ajax({
        url:"https://api.douban.com/v2/movie/subject/"+movie_id,
        dataType: 'jsonp',
            crossDomain: true,
            success:function(res){
                if(!res.code==200){
                    console.log(res.error);
                    return ;
                }
                  console.log(res)
                  $("#modalTeacherEdit").remove();
   var personalEdit = template.render(personalEditTpl, res);
    
         $(personalEdit).appendTo("body").modal();
            }
    })
        
        
        
    }
})