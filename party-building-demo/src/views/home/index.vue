<template>
	<screen-adapter>
		<div class="home">
			<!--顶部内容-->
			<div class="top-box">
				<!--顶部左侧内容-->
				<div class="t-left">
					<span class="t-left-title">百千万工程数据可视化驾驶舱</span>
					<span class="t-left-subtext">王店镇 南梅村</span>
				</div>
				<!--顶部右侧内容-->
				<div class="t-right">
					<span class="datetime">{{ currDateTime }}</span>
					<img src="@/assets/images/go-system.png" alt="" />
					<span class="go-system">
						<span>进入后台</span>
					</span>
				</div>
			</div>
			<!--左侧内容-->
			<div class="left-box">
				<div class="left-1">
					<div class="img-box">
						<a-carousel autoplay :dots="false">
							<div v-for="(item, index) in photos" :key="'image' + index">
								<img :src="item" alt="" />
							</div>
						</a-carousel>
					</div>
					<div class="type-box">
						<img src="@/assets/images/left-right-1.png" alt="" />
						<img src="@/assets/images/left-right-2.png" alt="" />
						<img src="@/assets/images/left-right-3.png" alt="" />
					</div>
				</div>
				<div class="left-2">
					<div class="left-2-item">
						<div class="value">{{ ruralInfo?.committeeManNumber }}/{{ ruralInfo?.committeeWomanNumber }}</div>
						<div class="text">班子/后备</div>
					</div>
					<div class="left-2-item">
						<div class="value">{{ ruralInfo?.populationNumber }}</div>
						<div class="text">总人口</div>
					</div>
					<div class="left-2-item">
						<div class="value">{{ ruralInfo?.floatingPopulationNumber }}</div>
						<div class="text">流动人口</div>
					</div>
				</div>
				<div class="common-title1">党组织情况</div>
				<div class="echarts-box">
					<Echarts v-if="pieOptions" :key="pieOptions" :id="'pie'" :width="'100%'" :height="'100%'" :options="pieOptions"  />
				</div>
				<div class="tab-box">
					<ul>
						<li v-for="(item, index) in tabList" :key="item.typeName" :class="{ active: currTabIndex === index }" @click="onTabChange(index)">
							<img :src="item.icon" alt="" />
							<span>{{ item.typeName }}</span>
						</li>
					</ul>
				</div>
				<div class="echarts-box2">
					<Echarts v-if="Object.values(dashboardOptions).length > 0" :id="'dashboard'" :width="'100%'" :options="dashboardOptions" :height="'100%'" />
				</div>
			</div>
			<!--右侧内容-->
			<div class="right-box">
				<div class="common-title">连心服务</div>
				<div class="right-1">
					<div class="item1">
						<span class="text1">微走访</span>
						<img class="pointline" src="@/assets/images/pointline.png" />
						<img class="up" src="@/assets/images/up.png" />
						<span class="percent">{{ruralQuery?.visitRatio}}%</span>
						<span class="value">{{ruralQuery?.visitNumber}}条</span>
					</div>
					<div class="item2">
						<span class="text1">微力量</span>
						<img class="pointline" src="@/assets/images/pointline.png" />
						<img class="up" src="@/assets/images/up.png" />
						<span class="percent">{{ruralQuery?.screeningRatio}}%</span>
						<span class="value">{{ ruralQuery?.screeningNumber}}条</span>
					</div>
					<div class="item3">
						<span class="text1">微民情</span>
						<img class="pointline" src="@/assets/images/pointline.png" />
						<img class="down" src="@/assets/images/down.png" />
						<span class="percent">{{ruralQuery?.securityRatio}}%</span>
						<span class="value">{{ruralQuery?.securityNumber}}条</span>
					</div>
					<div class="item4">
						<span class="text1">微办事</span>
						<img class="pointline" src="@/assets/images/pointline.png" />
						<img class="up" src="@/assets/images/up.png" />
						<span class="percent">{{ruralQuery?.researchRatio}}%</span>
						<span class="value">{{ruralQuery?.researchNumber}}条</span>
					</div>
					<div class="echarts-box">
						<Echarts v-if="satisfiedOptions" :key="satisfiedOptions" :id="'satisfied'" :width="'120%'" :options="satisfiedOptions" :height="'165%'" />
					</div>
				</div>
				<div class="common-title">集体经济</div>
				<div class="echarts-box">
					<Echarts v-if="barOptions" :key="barOptions" :id="'bar'" :width="'100%'"  :options="barOptions" :height="'165%'" />
				</div>
				<div class="common-title">党组织活动</div>
				<div class="echarts-box1">
					<Echarts v-if="lineOptions" :key="lineOptions" :id="'line'" :width="'100%'" :height="'200%'" :options="lineOptions"  />
				</div>
			</div>
			<!--底部内容-->
			<div class="bottom-box"></div>
			<!--地图-->
			<echarts-map />
			<div class="map-box">
				<div class="logo-box">
					<img src="@/assets/images/logo3.png" />
					<span class="text">优秀</span>
					<img src="@/assets/images/logo2.png" />
					<span class="text">平稳</span>
					<img src="@/assets/images/logo1.png" />
					<span class="text">较差</span>
				</div>
				<div class="bottom-box">
					<div class="bottom-item">
						<div class="bottom-1">
							<div>
								<div v-for="item in rankingData" :key="item">
									<span>{{ item.value }}</span>
									<span>{{ item.text }}</span>
								</div>
							</div>
							<span>强基指数</span>
						</div>
						<div class="line"></div>
						<div class="bottom-2">
							<div class="bottom-2-left">
								<div v-for="(item, index) in progressData" :key="item">
									<div>{{ item.typeName }}</div>
									<div>
										<span>{{ item.evaluationScore }}</span>
										<span>得分</span>
										<span>{{ item.criteriaScore }}</span>
										<span>标准得分</span>
									</div>
									<div>
										<Echarts  v-if="progressOptions" :key="progressOptions" :id="'progress'+ index " :width="'100%'" :height="'100%'" :options="progressOptions" />
									</div>
								</div>
							</div>
						</div>
						<div class="ball-box1">
							<Echarts :id="'liquid'" :width="'150%'" :options="ballOptions" :height="'175%'" />
						</div>
						<div class="liquid-box1">
							<Echarts :id="'water'" :width="'150%'" :options="liquidOptions" :height="'175%'" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</screen-adapter>
