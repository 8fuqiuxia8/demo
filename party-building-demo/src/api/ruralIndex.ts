import { GetRequestModel, QueryType } from '@/http/request-model'
import { RuralIndex } from '@/entity/ruralIndex/rural_Index'
import { RuralCollectiveEconomy } from '@/entity/ruralInfo/ruralCollectiveEconomy'
import { RuralPartyActivities } from '@/entity/ruralInfo/ruralPartyActivities'
import { ruralRanking } from '@/entity/ruralInfo/rural_Ranking'
import { ruralTest } from '@/entity/ruralInfo/ruralTest'
import { ruralQuery } from '@/entity/ruralInfo/ruralQuery'
const prefix = '/ruralIndex'
export default {
	collectiveEconomy: (query: QueryType) =>
		new GetRequestModel<Array<RuralCollectiveEconomy>>(`${prefix}/getRuralCollectiveEconomyByFkRuralId?fkRuralId=${query}`).request(),
	partyActivities: (query: QueryType) =>
		new GetRequestModel<Array<RuralPartyActivities>>(`${prefix}/getRuralPartyActivitiesByFkRuralId?fkRuralId=${query}`).request(),
	personnelDistribute: (query: QueryType) =>
		new GetRequestModel<Array<RuralIndex>>(`${prefix}/getRuralPartyBranchPersonnelDistributeByFkRuralId?fkRuralId=${query}`).request(),
	ranking: (query: QueryType) => new GetRequestModel<ruralRanking>(`${prefix}/getProjectEvaluationRakingByFkRuralId?fkRuralId=${query}`).request(),
	test: (query: QueryType) => new GetRequestModel<Array<ruralTest>>(`${prefix}/getRuralProjectEvaluationByFkRuralId?fkRuralId=${query}`).request(),
	queryIndex: (query: QueryType) => new GetRequestModel<ruralQuery>(`${prefix}/getRuralDefiledIndexByFkRuralId?fkRuralId=${query}`).request()
}
