/**
 * 查看人员信息
 */

// /v2/movie/subject/:id

define(['jquery',"text!tpls/personalShow.html","arttemplate"],
function($,personalShowTpl,template){

// alert("查看")
// 根据电影id获取电影详情
return function(movie_id){
    // alert(movie_id)

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
                  $("#modalTeacherShow").remove();
   var personalShow = template.render(personalShowTpl, res);
    
         $(personalShow).appendTo("body").modal();
            }
    })
}
})