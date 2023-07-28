import { BusinessPo } from '@/entity/common/base'

export interface AccountRole extends BusinessPo {
	//createUserName: string
	fkDeptId: string
	fkOrgId: string
	fkParentIds: string
	// gmtCreate: string
	// gmtModified: string
	// id: string
	// memo: string
	roleLevel: number
	roleName: string
	roleType: number
	sortCode: number
	// updateUserName: string
	// version: number
}
