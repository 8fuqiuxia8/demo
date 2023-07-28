/**
 * 中部涟漪散点图
 */
export const setScatterOptions = () => {
	return {
		xAxis: {
			scale: true,
			//data: [20, 40, 60, 80, 100, 120, 140],
			axisLabel: {
				show: false,
				color: '#ce1d1d'
			},
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			}
		},
		yAxis: {
			scale: true,
			//min: 20,
			//max: 160,
			//interval: 20,
			axisLabel: {
				show: false,
				color: '#ce1d1d'
			},
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			}
		},
		series: [
			{
				type: 'effectScatter',
				symbolSize: 15,
				color: '#FFF6CB',
				rippleEffect: {
					//动画中波纹的最大缩放比例
					scale: 4,
					//波纹的绘制效果
					brushType: 'fill'
				},
				data: [
					[51.3, 79.3],
					[49.7, 85.5],
					[60.5, 79.5],
					[64.5, 78.5],
					[65, 86],
					[73.3, 80.4]
				]
			},
			{
				type: 'scatter',
				color: '#122126',
				data: [
					[80, 75],
					[40, 95]
				]
			}
		]
	}
}

/**
 * 左侧饼图1
 */
export const setPieOptions1 = () => {
	return {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			icon: 'circle',
			itemHeight: 7,
			orient: 'vertical',
			data: ['图例展示1', '图例展示2'],
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			left: 3,
			top: 15
		},
		series: [
			{
				type: 'pie',
				startAngle: '300',
				radius: '60%',
				center: ['33%', '30%'],
				labelLine: {
					show: false
				},
				label: {
					show: false
				},
				data: [
					{
						value: 240,
						name: '图例展示1',
						show: true,
						itemStyle: {
							normal: {
								color: {
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									type: 'pie',
									global: false,
									colorStops: [
										{
											offset: 0, // 0%处的颜色
											color: 'rgba(10,198,165,0.11)'
										},
										{
											offset: 1, // 100%处的颜色
											color: '#0AC6A5'
										}
									]
								}
							}
						}
					},
					{
						value: 120,
						name: '图例展示2',
						show: true,
						nameTextStyle: {
							fontStyle: 12,
							color: '#fefefe'
						},
						itemStyle: {
							normal: {
								color: {
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									type: 'pie',
									global: false,
									colorStops: [
										{
											offset: 0, // 0%处的颜色
											color: '#F19E66'
										},
										{
											offset: 1, // 100%处的颜色
											color: 'rgba(241,158,102,0)'
										}
									]
								}
							}
						}
					}
				]
			}
		]
	}
}
/**
 * 左侧饼图2
 */
export const setPieOptions2 = () => {
	return {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			icon: 'circle',
			itemHeight: 7,
			orient: 'vertical',
			data: ['图例展示1', '图例展示2', '图例展示3'],
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			right: 3,
			top: 5
		},
		series: [
			{
				type: 'pie',
				startAngle: '270',
				radius: '60%',
				center: ['65%', '35%'],
				labelLine: {
					show: false
				},
				label: {
					show: false
				},
				data: [
					{
						value: 140,
						name: '图例展示1',
						show: true,
						itemStyle: {
							normal: {
								color: {
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									type: 'pie',
									global: false,
									colorStops: [
										{
											offset: 0, // 0%处的颜色
											color: '#EDB791'
										},
										{
											offset: 1, // 100%处的颜色
											color: 'rgba(237,183,145,0)'
										}
									]
								}
							}
						}
					},
					{
						value: 45,
						name: '图例展示2',
						show: true,
						nameTextStyle: {
							fontStyle: 12,
							color: '#fefefe'
						},
						itemStyle: {
							normal: {
								color: {
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									type: 'pie',
									global: false,
									colorStops: [
										{
											offset: 0, // 0%处的颜色
											color: '#F3E94E'
										},
										{
											offset: 1, // 100%处的颜色
											color: 'rgba(253,243,80,0)'
										}
									]
								}
							}
						}
					},
					{
						value: 190,
						name: '图例展示3',
						show: true,
						nameTextStyle: {
							fontStyle: 12,
							color: '#fefefe'
						},
						itemStyle: {
							normal: {
								color: {
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									type: 'pie',
									global: false,
									colorStops: [
										{
											offset: 0, // 0%处的颜色
											color: '#45BCDC'
										},
										{
											offset: 1, // 100%处的颜色
											color: 'rgba(69,188,220,0)'
										}
									]
								}
							}
						}
					}
				]
			}
		]
	}
}
/**
 * 左侧折线柱状图
 */
