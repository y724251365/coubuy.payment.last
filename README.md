
# 钩哒新支付页面

## 开发模式

运行 `ng s  --proxy proxy.config.json`

## release

#### v1.0.0

#### 2018-01-26, Version 1.0.0,  @y724251365 , @Yangqiuhui

  - **FooterComponent**
      - **修改了成3个路由切换按钮，样式可能还需调整，包括路由传参。**
      - **通过插入在每个视图上，定位在页面最底部。**

  - **HistoryComponent**
    - **添加了历史订单的Http请求。通过*ngFor插入到页面中，样式有待调整。**
    - **限制了每次请求5条数据。下滚动刷新，继续请求5条数据。**
    - **每条数据可以通过点击当前订单信息跳转到详情信息。**

  - **HistoryDetailComponent**
    - **请求详情信息接口，由于接口文档对result里数据没有描述。**
    - **插入一些数据，如果需要其它数据后续添加，样式有待调整。**
    - **添加返回按钮，返回上一层。**
  - **UserComponent**
    - **请求个人信息数据接口，更新在HTML视图上，样式有待调整。**
    - **增加个人信息更新上传功能。通过点击按钮，进入修改框。**
    - **添加了用户名和电话的位数验证。以及离开input提示消息。**
    - **阻止了空白提交，正常提交完，修改框自动关闭。**
  - **Commit**
    -  **[3147baaa]更新了底部按钮，历史订单、历史详情订单，个人中心页面。**
## release

### 2018-01-31
#### 修改如下
  - Foot组件
    -  把三个路由按钮变成两个，“我的”相关内容暂时给注释了。
    -  修改了图标字体。换成了蓝色的图标字体。简单调整了CSS。
  - History组件
    -  把每次加载历史订单变成了20条数据。
    -  简单的调整了样式。
  - Coubuy组件
    -  把原来购物车相关的删除了。
  - HistoryDetail组件
    -  简单的修改了页面样式，如字体颜色，加粗等。 

### 2018-02-01 @Yangqiuhui
#### 修改如下，未完
  - FooterComponent
    -  换了图标字体，样式重构
    -  点击切换修改成变成蓝色图标和蓝色字体
  - HistoryComponent
    -  页面布局等样式重构
  - HistoryDetailComponent
    -  页面样式重构
  - UserComponent
    -  未完成
### 2018-02-02 @Yangqiuhui
#### 修改如下，未完
  - ErrorComponent
    -  修改了界面里的底部导航条跳入到Error页面还存在的问题，利用元素覆盖。
  - UserComponent
    -  样式重构。除了更新信息部分未完，其它完成。
    -  更新信息部分，刚开始改，未写完，实在没想好更新个人信息应该怎么设计...
### 2018-02-05 @Yangqiuhui
#### 修改如下
  - UserComponent
    -  表单的样式重做了。
### 2018-02-06 @Yangqiuhui
#### 修改
  - UserComponent
    -  修改了一些样式问题。
    -  表单验证的一些BUG。
### 2018-02-23 @Yangqiuhui
#### 修改
  - HistoryComponent
    - 修改了样式。
    - 借鉴饿了么的订单页面。
  - HistoryDetailComponent
    - 修改了一些样式，未完。

### 2018-02-24 @Yangqiuhui

#### 修改
  - HistoryComponent
    - 样式微调。
  - HistoryDetailComponent
    - 修改了样式。
  - UserComponent
    - 修改了样式。