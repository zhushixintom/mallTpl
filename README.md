# mall-template-for-wechat
a shopping mall template for weChat platform, based on jquery weui

## issue5.27
1. 完善规格产品详情（规格弹窗）；
2. IOS10中，picker点击后会出现光标(临时措施jquery.js line4545出加了 $('input').blur(););
3. 修改了fixed-rignt-icon（文字错误）fixed-right-icon;
4. 样式-wekit-autofill针对chrome浏览器背景色样式(参照代理科技reset){已加入，在底部目前注释状态};
5. 针对Ipone6plus,对CSSflex-wrap必须要前缀的bug,.weui-row修改-webkit-flex-wrap:flex-wrap;{已修改，reset中}；
6. d-aside.less修改active的颜色为@color-primary(主色调)；
7. 订单结算的地方写了两种样式（已注释其中一种）
8. 针对红点hint-num写注释（Reset.css样式中）
9. 完善6.1在线咨询

