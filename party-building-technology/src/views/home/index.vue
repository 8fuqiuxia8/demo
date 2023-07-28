<template>
  <screen-adapter>
    <div class="home">
      <!--顶部内容-->
      <div class="top-box">
        <!--顶部左侧内容-->
        <div class="t-left">
          <img src="@/assets/images/icon2.png" />
          <span class="t-left-title">多云转晴</span>
          <span class="t-left-subtext">10℃ ~ 12℃</span>
        </div>
        <div class="t-center"><span class="title">绿色科技感可视化大屏大数据中心</span></div>
        <!--顶部右侧内容-->
        <div class="t-right">
          <span class="datetime">{{ currDateTime }}</span>
        </div>
      </div>
      <!--左侧内容-->
      <div class="left-box">
        <div class="common-title">
          <span class="title">这是大标题</span>
          <div class="left-1">
            <div class="left-1-item">
              <div class="l1-item">
                <div class="value">12</div>
                <div class="text">名称(单位)</div>
              </div>
              <div class="l1-item">
                <div class="value">255</div>
                <div class="text">名称(单位)</div>
              </div>
              <div class="l1-item">
                <div class="value">101.24</div>
                <div class="text">名称(单位)</div>
              </div>
              <div class="l1-item">
                <div class="value">97.17</div>
                <div class="text">名称(单位)</div>
              </div>
            </div>
            <div class="l1-example">
              <span>这里是小标题</span>
            </div>
            <div class="bg">
            <div class="left-pie">
              <Echarts :id="'pie1'"  :width="'95%'" :options="pieOptions1" :height="'120%'" />
            </div>
            <div class="left-pie2">
              <Echarts :id="'pie2'"  :width="'95%'" :options="pieOptions2" :height="'120%'" />
            </div>
            </div>
            <div class="trophy">
              <div class="cup"></div>
              <span class="title">荣誉</span>
              <div class="content">
                <span class="text">荣获“全国科技进步先进县”、“全国绿色能源示范县”、“长三角最具投资价值县国家生态县”、“全国文明城市”的称号。“全国绿色能源示范县”、“长三角最具投资价值县国家生态县”、“全国绿色能源示范县”、“长三角最具投资价值县国家生态县</span>
              </div>
            </div>
          </div>
        </div>
        <div class="common-title">
          <span class="title">这是大标题</span>
          <div class="left-2">
            <div class="l2-item">
              <div class="item1">
                <img src="@/assets/images/icon6.png"/>
                <span class="value">107734</span><span class="text"><br>数据名称(单位)</span>
              </div>
              <div class="item2">
                <img src="@/assets/images/icon7.png"/>
                <span class="value">35626</span><span class="text"><br>数据名称(单位)</span>
              </div>
              <div class="item3">
                <img src="@/assets/images/icon8.png"/>
                <span class="value">21331</span><span class="text"><br>数据名称(单位)</span>
              </div>
            </div>
            <div class="list">
              <div class="l2-title">
                <span>这里是小标题</span>
              </div>
              <div class="echarts-box">
                <Echarts :id="'line'"  :width="'95%'" :options="barLineOptions" :height="'120%'" />
              </div>
              <div class="l2-title1">
                <span>这里是小标题</span>
              </div>
              <div class="echarts-box1">
                <Echarts :id="'bar'"  :width="'95%'" :options="barOptions" :height="'120%'" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="left" src="@/assets/images/left.png"/>
      <!--右侧内容-->
      <div class="right-box">

        <div class="common-title1">
          <span class="title">这是大标题</span>
        </div>
        <div class="right-1">
          <div class="right-title"><span class="title">这里是小标题</span></div>
          <div class="right-item">
            <div class="r1-item1">
              <div class="item1">
                <img class="icon9" src="@/assets/images/icon9.png"/>
                <span class="value">167.00</span>
                <span class="text"><br>同比增长</span>
                <span class="percent">3.7%</span>
                <img class="icon10" src="@/assets/images/icon10.png"/>
                <span class="subtext"><br>这里是数据名称(单位)</span>
              </div>
              <div class="echarts-box">
                <Echarts :id="'pie'" :width="'480%'" :options="pieOptions" :height="'120%'" />
              </div>
            </div>
          </div>
        </div>
        <div class="right-2">
          <div class="right-title"><span class="title">这里是小标题</span></div>
          <div class="right-item2">
            <span>种植面积占比</span>
            <div class="r2-item1">
              <div class="item1">
                <img class="icon9" src="@/assets/images/icon9.png"/>
                <span class="value">167.00</span>
                <span class="text"><br>同比增长</span>
                <span class="percent">3.7%</span>
                <img class="icon10" src="@/assets/images/icon10.png"/>
                <span class="subtext"><br>这里是数据名称(单位)</span>
              </div>
              <div class="echarts-box3">
                <Echarts :id="'ball'" :width="'320%'" :options="ppieOptions" :height="'120%'" />
              </div>
            </div>
          </div>
        </div>
        <div class="right-3">
          <div class="right-title"><span class="title">这里是小标题</span></div>
          <div class="r3-item">
            <div class="echarts-box1">
              <Echarts :id="'cylinder'"  :width="'95%'" :options="bbarOptions" :height="'90%'" />
            </div>
          </div>
        </div>
        <div class="right-4">
            <div class="right-title"><span class="title">这里是小标题</span></div>
            <div class="r4-item">
              <div class="item1">
                <span class="value">1519</span>
                <span class="subtext"><br>这里是数据名称(单位)</span>
              </div>
              <div class="item2">
                <span class="value">2544</span>
                <span class="subtext"><br>这里是数据名称(单位)</span>
              </div>
            </div>
            <div class="echarts-box2">
              <Echarts :id="'curve'"  :width="'105%'" :options="curveOptions" :height="'150%'" />
            </div>
          </div>
        <div class="right-5">
          <div class="right-title">
            <span class="title">这里是小标题</span>
          </div>
          <span class="subtext">产值</span>
          <span class="subtext1">面积</span>
          <div class="r5-item">
            <div class="echarts-box4">
              <Echarts :id="'circle'"  :width="'105%'" :options="circleOptions" :height="'100%'" />
            </div>
            <div class="echarts-box5">
              <Echarts :id="'example'"  :width="'105%'" :options="exampleOptions" :height="'100%'" />
            </div>
          </div>
        </div>
        </div>
      <img class=" right" src="@/assets/images/right.png"/>
      <!--中部内容-->
      <div class="middle-box">
        <div class="scatter-box">
          <Echarts :id="'scatter'"  :width="'95%'" :options="scatterOptions" :height="'100%'" />
        </div>

        <div class="team1-title">
          <span class="title">点位名称</span>
        </div>
        <div class="team2-title">
          <span class="title">点位名称</span>
        </div>
        <div class="team3-title">
          <span class="title">点位名称</span>
        </div>
        <div class="team4-title">
          <span class="title">点位名称</span>
        </div>
        <div class="team5-title">
          <span class="title">点位名称</span>
        </div>
        <div class="team6-title">
          <span class="title">点位名称</span>
        </div>
        <div class="team1">
            <img class="position" src="@/assets/images/position.png"/>
            <img class="line" src="@/assets/images/upline.png"/>
            <img class="ring" src="@/assets/images/icon12.png"/>
            <img class="border10" src="@/assets/images/border10.png"/>
          </div>
        <div class="team2">
          <img class="position" src="@/assets/images/position.png"/>
          <img class="line" src="@/assets/images/upline.png"/>
          <img class="ring" src="@/assets/images/icon12.png"/>
          <img class="border10" src="@/assets/images/border10.png"/>
        </div>
        <div class="team3">
          <img class="position" src="@/assets/images/position.png"/>
          <img class="line" src="@/assets/images/upline.png"/>
          <img class="ring" src="@/assets/images/icon12.png"/>
          <img class="border10" src="@/assets/images/border10.png"/>
        </div>
        <div class="team4">
          <img class="ring" src="@/assets/images/icon12.png"/>
          <img class="line" src="@/assets/images/line1.png"/>
          <img class="position" src="@/assets/images/position.png"/>
          <img class="border10" src="@/assets/images/border10.png"/>
        </div>
        <div class="team5">
          <img class="ring" src="@/assets/images/icon12.png"/>
          <img class="line" src="@/assets/images/line1.png"/>
          <img class="position" src="@/assets/images/position.png"/>
          <img class="border10" src="@/assets/images/border10.png"/>
        </div>
        <div class="team6">
          <img class="position" src="@/assets/images/position.png"/>
          <img class="line" src="@/assets/images/upline.png"/>
          <img class="ring" src="@/assets/images/icon11.png"/>
          <img class="border10" src="@/assets/images/border9.png"/>
        </div>
        <div class="middle-top">
          <div class="item1">
            <span class="text">头部菜单</span>
          </div>
          <div class="item2">
            <span class="text">头部菜单</span>
          </div>
          <div class="item3">
            <span class="text">头部菜单</span>
          </div>
          <div class="item4">
            <span class="text">头部菜单</span>
          </div>
        </div>
        <div class="bottom-box">
          <div class="common-title3">
            <span class="title">这是大标题</span>
          </div>
          <div class="bottom-item">
            <div class="item1">
              <span class="text">这里是数据名称</span>
              <span class="value">312</span><span class="subtext">个</span>
            </div>
            <div class="item2">
              <span class="text">这里是数据名称</span>
              <span class="value">462</span><span class="subtext">个</span>
            </div>
            <div class="item3">
              <span class="text">这里是数据名称</span>
              <span class="value">134</span><span class="subtext">个</span>
            </div>
            <div class="pic1">
              <img src="@/assets/images/label2.png"/>
              <span class="text">这里是小标签</span>
            </div>
            <div class="pic2">
              <img src="@/assets/images/label1.png"/>
              <span class="text">这里是小标签</span>
            </div>
          </div>
          <div class="bottom-content">
            <span class="content">技术支撑单位:北京科技信息技术有限公司</span>
          </div>
        </div>
      </div>
    </div>
  </screen-adapter>