</template>

<script lang="ts" setup>
import ScreenAdapter from '../../components/ScreenAdapter.vue'
import Echarts from '@/components/Echarts.vue'
import { onMounted, onUnmounted, ref,toRaw } from 'vue'
import { formatByDate } from '../../utils/datetime-util'
import { COUNTRY_WEEK } from '../../enum/date'
import tabIcon1 from '../../assets/images/21341633685714_.pic@2x.png'
import tabIcon2 from '../../assets/images/21351633685776_.pic@2x.png'
import tabIcon3 from '../../assets/images/21361633685858_.pic@2x.png'
import tabIcon4 from '../../assets/images/21371633685909_.pic@2x.png'
import tabIcon5 from '../../assets/images/21381633685967_.pic@2x.png'
import tabIcon6 from '../../assets/images/21391633686010_.pic@2x.png'
import {
	setDashboardOption,
	setPieOption,
	setBarOptions,
	setLineOptions,
	setSatisfiedOptions,
	setBallOptions,
	setLiquidOptions,
	setPreOption, setProgressOption
} from '@/views/home/options'
import EchartsMap from '@/components/EchartsMap.vue'
import 'echarts-liquidfill/dist/echarts-liquidfill.min.js'
import requestMethod from '@/api/login'
import ruralInfoRequest from '@/api/ruralInfo'
import ruralIndexRequest from '@/api/ruralIndex'
import { useUserStore } from '@/store/user'
import { useSystemStore } from '@/store/system'
import { messageMethod } from '@/utils/message-util'
import { ruralInfo } from '@/entity/ruralInfo/rural_Info'
import { BaseUtil } from '@/utils/base-util'
import { RuralIndex } from '@/entity/ruralIndex/rural_Index'
import RuralInfo from '@/api/ruralInfo'
import { ruralRanking } from '@/entity/ruralInfo/rural_Ranking'
import {ruralQuery} from '@/entity/ruralInfo/ruralQuery'
import RuralRanking from '@/api/ruralIndex'
import RuralQuery from '@/api/ruralIndex'
import {ruralTest} from '@/entity/ruralInfo/ruralTest'
import RuralTest from '@/api/ruralIndex'
//获取当前日期时间
const currDateTime = ref('')
//时间定时器
const currTimeInte = ref()
//轮播图数组
const photos = ref<string[]>([])
//党组织情况options
let pieOptions = ref({})
//党组织情况分类options
let dashboardOptions = ref({})
//集体经济options
const barOptions = ref({})
//党组织活动Options
let lineOptions = ref({})
//右侧1 群众满意度Options
const satisfiedOptions = ref({})
//水球1 Options
const ballOptions = setBallOptions()
const liquidOptions = setLiquidOptions()
const preOption = setPreOption()
let progressOption = ref({})
//bottom-1数据
const rankingData = ref<object[]>([
	{
		text: '荣誉分',
		value: 32
	},
	{
		text: '总分',
		value: 92
	}
])
//bottom-2数据
const progressData = ref<ruralTest[]>([])
const progressOptions = ref({})
//当前选中tab的下标
const currTabIndex = ref(0)
//tab数据
const tabList = ref<RuralIndex[]>([])
let requestId = 0
// 动画事件
const requestAnimation = (angle: number) => {
	cancelAnimationFrame(requestId)
	angle += 1
	dashboardOptions.value = setDashboardOption(angle)
	requestId = requestAnimationFrame(() => {
		requestAnimation(angle)
	})
}
onMounted(async () => {
	//获取当前日期和时间以及星期
	const week = COUNTRY_WEEK.CN[formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').week]
	currTimeInte.value = setInterval(() => {
		let datetime = formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').text
		currDateTime.value = datetime + ' ' + week
	}, 1000)
	await getDashboard()
	await login()
	await getRuralInfo()
	await getRuralIndex()
	await getRuralCollectiveEconomy()
	await getRuralPartyActivities()
	await getRuralRanking()
	await getRuralTest()
	await getRuralQuery()

})
//使用系统存储
const systemStore = useSystemStore()
//使用用户信息存储
const useStore = useUserStore()
//登录请求
const loginParams = {
	userAccount: 'admin',
	password: '111111'
}
const login = async () => {
	await requestMethod.login(loginParams).then(({ data }) => {
		console.log(data)
		//设置系统信息
		systemStore.setToken(data.authToken)
		//设置用户信息
		useStore.setInfo(data)
		messageMethod.success('登录成功!')
	})
}
//分页查询农村详情
const ruralInfo = ref<RuralInfo>()
//农村id
const fkRuralId = ref<string | undefined>('')
const ruralInfoParams = {
	pageNum: 1,
	pageSize: 10,
	rfRuralName: '测试村'
}
const getRuralInfo = async () => {
	await ruralInfoRequest.page(ruralInfoParams).then(({ data }) => {
		console.log(data.list[0])
		ruralInfo.value = data.list[0]
		fkRuralId.value = ruralInfo.value?.fkRuralId
		const photoList: string[] =
			ruralInfo.value?.groupPhoto === ''
				? ruralInfo.value?.centerPhoto.split(',')
				: ruralInfo.value?.groupPhoto.split(',').concat(ruralInfo.value?.centerPhoto.split(','))
		photos.value = photoList.map(item => BaseUtil.getUploadPath(item))
	})
}

/**
 * 获取党员分布情况(根据农村id查询农村党支部人员分布情况)
 */
const getRuralIndex = async () => {
	await ruralIndexRequest.personnelDistribute(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const icons = [tabIcon1, tabIcon2, tabIcon3, tabIcon4, tabIcon5, tabIcon6]
		tabList.value = data
		tabList.value.forEach((item: RuralIndex, index: number) => {
			item.icon = icons[index]
		})
		const chartsData = tabList.value[currTabIndex.value].distributeList.map(item => {
			return {
				name: item.distributionIntervalName,
				value: item.distributionNumber
			}
		})
		pieOptions.value = setPieOption(chartsData)
	})
}
/**
 * 根据农村id查询发展指数（村集体经济）
 */
