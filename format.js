const NumToThousands = num => {
  if (isNaN(Number(num))) {
    console.log('参数不为数字/数字字符串')
    return num
  }
  return Number(num).toLocaleString()
}
// console.log(NumToThousands('566666'))

const iconList = [
  {
    icon_id: '16770805',
    name: '帮帮忙mdpi',
    font_class: 'bangbangmangmdpi',
    unicode: 'e613',
    unicode_decimal: 58899
  },
  {
    icon_id: '16770806',
    name: '公告mdpi',
    font_class: 'gonggaomdpi',
    unicode: 'e614',
    unicode_decimal: 58900
  },
  {
    icon_id: '16770807',
    name: '常用电话mdpi',
    font_class: 'changyongdianhuamdpi',
    unicode: 'e615',
    unicode_decimal: 58901
  },
  {
    icon_id: '16770809',
    name: '垃圾分类mdpi',
    font_class: 'lajifenleimdpi',
    unicode: 'e616',
    unicode_decimal: 58902
  },
  {
    icon_id: '16770810',
    name: '逛闲置mdpi',
    font_class: 'guangxianzhimdpi',
    unicode: 'e617',
    unicode_decimal: 58903
  },
  {
    icon_id: '16770811',
    name: '访客邀请mdpi',
    font_class: 'fangkeyaoqingmdpi',
    unicode: 'e618',
    unicode_decimal: 58904
  },
  {
    icon_id: '16770812',
    name: '我的钥匙mdpi',
    font_class: 'wodeyuechimdpi',
    unicode: 'e619',
    unicode_decimal: 58905
  },
  {
    icon_id: '16770813',
    name: '调查问卷mdpi',
    font_class: 'tiaochawenjuanmdpi',
    unicode: 'e61a',
    unicode_decimal: 58906
  },
  {
    icon_id: '16770814',
    name: '我要投票mdpi',
    font_class: 'woyaotoupiaomdpi',
    unicode: 'e61b',
    unicode_decimal: 58907
  },
  {
    icon_id: '16770815',
    name: '邻里圈mdpi',
    font_class: 'linliquanmdpi',
    unicode: 'e61c',
    unicode_decimal: 58908
  },
  {
    icon_id: '16770816',
    name: '物业缴费mdpi',
    font_class: 'wuyejiaofeimdpi',
    unicode: 'e61d',
    unicode_decimal: 58909
  },
  {
    icon_id: '16770817',
    name: '小区介绍mdpi',
    font_class: 'xiaoqujieshaomdpi',
    unicode: 'e61e',
    unicode_decimal: 58910
  },
  {
    icon_id: '16770818',
    name: '一键开门mdpi',
    font_class: 'yijiankaimenmdpi',
    unicode: 'e61f',
    unicode_decimal: 58911
  },
  {
    icon_id: '16770820',
    name: '意见反馈mdpi',
    font_class: 'yijianfankuimdpi',
    unicode: 'e620',
    unicode_decimal: 58912
  },
  {
    icon_id: '16770822',
    name: '装修备案mdpi',
    font_class: 'zhuangxiubeianmdpi',
    unicode: 'e621',
    unicode_decimal: 58913
  },
  {
    icon_id: '16770823',
    name: '一键挪车mdpi',
    font_class: 'yijiannuochemdpi',
    unicode: 'e622',
    unicode_decimal: 58914
  },
  {
    icon_id: '16770824',
    name: '小区活动mdpi',
    font_class: 'xiaoquhuodongmdpi',
    unicode: 'e625',
    unicode_decimal: 58917
  },
  {
    icon_id: '16778409',
    name: '置业',
    font_class: 'zhiye',
    unicode: 'e626',
    unicode_decimal: 58918
  },
  {
    icon_id: '16780644',
    name: '保姆月嫂',
    font_class: 'baomuyuesao',
    unicode: 'e627',
    unicode_decimal: 58919
  },
  {
    icon_id: '16780645',
    name: '代收包裹',
    font_class: 'daishoubaoguo',
    unicode: 'e628',
    unicode_decimal: 58920
  },
  {
    icon_id: '16780646',
    name: '车主服务',
    font_class: 'chezhufuwu',
    unicode: 'e63b',
    unicode_decimal: 58939
  },
  {
    icon_id: '16780647',
    name: '快递查询',
    font_class: 'kuaidichaxun',
    unicode: 'e63c',
    unicode_decimal: 58940
  },
  {
    icon_id: '16780648',
    name: '房屋租售',
    font_class: 'fangwuzushou',
    unicode: 'e63d',
    unicode_decimal: 58941
  },
  {
    icon_id: '16780649',
    name: '全部',
    font_class: 'quanbu',
    unicode: 'e63e',
    unicode_decimal: 58942
  },
  {
    icon_id: '16780650',
    name: '社区健康',
    font_class: 'shequjiankang',
    unicode: 'e63f',
    unicode_decimal: 58943
  },
  {
    icon_id: '16780651',
    name: '社区商城',
    font_class: 'shequshangcheng',
    unicode: 'e640',
    unicode_decimal: 58944
  },
  {
    icon_id: '16780652',
    name: '衣鞋洗护',
    font_class: 'yixiexihu',
    unicode: 'e641',
    unicode_decimal: 58945
  },
  {
    icon_id: '16780653',
    name: '文化旅游',
    font_class: 'wenhualvyou',
    unicode: 'e642',
    unicode_decimal: 58946
  },
  {
    icon_id: '16780654',
    name: '我要搬家',
    font_class: 'woyaobanjia',
    unicode: 'e643',
    unicode_decimal: 58947
  },
  {
    icon_id: '16780655',
    name: '我要打车',
    font_class: 'woyaodache',
    unicode: 'e644',
    unicode_decimal: 58948
  },
  {
    icon_id: '16780656',
    name: '天气预报',
    font_class: 'tianqiyubao',
    unicode: 'e645',
    unicode_decimal: 58949
  },
  {
    icon_id: '16780657',
    name: '社区小站',
    font_class: 'shequxiaozhan',
    unicode: 'e646',
    unicode_decimal: 58950
  },
  {
    icon_id: '16935980',
    name: '业主投诉',
    font_class: 'yezhutousu',
    unicode: 'e647',
    unicode_decimal: 58951
  },
  {
    icon_id: '16936464',
    name: '报事报修',
    font_class: 'baoshibaoxiu',
    unicode: 'e648',
    unicode_decimal: 58952
  },
  {
    icon_id: '16997383',
    name: '从业人员',
    font_class: 'congyerenyuan',
    unicode: 'e649',
    unicode_decimal: 58953
  },
  {
    icon_id: '16997384',
    name: '常用电话管理',
    font_class: 'changyongdianhuaguanli',
    unicode: 'e64a',
    unicode_decimal: 58954
  },
  {
    icon_id: '16997385',
    name: '公告管理',
    font_class: 'gonggaoguanli',
    unicode: 'e64b',
    unicode_decimal: 58955
  },
  {
    icon_id: '16997386',
    name: '垃圾桶分类管理',
    font_class: 'lajitongfenleiguanli',
    unicode: 'e64c',
    unicode_decimal: 58956
  },
  {
    icon_id: '16997387',
    name: '企业信息',
    font_class: 'qiyexinxi',
    unicode: 'e64d',
    unicode_decimal: 58957
  },
  {
    icon_id: '16997388',
    name: '项目信息',
    font_class: 'xiangmuxinxi',
    unicode: 'e64e',
    unicode_decimal: 58958
  },
  {
    icon_id: '16997389',
    name: '项目申报管理',
    font_class: 'xiangmushenbaoguanli',
    unicode: 'e64f',
    unicode_decimal: 58959
  },
  {
    icon_id: '16997390',
    name: '维修资金申报',
    font_class: 'weixiuzijinshenbao',
    unicode: 'e650',
    unicode_decimal: 58960
  },
  {
    icon_id: '17271683',
    name: '违停举报',
    font_class: 'weitingjubao',
    unicode: 'e651',
    unicode_decimal: 58961
  },
  {
    icon_id: '18560147',
    name: '垃圾分类查询',
    font_class: 'lajifenleichaxun',
    unicode: 'e652',
    unicode_decimal: 58962
  },
  {
    icon_id: '18560188',
    name: '客户管理',
    font_class: 'kehuguanli',
    unicode: 'e653',
    unicode_decimal: 58963
  },
  {
    icon_id: '18560193',
    name: '宠物登记',
    font_class: 'chongwudengji',
    unicode: 'e654',
    unicode_decimal: 58964
  },
  {
    icon_id: '18560215',
    name: '车位管理',
    font_class: 'cheweiguanli',
    unicode: 'e655',
    unicode_decimal: 58965
  },
  {
    icon_id: '18560220',
    name: '设备管理',
    font_class: 'shebeiguanli',
    unicode: 'e656',
    unicode_decimal: 58966
  },
  {
    icon_id: '18560477',
    name: '承接查验',
    font_class: 'chengjiechayan',
    unicode: 'e657',
    unicode_decimal: 58967
  },
  {
    icon_id: '18560487',
    name: '工单管理',
    font_class: 'gongdanguanli',
    unicode: 'e658',
    unicode_decimal: 58968
  },
  {
    icon_id: '18560525',
    name: '搬家登记',
    font_class: 'banjiadengji',
    unicode: 'e659',
    unicode_decimal: 58969
  },
  {
    icon_id: '18560580',
    name: '装修备案管理',
    font_class: 'zhuangxiubeian',
    unicode: 'e65a',
    unicode_decimal: 58970
  },
  {
    icon_id: '14846193',
    name: '龟背竹',
    font_class: '2',
    unicode: 'e623',
    unicode_decimal: 58915
  },
  {
    icon_id: '14846262',
    name: '绿植1',
    font_class: 'lvzhi1',
    unicode: 'e624',
    unicode_decimal: 58916
  },
  {
    icon_id: '14871017',
    name: '绿植3',
    font_class: 'lvzhi3',
    unicode: 'e629',
    unicode_decimal: 58921
  },
  {
    icon_id: '14871018',
    name: '绿植4',
    font_class: 'lvzhi4',
    unicode: 'e62a',
    unicode_decimal: 58922
  },
  {
    icon_id: '14871019',
    name: '绿植8',
    font_class: 'lvzhi8',
    unicode: 'e62b',
    unicode_decimal: 58923
  },
  {
    icon_id: '14871020',
    name: '绿植6',
    font_class: 'lvzhi6',
    unicode: 'e62c',
    unicode_decimal: 58924
  },
  {
    icon_id: '14871021',
    name: '绿植10',
    font_class: 'lvzhi10',
    unicode: 'e62d',
    unicode_decimal: 58925
  },
  {
    icon_id: '14871022',
    name: '绿植14',
    font_class: 'lvzhi14',
    unicode: 'e62e',
    unicode_decimal: 58926
  },
  {
    icon_id: '14871023',
    name: '绿植11',
    font_class: 'lvzhi11',
    unicode: 'e62f',
    unicode_decimal: 58927
  },
  {
    icon_id: '14871024',
    name: '绿植12',
    font_class: 'lvzhi12',
    unicode: 'e630',
    unicode_decimal: 58928
  },
  {
    icon_id: '14871025',
    name: '绿植13',
    font_class: 'lvzhi13',
    unicode: 'e631',
    unicode_decimal: 58929
  },
  {
    icon_id: '14871026',
    name: '绿植16',
    font_class: 'lvzhi16',
    unicode: 'e632',
    unicode_decimal: 58930
  },
  {
    icon_id: '14871027',
    name: '绿植15',
    font_class: 'lvzhi15',
    unicode: 'e633',
    unicode_decimal: 58931
  },
  {
    icon_id: '14888935',
    name: '绿植5',
    font_class: 'lvzhi5',
    unicode: 'e634',
    unicode_decimal: 58932
  },
  {
    icon_id: '14889093',
    name: '绿植9',
    font_class: 'lvzhi9',
    unicode: 'e635',
    unicode_decimal: 58933
  },
  {
    icon_id: '14889243',
    name: '绿植7',
    font_class: 'lvzhi7',
    unicode: 'e636',
    unicode_decimal: 58934
  },
  {
    icon_id: '14889287',
    name: '绿植18',
    font_class: 'lvzhi18',
    unicode: 'e637',
    unicode_decimal: 58935
  },
  {
    icon_id: '14889293',
    name: '绿植17',
    font_class: 'lvzhi17',
    unicode: 'e638',
    unicode_decimal: 58936
  },
  {
    icon_id: '14891199',
    name: '绿植19',
    font_class: 'lvzhi19',
    unicode: 'e639',
    unicode_decimal: 58937
  },
  {
    icon_id: '14891200',
    name: '绿植20',
    font_class: 'lvzhi20',
    unicode: 'e63a',
    unicode_decimal: 58938
  }
]

const newList = iconList.map(item => {
  const { name, font_class } = item
  return {
    name,
    type: `icon-${font_class}`
  }
})

console.log(JSON.stringify(newList))
