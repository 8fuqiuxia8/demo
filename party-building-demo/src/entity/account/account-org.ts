import { BusinessPo } from '@/entity/common/base'

export interface AccountOrg extends BusinessPo {
	address: string
	bankAccount: string
	bankName: string
	contacts: string
	createUserName: string
	email: string
	fax: string
	fkLogoId: string
	fkOrgTypeDictId: string
	fkParentId: string
	//gmtCreate: string
	// gmtModified: string
	// id: string
	latitude: number
	legalPerson: string
	logoPath: string
	longitude: number
	// memo: string
	// orgCode: string
	// orgName: string
	phone: string
	rfOrgTypeDictName: string
	socialCreditCode: string
	sortCode: number
	//updateUserName: string
	//version: number
	workForce: number
}
