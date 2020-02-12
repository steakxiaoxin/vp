(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{353:function(t,a,_){"use strict";_.r(a);var i=_(0),v=Object(i.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"html-和-css-相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#html-和-css-相关"}},[t._v("#")]),t._v(" html 和 css 相关")]),t._v(" "),_("h2",{attrs:{id:"_1、盒模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、盒模型"}},[t._v("#")]),t._v(" 1、盒模型")]),t._v(" "),_("p",[t._v("box-sizing: content-box（W3C盒模型，又名标准盒模型）：元素的宽高大小表现为内容的大小。")]),t._v(" "),_("p",[t._v("box-sizing: border-box（IE盒模型，又名怪异盒模型）：元素的宽高表现为内容 + 内边距 + 边框的大小。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2019/12/17/BWgtUsfMVLRa1SK.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"_2、css-选择器优先级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、css-选择器优先级"}},[t._v("#")]),t._v(" 2、css 选择器优先级")]),t._v(" "),_("ul",[_("li",[t._v("!important > 行内样式 > #id > .class > tag > * > 继承 > 默认")]),t._v(" "),_("li",[t._v("选择器 "),_("strong",[t._v("从右往左")]),t._v(" 解析")])]),t._v(" "),_("h2",{attrs:{id:"_3、bfc-三问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、bfc-三问"}},[t._v("#")]),t._v(" 3、bfc 三问")]),t._v(" "),_("ol",[_("li",[t._v("BFC 是什么？")]),t._v(" "),_("li",[t._v("BFC 触发的条件有哪些？")]),t._v(" "),_("li",[t._v("BFC 可以干什么？")])]),t._v(" "),_("h4",{attrs:{id:"什么是-bfc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bfc"}},[t._v("#")]),t._v(" 什么是 BFC")]),t._v(" "),_("p",[t._v("BFC 全称为块级格式化上下文 (Block Formatting Context) 。它决定了元素如何对其内容进行定位 and 与其他元素的关系和相互作用，当涉及到可视化布局的时候，BFC 提供了一个环境，HTML 元素在这个环境中按照一定规则进行布局。"),_("br"),t._v(" "),_("strong",[t._v("可以理解为一个独立的容器，并且这个容器里 box 的布局与这个容器外的 box 毫不相干。")])]),t._v(" "),_("h5",{attrs:{id:"bfc-的特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bfc-的特性"}},[t._v("#")]),t._v(" BFC 的特性")]),t._v(" "),_("ul",[_("li",[t._v("内部的盒会在垂直方向一个接一个排列（可以看作 BFC 中有一个的常规流）垂直方向外边距重叠")]),t._v(" "),_("li",[t._v("BFC 就是页面上的一个独立容器，容器里面的子元素不会影响到外面的元素")]),t._v(" "),_("li",[t._v("计算 BFC 的高度时，浮动元素也参与计算")]),t._v(" "),_("li",[_("a",{attrs:{href:"https://zhidao.baidu.com/question/1050642522648545939.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BFC 区域不会与浮动元素重叠"),_("OutboundLink")],1)])]),t._v(" "),_("h4",{attrs:{id:"触发-bfc-的条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#触发-bfc-的条件"}},[t._v("#")]),t._v(" 触发 BFC 的条件")]),t._v(" "),_("ul",[_("li",[t._v("根元素")]),t._v(" "),_("li",[_("code",[t._v("float")]),t._v(" 不为 "),_("code",[t._v("none")])]),t._v(" "),_("li",[_("code",[t._v("position")]),t._v(" 为 "),_("code",[t._v("absolute")]),t._v(" 或 "),_("code",[t._v("fixed")])]),t._v(" "),_("li",[_("code",[t._v("display")]),t._v(" 为 "),_("code",[t._v("inline-block")]),t._v("、"),_("code",[t._v("table-cell")]),t._v("、"),_("code",[t._v("table-caption")])]),t._v(" "),_("li",[_("code",[t._v("overflow")]),t._v(" 不为 "),_("code",[t._v("visible")])]),t._v(" "),_("li",[_("code",[t._v("flex")]),t._v(" 弹性盒")])]),t._v(" "),_("h4",{attrs:{id:"bfc-可以解决的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bfc-可以解决的问题"}},[t._v("#")]),t._v(" BFC 可以解决的问题")]),t._v(" "),_("ul",[_("li",[t._v("清除浮动")]),t._v(" "),_("li",[t._v("margin 塌陷 (子元素 margin-top 溢出)")]),t._v(" "),_("li",[t._v("margin 合并 (重叠盒子外再套一层 bfc)")]),t._v(" "),_("li",[t._v("自适应两列布局（"),_("code",[t._v("float")]),t._v(" + "),_("code",[t._v("overflow")]),t._v("）原理：BFC 区域不会与浮动元素重叠")])]),t._v(" "),_("h2",{attrs:{id:"_4、让元素消失"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、让元素消失"}},[t._v("#")]),t._v(" 4、让元素消失")]),t._v(" "),_("ul",[_("li",[t._v("opacity：0；不会改变页面布局；能触发绑定的事件")]),t._v(" "),_("li",[t._v("visibility:hidden；不会改变页面布局；不能触发绑定的事件")]),t._v(" "),_("li",[t._v("display:none；会改变页面布局；不能触发绑定的事件；理解为移除元素")]),t._v(" "),_("li",[t._v("z-index=-1；置于其他元素下面")])]),t._v(" "),_("h2",{attrs:{id:"_5、层叠上下文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、层叠上下文"}},[t._v("#")]),t._v(" 5、层叠上下文")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://i.loli.net/2020/02/08/CAjOY3zcp8T4Goi.png",alt:"image.png"}})]),t._v(" "),_("h2",{attrs:{id:"_6、居中布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6、居中布局"}},[t._v("#")]),t._v(" 6、居中布局")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("水平居中")]),t._v(" "),_("ul",[_("li",[t._v("行内元素: "),_("code",[t._v("text-align: center")])]),t._v(" "),_("li",[t._v("块级元素: "),_("code",[t._v("margin: 0 auto")])]),t._v(" "),_("li",[_("code",[t._v("absolute + transform")])]),t._v(" "),_("li",[_("code",[t._v("flex + justify-content: center")])])])]),t._v(" "),_("li",[_("p",[t._v("垂直居中")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("line-height: height")])]),t._v(" "),_("li",[_("code",[t._v("absolute + transform")])]),t._v(" "),_("li",[_("code",[t._v("flex + align-items: center")])]),t._v(" "),_("li",[_("code",[t._v("table")])])])]),t._v(" "),_("li",[_("p",[t._v("水平垂直居中")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("absolute + transform")])]),t._v(" "),_("li",[_("code",[t._v("flex + justify-content + align-items")])])])])]),t._v(" "),_("h2",{attrs:{id:"_7、flex"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7、flex"}},[t._v("#")]),t._v(" 7、flex")]),t._v(" "),_("p",[_("em",[t._v("display: flex")])]),t._v(" "),_("h4",{attrs:{id:"容器的属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#容器的属性"}},[t._v("#")]),t._v(" 容器的属性")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("justify-content")]),t._v("：定义了项目在主轴上的对齐方式")]),t._v(" "),_("ul",[_("li",[t._v("flex-start | flex-end | center | space-between | space-around")])])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("align-items")]),t._v("：定义项目在交叉轴上如何对齐")]),t._v(" "),_("ul",[_("li",[t._v("flex-start | flex-end | center | baseline | stretch;")])])]),t._v(" "),_("li",[_("p",[t._v("flex-direction：决定主轴的方向")])]),t._v(" "),_("li",[_("p",[t._v("flex-wrap：如果一条轴线排不下，如何换行")])]),t._v(" "),_("li",[_("p",[t._v("flex-flow：是"),_("code",[t._v("flex-direction")]),t._v("属性和"),_("code",[t._v("flex-wrap")]),t._v("属性的简写形式，默认值为"),_("code",[t._v("row nowrap")])])]),t._v(" "),_("li",[_("p",[t._v("align-content：定义了多根轴线的对齐方式")])])]),t._v(" "),_("h4",{attrs:{id:"项目的属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目的属性"}},[t._v("#")]),t._v(" 项目的属性")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("align-self")]),t._v("：允许单个项目有与其他项目不一样的对齐方式，可覆盖"),_("code",[t._v("align-items")]),t._v("属性")]),t._v(" "),_("li",[_("strong",[t._v("flex")]),t._v("：是"),_("code",[t._v("flex-grow")]),t._v(", "),_("code",[t._v("flex-shrink")]),t._v(" 和 "),_("code",[t._v("flex-basis")]),t._v("的简写，默认值为"),_("code",[t._v("0 1 auto")])]),t._v(" "),_("li",[t._v("order：定义项目的排列顺序")]),t._v(" "),_("li",[t._v("flex-grow：定义项目的放大比例，默认为"),_("code",[t._v("0")]),t._v("，即如果存在剩余空间，也不放大")]),t._v(" "),_("li",[t._v("flex-shrink：定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小")]),t._v(" "),_("li",[t._v("flex-basis：定义了在分配多余空间之前，项目占据的主轴空间")])]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰 Flex 布局教程：语法篇"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰Flex 布局教程：实例篇"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://codepen.io/LandonSchropp/pen/KpzzGo",target:"_blank",rel:"noopener noreferrer"}},[t._v("骰子codepan"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"_8、transform-transition-animation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8、transform-transition-animation"}},[t._v("#")]),t._v(" 8、transform & transition & animation")]),t._v(" "),_("h4",{attrs:{id:"transform"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#transform"}},[t._v("#")]),t._v(" transform")]),t._v(" "),_("ul",[_("li",[t._v("translate：定义 2D 转换")]),t._v(" "),_("li",[t._v("scale：定义 2D 缩放转换")]),t._v(" "),_("li",[t._v("rotate：定义 2D 旋转")]),t._v(" "),_("li",[t._v("skew：定义沿着 X 和 Y 轴的 2D 倾斜转换")]),t._v(" "),_("li",[t._v("matrix：定义 2D 转换")])]),t._v(" "),_("h4",{attrs:{id:"transition"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#transition"}},[t._v("#")]),t._v(" transition")]),t._v(" "),_("p",[t._v("transition: "),_("em",[t._v("property duration timing-function delay")]),t._v(";")]),t._v(" "),_("ul",[_("li",[t._v("transition-property：指定CSS属性的name，transition效果")]),t._v(" "),_("li",[t._v("transition-duration：transition效果需要指定多少秒或毫秒才能完成")]),t._v(" "),_("li",[t._v("transition-timing-function：指定transition效果的转速曲线")]),t._v(" "),_("li",[t._v("transition-delay：定义transition效果开始的时候")])]),t._v(" "),_("h4",{attrs:{id:"animation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" animation")]),t._v(" "),_("p",[t._v("animation: name duration timing-function delay iteration-count direction fill-mode play-state;")]),t._v(" "),_("ul",[_("li",[t._v("animation-name：指定要绑定到选择器的关键帧的名称")]),t._v(" "),_("li",[t._v("animation-duration：动画指定需要多少秒或毫秒完成")]),t._v(" "),_("li",[t._v("animation-timing-function：设置动画将如何完成一个周期")]),t._v(" "),_("li",[t._v("animation-delay：设置动画在启动前的延迟间隔")]),t._v(" "),_("li",[t._v("animation-iteration-count：定义动画的播放次数")]),t._v(" "),_("li",[t._v("animation-direction：指定是否应该轮流反向播放动画")]),t._v(" "),_("li",[t._v("animation-fill-mode：规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式")]),t._v(" "),_("li",[t._v("animation-play-state：指定动画是否正在运行或已暂停")])])])}),[],!1,null,null,null);a.default=v.exports}}]);