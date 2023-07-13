import { request } from '@/utils/request.ts'
import { ResponseData } from '@/api/type.ts'
import { ApiGetHospitalReq, ApiGetHospitalRes } from '@/api/home/type.ts'

/**
 * 获取医院列表
 * @param params
 */
export const apiGetHospital = async (params: ApiGetHospitalReq): Promise<ResponseData<ApiGetHospitalRes>> => {
  return request.get(`/hosp/hospital/${params.pageNum}/${params.pageSize}`)
}
