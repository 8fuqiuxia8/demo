import { BusinessPo } from '@/entity/common/base'

export interface ruralRanking extends BusinessPo {
	//区排名
	countyRanking: number
	//上级部门id（所属镇id）
	fkParentDeptId: string
	//农村id
	fkRuralId: string
	//荣誉分（农村详情表）
	honorPoints: number
	//农村名称
	rfRuralName: string
	//年份
	statisticsYear: number
	//总分
	totalScore: number
	//镇排名
	townRanking: number
}
