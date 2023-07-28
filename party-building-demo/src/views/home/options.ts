/**
 * 颜色16进制转rgba颜色
 * @param hex 十六进制颜色
 * @param opacity 透明度
 * #ff ff ff
 * rgba(255,255,255,0.5)
 */

function hexToRgba(hex: string, opacity: number) {
	return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')'
}
/**
 * 多层圆环饼图
 */
export const setPieOption = (chartsData: { name: string; value: number }[]) => {
	const radius = ['50%', '54%']
	const color = ['#37FFC9', '#FFE777', '#19D6FF', '#32A1FF', '#CCCCCC', '#FF1111']
	const color1: string[] = []
	const color2: string[] = []
	const color3: string[] = []
	color.forEach(item => {
		color1.push(item, 'transparent')
		color2.push(hexToRgba(item, 0.7), 'transparent')
		color3.push(hexToRgba(item, 0.4), 'transparent')
	})
	const pieData = chartsData
	const pieDataList: any[] = []
	let sum = 0
	pieData.forEach(item => (sum += item.value))
	pieData.forEach(item => {
		pieDataList.push(item, {
			name: '',
			value: sum / 70,
			label: {
				show: false
			}
		})
	})
	const radius2 = [Number(radius[1].split('%')[0]) + '%', Number(radius[1].split('%')[0]) + 4 + '%']
	const radius3 = [Number(radius[1].split('%')[0]) + 4 + '%', Number(radius[1].split('%')[0]) + 8 + '%']
	return {
		series: [
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: radius3,
				// hoverAnimation: false,
				startAngle: 90,
				selectedMode: 'single',
				selectedOffset: 0,
				itemStyle: {
					color: (params: { dataIndex: number }) => {
						return color1[params.dataIndex]
					}
				},
				label: {
					show: true,
					position: 'outside',
					color: '#FFF',
					lineHeight: 20,
					formatter: (params: { name: string; percent: string }) => {
						return `${params.name}:\n${params.percent}%`
					}
				},
				//鼠标移入饼图效果
				emphasis: {
					scale: 0
				},
				data: pieDataList,
				z: 666
			},
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: radius2,
				// hoverAnimation: false,
				startAngle: 90,
				selectedMode: 'single',
				selectedOffset: 0,
				itemStyle: {
					color: (params: { dataIndex: number }) => {
						return color2[params.dataIndex]
					}
				},
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				emphasis: {
					scale: 0
				},
				data: pieDataList,
				z: 666
			},
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: radius,
				// hoverAnimation: false,
				startAngle: 90,
				selectedMode: 'single',
				selectedOffset: 0,
				itemStyle: {
					color: (params: { dataIndex: number }) => {
						return color3[params.dataIndex]
					}
				},
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				emphasis: {
					scale: 0
				},
				data: pieDataList,
				z: 666
			}
		],
		title: {
			text: sum,
			subtext: '党员数',
			textStyle: {
				color: '#FFF',
				fontWeight: 'bold',
				fontSize: 34,
				fontFamily: 'DS-DIGIT'
			},
			subtextStyle: {
				color: '#42B9FE',
				fontWeight: 'bold',
				fontSize: 12,
				fontFamily: 'PingFang'
			},
			x: 'center',
			y: '35.5%',
			itemGap: 5
		},
		tooltip: {
			show: true,
			formatter: (params: { name: string; value: string; percent: string }) => {
				if (params.name != '') {
					return `${params.name}:${params.value}<br/>(${params.percent}%)`
				}
			}
		}
	}
}

/**
 * 动态仪表盘
 */