export const setBarLineOptions = () => {
	return {
		xAxis: {
			type: 'category',
			data: [2016, 2017, 2018, 2019, 2020],
			axisTick: {
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					// 坐标轴轴线样式
					color: '#8DCBC6' // 坐标轴轴线颜色
				}
			},
			axisLabel: {
				show: true,
				color: '#8DCBC6',
				fontSize: 14,
				margin: 10
			}
		},
		yAxis: [
			{
				type: 'value',
				name: '亿元',
				nameTextStyle: {
					color: '#8DCBC6',
					padding: [0, 0, 0, -50]
				},
				position: 'left',
				min: 0,
				max: 1200,
				interval: 400,
				axisLine: {
					lineStyle: {
						// 坐标轴轴线样式
						color: '#8DCBC6' // 坐标轴轴线颜色
					}
				},
				//轴线
				axisLabel: {
					color: '#8DCBC6',
					fontSize: 12,
					show: true
				},
				//分割线
				splitLine: {
					show: false
				}
			},
			{
				type: 'value',
				name: '%',
				nameTextStyle: {
					color: '#8DCBC6',
					padding: [0, 0, 0, 30]
				},
				right: 20,
				min: 0,
				max: 15,
				interval: 5,
				position: 'right',
				axisLine: {
					lineStyle: {
						// 坐标轴轴线样式
						color: '#8DCBC6' // 坐标轴轴线颜色
					}
				},
				//分割线
				splitLine: {
					show: false
				}
			}
		],
		legend: {
			data: ['图例1', '图例2'],
			icon: 'bar',
			left: 200,
			top: 10,
			right: -1,
			textStyle: {
				color: '#fff',
				fontSize: 14
			}
		},
		tooltip: {
			trigger: 'item',
			axisPointer: {
				//坐标轴指示器
				type: 'none' //十字准星指示器
			}
		},
		series: [
			{
				name: '图例1',
				type: 'bar',
				data: [400, 600, 690, 780, 1080],
				barWidth: 14,
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#F49B60'
				}
			},
			{
				name: '图例2',
				type: 'line',
				symbol: 'none',
				data: [600, 700, 810, 930, 1200],
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#51ffc1'
				}
			}
		]
	}
}
/**
 * 左侧柱状图
 */
export const setBarOptions = () => {
	return {
		xAxis: {
			type: 'category',
			data: ['2017', '2018', '2019', '2020'],
			axisTick: {
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					// 坐标轴轴线样式
					color: '#8DCBC6' // 坐标轴轴线颜色
				},
				width: 2
			},
			axisLabel: {
				color: '#8DCBC6',
				fontSize: 16,
				margin: 10
			}
		},
		yAxis: {
			type: 'value',
			name: '亿元',
			min: 0,
			max: 600,
			nameTextStyle: {
				color: '#8DCBC6',
				padding: [0, 0, 0, -50]
			},
			position: 'left',
			interval: 200,
			axisLine: {
				show: true,
				lineStyle: {
					// 坐标轴轴线样式
					color: '#8DCBC6' // 坐标轴轴线颜色
				}
			},
			axisLabel: {
				color: '#8DCBC6',
				fontSize: 12,
				show: true
			},
			lineLabel: {
				show: true,
				color: '#8DCBC6'
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#8DCBC6'
				}
			}
		},
		legend: {
			data: ['图例1', '图例2', '图例3'],
			left: 100,
			icon: 'bar',
			top: 15,
			right: 30,
			textStyle: {
				color: '#fff',
				fontSize: 14
			}
		},
		tooltip: {
			show: true
		},
		series: [
			{
				type: 'bar',
				name: '图例1',
				barWidth: 6,
				barCap: '90%',
				data: [280, 300, 300, 450],
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: {
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						type: 'linear',
						global: false,
						colorStops: [
							{
								offset: 0, // 0%处的颜色
								color: '#0AC6A5'
							},
							{
								offset: 1, // 100%处的颜色
								color: 'rgba(10,198,165,0)'
							}
						]
					}
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut'
			},
			{
				type: 'bar',
				name: '图例2',
				barWidth: 6,
				barCap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: {
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						type: 'linear',
						global: false,
						colorStops: [
							{
								offset: 0, // 0%处的颜色
								color: 'rgba(253,243,80,0.99)'
							},
							{
								offset: 1, // 100%处的颜色
								color: 'rgba(253,243,80,0)'
							}
						]
					}
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: [300, 350, 500, 500]
			},
			{
				type: 'bar',
				name: '图例3',
				barWidth: 6,
				barCap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: {
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						type: 'linear',
						global: false,
						colorStops: [
							{
								offset: 0, // 0%处的颜色
								color: 'rgba(241,158,102,0.99)'
							},
							{
								offset: 1, // 100%处的颜色
								color: 'rgba(241,158,102,0)'
							}
						]
					}
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: [400, 500, 530, 580]
			}
		]
	}
}
/**
 * 右侧饼图1
 */
