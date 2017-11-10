/**
 * 这是入口文件
 */

// 配置文件路径

require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jquery-2.1.4",
        bootstrap: "../assets/bootstrap/js/bootstrap",
        text:"lib/text",
        tpls:"../tpls",
        arttemplate:"lib/template-web",
           uploadify:"../assets/uploadify/jquery.uploadify"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
          uploadify:{
             deps: ["jquery"]
        }

    }
})

// 使用

require(['jquery', 'personal/list','bootstrap', 'common/checkLogin'], function ($,personalList) {


    // 点击左侧的菜单切换不同的内容

    $(".left .list-group").on("click", ".list-group-item", function () {
        $(this).addClass("active").siblings().removeClass("active")


        if ($(this).hasClass("link-personal-list")) {
            // $(".menu-content").html("人员列表")
            personalList();
        } else if ($(this).hasClass("link-project")) {
            $(".menu-content").html("项目管理")
        } else if ($(this).hasClass("link-salary")) {
            $(".menu-content").html("工资管理")
        } else if ($(this).hasClass("link-company")) {
            $(".menu-content").html("公司管理")
        } else if ($(this).hasClass("link-car")) {
            $(".menu-content").html("车辆管理")
        }

    
    });
    // 模拟点击人员列表按钮
    $(".left .list-group .link-personal-list").trigger("click")
})