</template>

<script lang="ts" setup>
import ScreenAdapter from '../../components/ScreenAdapter.vue'
import Echarts from '@/components/Echarts.vue'
import { onMounted, ref } from "vue";
import { formatByDate } from '../../utils/datetime-util'
import { COUNTRY_WEEK } from '../../enum/date'
import { setBarOptions, setBarLineOptions,setPieOptions,setPieOptions1 ,setPieOptions2,setPPieOptions,setBBarOptions,setCurveOptions,setCircleOptions,setExampleOptions,setScatterOptions} from "@/views/home/options";
//获取当前日期时间
const currDateTime = ref('')
//时间定时器
const currTimeInte = ref()
//中部涟漪散点图Options
const scatterOptions =setScatterOptions()
//左侧饼图1 Options
const pieOptions1 = setPieOptions1()
//左侧饼图2 Options
const pieOptions2 = setPieOptions2()
//左侧折线柱状图Options
const  barLineOptions = setBarLineOptions()
//左侧柱状图Options
const barOptions = setBarOptions()
//右侧饼图1 Options
const pieOptions = setPieOptions()
//右侧饼图2 Options
const ppieOptions = setPPieOptions()
//右侧柱状图 Options
const bbarOptions = setBBarOptions()
//右侧曲线图 Options
const curveOptions = setCurveOptions()
//右侧圆饼图3 Options
const circleOptions = setCircleOptions()
//右侧圆饼图4 Options
const exampleOptions = setExampleOptions()

