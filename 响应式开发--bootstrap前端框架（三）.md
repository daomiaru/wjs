# 响应式开发--bootstrap前端框架（一）

1.标签页

```html
<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">1</div>
    <div role="tabpanel" class="tab-pane" id="profile">2</div>
    <div role="tabpanel" class="tab-pane" id="messages">3</div>
    <div role="tabpanel" class="tab-pane" id="settings">4</div>
  </div>

</div>
```

第一个部分为导航面板，bootstrap标签页中的标签页**主要采用的是锚链接的方式，即a标签指向页面中的锚点。**

**data-toggle="tab"**：它会触发一个事件，这个事件就是切换到指定的面板

第二个部分为内容面板

```css
/*产品样式*/
.wjs_tap{
  width: 100%;
  background-color: #eee;
  padding: 15px;
clear: both;
}
.table-prent{
  width: 100%;
  overflow: hidden;
}
.tap{
  .wjs_taps{
      >li{
        padding: 0px 15px;
      }
  }
  .wjs_taps{
    >li>a:hover{
      border-bottom: 3px solid @basecolor;
    }
  }
  .table-prent>ul>li>a{
    line-height: 40px;
    padding: 20px;
  }

  .table-prent>ul>li.active{
    a,a:focus,a:hover{
      border: none;
      background-color: transparent;
      border-bottom: 3px solid @basecolor;
    }
  }
}

```

![1565520984716](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565520984716.png)

```html
<div class="wjs_tap">
    <div class="tap container">
        <div class="table-prent">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs wjs_taps" role="tablist">
            <li role="presentation" class="active"><a href="#p1" aria-controls="p1" role="tab" data-toggle="tab">特别推荐</a></li>
            <li role="presentation"><a href="#p2" aria-controls="p2" role="tab" data-toggle="tab">微投资</a></li>
            <li role="presentation"><a href="#p3" aria-controls="p3" role="tab" data-toggle="tab">微小宝</a></li>
            <li role="presentation"><a href="#p4" aria-controls="p4" role="tab" data-toggle="tab">月月盈</a></li>
            <li role="presentation"><a href="#p5" aria-controls="p5" role="tab" data-toggle="tab">稳赢宝</a></li>
            <li role="presentation"><a href="#p6" aria-controls="p6" role="tab" data-toggle="tab">海航通宝</a></li>
            <li role="presentation"><a href="#p7" aria-controls="p7" role="tab" data-toggle="tab">微金包</a></li>
        </ul>
        
    </div>

        <!-- Tab panes -->
        <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="p1">1</div>
            <div role="tabpanel" class="tab-pane" id="p2">2</div>
            <div role="tabpanel" class="tab-pane" id="p3">3</div>
            <div role="tabpanel" class="tab-pane" id="p4">4</div>
            <div role="tabpanel" class="tab-pane" id="p5">5</div>
            <div role="tabpanel" class="tab-pane" id="p6">6</div>
            <div role="tabpanel" class="tab-pane" id="p7">7</div>
        </div>
	</div>
</div>
```

### 2.工具提示

- 以下分别对应不同的提示方向

  1.**data-placement="left"**：左提示

  2.**data-placement="top" **：上提示

  3.**data-placement="bottom"**：下提示

  4.**data-placement="right"**：右提示

- **title=""**:属性存放提示信息

- **data-toggle="tooltip"**：初始化工具提示，使用时必须在js文件中初始化

  ```javascript
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  ```

- 工具提示创建时会自动生成一个div，该div市参照父容器来定义宽度的。

```html
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>

<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>

<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>

<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
```

![1565521351483](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565521351483.png)



### 3.实现导航条滑动

导航条滑动原理图：

![1565586169629](C:\Users\14331\AppData\Roaming\Typora\typora-user-images\1565586169629.png)

引入滑动插件js文件

配置滑动插件：scrollX: true允许左右滑动，默认为false

​							scrollY: false禁止上下滑动，默认为true

```javascript
  var myScroll = new IScroll('.tab-parent',{
        scrollX: true, scrollY: false
    })
```

