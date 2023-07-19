import { request } from '@/utils/request.ts'
import { ResponseData } from '@/api/type.ts'
import { ApiGetHospitalReq, ApiGetHospitalRes, DictCode, HospitalLevelOrRegionItem } from '@/api/home/type.ts'

/**
 * 获取医院列表
 * @param params
 */
export const apiGetHospital = async (params: ApiGetHospitalReq): Promise<ResponseData<ApiGetHospitalRes>> => {
  const query = {
    hostype: params.hostype,
    districtCode: params.districtCode
  }
  return request.get(`/hosp/hospital/${params.pageNum}/${params.pageSize}`, { params: query })
}

/**
 * 获取医院的等级或地区
 * @param dictCode
 */
export const aptGetHospitalLevelOrRegion = async (dictCode: DictCode): Promise<ResponseData<HospitalLevelOrRegionItem[]>> => {
  return request.get(`/cmn/dict/findByDictCode/${dictCode}`)
}