onMounted(() => {
  //获取当前日期和时间以及星期
  const week = COUNTRY_WEEK.CN[formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').week]
  currTimeInte.value = setInterval(() => {
    let datetime = formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').text
    currDateTime.value = datetime + ' ' + week
  }, 1000)
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';

$boxBgColor: rgba(0, 0, 0, 0.08);
$valueColors: #43b9fe #f8af3c #51ffc1;
.common-title{
  margin: 0 20px 441px 10px;
  @include wh(241px,33px);
  background: url('@/assets/images/border3.png') no-repeat;
  background-size: 70% 100%;
  .title{
    @include fontMixin(20px,normal,#fff);
    margin-left: 35px;
    font-family: SourceHanSansCN-Medium;
    font-style: italic;
    font-stretch: normal;
    letter-spacing: 0;
    color: #ffffff;
  }
}
.common-title1{
  margin: 0 20px 441px 5px;
  @include wh(241px,33px);
  background: url('@/assets/images/border3.png') no-repeat;
  background-size: 70% 100%;
  .title{
    @include fontMixin(20px,normal,#fff);
    margin-left: 35px;
    font-family: SourceHanSansCN-Medium;
    font-style: italic;
    font-stretch: normal;
    letter-spacing: 0;
    color: #ffffff;
  }
}
.home {
  @include wh(100%, 100%);
  background: url('@/assets/images/bg.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
  color: white;
  .top-box {
    position: absolute;
    @include flexMixin(space-between, center);
    padding: 43px 23px 24px 53px;
    @include wh(1920px, 199px);
    background: url("../../assets/images/head.png") no-repeat;
    background-size: 100% 100%;
    .t-left {
      margin-top: -90px;

      img {
        @include wh(21px, 16px);
        margin-top: -10px;
      }

      .t-left-title {
        @include fontMixin(14px, 400, #fff);
        font-family: SourceHanSansCN;
        display: inline-block;
        margin:15px 10px;
      }

      .t-left-subtext {
        @include fontMixin(14px, 400, #fff);
        font-family: SourceHanSansCN;
        margin:15px 10px;
      }
    }

    .t-center {
      margin-top: -110px;
      margin-left: -170px;

      .title {
        @include fontMixin(46px, 400, #fff);
        width: 766px;
        height: 45px;
        margin-top: 10px;
        margin-left: 215px;
        font-family: ZhenyanGB;
        line-height: 30px;
        text-shadow: 0 5px 13px rgba(8, 66, 5, 0.6);
        background: linear-gradient(0deg, #00635B 0%, #F6FFF4 61.8896484375%, #FFFFFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .t-right {
      display: flex;
      align-items: center;
      margin-top: -90px;

      .datetime {
        @include fontMixin(18px, 400, #fff);
      }
    }
  }
  .right-box {
    @include wh(457px, 960px);
    //border: 1px solid rgba(2, 91, 2, 0.93);
    top: 113px;
    position: absolute;
    padding: 12px 13px;
    right: 5px;
    background: url("@/assets/images/bg-right.png") no-repeat;
    background-size: 100% 100%;
    margin-left: -15px;
  }
  .left{
    @include wh(22px,976px);
    margin-left: 20px;
  }
  .right{
    @include wh(21px,976px);
    margin-left: 1830px;
  }
  .left-box, {
    @include wh(447px, 960px);
    //border: 1px solid rgba(2, 91, 2, 0.93);
    top: 113px;
    position: absolute;
    padding: 12px 13px;
    left: 20px;

    .left-1 {
      @include wh(450px, 475px);
      position: absolute;
      background: url("@/assets/images/bg-left.png") no-repeat;
      background-size: 100% 100%;
      margin-left: -21px;
      margin-top: -40px;

      .left-1-item {
        display: flex;
        position: relative;
        margin: 80px 55px;

        .l1-item {
          text-align: center;
          background: url("@/assets/images/icon4.png") no-repeat;
          background-size: 81px 65px;
          margin-right: 20px;

          .value {
            @include fontMixin(20px, 400, #fff);
            font-family: PangMenZhengDao;
          }

          .text {
            @include fontMixin(14px, 400, #CCEFEC);
          }
        }

      }

      .l1-example {
        margin-top: -60px;
        @include fontMixin(16px, 400, #11E5C0);

        &:before {
          content: '';
          display: inline-block;
          @include wh(23px, 15px);
          background: url("@/assets/images/icon5.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 18px;
        }
      }

      .bg {
        background: url("@/assets/images/bg-left1.png");
        background-size: 98% 100%;

        .left-pie {
          @include wh(100%, 130px);
          margin: 30px 10px 10px 10px;
        }

        .left-pie2 {
          @include wh(100%, 100px);
          margin: -135px 70px 10px 10px;
        }
      }

      .trophy {
        display: inline-block;
        position: relative;
        background: url("@/assets/images/bg-left1.png");
        background-size: 100% 100%;
        margin-left: 15px;
        @include wh(426px,129px);
        .title {
          position: absolute;
          @include fontMixin(14px, 400, #11E5C0);
          margin:80px 0 0 28px;
        }
        .cup {
          @include wh(84px, 54px);
          background: url("@/assets/images/icon3.png") no-repeat;
          background-size: 100% 100%;
          position: absolute;
          margin-top: 25px;
        }

        .content {
          display: flex;
          position: relative;
          margin-left: 100px;
          margin-top: 15px;

          .text {
            display: flex;
            word-wrap: break-word;
            @include fontMixin(12px, 400, #CCEFEB);
            font-family: SourceHanSansCN;
            margin-left: -10px;
          }
        }
      }
    }

    .left-2 {
      position: absolute;
      @include wh(450px, 475px);
      background: url("@/assets/images/bg-left.png") no-repeat;
      background-size: 100% 100%;
      margin-left: -21px;
      margin-top: -30px;

      .l2-item {
        text-align: center;
        align-items: center;
        display: flex;
        position: relative;
        margin: 70px 0px 10px 30px;

        .item1 {
          width: 128px;
          height: 55px;
          border: 1px solid #0AC4C6;
          margin-right: 10px;
          background: linear-gradient(91deg, #0AC6A5 0%, rgba(10, 198, 165, 0) 100%);

          img {
            @include wh(25px, 18px);
            margin-top: -5px;
          }

          .value {
            @include fontMixin(20px, 400, #fff);
            font-family: PangMenZhengDao;
          }

          .text {
            @include fontMixin(12px, 400, #CCEFEC);
          }
        }

        .item2 {
          width: 128px;
          height: 55px;
          border: 1px solid #0AC4C6;
          margin-right: 10px;
          background: linear-gradient(91deg, #0AC6A5 0%, rgba(10, 198, 165, 0) 100%);

          img {
            @include wh(25px, 18px);
            margin-top: -5px;
          }

          .value {
            @include fontMixin(20px, 400, #fff);
            font-family: PangMenZhengDao;
          }

          .text {
            @include fontMixin(12px, 400, #CCEFEC);
          }
        }

        .item3 {
          width: 128px;
          height: 55px;
          border: 1px solid #0AC4C6;
          background: linear-gradient(91deg, #0AC6A5 0%, rgba(10, 198, 165, 0) 100%);

          img {
            @include wh(25px, 18px);
            margin-top: -5px;
          }

          .value {
            @include fontMixin(20px, 400, #fff);
            font-family: PangMenZhengDao;
          }

          .text {
            @include fontMixin(12px, 400, #CCEFEC);
          }
        }
      }

      .list {
        .l2-title {
          @include fontMixin(16px, 400, #11E5C0);

          &:before {
            content: '';
            display: inline-block;
            @include wh(23px, 15px);
            background: url("@/assets/images/icon5.png") no-repeat;
            background-size: 100% 100%;
            margin-left: 18px;
          }
        }
        .echarts-box {
          @include wh(100%, 140px);
          margin: -10px 30px 10px 30px;
        }
        .l2-title1 {
          @include fontMixin(16px, 400, #11E5C0);
          &:before {
            content: '';
            display: inline-block;
            @include wh(23px, 15px);
            background: url("@/assets/images/icon5.png") no-repeat;
            background-size: 100% 100%;
            margin-left: 18px;
          }
        }

        .echarts-box1 {
          @include wh(100%, 140px);
          margin: -2px 60px 10px 33px;
        }
      }
    }
  }
  .right-box {
    right: 37px;

    .right-1 {
      margin-top: -290px;
      margin-left: -10px;

      .right-title {
        //margin:-320px 10px 400px -10px;
        @include fontMixin(16px, 400, #11E5C0);
        margin-top: -430px;
        margin-left: 1px;

        &:before {
          content: '';
          display: inline-block;
          @include wh(23px, 15px);
          background: url("@/assets/images/icon5.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 18px;
        }
      }

      .right-item {
        background: url("@/assets/images/bg-right1.png") no-repeat;
        background-size: 100% 130px;
        margin-top: 15px;
        margin-left: 20px;

        .r1-item1 {
          .item1 {
            @include wh(127px, 84px);
            background: url("@/assets/images/border6.png") no-repeat;
            background-size: 100% 100%;
            position: absolute;
            margin-top: 15px;

            .icon9 {
              @include wh(21px, 22px);
              align-items: center;
            }

            .value {
              @include fontMixin(20px, 400, #fff);
              font-family: PangMenZhengDao;
            }

            .text {
              @include fontMixin(12px, 400, #CCEFEC);
            }

            .icon10 {
              @include wh(7px, 9px);
            }

            .percent {
              @include fontMixin(12px, 400, red);
            }

            .subtext {
              @include fontMixin(12px, 400, #fff);
              font-family: SourceHanSansCN;
            }
          }

          .echarts-box {
            @include wh(100px, 100px);
            margin: -15px 0 50px -50px;
          }
        }
      }
    }

    .right-2 {
      @include wh(440px, 130px);
      margin: 450px 20px 20px -8px;

      .right-title {
        //margin:-320px 10px 400px -10px;
        @include fontMixin(16px, 400, #11E5C0);
        margin-top: -430px;
        margin-left: 1px;

        &:before {
          content: '';
          display: inline-block;
          @include wh(23px, 15px);
          background: url("@/assets/images/icon5.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 18px;
        }
      }

      .right-item2 {
        background: url("@/assets/images/bg-right1.png") no-repeat;
        background-size: 100% 130px;
        margin-top: 15px;
        margin-left: 20px;

        .r2-item1 {
          .item1 {
            @include wh(127px, 82px);
            background: url("@/assets/images/border6.png") no-repeat;
            background-size: 100% 100%;
            position: absolute;
            margin-top: 17px;

            .icon9 {
              @include wh(21px, 22px);
              //margin-left: 17px;
            }

            .value {
              @include fontMixin(20px, 400, #fff);
              font-family: PangMenZhengDao;
            }

            .text {
              @include fontMixin(12px, 400, #CCEFEC);

            }

            .icon10 {
              @include wh(7px, 9px);
            }

            .percent {
              @include fontMixin(12px, 400, red);
            }

            .subtext {
              @include fontMixin(12px, 400, #fff);
              font-family: SourceHanSansCN;
            }
          }
        }
        .echarts-box3 {
          @include wh(110px, 110px);
          margin: -10px 0 50px 20px;
        }
      }
    }
    .right-3 {
      @include wh(440px, 130px);
      margin: 450px -10px 10px -7px;

      .right-title {
        //margin:-320px 10px 400px -10px;
        @include fontMixin(16px, 400, #11E5C0);
        margin-top: -415px;
        margin-left: -3px;

        &:before {
          content: '';
          display: inline-block;
          @include wh(23px, 15px);
          background: url("@/assets/images/icon5.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 18px;
        }
      }

      .r3-item {
        background: url("@/assets/images/bg-right1.png") no-repeat;
        background-size: 160% 220px;
        margin: 15px 1px 10px 10px;

        .echarts-box1 {
          @include wh(100%, 140px);
        }
      }
    }
    .right-4 {
      @include wh(425px, 130px);
      margin: 470px -10px 10px 5px;

      .right-title {
        //margin:-320px 10px 400px -10px;
        @include fontMixin(16px, 400, #11E5C0);
        margin-top: -415px;
        margin-left: -8px;

        &:before {
          content: '';
          display: inline-block;
          @include wh(23px, 15px);
          background: url("@/assets/images/icon5.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 18px;
        }
      }

      .r4-item {

        margin: 15px 1px 10px 10px;
        display: flex;
        position: relative;

        .item1 {
          @include wh(205px, 54px);
          background: url("@/assets/images/border5.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 1px;

          .value {
            @include fontMixin(20px, 400, #fff);
            font-family: PangMenZhengDao;
            display: flex;
            margin: 1px 0 0 75px;
          }

          .subtext {
            @include fontMixin(14px, 400, #CCEFEC);
            font-family: SourceHanSansCN;
            display: flex;
            margin: -30px 0 0 35px;
          }
        }

        .item2 {
          @include wh(205px, 54px);
          background: url("@/assets/images/border5.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 8px;

          .value {
            @include fontMixin(20px, 400, #fff);
            font-family: PangMenZhengDao;
            display: flex;
            margin: 1px 0 0 75px;
          }

          .subtext {
            @include fontMixin(14px, 400, #CCEFEC);
            font-family: SourceHanSansCN;
            display: flex;
            margin: -30px 0 0 35px;
          }
        }
      }

      .echarts-box2 {
        @include wh(390px, 130px);
        margin: -30px 0 50px 20px;
      }
    }
    .right-5 {
      @include wh(420px, 130px);
      margin: 470px -10px -10px 7px;
      position: relative;
      .right-title {
        //margin:-320px 10px 400px -10px;
        @include fontMixin(16px, 400, #11E5C0);
        margin-top: -360px;
        margin-left: -15px;

        &:before {
          content: '';
          display: inline-block;
          @include wh(23px, 15px);
          background: url("@/assets/images/icon5.png") no-repeat;
          background-size: 100% 100%;
          margin-left: 18px;
        }
      }
      .subtext{
        position: absolute;
        @include fontMixin(12px,400,#fff);
        background: #6C4830;
        border: 1px solid #EDB791;
        margin: -20px 0 20px 330px;
        box-shadow: 0px 5px 27px 0px rgba(7,22,25,0.66), 0px 4px 6px 0px #F19E66;
      }
      .subtext1{
        @include fontMixin(12px,400,#fff);
        background: #6C4830;
        position: absolute;
        margin: -20px 0 20px 360px;
        background: rgba(81,55,37,0.2);
        border: 1px solid #FF9D5B;
      }
      .r5-item{
        margin: 31px 1px 10px -2px;
        display: flex;
        position: relative;
        background: url("@/assets/images/bg-right1.png") no-repeat;
        background-size: 100% 100px;
        .echarts-box4{
          @include wh(250px, 130px);
          display: flex;
          position: absolute;
          margin: -20px 0 50px -40px;
        }
        .echarts-box5{
          @include wh(250px, 130px);
          display: flex;
          //position: absolute;
         margin-left: 145px;
          margin-top: -20px;
        }
      }
    }
  }
  .middle-box{
    @include wh(950px,881px);
    //margin:100px 1px 10px 470px;
    //border: 1px solid #013b01;
    margin-left: 470px;
    bottom: 125px;
    background: url('@/assets/images/map.png') no-repeat;
    background-size: 100% 100%;
    position:absolute;
    .scatter-box{
      @include wh(950px,551px);
      position: absolute;
      margin: 110px 0 0 0;
      //border: 1px solid green;

    }
    .team1-title{
      position: absolute;
      @include wh(131px,24px);
      background: url('@/assets/images/border8.png') no-repeat;
      background-size: 100% 100%;
      margin: 230px 0 0 200px;
      .title{
        position: relative;
        @include fontMixin(12px,400,#fff);
        font-family: SourceHanSansCN;
        text-align: center;
        margin-left: 40px;
      }
    }
    .team2-title{
      position: absolute;
      @include wh(131px,24px);
      background: url('@/assets/images/border8.png') no-repeat;
      background-size: 100% 100%;
      margin: 630px 0 0 230px;
      .title{
        position: relative;
        @include fontMixin(12px,400,#fff);
        font-family: DS-DIGT;
        text-align: center;
        margin-left: 40px;
      }
    }
    .team3-title{
      position: absolute;
      @include wh(131px,24px);
      background: url('@/assets/images/border8.png') no-repeat;
      background-size: 100% 100%;
      margin: 230px 0 0 465px;
      .title{
        position: relative;
        @include fontMixin(12px,400,#fff);
        font-family: SourceHanSansCN;
        text-align: center;
        margin-left: 40px;
      }
    }
    .team4-title{
      position: absolute;
      @include wh(131px,24px);
      background: url('@/assets/images/border8.png') no-repeat;
      background-size: 100% 100%;
      margin: 360px 0 0 400px;
      .title{
        position: relative;
        @include fontMixin(12px,400,#fff);
        font-family: SourceHanSansCN;
        text-align: center;
        margin-left: 40px;
      }
    }
    .team5-title{
      position: absolute;
      @include wh(131px,24px);
      background: url('@/assets/images/border8.png') no-repeat;
      background-size: 100% 100%;
      margin: 635px 0 0 465px;
      .title{
        position: relative;
        @include fontMixin(12px,400,#fff);
        font-family: SourceHanSansCN;
        text-align: center;
        margin-left: 40px;
      }
    }
    .team6-title{
      position: absolute;
      @include wh(131px,24px);
      background: url('@/assets/images/border7.png') no-repeat;
      background-size: 100% 100%;
      margin: 340px 0 0 630px;
      .title{
        position: relative;
        @include fontMixin(12px,400,#fff);
        font-family: SourceHanSansCN;
        text-align: center;
        margin-left: 40px;
      }
    }
    .team1{
      @include wh(80px,70px);
      position: absolute;
      margin: 300px 0 0 316px;
      //.text{
      //  @include fontMixin(12px,400,#fff);
      //  font-family: SourceHanSansCN;
      //  margin: -180px 10px -20px 10px;
      //  position: relative;

      //}
      .position{
        @include wh(40px,27px);
        margin:60px 55px 0 -70px;
        position: relative;
      }
      .line{
        @include wh(7,70);
        position: relative;
        margin: -25px 40px 0 -80px;

      }
      .ring{
       @include wh(30px,35px);
        align-items: center;
        margin:-128px -105px -1px -60px;
        //@include wh(35.8px,35.8px);
        //background: url('@/assets/images/border10.png') no-repeat;
        //background-size: 100% 100%;
        right: 20px;
      }
      .border10{
        @include wh(75.8px,75.8px);
        margin:-130px -105px -1px 52px;
      }
    }
    .team2{
      @include wh(80px,70px);
      position: absolute;
      margin: 300px;
      //.text{
      //  @include fontMixin(12px,400,#fff);
      //  font-family: SourceHanSansCN;
      //  margin: -180px 10px -20px 10px;
      //  position: relative;
      //  background: url('@/assets/images/border8.png') no-repeat;
      //  background-size: 110% 110%;
      //}
      .position{
        @include wh(40px,27px);
        margin:50px 5px 0 217px;
        position: relative;
      }
      .line{
        @include wh(7,70);
        position: relative;
        margin: -135px 40px 0 231px;

      }
      .ring{
        @include wh(30px,35px);
        align-items: center;
        margin:-283px -105px -1px 220px;
        //background: url('@/assets/images/border10.png') no-repeat;
        //background-size: 100% 100%;
        right: 20px;
      }
      .border10{
        @include wh(75.8px,75.8px);
        margin:-330px -105px -1px 195px;
      }
    }
    .team3{
      @include wh(80px,70px);
      position: absolute;
      margin: 300px;
      //.text{
      //  @include fontMixin(12px,400,#fff);
      //  font-family: SourceHanSansCN;
      //  margin: -180px 10px -20px 10px;
      //  position: relative;
      //  background: url('@/assets/images/border8.png') no-repeat;
      //  background-size: 110% 110%;
      //}
      .position{
        @include wh(40px,27px);
        margin:190px 5px 0 141px;
        position: relative;
      }
      .line{
        @include wh(7,70);
        position: relative;
        margin: -135px 40px 0 158px;

      }
      .ring{
        @include wh(30px,35px);
        align-items: center;
        margin:-288px -105px -1px 146px;
        //background: url('@/assets/images/border10.png') no-repeat;
        //background-size: 100% 100%;
        right: 20px;
      }
      .border10{
        @include wh(75.8px,75.8px);
        margin:-335px -105px -1px 122px;
      }
    }
    .team4{
      @include wh(80px,70px);
      position: absolute;
      margin: 300px;
      //.text{
      //  @include fontMixin(12px,400,#fff);
      //  font-family: SourceHanSansCN;
      //  margin: -180px 10px -20px 10px;
      //  position: relative;
      //  background: url('@/assets/images/border8.png') no-repeat;
      //  background-size: 110% 110%;
      //}
      .position{
        @include wh(40px,27px);
        margin:-258px 5px 0 211px;
        position: relative;
      }
      .line{
        @include wh(7,70);
        position: relative;
        margin: -145px 40px 0 228px;

      }
      .ring{
        @include wh(30px,35px);
        align-items: center;
        position: relative;
        margin:300px -105px -15px 239px;
        //background: url('@/assets/images/border10.png') no-repeat;
        //background-size: 100% 100%;
        right: 20px;
      }
      .border10{
        @include wh(75.8px,75.8px);
        margin:-120px -105px -1px 196px;
        position: relative;
      }
    }
    .team5{
      @include wh(80px,70px);
      position: absolute;
      margin: 285px 0 0 300px;
      //.text{
      //  @include fontMixin(12px,400,#fff);
      //  font-family: SourceHanSansCN;
      //  margin: -180px 10px -20px 10px;
      //  position: relative;
      //  background: url('@/assets/images/border8.png') no-repeat;
      //  background-size: 110% 110%;
      //}
      .position{
        @include wh(40px,27px);
        margin:98px 5px 0 -63px;
        position: relative;
      }
      .line{
        @include wh(7,70);
        position: relative;
        margin: 175px 40px 0 81px;

      }
      .ring{
        @include wh(30px,35px);
        align-items: center;
        position: relative;
        margin:280px -100px -1px -20px;
        //background: url('@/assets/images/border10.png') no-repeat;
        //background-size: 100% 100%;
        right: -1px;
      }
      .border10{
        @include wh(75.8px,75.8px);
        margin:280px -100px -5px -60px;
        position: relative;
      }
    }
    .team6{
      @include wh(80px,70px);
      position: absolute;
      margin: 280px 0 0 530px;
      //.text{
      //  @include fontMixin(12px,400,#fff);
      //  font-family: SourceHanSansCN;
      //  margin: -180px 10px -20px 10px;
      //  position: relative;
      //  background: url('@/assets/images/border8.png') no-repeat;
      //  background-size: 110% 110%;
      //}
      .position{
        @include wh(40px,27px);
        margin:190px 5px 0 141px;
        position: relative;
      }
      .line{
        @include wh(7,70);
        position: relative;
        margin: -135px 40px 0 158px;

      }
      .ring{
        @include wh(30px,35px);
        align-items: center;
        margin:-288px -105px -1px 146px;
        //background: url('@/assets/images/border10.png') no-repeat;
        //background-size: 100% 100%;
        right: 20px;
      }
      .border10{
        @include wh(75.8px,75.8px);
        margin:-335px -105px -1px 122px;
      }
    }
    .team1:hover img{
      transform: scale(1.3);
    }
    .team2:hover img{
      transform: scale(1.3);
    }
    .team3:hover img{
      transform: scale(1.5);
    }
    .team4:hover img{
      transform: scale(1.5);
    }
    .team5:hover img{
      transform: scale(1.5);
    }
    .team6:hover img{
      transform: scale(1.3);
    }
    .middle-top{
      display: flex;
      margin: 40px 0 0 30px;
      position: absolute;
      .item1{
        background: url('@/assets/images/border2-after.png') no-repeat;
        background-size: 100% 100%;
        @include wh(159px,86px);
        margin: -27px 130px;
        .text{
          @include fontMixin(20px,400,#fff);
          font-family: TensentypeRuiHeiJ;
          display: flex;
          margin: 20px 1px 0 38px;
        }
      }
      .item2{
        background: url('@/assets/images/border2-before.png') no-repeat;
        background-size: 100% 100%;
        @include wh(140px,46px);
        margin: -10px -140px;
        .text{
          @include fontMixin(20px,400,#fff);
          font-family: TensentypeRuiHeiJ;
          display: flex;
          margin: 5px 1px 0 30px;
        }
      }
      .item3{
        background: url('@/assets/images/border2-before.png') no-repeat;
        background-size: 100% 100%;
        @include wh(140px,46px);
        margin: -10px 140px;
        .text{
          @include fontMixin(20px,400,#fff);
          font-family: TensentypeRuiHeiJ;
          display: flex;
          margin: 5px 1px 0 30px;
        }
      }
      .item4{
        background: url('@/assets/images/border2-before.png') no-repeat;
        background-size: 100% 100%;
        @include wh(140px,46px);
        margin: -10px -135px;
        .text{
          @include fontMixin(20px,400,#fff);
          font-family: TensentypeRuiHeiJ;
          display: flex;
          margin: 5px 1px 0 30px;
        }
      }
    }
    .bottom-box{
      @include wh(980px,285px);
      background: url('@/assets/images/bg-bottom.png') no-repeat;
      background-size: 100% 100%;
      margin: -10px -5px 0 -15px;
      .common-title3{
        margin: 680px -20px 441px 15px;
        @include wh(230px,33px);
        background: url('@/assets/images/border3.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        .title{
          @include fontMixin(20px,normal,#fff);
          margin-left: 35px;
          font-family: SourceHanSansCN-Medium;
          font-style: italic;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #ffffff;
        }
      }
      .bottom-item{
        margin: -440px 5px 5px 30px;
        @include wh(217px,61px);
        position: absolute;
        display: inline-block;
        .item1{
          margin: 20px 0 5px 0;
          @include wh(217pz,61px);
          background: url('@/assets/images/border5.png') no-repeat;
          background-size: 100% 100%;
          .text{
            @include fontMixin(16px,400,#fff);
            font-family: SourceHanSansCN;
            display: inline-block;
            margin: 16px 15px;
          }
          .value{
            @include fontMixin(20px,400, #F49B60);
            font-family: PangMenZhengDao;
            margin-right: 5px;
          }
          .subtext{
            @include fontMixin(12px,400,#8FBF9D);
            font-family: SourceHanSansCN;
          }
        }
        .item2{
          @include wh(217pz,61px);
          margin: 12px 0 8px 0;
          background: url('@/assets/images/border5.png') no-repeat;
          background-size: 100% 100%;
          .text{
            @include fontMixin(16px,400,#fff);
            font-family: SourceHanSansCN;
            display: inline-block;
            margin: 16px 15px;
          }
          .value{
            @include fontMixin(20px,400, #11E5C0);
            font-family: PangMenZhengDao;
            margin-right: 5px;
          }
          .subtext{
            @include fontMixin(12px,400,#8FBF9D);
            font-family: SourceHanSansCN;
          }
        }
        .item3{
          @include wh(217pz,61px);
          background: url('@/assets/images/border5.png') no-repeat;
          background-size: 100% 100%;
          margin: 12px 0 8px 0;
          .text{
            @include fontMixin(16px,400,#fff);
            font-family: SourceHanSansCN;
            display: inline-block;
            margin: 16px 15px;
          }
          .value{
            @include fontMixin(20px,400, #F49B60);
            font-family: PangMenZhengDao;
            margin-right: 5px;
          }
          .subtext{
            @include fontMixin(12px,400,#8FBF9D);
            font-family: SourceHanSansCN;
          }
        }
        .pic1{
          @include wh(320px,210px);
          margin:-215px 14px 5px 230px;
          background: url('@/assets/images/pic2.png') no-repeat;
          background-size: 100% 100%;
          .text{
            margin:5px -129px;
            @include fontMixin(16px,400,#fff);
            font-family: SourceHanSansCN;
            position: absolute;
          }
          img{
            @include wh(144px,35px);
            position: relative;
          }
        }
        .pic2{
          @include wh(320px,210px);
          margin:-215px 14px 5px 590px;
          background: url('@/assets/images/pic1.png') no-repeat;
          background-size: 100% 100%;
          position: relative;
          .text{
            margin:5px -129px;
            @include fontMixin(16px,400,#fff);
            font-family: SourceHanSansCN;
            position: absolute;
          }
          img{
            @include wh(144px,35px);
            position: relative;
          }
        }
      }
      .bottom-content{
        margin: -185px 1px 5px -10px;
        @include wh(1000px,33px);
        background: url('@/assets/images/bottom.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        .content{
          @include fontMixin(13px,400,#fff);
          margin: 70px 340px;
          &:before {
            content: ' ';
            display: inline-block;
            @include wh(16px, 18px);
            background: url("@/assets/images/icon1.png") no-repeat;
            background-size: 100% 100%;
            margin-right: 12px;
            margin-top: 10px;

          }
          &:after {
            content: '';
            display: inline-block;
            @include wh(16px, 18px);
            background: url("@/assets/images/down.png") no-repeat;
            background-size: 100% 100%;
            margin-left: 15px;
          }
        }
      }

    }
  }
}
</style>
