<template>
	<div id="container" ref="container"></div>
</template>
<script lang="ts" setup>
import jiaxing from "../../src/assets/json/jiaxing.json"
import tongxiang from "../../src/assets/json/tongxiang.json"
import jiashan from "../../src/assets/json/jiashan.json"
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import defaultProps from 'ant-design-vue/es/vc-slick/default-props'
import scatter1 from '../../src/assets/images/arrow1.png'
import scatter2 from '../../src/assets/images/arrow2.png'
import scatter3 from '../../src/assets/images/arrow3.png'
import scatter4 from '../../src/assets/images/arrow1.png'
import scatter5 from '../../src/assets/images/arrow2.png'
import scatter6 from '../../src/assets/images/arrow3.png'
import scatter7 from '../../src/assets/images/arrow1.png'
import borderOrange from '../../src/assets/images/borderOrange.png'
import borderBlue from '../../src/assets/images/borderblue.png'
import { Scatter} from '../entity/map'
type EchartsType = echarts.EchartsType
//获取map容器
const container = ref<HTMLElement>()
let myCharts: EchartsType | null = null

let scatterData: Scatter[] = []
const scatterImg = ['image://' + scatter1, 'image://' + scatter2, 'image://' + scatter3, 'image://' + scatter4 , 'image://' + scatter5, 'image://' + scatter6, 'image://' + scatter7]
const effectScatterColor = [
	new echarts.graphic.LinearGradient(1, 0, 0, 0, [
		{
			offset: 0,
			color: 'rgb(20,203,196)'
		},
		{
			offset: 1,
			color: 'rgba(21,239,232,0.7)'
		}
	]),
	new echarts.graphic.LinearGradient(1, 0, 0, 0, [
		{
			offset: 0,
			color: 'rgb(231,161,31)'
		},
		{
			offset: 1,
			color: 'rgb(222,114,5)'
		}
	]),
	new echarts.graphic.LinearGradient(1, 0, 0, 0, [
		{
			offset: 0,
			color: 'rgb(8,114,234)'
		},
		{
			offset: 1,
			color: 'rgba(45,109,255,0.6)'
		}
	]),
	new echarts.graphic.LinearGradient(1, 0, 0, 0, [
		{
			offset: 0,
			color: 'rgb(20,203,196)'
		},
		{
			offset: 1,
			color: 'rgba(21,239,232,0.7)'
		}
	]),
	new echarts.graphic.LinearGradient(1, 0, 0, 0, [
		{
			offset: 0,
			color: 'rgb(231,161,31)'
		},
		{
			offset: 1,
			color: 'rgb(222,114,5)'
		}
	]),
	new echarts.graphic.LinearGradient(1, 0, 0, 0, [
		{
			offset: 0,
			color: 'rgb(8,114,234)'
		},
		{
			offset: 1,
			color: 'rgba(45,109,255,0.6)'
		}
	]),
	new echarts.graphic.LinearGradient(1, 0, 0, 0, [
		{
			offset: 0,
			color: 'rgb(20,203,196)'
		},
		{
			offset: 1,
			color: 'rgba(21,239,232,0.7)'
		}
	])
]
onMounted(() => {
	initMap()
})
const initMap = () => {
	if (container.value) {
		//echarts初始化
		myCharts = echarts.init(container.value)
		//显示加载动画效果，可在加载数据前手动调用
		myCharts.showLoading('default', {
			text: '统计中，请稍后...',
			maskColor: '#2957a2',
			textColor: '#fff'
		})
		//注册地图
		echarts.registerMap('jiaxing', jiaxing)
		echarts.registerMap('tongxiang',tongxiang)
		echarts.registerMap('jiashan',jiashan)
		//隐藏加载动画
		myCharts.hideLoading()
		//初始化数据
		setOptions()
		//echarts地图适配
		window.addEventListener('resize', handleResize)
	}
}
const setOptions = () => {
	if(jiaxing) {
		jiaxing.features.forEach(item => {
			const {name,subFeatureIndex,id1,id2,centroid,text,adcode}= item.properties
			scatterData.push({
				name:name,
				subFeatureIndex:subFeatureIndex,
				img:scatterImg[subFeatureIndex],
				value:centroid,
				text:text,
				adcode:adcode,
				value1:id1,
				value2:id2
			})
		})
	}
	const options = {
		geo:[
			{
				type:'map',
				map:'jiaxing',
				aspectScale: 0.75,
				layoutCenter: ['50%', '50%'],
				//如果宽高比大于1，则宽度为100，小于1则高度100，保证了不超过100*100的
				layoutSize: '90%',
				//regions: regionData,
				label:{
					show:true,
					fontSize:16,
					color:'#E6EAF1'
				},
				itemStyle: {
					//图形描边颜色
					borderColor: 'rgba(25,50,86,0.5)',
					//描边线宽
					borderWidth: 2,
					//地图区域颜色
					areaColor: 'rgba(45,218,255,0.3)'
				},
				emphasis: {
					disabled: true//关闭高亮
				},
				z: 1
			},
			{
				type:'map',
				map:'jiaxing',
				aspectScale: 0.75,
				layoutCenter: ['50%', '50%'],
				//如果宽高比大于1，则宽度为100，小于1则高度100，保证了不超过100*100的
				layoutSize: '90%',
				//regions: regionData,
				label:{
					show:false,
					fontSize:16,
					color:'#E6EAF1'
				},
				itemStyle: {
					//图形描边颜色
					borderColor: 'rgba(25,50,86,0.5)',
					//描边线宽
					borderWidth: 2,
					//地图区域颜色
					areaColor: 'rgba(45,218,255,0.3)'
				},
				emphasis: {
					disabled: true//关闭高亮
				},
				z: 1
			},
			{	type:'map',
				map:'tongxiang',
				aspectScale: 0.73,
				layoutCenter: ['22%', '51.7%'],
				//如果宽高比大于1，则宽度为100，小于1则高度100，保证了不超过100*100的
				layoutSize: '38%',
				itemStyle: {
					//描边线宽
					borderWidth: 5,
					//地图区域颜色
					areaColor: 'rgb(16,91,199)'
				},
				z:0
			},
			{	type:'map',
				map:'jiashan',
				aspectScale: 0.73,
				layoutCenter: ['56%', '21.7%'],
				//如果宽高比大于1，则宽度为100，小于1则高度100，保证了不超过100*100的
				layoutSize: '32%',
				itemStyle: {
					//描边线宽
					//borderWidth: 5,
					//地图区域颜色
					areaColor: 'rgb(16,91,199)'
				},
				z:0
			}
		],
		series:[
			{	//arrow地标
				type: 'scatter',
				coordinateSystem: 'geo',
				symbol: (value: string[], params: { data: { img: string } }) => {
					console.log('scatter============', value, params)
					return params.data.img
				},
				symbolSize: [36, 25],
				symbolOffset: [-18, -30],
				data: scatterData,
				z: 0
			 },
			{
				//设置涟漪的散点图
				type: 'effectScatter',
				coordinateSystem: 'geo',
				//涟漪特效的相关配置
				rippleEffect: {
					//动画中波纹的最大缩放比例
					scale: 8,
					//波纹的绘制效果
					brushType: 'fill'
				},
				//配置何时显示特性
				//render emphasis高亮时
				showEffectOn: 'render',
				itemStyle: {
					color: (params: { data: { subFeatureIndex: number } }) => {
						return effectScatterColor[params.data.subFeatureIndex]
					}
				},
				symbol: 'circle',
				symbolSize: [10, 5],
				symbolOffset: [-18, -30],
				data: scatterData,
				z: 0
			},
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				geoIndex: 1,
				//涟漪特效的相关配置
				rippleEffect: {
					show:false,
					//动画中波纹的最大缩放比例
					scale: -1,
					//波纹的绘制效果
					brushType: 'fill'
				},
				label: {
					show: true,
					formatter: (params: { data: { text:string } }) => {
						return params.data.text
					}
				},
				rich: {
					a: {
						color: '#fff',
						fontSize: 12,
					}
				},
				symbol:'image://'+borderBlue,
				symbolSize: [65,44],
				symbolOffset: [-18,-60],
				data: scatterData,
				z:0
			},
			{
				type: 'scatter',
				coordinateSystem: 'geo',
				geoIndex: 1,
				//涟漪特效的相关配置
				rippleEffect: {
					show:false,
					//动画中波纹的最大缩放比例
					scale: -1,
					//波纹的绘制效果
					brushType: 'fill'
				},
				label: {
					show: true,
					formatter: (params: { data: { subFeatureIndex:number } }) => {
						return "警力:" +(params.data.subFeatureIndex+1)
					}
				},
				rich: {
					a: {
						color: '#fff',
						fontSize: 12,
					}
				},
				symbol:'image://'+ borderOrange,
				symbolSize: [65,44],
				symbolOffset: [45,-40],
				data: scatterData,
				z:0
			},
		]


	}
	myCharts?.setOption(options)
}
const handleResize = (option: any) => {
	myCharts?.setOption(option)
	myCharts?.resize()
}
</script>
<style lang="scss" scoped>
#container {
	width:100%;
	height: 90%;
	z-index: 1;
	position: absolute;
	//border: 1px solid red;
	margin:-10px 10px 10px 90px;
	//pointer-events: none;
}
</style>