export const setDashboardOption = (angle: number) => {
	return {
		series: [
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * 0.87,
							startAngle: (angle * Math.PI) / 180,
							endAngle: ((90 + angle) * Math.PI) / 180
						},
						style: {
							stroke: '#0cd3db',
							fill: 'transparent',
							lineWidth: 1.5
						},
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * 0.87,
							startAngle: ((180 + angle) * Math.PI) / 180,
							endAngle: ((270 + angle) * Math.PI) / 180
						},
						style: {
							stroke: '#0cd3db',
							fill: 'transparent',
							lineWidth: 1.5
						},
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * (0.87 - 0.08),
							startAngle: ((270 + -angle) * Math.PI) / 180,
							endAngle: ((40 + -angle) * Math.PI) / 180
						},
						style: {
							stroke: '#0cd3db',
							fill: 'transparent',
							lineWidth: 1.5
						},
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * (0.87 - 0.08),
							startAngle: ((90 + -angle) * Math.PI) / 180,
							endAngle: ((220 + -angle) * Math.PI) / 180
						},
						style: {
							stroke: '#0cd3db',
							fill: 'transparent',
							lineWidth: 1.5
						},
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					const x0 = api.getWidth() / 2
					const y0 = api.getHeight() / 2
					const r = (Math.min(api.getWidth(), api.getHeight()) / 2.2) * 0.87
					const point = getCirclePoint(x0, y0, r, 90 - angle)
					return {
						type: 'circle',
						shape: {
							cx: point.x,
							cy: point.y,
							r: 4
						},
						style: {
							stroke: '#0cd3db',
							fill: '#0cd3db'
						},
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					const x0 = api.getWidth() / 2
					const y0 = api.getHeight() / 2
					const r = (Math.min(api.getWidth(), api.getHeight()) / 2.2) * 0.87
					const point = getCirclePoint(x0, y0, r, 270 - angle)
					return {
						type: 'circle',
						shape: {
							cx: point.x,
							cy: point.y,
							r: 4
						},
						style: {
							stroke: '#0cd3db',
							fill: '#0cd3db'
						},
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'pie',
				radius: ['68%', '55%'],
				center: ['50%', '50%'],
				startAngle: 90,
				label: {
					position: 'center'
				},
				silent: true,
				z: 0,
				zlevel: 0,
				data: [
					{
						name: '',
						value: 72,
						label: {
							show: false
						},
						itemStyle: {
							color: {
								colorStops: [
									{
										offset: 0,
										color: '#4fadfd'
									},
									{
										offset: 1,
										color: '#28e8fa'
									}
								]
							}
						}
					},
					{
						name: '',
						value: 100,
						label: {
							show: false
						},
						itemStyle: {
							color: '#173164'
						}
					}
				]
			},
			{
				type: 'gauge',
				radius: '68%',
				center: ['50%', '50%'],
				startAngle: 0,
				endAngle: 360,
				splitNumber: 8,
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},
				pointer: {
					show: false
				},
				splitLine: {
					length: 139,
					lineStyle: {
						width: 3,
						color: '#061740'
					}
				},
				axisLine: {
					show: false
				},
				detail: {
					show: false
				},
				data: [
					{
						name: '',
						value: 0
					}
				]
			}
		],
		title: {
			text: '{valueStyle|' + '72' + '}{unitStyle|%}',
			x: 'center',
			y: 'center',
			textStyle: {
				rich: {
					valueStyle: {
						color: '#42b9fe',
						fontSize: 34
					},
					unitStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		}
	}
}
//进度条
export const setPreOption = () => {
	return {
		grid: {
			top: 0,
			bottom: 0,
			right: '5%',
			left: 0
		},
		xAxis: {
			show: false,
			type: 'value',
			boundaryGap: [0, 0]
		},
		yAxis: [
			{
				type: 'category',
				data: [''],
				axisLine: { show: false },
				axisTick: [
					{
						show: false
					}
				]
			}
		],
		series: [
			{
				type: 'bar',
				z: 1,
				itemStyle: {
					normal: {
						barBorderRadius: 30,
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 1,
							y2: 0,
							colorStops: [
								{
									offset: 0,
									color: '#02E4FE'
								},
								{
									offset: 1,
									color: '#F4A72C'
								}
							]
						}
					}
				},
				barWidth: 20,
				data: [90],
				label: {
					formatter: '{c}%',
					show: true,
					color: '#000',
					position: ['80%', '25%']
				}
			},
			{
				type: 'bar',
				barWidth: 20,
				barGap: '-100%',
				data: [100],
				itemStyle: {
					normal: {
						color: '#0E2F59',
						borderWidth: 2,
						borderColor: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [
								{
									offset: 0,
									color: '#1A75B8'
								},
								{
									offset: 1,
									color: '#0E2F59'
								}
							]
						},
						barBorderRadius: 30
					}
				},
				z: 0
			}
		]
	}
}
//单行进图条1
export const setProgressOption = (chartsData: { evaDatas: number[]; criDatas: number[] }) => {
	return {
		grid: {
			top: '24%',
			bottom: '24%',
			right: '5.4%',
			left: '5.4%'
		},
		xAxis: {
			show: false,
			type: 'value',
			boundaryGap: [0, 0]
		},
		yAxis: [
			{
				type: 'category',
				data: [''],
				axisLine: { show: false },
				axisTick: [
					{
						show: false
					}
				]
			}
		],
		series: [
			{
				type: 'bar',
				z: 1,
				itemStyle: {
					normal: {
						barBorderRadius: 30,
						color: '#35A8E9'
					}
				},
				barWidth: 20,
				data: [chartsData.evaDatas]
			},
			{
				type: 'bar',
				barWidth: 20,
				barGap: '-100%',
				data: [chartsData.criDatas],
				itemStyle: {
					normal: {
						color: '#123552',
						barBorderRadius: 30
					}
				},
				z: 0
			}
		]
	}
}

