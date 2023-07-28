import { BusinessPo } from '@/entity/common/base'

export interface AccountThirdParty extends BusinessPo {
	appOpenId: string
	appType: string
	appUserId: string
	appUserName: string
	fkUserId: string
	// gmtCreate: string
	// gmtModified: string
	// id: string
}
