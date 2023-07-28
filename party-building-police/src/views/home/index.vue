<template>
	<screen-adapter>
		<div class="police-system">
			<div class="top">
				<div class="top-left">
					<img src="@/assets/images/time.png" alt="" />
					<span class="datetime">{{ currDateTime }}</span>
				</div>
				<div class="top-center">
					<div class="title">智慧警务网格分析平台</div>
				</div>
				<div class="top-right">
					<img src="@/assets/images/people.png" alt="" />
					<span class="user">
						<span>您好，管理员</span>
					</span>
					<span class="border"></span>
					<img src="@/assets/images/all.png" @click="fullScreen" alt="" />
					<img src="@/assets/images/escape.png" @click="exitFullScreen" alt="" />
				</div>
			</div>
			<div class="left">
				<div class="left-box">
					<div class="left-1">
						<div class="common-title">
							人口概述
							<div></div>
						</div>
						<div class="content">
							<div>
								<img src="@/assets/images/address.png" alt="" />
								<div>
									<span class="value">3.42</span>
									<span class="text">万户</span>
								</div>
								<span>户籍</span>
							</div>
							<div>
								<img src="@/assets/images/zy.png" alt="" />
								<div>
									<span class="value">6.12</span>
									<span class="text">人</span>
								</div>
								<span>长住</span>
							</div>
							<div>
								<img src="@/assets/images/MOP.png" alt="" />
								<div>
									<span class="value">6.12</span>
									<span class="text">人</span>
								</div>
								<span>流动</span>
							</div>
						</div>
					</div>
					<div class="left-2">
						<div class="common-title">
							房屋信息
							<div></div>
						</div>
						<div class="content">
							<div>
								<div class="left-2-pic">
									<img src="@/assets/images/person.png" alt="" />
									<img src="@/assets/images/radius.png" alt="" />
								</div>
								<div>
									<span>3.42</span>
									<span>万人</span>
								</div>
								<span>个人</span>
							</div>
							<div>
								<div class="left-2-pic">
									<img src="@/assets/images/homework.png" alt="" />
									<img src="@/assets/images/radius.png" alt="" />
								</div>
								<div>
									<span>2314</span>
									<span>家</span>
								</div>
								<span>单位</span>
							</div>
						</div>
					</div>
					<div class="left-3">
						<div class="common-title">
							重点单位
							<div></div>
						</div>
						<div class="content">
							<div>
								<div>
									<img src="@/assets/images/dang.png" alt="" />
									<span>党政机关</span>
								</div>
								<div>
									<span class="value">3215</span>
									<span class="text">家</span>
								</div>
							</div>
							<div>
								<div>
									<img src="@/assets/images/area.png" alt="" />
									<span>工地</span>
								</div>
								<div>
									<span class="value">13215</span>
									<span class="text">家</span>
								</div>
							</div>
							<div>
								<div>
									<img src="@/assets/images/special.png" alt="" />
									<span>特种</span>
								</div>
								<div>
									<span class="value">5212</span>
									<span class="text">座</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="center">
				<div class="center-top">
					<div>
						<div class="center-top-title">
							<img src="@/assets/images/xz14.png" alt="" />
							<span>实有人口</span>
						</div>
						<div class="value">29381</div>
					</div>
					<div>
						<div class="center-top-title">
							<img src="@/assets/images/xz15.png" alt="" />
							<span>实有房屋</span>
						</div>
						<div class="value">1222</div>
					</div>
					<div>
						<div class="center-top-title">
							<img src="@/assets/images/xz16.png" alt="" />
							<span>警察人数</span>
						</div>
						<div class="value">3214</div>
					</div>
					<div>
						<div class="center-top-title">
							<img src="@/assets/images/xz17.png" alt="" />
							<span>实有单位</span>
						</div>
						<div class="value">1241</div>
					</div>
				</div>
				<div class="center-main">
					<div class="map">
						<echarts-map/>
					</div>
					<div class="label1">
						<img src="@/assets/images/position.png" alt="" />
						<span>某某市-某某地区</span>
					</div>
					<div class="label2">
						<div>
							<img src="@/assets/images/arrow1.png" alt="" />
							<span>警力规模</span>
						</div>
						<div>
							<img src="@/assets/images/arrow2.png" alt="" />
							<span>今日警情</span>
						</div>
						<div>
							<img src="@/assets/images/arrow3.png" alt="" />
							<span>重点单位</span>
						</div>
					</div>
					<div class="form"><span>3D</span></div>
				</div>
			</div>
			<div class="right">
				<div class="right-box">
					<div class="right-1">
						<div class="content">
							<div v-for="(group, index) in groups">
								<button :id="'btn' + index" @click="active(groups, index)">{{ group }}</button>
							</div>
						</div>
					</div>
					<div class="right-2">
						<div class="common-title">
							今日警情
							<div></div>
						</div>
						<div class="content">
							<ul>
								<li v-for="content in contents">
									<div>{{ content.event }}</div>
									<div>{{ content.time }}</div>
									<div></div>
								</li>
							</ul>
						</div>
					</div>
					<div class="right-3">
						<div class="common-title">
							警力部署
							<div></div>
						</div>
						<div class="content">
							<div v-for="police in polices">
								<span class="circle"></span>
								<img :src="police.image" alt="" />
								<div>
									<span>警察名称</span>
									<span >{{police.area}}</span>
									<img :src='police.line' alt=''/>
									<img src="@/assets/images/circle.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</screen-adapter>