/**
 * 水球1
 */
export const setBallOptions = () => {
	return {
		title: {
			text: '1',
			subtext: '镇排名',
			left: 'center',
			top: 50,
			textStyle: {
				color: '#fff',
				fontWeight: 'bold',
				fontSize: 21
			},
			subtextStyle: {
				color: '#fff',
				fontWeight: 'bold',
				fontSize: 13,
				top: -5,
				margin: [-10]
			}
		},
		series: [
			{
				type: 'liquidFill', //配置echarts图类型
				radius: '70%',
				center: ['50%', '50%'],
				//  shape: 'roundRect',// 设置水球图类型（矩形[rect]，菱形[diamond]，三角形[triangle]，水滴状[pin],箭头[arrow]...） 默认为圆形
				data: [0.9, 0.9], //设置波浪的值
				//waveAnimation:false, //静止的波浪
				backgroundStyle: {
					borderWidth: 1,
					color: 'transparent' //水球图内部背景色
				},
				outline: {
					borderDistance: 5,
					itemStyle: {
						borderWidth: 5,
						borderColor: '#5acef2'
					}
				},
				color: [
					//波浪颜色
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 1,
								color: '#43BAFE' //下
							},
							{
								offset: 0,
								color: '#87b4f5'
							}
						],
						globalCoord: false
					},
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 1,
								color: '#43BAFE' //下
							},
							{
								offset: 0,
								color: 'rgb(135,180,245)'
							}
						],
						globalCoord: false
					}
				],
				label: {
					normal: {
						formatter: ''
					}
				}
			}
		]
	}
}
/**
 * 水球2
 */
export const setLiquidOptions = () => {
	return {
		title: {
			text: '3',
			subtext: '区排名',
			left: 'center',
			top: 50,
			textStyle: {
				color: '#fff',
				fontWeight: 'bold',
				fontSize: 21
			},
			subtextStyle: {
				color: '#fff',
				fontWeight: 'bold',
				fontSize: 13,
				top: -5,
				margin: [-10]
			}
		},
		series: [
			{
				type: 'liquidFill', //配置echarts图类型
				radius: '70%',
				center: ['50%', '50%'],
				//  shape: 'roundRect',// 设置水球图类型（矩形[rect]，菱形[diamond]，三角形[triangle]，水滴状[pin],箭头[arrow]...） 默认为圆形
				data: [0.9, 0.9], //设置波浪的值
				//waveAnimation:false, //静止的波浪
				backgroundStyle: {
					borderWidth: 1,
					color: 'transparent' //水球图内部背景色
				},
				outline: {
					borderDistance: 5,
					itemStyle: {
						borderWidth: 5,
						borderColor: '#F8AF3C'
					}
				},
				color: [
					//波浪颜色
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 1,
								color: '#F8AF3C' //下
							},
							{
								offset: 0,
								color: '#efc179'
							}
						],
						globalCoord: false
					},
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 1,
								color: '#F8AF3C' //下
							},
							{
								offset: 0,
								color: '#efc179'
							}
						],
						globalCoord: false
					}
				],
				label: {
					normal: {
						formatter: ''
					}
				}
			}
		]
	}
}
/**
 * 群众满意度柱状图(进度条)
 */