const getRuralCollectiveEconomy = async() => {
	await ruralIndexRequest.collectiveEconomy(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const statisticsYear = data.map(item => item.statisticsYear)
		const operatingIncome = data.map(item => item.operatingIncome)
		const recurringIncome = data.map(item => item.recurringIncome)
		const operatingAverageIncome = data.map(item => item.operatingAverageIncome)
		const recurringAverageIncome = data.map(item => item.recurringAverageIncome)
		barOptions.value = setBarOptions({
			xAxisData:statisticsYear,
			legendData:['经营性收入','经常性收入','全区平均'],
			seriesData: [operatingIncome, operatingAverageIncome, recurringIncome, recurringAverageIncome]
		})
	})
}
//根据农村id查询堡垒指数（党员活动
const getRuralPartyActivities = async () => {
	await ruralIndexRequest.partyActivities(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const activitiesNumber = data.map(item => item.activitiesNumber)
		const activitiesRatio = data.map(item => item.activitiesRatio)
		const statisticsMonth = data.map(item => item.statisticsMonth.substring(5))
		lineOptions.value = setLineOptions({
			xAxisData: statisticsMonth,
			seriesData: [activitiesNumber, activitiesRatio]
		})
	})
}
//根据农村id查询强基指数排名
const ruralRanking = ref<RuralRanking>()
const getRuralRanking = async () => {
	await ruralIndexRequest.ranking(fkRuralId.value).then(({data}) =>{
		console.log(data)
	})
}
//根据农村id查询强基指数测评分
const ruralTest = ref<ruralTest>()
//const evaluationScores = ref([])
//const criteriaScores = ref([])
const scoreData = ref<number[]>([])
const getRuralTest = async () => {
	await ruralIndexRequest.test(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const typeNames = ['政治素养', '支部运行', '阵地建设', '统领作用']
		const evaluationScore = data.map(item => item.evaluationScore)
		const criteriaScore = data.map(item => item.criteriaScore)
		progressData.value = data
		progressData.value.forEach((item: ruralTest, index: number) => {
			item.typeName = typeNames[index]
		})
		const chartsData = data.map(item => {
			return {
				evaluationScores: item.evaluationScore,
				criteriaScores: item.criteriaScore
			}
		})
		progressOptions.value = setProgressOption({
			evaDatas: evaluationScore,
			criDatas: criteriaScore
		})
		//progressOptions.value = setProgressOption(initOpt(0))
	})
}
// const initOpt = (index: number) => {
// 	return setProgressOption(chartsData[index])
// }
//根据农村id查询连心指数
const ruralQuery = ref<RuralQuery>()
const getRuralQuery = async () => {
	await ruralIndexRequest.queryIndex(fkRuralId.value).then(({data}) =>{
		console.log(data)
		ruralQuery.value = data
		const satisfactionRatio = data.satisfactionRatio
		satisfiedOptions.value = setSatisfiedOptions({
			seriesData:satisfactionRatio
		})
	})
}
/**
 * 点击tab切换
 * @param index
 */
