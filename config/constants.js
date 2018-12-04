import moment from 'moment'

export const PAGE_SIZE  = 20 //每次加载20条数据

export const GOODS_DATA = '__goods_data__'

// 需要上报的数据
export const DataReportType = {
    DataReportType_VIEW : 1,  // 查看
    DataReportType_LIKE : 2,  // 点赞
    DataReportType_REPORT : 3, // 举报
    DataReportType_COUPON : 4, // 优惠券
    DataReportType_ORDER : 5, // 下单
    DataReportType_ORDER_SIMILAR : 6  //购买同类
}

// 类目约定写死
export const CATEGORY_TAGS = [
  {
    label:'男鞋',
    value:1
  },{
    label:'女鞋',
    value:2
  },{
    label:'手机',
    value:3
  },{
    label:'电脑',
    value:4
  },{
    label:'箱包',
    value:5
  },{
    label:'女装',
    value:6
  },{
    label:'男装',
    value:7
  },{
    label:'护肤',
    value:8
  },{
    label:'化妆品',
    value:9
  },{
    label:'食品',
    value:10
  },{
    label:'家电',
    value:11
  },{
    label:'生活用品',
    value:12
  },
  {
    label:'个人护理',
    value:13,
  },
  {
    label:'运动户外',
    value:14
  },
  {
    label:'家纺家饰',
    value:15
  },
  {
    label:'灯具电工',
    value:16
  },
  {
    label:'图书音像',
    value:17
  },
  {
    label:'母婴玩具',
    value:19
  },
  {
    label: '其他',
    value: 999
  }
]

export const tabs = [
  {
    title:'全部',
    categoryId:''
  },
  {
    title: '爆款榜单',
    categoryId:'18'
  },
  {
    title:'生活用品',
    categoryId:'12'
  },
  {
    title:'化妆品',
    categoryId:'9'
  },
  {
    title:'女鞋',
    categoryId:'2'
  },
  {
    title:'女装',
    categoryId:'6'
  }
]

export const GoodsSourceMap = {
    1: '天猫',
    2: '京东',
    3: '亚马逊',
    4: '淘宝',
    5: '苏宁',
    6: '国美'
}

// 热门标签
const HOT_SEARCH_TAGS = [
  '钟表珠宝','美妆护肤','内衣配饰','iPhone','抽纸','时尚连衣裙','衬衫','新款男鞋','风衣','夹克外套',
  '牛仔裤', '夹克', '时尚休闲裤', '沙发', '保温杯', '定制窗帘',
  '床垫', '男装', '女装', '女鞋', '母婴孕童', '个护清洁'
]

// 随机打乱 取10个
export const disOrderHotTag = ()=>{
  const tags = HOT_SEARCH_TAGS.sort(function(){
    return Math.random()>.5 ? -1 : 1;
  });
  return tags.slice(0,10)
}


export const DATA = {
	DATE_TODAY: moment().format('YYYY-MM-DD'),
	DATE_YESTERDAY: moment().subtract(1, 'days').format('YYYY-MM-DD'),
	DATE_1_WEEK_BEFORE: moment().subtract(1, 'weeks').format('YYYY-MM-DD'),
	DATE_2_WEEKS_BEFORE: moment().subtract(2, 'weeks').format('YYYY-MM-DD'),
	DATE_3_WEEKS_BEFORE: moment().subtract(3, 'weeks').format('YYYY-MM-DD'),
	DATE_1_MONTH_BEFORE: moment().subtract(1, 'months').format('YYYY-MM-DD'),
	DATE_2_MONTH_BEFORE: moment().subtract(2, 'months').format('YYYY-MM-DD'),
	DATE_3_MONTHS_BEFORE: moment().subtract(3, 'months').format('YYYY-MM-DD'),
	DATE_1_YEAR_BEFORE: moment().subtract(1, 'years').format('YYYY-MM-DD'),

	DATE_3_MONTHS_AFTER: moment().add(3, 'months').format('YYYY-MM-DD'),
	DATE_1_YEAR_AFTER: moment().add(1, 'year').format('YYYY-MM-DD'),

	DATE_FIRST_DAY_OF_MONTH: moment().startOf('month').format('YYYY-MM-DD'),
	DATE_LAST_DAY_OF_MONTH: moment().endOf('month').format('YYYY-MM-DD'),

	DATE_7_DAYS_BEFORE: moment().subtract(7, 'days').format('YYYY-MM-DD'),
	DATE_30_DAYS_BEFORE: moment().subtract(30, 'days').format('YYYY-MM-DD'),
	DATE_90_DAYS_BEFORE: moment().subtract(90, 'days').format('YYYY-MM-DD'),
	DATE_100_DAYS_BEFORE: moment().subtract(100, 'days').format('YYYY-MM-DD'),
}