export const setSatisfiedOptions = (chartsData: { seriesData: number }) => {
	return {
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			//y轴刻度上文字与dom边界保留距离
			containLabel: true
		},
		xAxis: {
			//设置x轴不显示
			show: false
		},
		yAxis: [
			{
				type: 'category',
				data: ['群众满意度'],
				// 将数据显示方式倒转
				inverse: false,
				label: {
					//show: false,
					position: 'inside'
				},
				// 不显示y轴刻度线
				axisLine: {
					show: false
				},
				// 不显示y轴刻度值
				axisTick: {
					show: false
				},
				// 设置第一个y轴上的文字颜色
				axisLabel: {
					color: '#fff',
					fontFamily: 'PingFang',
					fontSize: 16,
					fontWeight: 'BOLD'
				}
			},
			{
				// 先设置第二个y轴显示
				show: false,
				data: [90],

				// 将数据显示方式倒转
				inverse: false,
				// 不显示y轴刻度线
				axisLine: {
					show: false
				},
				// 不显示y轴刻度值
				axisTick: {
					show: false
				},
				// 设置第二个y轴上文字的颜色与字号
				axisLabel: {
					position: 'inside',
					textStyle: {
						fontSize: 12,
						color: '#fff'
					}
				}
			}
		],
		series: [
			{
				name: '群众满意度',
				type: 'bar',
				data: [chartsData.seriesData],
				// 设置柱子宽度
				barWidth: 20,
				// borderRadius: 15,
				// 设置第一个y轴显示的深浅度，第二个显示在第一个之上
				yAxisIndex: 0,
				// 注意之间的距离
				barCategoryGap: 10,
				// 设置柱子的位置，柱子上显示的内容
				label: {
					show: true,
					color: '#021232',
					padding: [10, 10, 10, 200],
					// {c} 表示数值，{a}表示series名,{b}表示系列名
					formatter: '{c}%'
				},
				itemStyle: {
					// 设置柱子颜色
					normal: {
						color: {
							x: 0,
							y: 0,
							x2: 1,
							y2: 0,
							type: 'bar',
							global: false,
							colorStops: [
								{
									offset: 0, // 0%处的颜色
									color: '#00E4FF'
								},
								{
									offset: 1, // 100%处的颜色
									color: '#F5A72B'
								}
							]
						},
						barBorderRadius: 9
					}
					// 设置柱子为圆角
				}
			},
			{
				name: '群众满意度',
				type: 'bar',
				yAxisIndex: 1,
				data: [100],
				barWidth: 20,
				barHeight: 200,
				barCategoryGap: 50,
				itemStyle: {
					// 设置第二个y轴柱子无颜色
					color: 'none',
					// 设置第二个y轴柱子有边框
					borderColor: 'rgb(123,172,243)',
					// 设置第二个y轴柱子的宽度
					borderWidth: 3,
					// 设置第二个y轴柱子边框为圆角
					barBorderRadius: 15
				}
			}
		]
	}
}
/**
右侧柱状图
 */