</template>
<script lang="ts" setup>
import ScreenAdapter from '../../components/ScreenAdapter.vue'
import { onMounted, ref, toRaw } from 'vue'
import { formatByDate } from '../../utils/datetime-util'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import people4 from '../../assets/images/people4.png'
import line from '../../assets/images/line.png'
import EchartsMap from '@/components/EchartsMap.vue'
const groups = ref<string[]>([
	'分局名称',
	'分局名称',
	'分局名称',
	'分局名称',
	'分局名称',
	'分局名称',
	'分局名称',
	'分局名称',
	'分局名称',
	'分局名称',
	'分局名称',
	'分局名称'
])
const contents = ref<object[]>([
	{
		event: '6月21日，全市110报警服务台共接有效警情1062起，属刑事类报警19起（诈骗10起，盗窃摩托车4起，'+
			'6月21日，全市110报警服务台共接有效警情1062起，属刑事类报警19起（诈骗10起，盗窃摩托车4起。',
		time: '2020年7月1日 12：32：00'
	},
	{
		event: '6月21日，全市110报警服务台共接有效警情1062起，属刑事类报警19起（诈骗10起，盗窃摩托车4起，'+
			'6月21日，全市110报警服务台共接有效警情1062起，属刑事类报警19起（诈骗10起，盗窃摩托车4起。',
		time: '2020年7月1日 12：32：00'
	},
	{
		event: '6月21日，全市110报警服务台共接有效警情1062起，属刑事类报警19起（诈骗10起，盗窃摩托车4起，'+
			'6月21日，全市110报警服务台共接有效警情1062起，属刑事类报警19起（诈骗10起，盗窃摩托车4起。',
		time: '2020年7月1日 12：32：00'
	}
])
const polices = ref<object[]>([
	{
		area: '红谷滩1区管理',
		image: people1,
		line:line
	},
	{
		area: '红谷滩2区管理',
		image: people2,
		line:line
	},
	{
		area: '红谷滩3区管理',
		image: people3,
		line:line
	},
	{
		area: '红谷滩4区管理',
		image: people4,
		line:line
	}
])
//当前日期时间
const currDateTime = ref('')
//时间定时器
const currTimeInterval = ref()
function active($groups, $index) {
	toRaw($groups).forEach((group, i) => {
		let btn = document.getElementById('btn' + i)
		btn.style.background = "url('src/assets/images/before.png') center no-repeat"
		btn.style.backgroundSize = '100% 100%'
		if (i == $index) {
			btn.style.background = "url('src/assets/images/police.png') center no-repeat, url('src/assets/images/after.png') center no-repeat"
			btn.style.backgroundSize = '100% 100%, 100% 100%'
		}
	})
}
function fullScreen() {
	document.documentElement.requestFullscreen()
}
function exitFullScreen(){
	document.exitFullscreen()
}
onMounted(() => {
	//获取当前日期时间
	currTimeInterval.value = setInterval(() => {
		currDateTime.value = formatByDate(new Date(), 'yyyy-MM-dd HH:mm:ss').text
	}, 1000)
	active(groups.value,0)
})
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';
$valueColors: #278dff #50e4ac #29e8ff;
$valueColors1: #44e8ff #46ffb9 #ffbf27 #5ca9ff;
.common-title {
	@include fontMixin(16px, 400, #d6dee7);
	background: url('@/assets/images/list.png') left no-repeat;
	background-size: 16px 16px;
	margin: 15px 0 0 25px;
	padding-left: 30px;
	div {
		@include wh(451px, 5px);
		//background: url('@/assets/images/line2.png') no-repeat;
		border-top: 1px solid #4192ee;
		position: relative;
		right: 35px;
		top: 14px;
	}
}
.content {
	@include wh(99%, 280px);
	position: relative;
	top: 11px;
}
.police-system {
	@include wh(100%, 100%);
	background: url('@/assets/images/bg.png') #000816 center no-repeat;
	overflow: hidden;
	.top {
		@include wh(1888px, 84px);
		background: url('@/assets/images/t_bg.png') no-repeat;
		background-size: 100% 100%;
		padding: 0 19px 0 13px;
		@include flexMixin(space-between);
		.top-left {
			display: flex;
			align-items: center;
			margin: 13px 0 55px 0;
			img {
				@include wh(20px, 20px);
				margin: 0 11px 0 3px;
			}
			.datetime {
				@include fontMixin(14px, 400, #b9cbd3);
			}
		}
		.top-center {
			.title {
				@include fontMixin(32px, normal);
				margin-left: 100px;
				text-shadow: 0 2px 10px rgba(10, 30, 52, 0.48);
				background: linear-gradient(0deg, #6d9aff 0%, #aef5ff 100%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				letter-spacing: 10px;
			}
		}
		.top-right {
			display: flex;
			align-items: center;
			margin: 12px 0 51px 0;
			img {
				@include wh(20px, 20px);
				margin-left: 30px;
			}
			img:first-child {
				@include wh(31px, 31px);
				margin: 2px 12px 0 0;
			}
			.user {
				@include fontMixin(14px, 400, #efefef);
				&:after {
					content: '';
					display: inline-block;
					@include wh(13px, 9px);
					background: url('@/assets/images/down.png') no-repeat;
					background-size: 100% 100%;
					margin: 0 29px 0 13px;
				}
			}
			.border {
				@include wh(1px, 22px);
				border: 1px solid #142a49;
			}
		}
	}
	.left,
	.right {
		@include wh(494px, 995.4px);
		position: absolute;
		top: 83px;
	}
	.left {
		left: 0;
		.left-box {
			.left-1 {
				.content {
					@include flexMixin(space-around);
					@each $color in $valueColors {
						$index: index($valueColors, $color);
						div:nth-child(#{$index}) {
							div {
								.value {
									@include fontMixin(28px, bold, $color);
									margin-right: 8px;
								}
								.text {
									@include fontMixin(14px, 400, #acb6bc);
								}
							}
						}
					}
					& > div {
						margin-top: 52px;
						@include wh(132px, 170px);
						background: url('@/assets/images/border.png') no-repeat;
						background-size: 100% 100%;
						@include fontMixin(14px, bold, #f3fbff);
						text-align: center;
						@include flexMixin(center, center, column);
						align-items: center;
						img {
							@include wh(44px, 32px);
						}
						&:last-child {
							@include fontMixin(14px, bold, #f3fbff);
							margin-bottom: 1px;
						}
					}
				}
			}
			.left-2 {
				.content {
					@include flexMixin(space-around);
					& > div {
						text-align: center;
						.left-2-pic {
							margin-top: 36px;
							:first-child {
								position: absolute;
								margin: 33px 33px 33px 33px;
							}
							:last-child {
								@include wh(130px, 130px);
								animation: rotate 2s linear infinite;
							}
							@keyframes rotate {
								0% {
									transform: rotate(0deg);
								}
								100% {
									transform: rotate(360deg);
								}
							}
						}
						div {
							:first-child {
								@include fontMixin(28px, bold, #29e8ff);
								margin: 24px 8px 18px 0;
							}
							:last-child {
								@include fontMixin(14px, 400, #acb6bc);
							}
						}
						span {
							@include fontMixin(14px, bold, #f3fbff);
						}
						img {
							@include wh(67px, 60px);
						}
					}
				}
			}
			.left-3 {
				.content {
					@include flexMixin(space-around, center, column);
					margin-left: -30px;
					@each $color in ($valueColors) {
						$index: index($valueColors, $color);
						:nth-child(#{$index}) {
							display: flex;
							align-items: center;
							div {
								.value {
									@include fontMixin(28px, bold, $color);
									margin-right: 17px;
								}
								.text {
									@include fontMixin(14px, 400, #acb6bc);
									margin-right: 72px;
								}
							}
						}
					}
					& > div {
						@include flexMixin(space-between);
						@include wh(420px, 70px);
						background: url('@/assets/images/border1.png') no-repeat;
						background-size: 100% 100%;
						margin-left: 31px;
						:first-child {
							display: flex;
							align-items: center;
							img {
								@include wh(37px, 36px);
								margin: 0 20px 0 32px;
							}
							span {
								@include fontMixin(14px, 400, #d6dee7);
							}
						}
					}
				}
			}
		}
	}
	.center {
		@include wh(933px, 997px);
		position: absolute;
		top: 83px;
		left: 493px;
		.center-top {
			@include flexMixin(space-around);
			@each $color in ($valueColors1) {
				$index: index($valueColors1, $color);
				:nth-child(#{$index}) {
					.center-top-title {
						@include fontMixin(16px, 400, #d6dee7);
						position: relative;
						right: 28px;
						margin: 16px 0 12px 0;
						img {
							@include wh(24px, 18px);
							margin-right: 12px;
						}
					}
					.value {
						@include wh(134px, 44px);
						@include fontMixin(34px, bold, $color);
						text-align: center;
						padding-bottom: 55px;
						background: url('@/assets/images/border.png') no-repeat;
						background-size: 100% 100%;
					}
				}
			}
		}
		.center-main {
			@include wh(933px, 886px);
			.map {
			}
			.label1 {
				position: absolute;
				top: 129px;
				@include wh(236px, 53px);
				display: flex;
				align-items: center;
				background: url('@/assets/images/border2.png') no-repeat;
				background-size: 100% 100%;
				//margin-left: 20px;
				img {
					@include wh(24px, 28px);
					margin-left: 24px;
					margin-right: 16px;
				}
				span {
					@include fontMixin(18px, 400, #d6dee7);
					text-align: center;
					line-height: 24px;
				}
			}
			.label2 {
				position: absolute;
				top: 808px;
				@include flexMixin(space-around, center, column);
				@include wh(136px, 154px);
				background: url('@/assets/images/border2.png') no-repeat;
				background-size: 100% 100%;
				img {
					@include wh(20px, 20px);
					margin: 0 1px 0 -25px;
				}
				span {
					@include fontMixin(14px, 400, #efefef);
				}
			}
			.form {
				@include wh(53px, 53px);
				@include fontMixin(18px, bold, #d6dee7);
				background: url('@/assets/images/border2.png') no-repeat;
				background-size: 100% 100%;
				display: flex;
				align-items: center;
				position: absolute;
				top: 909px;
				right: 0;
				span {
					margin-left: 15px;
				}
			}
		}
	}
	.right {
		right: 0;
		.right-box {
			.right-1 {
				.content {
					display: grid;
					justify-content: space-between;
					color: white;
					grid-template-columns: auto auto auto auto;
					& > div {
						& > button {
							@include wh(98px, 87px);
							opacity: 90%;
							border: none;
							padding: 23px 32px;
							text-align: center;
							background: url('@/assets/images/before.png') center no-repeat;
							background-size: 100% 100%;
							&:hover {
								opacity: 90%;
								background: url('@/assets/images/police.png') center no-repeat, url('@/assets/images/after.png') center no-repeat;
								background-size: 100% 100%, 100% 100%;
							}
						}
					}
				}
			}
			.right-2 {
				.content {
					ul {
						@include wh(100%, 100%);
						@include flexMixin(space-around, center, column);
						@include fontMixin(14px, 400, #d6dee7);
						:last-child {
							opacity: 45%;
						}
						li {
							:first-child {
								display: -webkit-box;
								-webkit-line-clamp: 2;
								-webkit-box-orient: vertical;
								overflow: hidden;
								padding-right: 49px;
								line-height: 26px;
								+ div {
									text-align: right;
									margin-right: 12px;
									line-height: 26px;
									@include fontMixin(12px, 400, #858a8f);
								}
							}
							:last-child {
								@include wh(440px, 1px);
								border: 1px solid #4192ee;
							}
						}
						li::marker {
							color: #2fc7ff;
						}
					}
				}
			}
			.right-3 {
				.content {
					display: grid;
					grid-template-columns: auto auto;
					& > div {
						margin-top: 54px;
						@include flexMixin(center);
						.circle{
							content: '';
							@include wh(60px,60px);
							background: url("@/assets/images/circle.png") center no-repeat;
							background-size: 100% 100%;
							position: absolute;
							margin-right: 149px;
						}
						& > img {
							padding-top: 2px;
							border-radius: 50%;
							@include wh(50.3px, 50.3px);
						}
						div {
							margin-left: 16px;
							@include flexMixin(start, center, column);
							:first-child {
								@include fontMixin(15px, 400, #77c1ff);
								margin-left: -73px;
								+ span {
									margin-bottom: 15px;
									@include fontMixin(14px, 400, #a5afb9);
									margin-left: -43px;
								}
							}
							img {
								@include wh(132px, 3px);
							}
						}
					}
				}
			}
		}
	}
}
</style>