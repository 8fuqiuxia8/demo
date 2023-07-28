<template>
	<div ref="container" id="container" :style="{width: width, height: height}"></div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, ref} from "vue";
import * as echarts from 'echarts'
type EchartsTypes = echarts.EChartsType
type EchartsOption = echarts.EChartsOption
const props = defineProps<{
	width:string
	height:string
	options:object
}>()
//利用id获取
//document.getElementById('container')
//获取echarts容器
const container = ref<HTMLElement>()
//初始化echarts
let myCharts : EchartsTypes | null = null
onMounted(() => {
	if (container.value) {
		myCharts = echarts.init(container.value)
		window.addEventListener('resize',() => {
			myCharts?.resize()
		})
		if (props.options) {
			myCharts?.setOption(props.options as EchartsOption)
		}
	}
})
onUnmounted(() => {
	//销毁echarts
	myCharts?.dispose()
})
</script>

<style lang="scss" scoped>
#container {
	width: 100%;
	height: 100%;
}
</style>