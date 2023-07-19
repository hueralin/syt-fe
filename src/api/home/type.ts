export interface ApiGetHospitalReq {
    pageNum: number,
    pageSize: number,
    hoscode?: string,
    hosname?: string,
    hostype?: string,
    provinceCode?: string,
    cityCode?: string,
    districtCode?: string,
    status?: number
}

// 医院信息
export interface HospitalItem {
    id: string,
    createTime: string,
    updateTime: string,
    isDelete: boolean,
    param: {
        hostypeString: string,
        fullAddress: string
    },
    hoscode: string,
    hosname: string,
    hostype: string,
    provinceCode: string,
    cityCode: string,
    districtCode: string,
    address: string,
    logoData: string,
    intro: string,
    route: string,
    status: number,
    bookingRule: {
        cycle: number,
        releaseTime: string,
        stopTime: string,
        quitDay: number,
        quitTime: string,
        rule: string[]
    }
}

export interface ApiGetHospitalRes {
    content: HospitalItem[],
    pageable: {
        sort: {
            sorted: boolean,
            unsorted: boolean,
            empty: boolean
        },
        pageNumber: number,
        pageSize: number,
        offset: number,
        paged: boolean,
        unpaged: boolean
    },
    totalPages: number,
    totalElements: number,
    last: boolean,
    first: boolean,
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    },
    numberOfElements: number,
    size: number,
    number: number,
    empty: boolean
}

export enum DictCode {
    HosType = 'HosType',
    HosBeijing = 'Beijin' // 呵，教程写的就是这样的
}

// 医院等级或区域信息
export interface HospitalLevelOrRegionItem {
    id: number,
    createTime: string
    updateTime: string,
    isDeleted: number,
    param: unknown,
    parentId: number,
    name: string,
    value: string,
    dictCode: string,
    hasChildren: boolean
}
