<template>
  <div class="tools-name">摸鱼专区</div>
  <hr color="#f0f0f0" />
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="1">
      <a class="tools-hover" href="http://buhuixiao.com" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/relax/laughyouth.png"
        /></div>
        <div class="content">
          <span class="title">程序员漫画</span>
          <p class="description">全网唯二的程序员漫画故事</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="2">
      <a class="tools-hover" href="https://tophub.today/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://file.ipadown.com/tophub/assets/images/logo.png"
        /></div>
        <div class="content">
          <span class="title">今日热榜</span>
          <p class="description">今日热榜提供各站热榜聚合</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="3">
      <a class="tools-hover" href="https://www.zhihu.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://static.zhihu.com/heifetz/favicon.ico"
        /></div>
        <div class="content">
          <span class="title">知乎</span>
          <p class="description">中国最大的问答社区</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="4">
      <a class="tools-hover" href="https://mo.fish" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/relax/fish.ico"
        /></div>
        <div class="content">
          <span class="title">鱼塘热榜</span>
          <p class="description">聚合每日热门、搞笑、有趣资讯</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="5">
      <a class="tools-hover" href="https://www.qiushibaike.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/relax/baike.jpg"
        /></div>
        <div class="content">
          <span class="title">糗事百科</span>
          <p class="description">超搞笑的原创糗事笑话分享社区</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="6">
      <a class="tools-hover" href="http://www.itmind.net/xbw/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://cxy521.com/static/img/index/relax/yx.png"
        /></div>
        <div class="content">
          <span class="title">怀旧游戏合集</span>
          <p class="description">小霸王 超级玛丽 魂斗罗 雪人兄弟</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="7">
      <a class="tools-hover" href="https://fishpi.cn/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://fishpi.cn/images/favicon.png"
        /></div>
        <div class="content">
          <span class="title">摸鱼派</span>
          <p class="description">以程序员、设计师和极客为核心的社区</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="8">
      <a class="tools-hover" href="https://p.hancel.org/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://p.hancel.org/images/mofish.jpg"
        /></div>
        <div class="content">
          <span class="title">摸鱼大闯关</span>
          <p class="description">一个非常烧脑的CTF类闯关游戏</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="9">
      <a class="tools-hover" href="http://adarkroom.doublespeakgames.com/?lang=zh_cn" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://www.cxy521.com/static/img/index/relax/adr.png"
        /></div>
        <div class="content">
          <span class="title">暗室</span>
          <p class="description">适用于浏览器的极简文字冒险游戏</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="10">
      <a class="tools-hover" href="http://www.chinaunix.net/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://cxysite.com/static/img/ltzx/cu.png"
        /></div>
        <div class="content">
          <span class="title">空间站对接</span>
          <p class="description">SpaceX出品的空间站对接模拟器</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="11">
      <a class="tools-hover" href="http://www.itmind.net/tetris/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://www.cxy521.com/static/img/index/relax/tetris.jpg"
        /></div>
        <div class="content">
          <span class="title">俄罗斯方块</span>
          <p class="description">经典俄罗斯方块网页版</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="12">
      <a class="tools-hover" href="https://dig.chouti.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://www.cxy521.com/static/img/index/relax/chouti.png"
        /></div>
        <div class="content">
          <span class="title">抽屉新热榜</span>
          <p class="description">聚合每日热门、搞笑、有趣资讯</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="13">
      <a class="tools-hover" href="https://www.webhek.com/post/draw-a-stickman.html" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://www.cxy521.com/static/img/index/relax/fwebhek.ico"
        /></div>
        <div class="content">
          <span class="title">神笔马良</span>
          <p class="description">小人历险记-创作型游戏</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="14">
      <a class="tools-hover" href="https://findtheinvisiblecow.com" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://www.cxy521.com/static/img/index/relax/findtheinvisiblecow.png"
        /></div>
        <div class="content">
          <span class="title">找到那个牛</span>
          <p class="description">一个根据声音找动物的小游戏</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="15">
      <a class="tools-hover" href="https://2020game.io/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://www.cxy521.com/static/img/index/relax/2020.png"
        /></div>
        <div class="content">
          <span class="title">2020游戏</span>
          <p class="description">重点推荐，闯关类游戏！</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="16">
      <a class="tools-hover" href="https://mp.weixin.qq.com/s/LWagJEHnitxkYtXeCy3zRg" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://www.cxy521.com/static/img/index/relax/hongbao.png"
        /></div>
        <div class="content">
          <span class="title">外卖红包</span>
          <p class="description">每天点外卖，免费领红包！</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="17">
      <a class="tools-hover" href="https://strobe.cool/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://www.cxy521.com/static/img/index/relax/strobe.ico"
        /></div>
        <div class="content">
          <span class="title">扭曲世界</span>
          <p class="description">你周围的世界会改变形状，显得扭曲和变形</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="18">
      <a class="tools-hover" href="https://bouncyballs.org/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="http://www.cxy521.com/static/img/index/relax/bouncyballs.ico"
        /></div>
        <div class="content">
          <span class="title">弹力球</span>
          <p class="description">用鼠标去玩弹力球，解压</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="19">
      <a class="tools-hover" href="https://neave.tv/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/neave.ico"
        /></div>
        <div class="content">
          <span class="title">搞笑视频</span>
          <p class="description">随机播放搞笑视频，点击鼠标切换</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="20">
      <a class="tools-hover" href="https://playsnake.org/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/playsnake.ico"
        /></div>
        <div class="content">
          <span class="title">贪吃蛇</span>
          <p class="description">在线贪吃蛇小游戏</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="21">
      <a class="tools-hover" href="https://zoom.earth/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/earth.ico"
        /></div>
        <div class="content">
          <span class="title">监测地球</span>
          <p class="description">通过地图来检测区域天气、地形</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="22">
      <a class="tools-hover" href="https://bellwoods.xyz/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/bellwoods.png"
        /></div>
        <div class="content">
          <span class="title">在线放风筝</span>
          <p class="description">移动鼠标可以让风筝飞翔，伴随着音乐</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="23">
      <a class="tools-hover" href="https://www.autopiano.cn" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/autopiano.ico"
        /></div>
        <div class="content">
          <span class="title">自由钢琴</span>
          <p class="description">在网页上谈钢琴，也可以根据曲子演奏</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="https://bruno-simon.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/simon.png"
        /></div>
        <div class="content">
          <span class="title">网页开车</span>
          <p class="description">控制模拟的遥控车在地图上随意行驶，十分解压</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="http://www.heyzxz.me/pcol/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/heyzxz.png"
        /></div>
        <div class="content">
          <span class="title">台球游戏</span>
          <p class="description">在线台球游戏，画质很精美</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="http://flappybird.io/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/flappybird.png"
        /></div>
        <div class="content">
          <span class="title">flappybird</span>
          <p class="description">一款经典的火爆全网游戏</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="https://lines.frvr.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/playLinesFrvr.png"
        /></div>
        <div class="content">
          <span class="title">Play Lines FRVR</span>
          <p class="description">一款轻松的益智在线小游戏</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="https://yzyx.info/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/efficiency/yizhi.png"
        /></div>
        <div class="content">
          <span class="title">益智游戏</span>
          <p class="description">小游戏合集，所有游戏无需安装和注册</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="https://www.yikm.net/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/jieji.png"
        /></div>
        <div class="content">
          <span class="title">街机游戏</span>
          <p class="description">小霸王、红白机、FC在线游戏、街机游戏</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="http://www.staggeringbeauty.com/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/yaoyao.png"
        /></div>
        <div class="content">
          <span class="title">摇摇更快乐</span>
          <p class="description">魔性解压网站，急速晃动还会闪亮你的眼</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="https://gate.ofo.moe/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/renyimen.png"
        /></div>
        <div class="content">
          <span class="title">任意门</span>
          <p class="description">开启一次未知之旅，这里总有一个属于你的宝站！</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="https://deeeep.io/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/deep.png"
        /></div>
        <div class="content">
          <span class="title">深海鱼大作战</span>
          <p class="description">你是一条鱼，能活多久？</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="https://deeeep.io/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/deep.png"
        /></div>
        <div class="content">
          <span class="title">深海鱼大作战</span>
          <p class="description">你是一条鱼，能活多久？</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="https://oreo.ddiu.me/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/aoliao.ico"
        /></div>
        <div class="content">
          <span class="title">奥利奥生成器</span>
          <p class="description">无敌沙雕好玩的奥利奥图片生成器</p>
        </div>
      </a>
    </a-col>
    <a-col :xs="12" :sm="8" :md="6" :lg="6" :xl="4" :order="24">
      <a class="tools-hover" href="https://strobe.cool/" target="blank">
        <div class="icon"
          ><img class="tools-img" src="https://www.cxy521.com/static/img/index/relax/huanjue.png"
        /></div>
        <div class="content">
          <span class="title">幻觉产生器</span>
          <p class="description">盯住目标，你即将出现幻觉</p>
        </div>
      </a>
    </a-col>
  </a-row>
</template>
<script>
  export default {};
</script>
<style></style>
