<template>
  <div class="tools-name">开发工具</div>
  <hr color="#f0f0f0" />
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="1">
      <a class="tools-hover" href="https://pc.qq.com/category/c13.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/devtool/pc-qq.png"
        /></div>
        <div class="content">
          <span class="title">软件下载中心</span>
          <p class="description">腾讯软件免费下载中心，好用，可高速下载</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="2">
      <a class="tools-hover" href="https://code.visualstudio.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/yibai.png"
        /></div>
        <div class="content">
          <span class="title">VSCode</span>
          <p class="description">最受欢迎的代码编辑器！</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="3">
      <a class="tools-hover" href="https://www.w3school.com.cn/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/w3.png"
        /></div>
        <div class="content">
          <span class="title">W3school</span>
          <p class="description">全球最大的中文 Web 技术教程</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="4">
      <a class="tools-hover" href="https://www.imooc.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/imooc.png"
        /></div>
        <div class="content">
          <span class="title">慕课网</span>
          <p class="description">程序员的梦工厂</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="5">
      <a class="tools-hover" href="https://gitbook.cn/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/gitchat.png"
        /></div>
        <div class="content">
          <span class="title">Gitchat</span>
          <p class="description">IT知识分享平台</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="6">
      <a class="tools-hover" href="https://www.bootcss.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/bootcss.ico"
        /></div>
        <div class="content">
          <span class="title">Bootstrap中文网</span>
          <p class="description">致力于提供详尽的Bootstrap中文文档、代码实例</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="7">
      <a class="tools-hover" href="https://github.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/github.svg"
        /></div>
        <div class="content">
          <span class="title">GitHub</span>
          <p class="description">世界最大的开源代码共享社区</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="8">
      <a class="tools-hover" href="https://gitee.com/" target="blank">
        <div class="icon"><img class="tools-img" src="https://gitee.com/favicon.ico" /></div>
        <div class="content">
          <span class="title">Gitee</span>
          <p class="description">中国最大的开源代码共享社区</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="9">
      <a class="tools-hover" href="https://www.bilibili.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/media/bili.ico"
        /></div>
        <div class="content">
          <span class="title">哔哩哔哩</span>
          <p class="description">国内知名的视频弹幕网站</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="10">
      <a class="tools-hover" href="https://www.icourse163.org/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/edu.png"
        /></div>
        <div class="content">
          <span class="title">中国大学MOOC(慕课）</span>
          <p class="description">国家精品课程在线学习平台</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="11">
      <a class="tools-hover" href="https://study.163.com/category/480000003131009" target="blank">
        <div class="icon"><img class="tools-img" src="https://study.163.com/favicon.ico" /></div>
        <div class="content">
          <span class="title">网易云课堂</span>
          <p class="description">网易云课堂编程语言频道</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="12">
      <a class="tools-hover" href="https://www.twle.cn/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/jian.png"
        /></div>
        <div class="content">
          <span class="title">简单教程</span>
          <p class="description">简单教程，简单编程</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="13">
      <a class="tools-hover" href="http://www.manongjc.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/ma.ico"
        /></div>
        <div class="content">
          <span class="title">码农教程</span>
          <p class="description">IT编程入门网</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="14">
      <a class="tools-hover" href="http://springboot.fun/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/spring.png"
        /></div>
        <div class="content">
          <span class="title">SpringBoot中文导航</span>
          <p class="description">Spring Boot 中文社区资源链接导航</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="15">
      <a class="tools-hover" href="http://springcloud.fun/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/spring.png"
        /></div>
        <div class="content">
          <span class="title">SpringCloud中文导航</span>
          <p class="description">Spring Cloud 中文社区资源链接导航</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="16">
      <a class="tools-hover" href="http://techblog.pub/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/blog.jpg"
        /></div>
        <div class="content">
          <span class="title">技术博客</span>
          <p class="description">原创技术博客大联盟</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="17">
      <a class="tools-hover" href="https://www.coursera.org/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/coursera.ico"
        /></div>
        <div class="content">
          <span class="title">coursera</span>
          <p class="description">大型公开在线课程项目</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="18">
      <a class="tools-hover" href="https://kaiwu.lagou.com" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/lagou.png"
        /></div>
        <div class="content">
          <span class="title">拉钩教育</span>
          <p class="description">拉勾旗下的互联网人职场专业能力提升平台</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="19">
      <a class="tools-hover" href="https://time.geekbang.org/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/time.jpg"
        /></div>
        <div class="content">
          <span class="title">极客时间</span>
          <p class="description">轻松学习，高效学习</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="20">
      <a class="tools-hover" href="https://wiki.jikexueyuan.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/jk.jpg"
        /></div>
        <div class="content">
          <span class="title">极客学院</span>
          <p class="description">中国专业的IT职业在线教育平台</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="21">
      <a class="tools-hover" href="https://www.captainai.net/puresmilex" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/study/ai.png"
        /></div>
        <div class="content">
          <span class="title">人工智能教程</span>
          <p class="description">史上最通俗易懂的 AI 教程</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="22">
      <a class="tools-hover" href="http://ife.baidu.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/code/ife-logo.png"
        /></div>
        <div class="content">
          <span class="title">百度前端技术学院</span>
          <p class="description">百度创办的免费前端技术学习实践、交流、分享平台</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="23">
      <a class="tools-hover" href="http://www.freecodecamp.org" target="blank">
        <div class="icon"
          ><img
            class="tools-img"
            src="https://www.cxy521.com/static/img/index/code/freecodecamp.png"
        /></div>
        <div class="content">
          <span class="title">freeCodeCamp</span>
          <p class="description">完全免费的编程学习网站</p>
        </div>
      </a>
    </a-col>
  </a-row>
</template>
<script>
  export default {};
</script>
<style></style>
