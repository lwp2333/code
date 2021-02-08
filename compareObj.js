const enterpriseInfo = {
  companyId: '', //企业id
  companyName: '', //企业名称
  cname: '', //曾用名
  unicode: '', // 统一社会信用代码
  orgId: '', //组织机构代码
  addressTown: undefined, //所属地区
  figureSpotNum: '', //图斑号
  chengliriqi: '', // 成立日期
  jingyingfanwei: '', // 经营范围
  isPark: undefined, //是否在园区内(1-是；0-否)
  addressPark: undefined, //所属园区
  zhuceziben: '', //注册资本
  fadingdaibiao: '', // 法定代表人
  address: '', // 注册地址
  officeAddress: '', //实际经营地址
  email: '', //电子邮件
  homeurl: '', //企业官网
  businessStatus: '', // 运营状态
  contact: '', //日常联系人
  contactTel: '', //日常联系人联系电话
  statistics: '', // 统计负责人
  statisticsTel: '', // 统计负责人联系电话
  taxRegistered: '', //税务注册地
  statisticsRegistered: '', //统计注册地
  mainProduct: '', // 主要产品
  mainBusiness: '', //主营业务
  companyScale: undefined, //是否规上企业(1-是；0-否)
  isAdvanced: undefined, //符合北京十大高精尖产业发展方向(1-是；0-否)
  industrialCode: '', //所属行业代码(统计局)
  trade: '', //企业所属行业（一级）
  industrial: '', //所属行业（二级）
  productIndustrialChain: '', //主要产品的上下游链条行业
  isArmyCooperation: undefined, //是否军民结合(合作创新)(1-是；0-否)
  exportRegion: '' //出口国家和地区
}
const editForm = {
  figureSpotNum: '', //图斑号
  isPark: undefined, //是否在园区内(1-是；0-否)
  addressPark: undefined, //所属园区
  email: '', //电子邮件
  homeurl: '', //企业官网
  businessStatus: '', // 运营状态
  contact: '', //日常联系人
  contactTel: '', //日常联系人联系电话
  statistics: '统计负责人change', // 统计负责人
  statisticsTel: '', // 统计负责人联系电话
  taxRegistered: '', //税务注册地
  statisticsRegistered: '统计注册地change', //统计注册地
  mainProduct: '', // 主要产品
  mainBusiness: '', //主营业务
  companyScale: undefined, //是否规上企业(1-是；0-否)
  isAdvanced: undefined, //符合北京十大高精尖产业发展方向(1-是；0-否)
  industrialCode: '所属行业代码change', //所属行业代码(统计局)
  trade: '所属行业（一级）change', //企业所属行业（一级）
  industrial: '所属行业（二级）change', //所属行业（二级）
  newFiled: '新字段'
}

const compareChangeFiled = (oldObj, newObj) => {
  const result = { ...newObj }
  Object.keys(newObj).forEach(key => {
    let oldItem = oldObj[key]
    let newItem = newObj[key]
    console.log('前', oldItem)
    console.log('后', newItem)
    if (oldItem === newItem) {
      delete result[key]
    }
  })
  return result
}

console.log(JSON.stringify(compareChangeFiled(enterpriseInfo, editForm)))
