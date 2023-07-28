import { BusinessPo } from '@/entity/common/base'
import { AccountRole } from '@/entity/account/account-role'
import { AccountDept } from '@/entity/account/account-dept'
import { AccountOrg } from '@/entity/account/account-org'
import { AccountThirdParty } from '@/entity/account/account-thirdParty'
export interface AccountUserVo extends AccountUser {
	userInfo: AccountUserInfo
	roleList: AccountRole[]
	deptList: AccountDept[]
	orgList: AccountOrg[]
	permissionMap: { [key: string]: string }
	thirdPartyAccountList: AccountThirdParty[]
	authToken: string
	orgNames: string
	deptNames: string
	headPath: string
	roleNames: string
}

export interface AccountUser extends BusinessPo {
	//用户状态激活 0禁用 1激活 2待审核 3锁定
	activeStatus: 0 | 1 | 2 | 3
	regIp: string
	siteCode: string
	userAccount: string
	userName: string
	userPassword: string
	//0普通用户 1超级用户
	userType: 0 | 1
}
export interface AccountUserInfo extends BusinessPo {
	address: string
	email: string
	fkHeadId: string
	fkPositionDictId: string
	fkUserId: string
	gmtCreate: string
	gmtModified: string
	headPath: string
	id: string
	idCard: string
	openId: string
	phone: string
	qq: string
	rfPositionDictName: string
	sex: 0 | 1 | 2 //男，女，默认
	sortCode: number
	userInfoCode: string
	userInfoName: string
	wechat: string
	workNumber: string
	workingDate: string
}