export const setBarOptions = (chartsData: { xAxisData: number[]; legendData: string[]; seriesData: number[][] }) => {
	return {
		xAxis: {
			type: 'category',
			data: chartsData.xAxisData,
			axisTick: {
				show: true
			},
			axisLine: {
				show: true,
				LineStyle: {
					color: '#fff',
					width: 2
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16,
				margin: 10
			}
		},
		yAxis: {
			type: 'value',
			axisLine: {
				show: false
			},
			axisLabel: {
				show: true,
				color: '#fff'
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.5)'
				}
			}
		},
		title: {
			text: '单位 万元',
			left: '1%',
			top: '9%',
			textStyle: {
				color: '#fff',
				fontSize: 14,
				align: 'center'
			}
		},
		legend: {
			data: chartsData.legendData,
			left: 100,
			top: 25,
			textStyle: {
				color: '#fff',
				fontSize: 14
			}
		},
		tooltip: {
			show: true
		},
		grid: {
			left: '15%',
			right: '10%',
			top: '25%',
			bottom: '20%'
		},
		series: [
			{
				type: 'bar',
				name: chartsData.legendData[0],
				barWidth: 10,
				barCap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#43b9fe'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: chartsData.seriesData[0]
			},
			{
				type: 'bar',
				name: chartsData.legendData[2],
				barWidth: 10,
				barCap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#51ffc1'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: chartsData.seriesData[2]
			},
			{
				type: 'bar',
				name: '',
				barWidth: 35,
				animationDuration: 2000,
				animationEasing: 'cubicInOut'
			},
			{
				type: 'bar',
				name: chartsData.legendData[1],
				barWidth: 10,
				barCap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#F8AF3C'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: chartsData.seriesData[1]
			},
			{
				type: 'bar',
				name: chartsData.legendData[2],
				barWidth: 10,
				barCap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#51ffc1'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: chartsData.seriesData[3]
			}
		]
	}
}
/**
 * 右侧折线图
 */
export const setLineOptions = (chartsData: { xAxisData: number[]; seriesData: number[][] }) => {
	return {
		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: chartsData.xAxisData,
				axisTick: {
					show: true
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: '#fff',
						width: 2
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 12,
					margin: 10,
					formatter: '{value}月'
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				interval: 15,
				min: 0,
				max: 75,
				position: 'left',
				//轴线
				axisLabel: {
					color: '#fff',
					fontSize: 12,
					margin: 10,
					show: true
				},
				axisTick: {
					show: true
				},
				axisLine: {
					show: true,
					color: '#fff'
					//width: 5
				},
				//分割线
				splitLine: {
					show: true,
					opacity: 0.5
					// lineStyle: {
					// 	color: 'rgba(255,255,255,0,5)'
				}
			},
			{
				type: 'value',
				min: 0,
				max: 100,
				position: 'right',
				boundaryGap: false,
				axisLabel: {
					fontSize: 12,
					color: '#fff'
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
						//width: 5
					}
				},
				//分割线
				splitLine: {
					show: false
				}
			}
		],
		legend: {
			data: ['活动次数', '党员参与率'],
			icon: 'bar',
			left: 180,
			textStyle: {
				color: '#fff',
				fontSize: 14
			}
		},
		grid: {
			left: '12%',
			right: '10%',
			top: '25%',
			bottom: '20%'
		},
		tooltip: {
			//滑过鼠标展示数据
			trigger: 'item',
			axisPointer: {
				//坐标轴指示器
				type: 'none' //十字准星指示器
			}
		},
		series: [
			{
				name: '活动次数',
				type: 'line',
				symbol: 'none',
				data: chartsData.seriesData[0],
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#43b9fe'
				},
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						opacity: 0.9,
						colorStops: [
							{
								offset: 0,
								color: '#43B9FE'
							},
							{
								offset: 1,
								color: 'rgba(67,185,254,0.37)'
							}
						],
						global: false
					}
				}
			},
			{
				name: '党员参与率',
				type: 'line',
				symbol: 'none',
				yAxisIndex: 1,
				data: chartsData.seriesData[1],
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#51FFC1'
				},
				areaStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						opacity: 0.7,
						colorStops: [
							{
								offset: 0,
								color: '#51FFC1'
							},
							{
								offset: 1,
								color: 'rgba(81,255,193,0.57)'
							}
						],
						global: false
					}
				}
			}
		]
	}
}

function getCirclePoint(x0: number, y0: number, r: number, angle: number) {
	const x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
	const y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
	return {
		x: x1,
		y: y1
	}
}
