/**
 * 查看人员信息
 */

// /v2/movie/subject/:id

define(['jquery',"text!tpls/personalAdd.html","arttemplate","uploadify"],
function($,personalAddTpl,template){

// alert("查看")
// 根据电影id获取电影详情
return function(){
    // alert(movie_id)

 $("#modalTeacherAdd").remove();
    
         $(personalAddTpl).appendTo("body").modal();

         $("#avatar").uploadify({

               auto:true,     //选完文件是否自动上传，默认：true

                buttonText:"选择文件",
                fileObjName:"",        //表示name值
                uploader      : '',//要把文件上传到哪里去？
                height        : 30,
                swf           : '../assets/uploadify/uploadify.swf',
                width         : 120,

                itemTemplate:"<span></span>",    //这样的设置用户就看不到上传的细节
              
         });
    
            }
    

})