function onTabChange(index: number) {
	currTabIndex.value = index
	if (currTabIndex.value != undefined) {
		const chartsData = tabList.value[currTabIndex.value].distributeList.map(item => {
			return {
				name: item.distributionIntervalName,
				value: item.distributionNumber
			}
		})
		pieOptions.value = setPieOption(chartsData)
	}
}
/**
 * 获取党员活动平均参与率
 */
async function getDashboard() {
	dashboardOptions.value = setDashboardOption(0)
	requestAnimation(0)
}
// 组件卸载完成后执行的函数
onUnmounted(() => {
	cancelAnimationFrame(requestId)
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';

$boxBgColor: rgba(0, 0, 0, 0.08);
$valueColors: #43b9fe #f8af3c #51ffc1;
.common-title {
	@include wh(228px, 52px);
	background: url('@/assets/images/t_bg.png') no-repeat;
	background-size: 100% 100%;
	margin-bottom: 220px;
	text-align: center;
	line-height: 52px;
	@include fontMixin(24px, 400, #c7e6ff);
	letter-spacing: 2px;
}
.common-title1 {
	@include wh(228px, 52px);
	background: url('@/assets/images/t_bg.png') no-repeat;
	background-size: 100% 100%;
	margin-top: 60px;
	text-align: center;
	line-height: 52px;
	@include fontMixin(24px, 400, #c7e6ff);
	letter-spacing: 2px;
}
.home {
	@include wh(100%, 100%);
	background: url('@/assets/images/bg.png') no-repeat;
	background-size: 100% 100%;
	color: white;
	position: relative;
	.map-box {
		.logo-box {
			@include wh(100px, 100px);
			margin: 550px 10px 30px 710px;
			position: absolute;
			display: inline-block;
			//justify-content: flex-start;
			img {
				display: inline-block;
				@include wh(60px, 60px);
				margin: -7px 1px 0 0;
			}

			.text {
				@include fontMixin(18px, 400, #fff);
				font-family: DS-DIGIT;
				margin: 40px 1px 10px 1px;
			}
		}
		.bottom-box {
			@include wh(905px, 300px);
			margin: 30px 10px 10px 510px;
			.bottom-item {
				display: flex;
				@include wh(850px, 220px);
				//border: 1px solid #42b9fe;
				margin: -5px 10px 5px 1px;
				position: relative;
				flex-wrap: wrap;
				.bottom-1 {
					@include flexMixin(space-between);
					@include wh(1300px,58px);
					div {
						@include flexMixin(center);

						& > span:first-child {
							@include fontMixin(40px, 400, #2bdaf2);
							font-family: DS-DIGIT;
							margin-left: 20px;
							margin-right: 8px;
							margin-top: 20px;

							+ span {
								position: relative;
								top: 20px;
							}
						}
					}

					& > span:last-child {
						@include fontMixin(30px, 400, #c7e6ff);
						margin-left: 300px;
						margin-top: 13px;
					}
				}

				.line {
					content: '';
					display: block;
					@include wh(1073px, 1px);
					border: 1px solid #a0d3ff;
					//width: 973px;
					opacity: 0.2;
					margin-top: 15px;
					margin-left: 16px;
				}

				.bottom-2 {
					@include wh(120%, 250px);
					@include flexMixin(center);
					margin-left: -130px;
					.bottom-2-left {
						margin-top: -25px;
						margin-left: 30px;
						display: grid;
						grid-template-columns: auto auto;
						& > div {
							margin-right: 46px;

							& > div:first-child {
								padding-left: 15px;
								@include fontMixin(14px, 500);
							}

							& > div:nth-child(2) {
								padding-left: 15px;

								& > span:first-child {
									@include fontMixin(32px, 400, #3eb4f7);
									font-family: DS-DIGIT;
									margin-right: 11px;

									+ span {
										@include fontMixin(12px, 500, #c7e6ff);
										margin-right: 41px;

										+ span {
											@include fontMixin(32px, 400, #f8af3c);
											font-family: DS-DIGIT;
											margin-right: 11px;

											+ span {
												@include fontMixin(12px, 500, #c7e6ff);
											}
										}
									}
								}
							}

							& > div:last-child {
								@include wh(320px, 18px);
								background: url('@/assets/images/bar-bg.png');
								background-size: 100% 100%;
							}
						}
						//.item{
						//	@include wh(320px,18px);
						//	background: url('@/assets/images/bar-bg.png');
						//	background-size: 100% 100%;
						//	margin: -100px 70px 0 -20px;
						//}
						//.item1{
						//	@include wh(320px,18px);
						//	background: url('@/assets/images/bar-bg.png');
						//	background-size: 100% 100%;
						//	margin: -100px 80px 0 -20px;
						//}
						//.item2{
						//	@include wh(320px,18px);
						//	background: url('@/assets/images/bar-bg.png');
						//	background-size: 100% 100%;
						//	margin:10px 90px 0 -19px;
						//
						//}
						//.item3{
						//	@include wh(320px,18px);
						//	background: url('@/assets/images/bar-bg.png');
						//	background-size: 100% 100%;
						//	margin-left: -20px;
						//}
					}
				}
				.ball-box1 {
					@include wh(86.3px, 85.8px);
					margin: -260px -70px -10px 720px;
				}
				.liquid-box1 {
					@include wh(86.3px, 85.8px);
					margin: -145px -70px -10px 720px;
				}
			}
		}
	}
	.top-box {
		position: absolute;
		width: 100%;
		@include flexMixin(space-between, center);
		padding: 43px 23px 24px 53px;

		.t-left {
			.t-left-title {
				@include fontMixin(48px, 700);
				margin-right: 22px;
				letter-spacing: 3px;
			}

			.t-left-subtext {
				@include fontMixin(28px, 700);
				letter-spacing: 2px;
			}
		}

		.t-right {
			display: flex;
			align-items: center;

			.datetime {
				@include fontMixin(18px, 500);
			}

			img {
				@include wh(36px, 36px);
				margin: 0 7px 0 8px;
			}

			.go-system {
				@include fontMixin(21px, 700, #f7f7f7);

				&:after {
					content: '';
					display: inline-block;
					@include wh(10px, 11px);
					background: url('@/assets/images/arrow-right.png') no-repeat;
					background-size: 100% 100%;
					margin-left: 4px;
				}
			}
		}
	}

	.left-box,
	.right-box {
		@include wh(447px, 930px);
		//border: 1px solid red;
		position: absolute;
		top: 113px;
		background-color: $boxBgColor;
		padding: 12px 13px;
	}

	.left-box {
		left: 37px;
		z-index: 2;
		.left-1 {
			display: flex;

			.img-box {
				@include wh(319px, 186px);
				padding: 12px 11px;
				vertical-align: middle;
				display: inline-block;
				border: 1px solid #cbedff;
				background-color: rgba(0, 0, 0, 0.2);

				:deep(.ant-carousel) {
					.slick-slide img {
						@include wh(297px, 162px);
					}
				}
			}

			.type-box {
				margin-left: 20px;
				display: inline-block;
				vertical-align: middle;

				& > img {
					@include wh(63px, 46px);
					margin-bottom: 19px;
					display: table;
				}

				img:last-child {
					margin-bottom: 0;
				}
			}
		}

		.left-2 {
			@include flexMixin(space-around, center);
			margin: 49px 0;
			//each遍历可以拿到每个颜色的值，设置left-2-item的颜色需要通过索引
			@each $color in $valueColors {
				$index: index($valueColors, $color);
				div:nth-child(#{$index}) {
					.value {
						@include fontMixin(40px, 400, $color);
						font-family: DS-DIGIT;
						letter-spacing: 4px;
						line-height: 40px;
					}

					.text {
						font-size: 14px;
					}
				}
			}
		}
		.echarts-box {
			@include wh(100%, 217px);
			margin: -1px 0 0 -5px;
		}
		.tab-box {
			//@include wh(200px,24px);
			width: 100%;
			margin-top: 20px;
			ul {
				margin: 0;
				padding: 0;
				text-align: center;
				& > li {
					margin-left: -1px;
				}
				& > li :first-child {
					margin-left: 0;
				}
				li {
					display: inline-block;
					border: 1px solid #42b9fe;
					cursor: pointer;
					padding: 6px 8px;
					img,
					span {
						vertical-align: middle;
					}
					img {
						margin-right: 2px;
					}
				}
				.active {
					background-color: #11d290;
					border: 1px solid #11d290;
					color: #fff;
				}
			}
		}
		.echarts-box2 {
			@include wh(100%, 200px);
			margin: 30px 0 0 -10px;
		}
	}

	.right-box {
		right: 37px;
		.right-1 {
			@include wh(420px, 280px);
			margin: -210px 10px 10px 5px;
			//border: 1px solid #42b9fe;
			.item1 {
				@include wh(400px, 44px);
				margin: 10px 5px;
				//border: 1px solid #F1AC40;
				align-items: center;
				position: relative;
				background-color: #0b1d41;
				.text1 {
					position: absolute;
					@include fontMixin(16px, BOLD, #0b1d41);
					border: 1px solid #f1ac40;
					@include wh(72px, 26px);
					margin: 5px 5px -20px 1px;
					padding: 0 7px 0 8px;
					background-color: #f1ac40;
				}
				.pointline {
					@include wh(145px, 21px);
					margin: 5px 10px 10px 80px;
					position: absolute;
				}
				.up {
					@include wh(7.6px, 16.9px);
					margin: 15px 10px -5px 250px;
					position: absolute;
				}
				.percent {
					@include fontMixin(18px, 500, #3ad8d8);
					font-family: DS-DIGT;
					margin: 5px -10px -5px 260px;
					position: absolute;
				}
				.value {
					@include fontMixin(18px, 800, #42b9fe);
					font-family: DS-DIGT;
					position: absolute;
					margin: 5px -10px 5px 305px;
				}
			}
			.item2 {
				@include wh(400px, 44px);
				margin: 10px 5px;
				//border: 1px solid #F1AC40;
				align-items: center;
				position: relative;
				background-color: #0b1d41;
				.text1 {
					position: absolute;
					@include fontMixin(16px, BOLD, #0b1d41);
					border: 1px solid #45bdfe;
					@include wh(72px, 26px);
					margin: 5px 5px -20px 1px;
					padding: 0 7px 0 8px;
					background-color: #45bdfe;
				}
				.pointline {
					@include wh(145px, 21px);
					margin: 5px 10px 10px 80px;
					position: absolute;
				}
				.up {
					@include wh(7.6px, 16.9px);
					margin: 15px 10px -5px 250px;
					position: absolute;
				}
				.percent {
					@include fontMixin(18px, 500, #3ad8d8);
					font-family: DS-DIGT;
					margin: 5px -10px -5px 260px;
					position: absolute;
				}
				.value {
					@include fontMixin(18px, 800, #42b9fe);
					font-family: DS-DIGT;
					position: absolute;
					margin: 5px -10px 5px 305px;
				}
			}
			.item3 {
				@include wh(400px, 44px);
				margin: 10px 5px;
				//border: 1px solid #F1AC40;
				align-items: center;
				position: relative;
				background-color: #0b1d41;
				.text1 {
					position: absolute;
					@include fontMixin(16px, BOLD, #0b1d41);
					border: 1px solid #f1ac40;
					@include wh(72px, 26px);
					margin: 5px 5px -20px 1px;
					padding: 0 7px 0 8px;
					background-color: #f1ac40;
				}
				.pointline {
					@include wh(145px, 21px);
					margin: 5px 10px 10px 80px;
					position: absolute;
				}
				.down {
					@include wh(7.6px, 16.9px);
					margin: 15px 10px -5px 250px;
					position: absolute;
				}
				.percent {
					@include fontMixin(18px, 500, #3ad8d8);
					font-family: DS-DIGT;
					margin: 5px -10px -5px 260px;
					position: absolute;
				}
				.value {
					@include fontMixin(18px, 800, #42b9fe);
					font-family: DS-DIGT;
					position: absolute;
					margin: 5px -10px 5px 305px;
				}
			}
			.item4 {
				@include wh(400px, 44px);
				margin: 10px 5px;
				//border: 1px solid #F1AC40;
				align-items: center;
				position: relative;
				background-color: #0b1d41;
				.text1 {
					position: absolute;
					@include fontMixin(16px, BOLD, #0b1d41);
					border: 1px solid #45bdfe;
					@include wh(72px, 26px);
					margin: 5px 5px -20px 1px;
					padding: 0 7px 0 8px;
					background-color: #45bdfe;
				}
				.pointline {
					@include wh(145px, 21px);
					margin: 5px 10px 10px 80px;
					position: absolute;
				}
				.up {
					@include wh(7.6px, 16.9px);
					margin: 15px 10px -5px 250px;
					position: absolute;
				}
				.percent {
					@include fontMixin(18px, 500, #3ad8d8);
					font-family: DS-DIGT;
					margin: 5px -10px -5px 260px;
					position: absolute;
				}
				.value {
					@include fontMixin(18px, 800, #42b9fe);
					font-family: DS-DIGT;
					position: absolute;
					margin: 5px -10px 5px 305px;
				}
			}
			.echarts-box {
				@include wh(380.9px, 37.6px);
				margin: -20px -1px 5px -20px;
			}
		}
		.echarts-box {
			@include wh(110%, 140px);
			margin: -230px 1px 80px -10px;
		}
		.echarts-box1 {
			margin: -200px 10px 10px 10px;
			@include wh(100%, 140px);
		}
	}

	.bottom-box {
		@include wh(905px, 327px);
		position: absolute;
		top: 717px;
		left: 0;
		right: 0;
		margin: 0 auto;
		background-color: $boxBgColor;
	}
}
</style>
