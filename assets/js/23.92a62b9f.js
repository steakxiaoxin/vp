(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{355:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"html-和-css-相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-和-css-相关"}},[t._v("#")]),t._v(" html 和 css 相关")]),t._v(" "),a("h2",{attrs:{id:"盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒模型"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),a("p",[t._v("box-sizing: content-box（W3C盒模型，又名标准盒模型）：元素的宽高大小表现为内容的大小。")]),t._v(" "),a("p",[t._v("box-sizing: border-box（IE盒模型，又名怪异盒模型）：元素的宽高表现为内容 + 内边距 + 边框的大小。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2019/12/17/BWgtUsfMVLRa1SK.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"css-选择器优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器优先级"}},[t._v("#")]),t._v(" css 选择器优先级")]),t._v(" "),a("ul",[a("li",[t._v("!important > 行内样式 > #id > .class > tag > * > 继承 > 默认")]),t._v(" "),a("li",[t._v("选择器 "),a("strong",[t._v("从右往左")]),t._v(" 解析")])]),t._v(" "),a("h2",{attrs:{id:"bfc-三问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-三问"}},[t._v("#")]),t._v(" bfc 三问")]),t._v(" "),a("ol",[a("li",[t._v("BFC 是什么？")]),t._v(" "),a("li",[t._v("BFC 触发的条件有哪些？")]),t._v(" "),a("li",[t._v("BFC 可以干什么？")])]),t._v(" "),a("h4",{attrs:{id:"什么是-bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bfc"}},[t._v("#")]),t._v(" 什么是 BFC")]),t._v(" "),a("p",[t._v("BFC 全称为块级格式化上下文 (Block Formatting Context) 。"),a("strong",[t._v("可以理解为一个独立的容器，并且这个容器里 box 的布局与这个容器外的 box 毫不相干。")]),a("br"),t._v("\n它决定了元素如何对其内容进行定位 and 与其他元素的关系和相互作用，当涉及到可视化布局的时候，BFC 提供了一个环境，HTML 元素在这个环境中按照一定规则进行布局。")]),t._v(" "),a("h5",{attrs:{id:"bfc-的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-的特性"}},[t._v("#")]),t._v(" BFC 的特性")]),t._v(" "),a("ul",[a("li",[t._v("内部的盒会在垂直方向一个接一个排列（可以看作 BFC 中有一个的常规流）垂直方向外边距重叠")]),t._v(" "),a("li",[t._v("BFC 就是页面上的一个独立容器，容器里面的子元素不会影响到外面的元素")]),t._v(" "),a("li",[t._v("计算 BFC 的高度时，浮动元素也参与计算")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhidao.baidu.com/question/1050642522648545939.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BFC 区域不会与浮动元素重叠"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"触发-bfc-的条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发-bfc-的条件"}},[t._v("#")]),t._v(" 触发 BFC 的条件")]),t._v(" "),a("ul",[a("li",[t._v("根元素")]),t._v(" "),a("li",[a("code",[t._v("float")]),t._v(" 不为 "),a("code",[t._v("none")])]),t._v(" "),a("li",[a("code",[t._v("position")]),t._v(" 为 "),a("code",[t._v("absolute")]),t._v(" 或 "),a("code",[t._v("fixed")])]),t._v(" "),a("li",[a("code",[t._v("display")]),t._v(" 为 "),a("code",[t._v("inline-block")]),t._v("、"),a("code",[t._v("table-cell")]),t._v("、"),a("code",[t._v("table-caption")])]),t._v(" "),a("li",[a("code",[t._v("overflow")]),t._v(" 不为 "),a("code",[t._v("visible")])]),t._v(" "),a("li",[a("code",[t._v("flex")]),t._v(" 弹性盒")])]),t._v(" "),a("h4",{attrs:{id:"bfc-可以解决的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-可以解决的问题"}},[t._v("#")]),t._v(" BFC 可以解决的问题")]),t._v(" "),a("ul",[a("li",[t._v("清除浮动")]),t._v(" "),a("li",[t._v("margin 塌陷 (子元素 margin-top 溢出)")]),t._v(" "),a("li",[t._v("margin 合并 (重叠盒子外再套一层 bfc)")]),t._v(" "),a("li",[t._v("自适应两列布局（"),a("code",[t._v("float")]),t._v(" + "),a("code",[t._v("overflow")]),t._v("）原理：BFC 区域不会与浮动元素重叠")])]),t._v(" "),a("h2",{attrs:{id:"清除浮动方法，不清会怎样"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动方法，不清会怎样"}},[t._v("#")]),t._v(" 清除浮动方法，不清会怎样")]),t._v(" "),a("p",[t._v("当父元素不给高度的时候，内部元素不浮动时会撑开，而浮动的时候，父元素变成一条线, 造成塌陷.")]),t._v(" "),a("ul",[a("li",[t._v("额外标签法（在最后一个浮动标签后，新加一个标签，给其设置clear：both；）（不推荐）")]),t._v(" "),a("li",[t._v("父元素添加overflow:hidden (触发BFC)")]),t._v(" "),a("li",[t._v("使用after伪元素清除浮动（推荐使用）")]),t._v(" "),a("li",[t._v("使用before和after双伪元素清除浮动")])]),t._v(" "),a("h2",{attrs:{id:"让元素消失"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#让元素消失"}},[t._v("#")]),t._v(" 让元素消失")]),t._v(" "),a("ul",[a("li",[t._v("opacity：0；不会改变页面布局；能触发绑定的事件")]),t._v(" "),a("li",[t._v("visibility:hidden；不会改变页面布局；不能触发绑定的事件")]),t._v(" "),a("li",[t._v("display:none；会改变页面布局；不能触发绑定的事件；理解为移除元素")]),t._v(" "),a("li",[t._v("z-index=-1；置于其他元素下面")]),t._v(" "),a("li",[t._v("hidden 属性；HTML5 新增属性，相当于 display:none")])]),t._v(" "),a("h2",{attrs:{id:"层叠上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文"}},[t._v("#")]),t._v(" 层叠上下文")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/02/08/CAjOY3zcp8T4Goi.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"居中布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#居中布局"}},[t._v("#")]),t._v(" 居中布局")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("水平居中")]),t._v(" "),a("ul",[a("li",[t._v("行内元素: "),a("code",[t._v("text-align: center")])]),t._v(" "),a("li",[t._v("块级元素: "),a("code",[t._v("margin: 0 auto")])]),t._v(" "),a("li",[a("code",[t._v("absolute + transform")])]),t._v(" "),a("li",[a("code",[t._v("flex + justify-content: center")])])])]),t._v(" "),a("li",[a("p",[t._v("垂直居中")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("line-height: height")])]),t._v(" "),a("li",[a("code",[t._v("absolute + transform")])]),t._v(" "),a("li",[a("code",[t._v("flex + align-items: center")])]),t._v(" "),a("li",[a("code",[t._v("table")])])])]),t._v(" "),a("li",[a("p",[t._v("水平垂直居中")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("absolute + transform")])]),t._v(" "),a("li",[a("code",[t._v("flex + justify-content + align-items")])])])])]),t._v(" "),a("h2",{attrs:{id:"flex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[t._v("#")]),t._v(" flex")]),t._v(" "),a("p",[a("em",[t._v("display: flex")])]),t._v(" "),a("h4",{attrs:{id:"容器的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器的属性"}},[t._v("#")]),t._v(" 容器的属性")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("justify-content")]),t._v("：定义了项目在主轴上的对齐方式")]),t._v(" "),a("ul",[a("li",[t._v("flex-start | flex-end | center | space-between | space-around")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("align-items")]),t._v("：定义项目在交叉轴上如何对齐")]),t._v(" "),a("ul",[a("li",[t._v("flex-start | flex-end | center | baseline | stretch;")])])]),t._v(" "),a("li",[a("p",[t._v("flex-direction：决定主轴的方向")])]),t._v(" "),a("li",[a("p",[t._v("flex-wrap：如果一条轴线排不下，如何换行")])]),t._v(" "),a("li",[a("p",[t._v("flex-flow：是"),a("code",[t._v("flex-direction")]),t._v("属性和"),a("code",[t._v("flex-wrap")]),t._v("属性的简写形式，默认值为"),a("code",[t._v("row nowrap")])])]),t._v(" "),a("li",[a("p",[t._v("align-content：定义了多根轴线的对齐方式")])])]),t._v(" "),a("h4",{attrs:{id:"项目的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目的属性"}},[t._v("#")]),t._v(" 项目的属性")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("align-self")]),t._v("：允许单个项目有与其他项目不一样的对齐方式，可覆盖"),a("code",[t._v("align-items")]),t._v("属性")]),t._v(" "),a("li",[a("strong",[t._v("flex")]),t._v("：是"),a("code",[t._v("flex-grow")]),t._v(", "),a("code",[t._v("flex-shrink")]),t._v(" 和 "),a("code",[t._v("flex-basis")]),t._v("的简写，默认值为"),a("code",[t._v("0 1 auto")])]),t._v(" "),a("li",[t._v("order：定义项目的排列顺序")]),t._v(" "),a("li",[t._v("flex-grow：定义项目的放大比例，默认为"),a("code",[t._v("0")]),t._v("，即如果存在剩余空间，也不放大")]),t._v(" "),a("li",[t._v("flex-shrink：定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小")]),t._v(" "),a("li",[t._v("flex-basis：定义了在分配多余空间之前，项目占据的主轴空间")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰 Flex 布局教程：语法篇"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰Flex 布局教程：实例篇"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/LandonSchropp/pen/KpzzGo",target:"_blank",rel:"noopener noreferrer"}},[t._v("骰子codepan"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"transform-transition-animation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transform-transition-animation"}},[t._v("#")]),t._v(" transform & transition & animation")]),t._v(" "),a("h4",{attrs:{id:"transform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transform"}},[t._v("#")]),t._v(" transform")]),t._v(" "),a("ul",[a("li",[t._v("translate：定义 2D 转换")]),t._v(" "),a("li",[t._v("scale：定义 2D 缩放转换")]),t._v(" "),a("li",[t._v("rotate：定义 2D 旋转")]),t._v(" "),a("li",[t._v("skew：定义沿着 X 和 Y 轴的 2D 倾斜转换")]),t._v(" "),a("li",[t._v("matrix：定义 2D 转换")])]),t._v(" "),a("h4",{attrs:{id:"transition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transition"}},[t._v("#")]),t._v(" transition")]),t._v(" "),a("p",[t._v("transition: "),a("em",[t._v("property duration timing-function delay")]),t._v(";")]),t._v(" "),a("ul",[a("li",[t._v("transition-property：指定CSS属性的name，transition效果")]),t._v(" "),a("li",[t._v("transition-duration：transition效果需要指定多少秒或毫秒才能完成")]),t._v(" "),a("li",[t._v("transition-timing-function：指定transition效果的转速曲线")]),t._v(" "),a("li",[t._v("transition-delay：定义transition效果开始的时候")])]),t._v(" "),a("h4",{attrs:{id:"animation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" animation")]),t._v(" "),a("p",[t._v("animation: name duration timing-function delay iteration-count direction fill-mode play-state;")]),t._v(" "),a("ul",[a("li",[t._v("animation-name：指定要绑定到选择器的关键帧的名称")]),t._v(" "),a("li",[t._v("animation-duration：动画指定需要多少秒或毫秒完成")]),t._v(" "),a("li",[t._v("animation-timing-function：设置动画将如何完成一个周期")]),t._v(" "),a("li",[t._v("animation-delay：设置动画在启动前的延迟间隔")]),t._v(" "),a("li",[t._v("animation-iteration-count：定义动画的播放次数")]),t._v(" "),a("li",[t._v("animation-direction：指定是否应该轮流反向播放动画")]),t._v(" "),a("li",[t._v("animation-fill-mode：规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式")]),t._v(" "),a("li",[t._v("animation-play-state：指定动画是否正在运行或已暂停")])]),t._v(" "),a("h2",{attrs:{id:"移动端1px问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端1px问题"}},[t._v("#")]),t._v(" 移动端1px问题")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("border:0.5px solid #E5E5E5")]),t._v(" "),a("ul",[a("li",[t._v("优点：简单，没有副作用")]),t._v(" "),a("li",[t._v("缺点：支持iOS 8+，不支持安卓。后期安卓follow就好了。")])])]),t._v(" "),a("li",[a("p",[t._v("使用边框图片")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid transparent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'./../../image/96.jpg'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" 2 repeat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ul",[a("li",[t._v("优点：没有副作用")]),t._v(" "),a("li",[t._v("缺点：border颜色变了就得重新制作图片；圆角会比较模糊。")])])]),t._v(" "),a("li",[a("p",[t._v("使用box-shadow实现")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0  -1px 1px -1px #e5e5e5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   //上边线\n            1px  0  1px -1px #e5e5e5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   //右边线\n            0  1px  1px -1px #e5e5e5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   //下边线\n            -1px 0  1px -1px #e5e5e5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   //左边线\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("ul",[a("li",[t._v("优点：使用简单，圆角也可以实现")]),t._v(" "),a("li",[t._v("缺点：模拟的实现方法，仔细看谁看不出来这是阴影不是边框。")])])]),t._v(" "),a("li",[a("p",[t._v("使用伪元素")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 1条border */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".setOnePx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n  &::after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #e5e5e5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*no*/")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 4条border */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".setBorderAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n     &:after")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform-origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #E5E5E5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br")])]),a("ul",[a("li",[t._v("优点：全机型兼容，实现了真正的1px，而且可以圆角。")]),t._v(" "),a("li",[t._v("缺点：暂用了after 伪元素，可能影响清除浮动。")])])]),t._v(" "),a("li",[a("p",[t._v("设置viewport的scale值")]),t._v(" "),a("ul",[a("li",[t._v("优点：全机型兼容，直接写"),a("code",[t._v("1px")]),t._v("不能再方便")]),t._v(" "),a("li",[t._v("缺点：适用于新的项目，老项目可能改动大")])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d19b729f265da1bb2774865",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端1px解决方案"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/entry/584e427361ff4b006cd22c7c",target:"_blank",rel:"noopener noreferrer"}},[t._v("7 种方法解决移动端 Retina 屏幕 1px 边框问题"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"h5c3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5c3"}},[t._v("#")]),t._v(" h5c3")]),t._v(" "),a("h4",{attrs:{id:"h5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5"}},[t._v("#")]),t._v(" h5")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("语义化标签")]),t._v(" "),a("ul",[a("li",[t._v("header、footer、aside、section、article、nav")])])]),t._v(" "),a("li",[a("p",[t._v("表单输入类型")]),t._v(" "),a("ul",[a("li",[t._v("email、url、number、range、Date Pickers、search、color")])])]),t._v(" "),a("li",[a("p",[t._v("表单属性")]),t._v(" "),a("ul",[a("li",[t._v("autocomplete、placeholder、form")])])]),t._v(" "),a("li",[a("p",[t._v("视频音频")]),t._v(" "),a("ul",[a("li",[t._v("video、audio")])])]),t._v(" "),a("li",[a("p",[t._v("画布")]),t._v(" "),a("ul",[a("li",[t._v("canvas")])])]),t._v(" "),a("li",[a("p",[t._v("伸缩矢量图")]),t._v(" "),a("ul",[a("li",[t._v("svg")])])]),t._v(" "),a("li",[a("p",[t._v("拖拽属性")]),t._v(" "),a("ul",[a("li",[t._v("draggable")])])]),t._v(" "),a("li",[a("p",[t._v("事件")]),t._v(" "),a("ul",[a("li",[t._v("resize")]),t._v(" "),a("li",[t._v("input")])])]),t._v(" "),a("li",[a("p",[t._v("地理定位")]),t._v(" "),a("ul",[a("li",[t._v("Geolocation")])])]),t._v(" "),a("li",[a("p",[t._v("web存储")]),t._v(" "),a("ul",[a("li",[t._v("sessionStorage 和 localStorage")])])]),t._v(" "),a("li",[a("p",[t._v("应用程序缓存 application cache")]),t._v(" "),a("ul",[a("li",[t._v("创建 chche manifest 文件")])])]),t._v(" "),a("li",[a("p",[t._v("文件通讯协议")]),t._v(" "),a("ul",[a("li",[t._v("websocket")])])]),t._v(" "),a("li",[a("p",[t._v("文件读取")]),t._v(" "),a("ul",[a("li",[t._v("fileReader")])])]),t._v(" "),a("li",[a("p",[t._v("类名操作")]),t._v(" "),a("ul",[a("li",[t._v("classlist")])])])]),t._v(" "),a("h4",{attrs:{id:"css3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3"}},[t._v("#")]),t._v(" css3")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("选择器")]),t._v(" "),a("ul",[a("li",[t._v(":nth-child()")]),t._v(" "),a("li",[t._v(":nth-of-type()")]),t._v(" "),a("li",[t._v(":checked")]),t._v(" "),a("li",[t._v(":disabled")])])]),t._v(" "),a("li",[a("p",[t._v("盒模型")]),t._v(" "),a("ul",[a("li",[t._v("box-sizing")])])]),t._v(" "),a("li",[a("p",[t._v("背景")]),t._v(" "),a("ul",[a("li",[t._v("background-image、background-size、background-origin")])])]),t._v(" "),a("li",[a("p",[t._v("渐变")]),t._v(" "),a("ul",[a("li",[t._v("linear-gradient、radial-gradient")])])]),t._v(" "),a("li",[a("p",[t._v("边框")]),t._v(" "),a("ul",[a("li",[t._v("border-radius、border-image")])])]),t._v(" "),a("li",[a("p",[t._v("阴影")]),t._v(" "),a("ul",[a("li",[t._v("box-shadow、text-shadow")])])]),t._v(" "),a("li",[a("p",[t._v("2D/3D转换")]),t._v(" "),a("ul",[a("li",[t._v("transform：translate rotate scale skew")])])]),t._v(" "),a("li",[a("p",[t._v("过渡")]),t._v(" "),a("ul",[a("li",[t._v("transition")])])]),t._v(" "),a("li",[a("p",[t._v("动画")]),t._v(" "),a("ul",[a("li",[t._v("keyframes、animation")])])]),t._v(" "),a("li",[a("p",[t._v("弹性盒子")]),t._v(" "),a("ul",[a("li",[t._v("flex")])])]),t._v(" "),a("li",[a("p",[t._v("媒体查询")]),t._v(" "),a("ul",[a("li",[t._v("@media")])])])]),t._v(" "),a("h2",{attrs:{id:"rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem"}},[t._v("#")]),t._v(" rem")]),t._v(" "),a("p",[t._v("使用rem布局，实质都是通过动态改写html的font-size基准值，来实现不同设备下的良好统一适配")]),t._v(" "),a("p",[t._v("rem是相对于根元素"),a("code",[t._v("<html>")]),t._v("，这样就意味着，我们只需要在根元素确定一个px字号，则可以来算出元素的宽高。")]),t._v(" "),a("ul",[a("li",[t._v("利用rem这个单位去控制所有的盒子的大小，然后动态去改变html的font-size的值")]),t._v(" "),a("li",[t._v("rem的公式：设计图的大小/自己基于这个设计图设定font-size值(推荐40) = 这个屏幕的大小/这个屏幕对应的font-size值")]),t._v(" "),a("li",[t._v("反求rem： 在设计图下面得到的元素宽高 / 基于这个设计图设定的 font-size值")]),t._v(" "),a("li",[t._v("建议： 使用rem宜小不宜大，尽量使用固定+自适应，少用盒子与盒子之间浮动")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 千万注意：不要添加入口函数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同时引用的时候要放在最前面")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取 HTML 元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取屏幕的宽度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" screenWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始的设计图的大小")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" uiWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始的font-size的大小")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fonts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取初始的比例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uiWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" fonts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据当前的屏幕大小动态去计算这个屏幕所对应font-size值")]),t._v("\nhtml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" screenWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getSize")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  timer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//重新获取屏幕的宽度")]),t._v("\n    screenWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//针对屏幕宽度做限定")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screenWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("320")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("320")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("screenWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" uiWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uiWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据当前屏幕大小动态去计算这个屏幕锁对应font-size的值")]),t._v("\n      html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" screenWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" rate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br")])]),a("h2",{attrs:{id:"引入css-时-link-和-import-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入css-时-link-和-import-区别"}},[t._v("#")]),t._v(" 引入css 时 Link 和 @import 区别")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("使用方法不同")]),t._v(" "),a("ul",[a("li",[t._v("link一般写在页面上方head里面，直接加载外部样式")]),t._v(" "),a("li",[t._v("import一般定义在css内部，写在其他所有规则之前（除了charset），也就是一般写在文件头部，并且专门拿来链css的。")])])]),t._v(" "),a("li",[a("p",[t._v("加载时间")]),t._v(" "),a("ul",[a("li",[t._v("link一般都是并行加载的")]),t._v(" "),a("li",[t._v("import其实更延迟一些，它会等到页面下载完后才加载，因而可能会产生闪烁，查看资源加载的时间线可以看到对应的时间差异")])])])]),t._v(" "),a("h2",{attrs:{id:"base-css-意义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-css-意义"}},[t._v("#")]),t._v(" base.css 意义")]),t._v(" "),a("p",[t._v("统一各个浏览器差异、统一团队开发起始标准、弥补浏览器的“缺点”、提供频繁使用的类名。")]),t._v(" "),a("h2",{attrs:{id:"target-和-currenttarget-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-和-currenttarget-的区别"}},[t._v("#")]),t._v(" target 和 currentTarget 的区别")]),t._v(" "),a("ul",[a("li",[t._v("target：返回触发事件的源对象")]),t._v(" "),a("li",[t._v("currentTarget：返回事件绑定的对象")])]),t._v(" "),a("h2",{attrs:{id:"自适应和响应式布局的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自适应和响应式布局的区别"}},[t._v("#")]),t._v(" 自适应和响应式布局的区别")]),t._v(" "),a("ol",[a("li",[t._v("自适应布局通过检测视口分辨率，来判断当前访问的设备是：pc端、平板、手机，从而请求服务层，返回不同的页面；响应式布局通过检测视口分辨率，针对不同客户端在客户端做代码处理，来展现不同的布局和内容。")]),t._v(" "),a("li",[t._v("自适应布局需要开发多套界面，而响应式布局只需要开发一套界面就可以了。")]),t._v(" "),a("li",[t._v("自适应对页面做的屏幕适配是在一定范围：比如pc端一般要大于1024像素，手机端要小于768像素。而响应式布局是一套页面全部适应。")]),t._v(" "),a("li",[t._v("自适应布局如果屏幕太小会发生内容过于拥挤。而响应式布局正是为了解决这个问题而衍生出的概念，它可以自动识别屏幕宽度并做出相应调整的网页设计。")])]),t._v(" "),a("h2",{attrs:{id:"移动端适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端适配"}},[t._v("#")]),t._v(" 移动端适配")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5e6caf55e51d4526ff026a71",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官：你了解过移动端适配吗？"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);