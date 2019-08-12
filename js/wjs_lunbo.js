$(function(){
    $('[data-toggle="tooltip"]').tooltip()
    //获取所有item
    var items = $('.carousel-inner .item')
    //监听屏幕变化
    $(window).on('resize',function(){
        //获取屏幕宽度
        var width = $(window).width()
        //判断屏幕宽度，如果大于768显示pc端轮播
        if(width>=768){
            //遍历item
            items.each(function(index,value){
                //获取当前item
                var item = $(this)
                //获取自定义图片路径属性值
                var imgSrc = item.data('largeImg')
                //添加item中的PC端内容
                item.html($('<a href="" class="PC"></a>').css("backgroundImage","url('"+imgSrc+"')"))
            })
        }else{
            items.each(function(index,value){
                var item = $(this)
                var imgSrc = item.data('smallImg')
                item.html('<a href="" class="moblie"><img src="'+imgSrc+'" alt="..."></a>');
            })
        }
    }).trigger('resize')
    //获取产品导航条ul
     var ul = $(".wjs_product .nav-tabs")
    //获取产品导航条ul下的所有li标签
    var lis = ul.find('li')
    //设置总宽度为0
    var SumWidth = 0
    //遍历所有li标签
    lis.each(function (index,value) {
        //获取li标签宽度
        // innerWidth()方法 = 元素内容宽度 + padding
        //width(）方法 = 元素内容宽度
        //outerWidth()方法 = 元素内容宽度+padding+border
        //outerWidth(true)方法 = 元素内容宽度+padding+border+margin
        SumWidth += $(value).outerWidth()
        console.log($(value).innerWidth())

    })
        //设置ul宽度

    ul.width(850)
    //配置滑动插件
    var myScroll = new IScroll('.tab-parent',{
        scrollX: true, scrollY: false
    })
})