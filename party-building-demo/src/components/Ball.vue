<template>
	<div id="hygrometer" ref="hygrometer"></div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts'
import "echarts-liquidfill";//水球图
import 'echarts-liquidfill/dist/echarts-liquidfill.min.js'
import { onMounted } from 'vue'
onMounted(() => {
	initChart()
})
const initChart = () => {
	let myLiuqiud = this.$echarts.init(document.getElementById("liqiud"));
	let value = 0.54;
	let option = {
		backgroundColor: "#000", //背景色
		title: {
			text: value + "%",
			textStyle: {
				fontSize: 20,
				fontFamily: "Microsoft Yahei",
				fontWeight: "normal",
				color: "#fff",
			},
			x: "center",
			y: "48%",
		},
		series: [
			{
				type: "liquidFill", //配置echarts图类型
				radius: "60%",
				center: ["50%", "50%"],
				//  shape: 'roundRect',// 设置水球图类型（矩形[rect]，菱形[diamond]，三角形[triangle]，水滴状[pin],箭头[arrow]...） 默认为圆形
				data: [0.5, 0.5],  //设置波浪的值
				//waveAnimation:false, //静止的波浪
				backgroundStyle: {
					borderWidth: 1,
					color: "transparent",//水球图内部背景色
				},
				outline: {
					borderDistance: 10,
					itemStyle: {
						borderWidth: 4,
						borderColor: "#5acef2",
					},
				},
				color: [ //波浪颜色
					{
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 1,
								color: "rgba(6, 187, 112, 0.3)", //下
							},
							{
								offset: 0,
								color: "rgba(11, 201, 199, 0.3)",
							},
						],
						globalCoord: false,
					},
					{
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 1,
								color: "rgba(6, 187, 112, 1)", //下
							},
							{
								offset: 0,
								color: "rgba(11, 201, 199, 1)",
							},
						],
						globalCoord: false,
					},
				],
				label: {
					normal: {
						formatter: "",
					},
				},
			},

		],
	};
	myLiuqiud.setOption(option);
}
</script>
<style lang='scss' scoped>
#hygrometer {
	width: 100%;
	height: 83%;
	z-index: 1;
	position: absolute;
}
</style>