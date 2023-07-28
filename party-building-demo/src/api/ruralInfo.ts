import { PostRequestModel, QueryType } from '@/http/request-model'
import { PageModel } from '@/http/result-model'
import { ruralInfo } from '@/entity/ruralInfo/rural_Info'

const prefix = '/ruralInfo'
export default {
	page: (query: QueryType) => new PostRequestModel<PageModel<ruralInfo>>(`${prefix}/page`, query).request()
}