export const setPieOptions = () => {
	return {
		title: {
			text: '单位',
			subtext: '亿元',
			x: 'center',
			y: '35.5%',
			itemGap: 4, //主副标题间距
			textStyle: {
				color: '#fff',
				fontSize: 14,
				fontFamily: 'SourceHanSansCN'
			},
			subtextStyle: {
				color: 'rgba(204, 239, 236, 0.8)',
				fontSize: 12,
				fontFamily: 'SourceHanSansCN'
			}
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			icon: 'circle',
			itemHeight: 7,
			textStyle: {
				color: '#fff',
				fontSize: 12
			},

			left: 290,
			top: 25
		},
		color: ['#01ECEC', '#0AC6A5', '#F19E66', '#FF6D5E', '#FDF350'],
		series: [
			{
				type: 'pie',
				startAngle: '90',
				clockwise: false,
				radius: ['40%', '60%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderWidth: 4,
					borderColor: 'rgba(32,84,95,0.9)'
				},
				label: {
					show: false,
					position: 'right'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1048, name: '图例名称1' },
					{ value: 735, name: '图例名称2' },
					{ value: 580, name: '图例名称3' },
					{ value: 484, name: '图例名称4' },
					{ value: 300, name: '图例名称5' }
				]
			}
		]
	}
}
/**
 * 右侧饼图2
 */
export const setPPieOptions = () => {
	return {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			icon: 'circle',
			itemHeight: 7,
			orient: 'vertical',
			data: ['图例名称 图例名称1', '图例名称 图例名称2', '图例名称 图例名称3'],
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			left: 210,
			top: 24
		},
		series: [
			{
				type: 'pie',
				startAngle: '88',
				radius: '50%',
				center: ['47%', '45%'],
				labelLine: {
					show: false
				},
				label: {
					show: false
				},
				data: [
					{
						value: 45,
						name: '图例名称 图例名称1',
						show: true,
						itemStyle: {
							normal: {
								color: {
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									type: 'pie',
									global: false,
									colorStops: [
										{
											offset: 0, // 0%处的颜色
											color: '#F3E94E'
										},
										{
											offset: 1, // 100%处的颜色
											color: 'rgba(253,243,80,0)'
										}
									]
								}
							}
						}
					},
					{
						value: 145,
						name: '图例名称 图例名称2',
						show: true,
						nameTextStyle: {
							fontStyle: 12,
							color: '#fefefe'
						},
						itemStyle: {
							normal: {
								color: {
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									type: 'pie',
									global: false,
									colorStops: [
										{
											offset: 0, // 0%处的颜色
											color: 'rgba(241,158,102,0.99)'
										},
										{
											offset: 1, // 100%处的颜色
											color: 'rgba(237,183,145,0)'
										}
									]
								}
							}
						}
					},
					{
						value: 205,
						name: '图例名称 图例名称3',
						show: true,
						nameTextStyle: {
							fontStyle: 12,
							color: '#fefefe'
						},
						itemStyle: {
							normal: {
								color: {
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									type: 'pie',
									global: false,
									colorStops: [
										{
											offset: 0, // 0%处的颜色
											color: ' #10B580'
										},
										{
											offset: 1, // 100%处的颜色
											color: 'rgba(69,188,220,0)'
										}
									]
								}
							}
						}
					}
				]
			}
		]
	}
}
/**
 * 右侧柱状图
 */
export const setBBarOptions = () => {
	return {
		// title: {
		// 	text: '亿元',
		// 	textStyle: {
		// 		color: '#CCEFEC',
		// 		padding: [0, 0, 0, 320],
		// 		fontSize: 12
		// 	}
		// },
		grid: {
			left: '5%',
			right: '10%',
			top: '10%',
			bottom: '5%',
			containLabel: true
		},
		tooltip: {
			trigger: 'item'
		},
		xAxis: {
			type: 'category', // category(坐标轴类型)
			data: ['名称', '名称', '名称', '名称', '名称', '名称', '名称', '名称'],
			axisTick: {
				// 坐标轴刻度相关配置
				show: true // 是否显示坐标轴刻度
			},
			axisLine: {
				// 坐标轴轴线相关配置
				show: true,
				lineStyle: {
					// 坐标轴轴线样式
					color: '#8DCBC6' // 坐标轴轴线颜色
				}
			},
			axisLabel: {
				// 坐标轴刻度标签相关配置
				show: true,
				color: '#8DCBC6',
				fontSize: 12,
				margin: 20
			}
		},
		yAxis: {
			type: 'value', // value(数值轴,适用于连续数据)
			name: '万吨',
			nameLocation: 'end',
			nameGap: 15,
			nameTextStyle: {
				color: '#8DCBC6',
				fontSize: 12,
				padding: [0, 0, 0, -34]
			},
			min: 0,
			max: 120,
			interval: 30,
			isLabel: {
				show: true
			},
			axisTick: {
				// 坐标轴刻度相关配置
				show: true // 是否显示坐标轴刻度
			},
			axisLine: {
				// 坐标轴轴线相关配置
				show: true, // 是否显示坐标轴轴线
				lineStyle: {
					// 坐标轴轴线样式
					color: '#8DCBC6' // 坐标轴轴线颜色
				}
			},
			axisLabel: {
				// 坐标轴刻度标签相关配置
				show: true,
				color: '#8DCBC6',
				fontSize: 12
			},
			splitLine: {
				// 坐标轴在 grid 区域中的分隔线
				show: true,
				lineStyle: {
					// 分割线配置
					color: 'rgba(255,255,255,0.15)' // 分割线颜色
				}
			}
		},
		series: [
			// 底部的椭圆形(象形柱图):pictorialBar
			{
				type: 'pictorialBar', // pictorialBar(象形柱图)
				label: {
					// 图形上的文本标签,可用于说明图像的一些数据信息,比如值,名称等
					show: false, //是否显示标签
					position: ['17', '-30'], // 标签的位置(可以是绝对的像素值或者百分比['50%','50%',也可以是top,left等])
					color: '#8DCBC6',
					fontSize: 12
				},
				symbolSize: [11, 11], // 图形的大小用数组分别比表示宽和高,也乐意设置成10相当于[10,10]
				symbolOffset: [0, 0], // 图形相对于原本位置的偏移
				z: 12, // 象形柱状图组件的所有图形的 z 值.控制图形的前后顺序.z 值小的图形会被 z 值大的图形覆盖.
				data: [90, 7.5, 90, 78, 90, 7.5, 90, 78],
				itemStyle: {
					normal: {
						color: function (params) {
							let colorList = ['rgba(255,201,56,0.28)', '#F19E66', 'rgba(0,255,255,0.28)', 'rgba(61,242,116,0.28)']
							let index = params.dataIndex % colorList.length
							return colorList[index]
						}
					}
				}
			},
			// 中间的长方形柱状图(柱状图):bar
			{
				type: 'bar', // 柱状图
				barWidth: 14, // 柱条的宽度,不设时自适应
				barGap: '0%', // 柱子与柱子之间的距离
				// itemStyle: {
				// 	图形样式
				// 	color支持(rgb(255,255,255)、rgba(255,255,255,1)、#fff,也支持渐变色和纹理填充)
				// 下面就是使用线性渐变
				// color: {
				// 	x: 0,
				// 	y: 0,
				// 	x2: 0,
				// 	y2: 1,
				// 	type: 'linear',
				// 	global: false,
				// 	colorStops: [
				// 		{
				// 			offset: 0, // 0%处的颜色
				// 			color: 'rgba(0,229,255,0.5)'
				// 		},
				// 		{
				// 			offset: 1, // 100%处的颜色
				// 			color: '#1F9BFF'
				// 		}
				// 	]
				// }
				// },
				data: [90, 7.5, 90, 78, 90, 7.5, 90, 78],
				itemStyle: {
					normal: {
						color: function (params) {
							let colorList = ['#b0886e', '#F19E66', '#59e3e3', '#97eec6']
							let index = params.dataIndex % colorList.length
							return colorList[index]
						}
					}
				}
			},
			// 顶部的椭圆形(象形柱图):pictorialBar
			{
				type: 'pictorialBar',
				symbolSize: [14, 14],
				symbolOffset: [0, -10],
				z: 12,
				symbolPosition: 'end',
				itemStyle: {
					normal: {
						color: function (params) {
							let colorList = ['#dca179', 'rgb(243,155,95)', '#36d5d5', '#7beab6']
							let index = params.dataIndex % colorList.length
							return colorList[index]
						}
					}
				},
				data: [90, 7.5, 90, 78, 90, 7.5, 90, 78]
			}
		]
	}
}
/**
 * 右侧曲线图
 */
export const setCurveOptions = () => {
	return {
		// title: {
		// 	text: '产值',
		// 	subtext: '面积',
		// 	textStyle: {
		// 		fontSize: 12,
		// 		fontFamily: 'SourceHanSansCN',
		// 		color: '#fff',
		// 		borderWidth: 2,
		// 		borderColor: '#6C4830'
		// 	}
		// },
		xAxis: {
			type: 'category',
			boundaryGap: true,
			data: ['名称', '名称', '名称', '名称', '名称', '名称'],
			axisTick: {
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#CCEFEC',
					width: 2
				}
			},
			axisLabel: {
				color: '#CCEFEC',
				fontSize: 12,
				margin: 10
			}
		},
		yAxis: [
			{
				type: 'value',
				name: '万头',
				position: 'left',
				nameLocation: 'end',
				nameTextStyle: {
					color: '#CCEFEC',
					fontFamily: 'SourceHanSansCN',
					fontSize: 12,
					padding: [0, 0, 0, -39]
				},
				axisLine: {
					show: true
				},
				//轴线
				axisLabel: {
					show: true,
					color: '#CCEFEC',
					fontSize: 12,
					margin: 10
				},
				//分割线
				splitLine: {
					show: true,
					lineStyle: {
						color: '#26A084'
					}
				}
			}
		],
		legend: {
			data: ['图例1', '图例2', '图例3'],
			icon: 'bar',
			left: 188,
			top: 30,
			itemHeight: 10,
			itemWidth: 15,
			textStyle: {
				color: '#CCEFEC',
				fontSize: 12
			}
		},
		tooltip: {
			trigger: 'item',
			axisPointer: {
				//坐标轴指示器
				type: 'none' //十字准星指示器
			}
		},
		series: [
			{
				name: '图例1',
				type: 'line',
				symbol: 'none',
				smooth: true,
				data: [40, 78, 41, 43, 60, 100, 39],
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#43b9fe'
				},
				areaStyle: {}
			},
			{
				name: '图例2',
				type: 'line',
				symbol: 'none',
				smooth: true,
				data: [30, 40, 38, 54, 60, 68, 80],
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#51ffc1'
				},
				areaStyle: {}
			},
			{
				name: '图例3',
				type: 'line',
				symbol: 'none',
				smooth: true,
				data: [40, 60, 41, 78, 39, 78, 39],
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#f1a65c'
				},
				areaStyle: {}
			}
		]
	}
}
/**
 * 右侧圆饼图3
 */
export const setCircleOptions = () => {
	return {
		title: {
			text: '51.4',
			subtext: '亿元',
			x: 'center',
			y: '35.5%',
			itemGap: 4, //主副标题间距
			textStyle: {
				color: '#fff',
				fontSize: 14,
				fontFamily: 'SourceHanSansCN'
			},
			subtextStyle: {
				color: 'rgba(204, 239, 236, 0.8)',
				fontSize: 12,
				fontFamily: 'SourceHanSansCN'
			}
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			icon: 'circle',
			itemHeight: 7,
			orient: 'vertical',
			textStyle: {
				color: '#fff',
				fontSize: 12
			},

			left: 165,
			top: 35
		},
		color: ['#0AC6A5', '#F19E66', '#FDF350'],
		series: [
			{
				type: 'pie',
				startAngle: '90',
				clockwise: false,
				radius: ['40%', '60%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderWidth: 4,
					borderColor: 'rgba(32,84,95,0.9)'
				},
				label: {
					show: false,
					position: 'right'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 308, name: '图例名称1' },
					{ value: 35, name: '图例名称2' },
					{ value: 40, name: '图例名称3' }
				]
			}
		]
	}
}
/**
 * 右侧圆饼图4
 */
export const setExampleOptions = () => {
	return {
		title: {
			text: '51.4',
			subtext: '亿元',
			x: 'center',
			y: '35.5%',
			itemGap: 4, //主副标题间距
			textStyle: {
				color: '#fff',
				fontSize: 14,
				fontFamily: 'SourceHanSansCN'
			},
			subtextStyle: {
				color: 'rgba(204, 239, 236, 0.8)',
				fontSize: 12,
				fontFamily: 'SourceHanSansCN'
			}
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			icon: 'circle',
			itemHeight: 7,
			orient: 'vertical',
			textStyle: {
				color: '#fff',
				fontSize: 12
			},
			left: 165,
			top: 35
		},
		color: ['#0AC6A5', '#F19E66', '#FDF350'],
		series: [
			{
				type: 'pie',
				startAngle: '90',
				clockwise: false,
				radius: ['40%', '60%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderWidth: 4,
					borderColor: 'rgba(32,84,95,0.9)'
				},
				label: {
					show: false
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 300, name: '图例名称A' },
					{ value: 30, name: '图例名称B' },
					{ value: 40, name: '图例名称C' }
				]
			}
		]
	}
}
