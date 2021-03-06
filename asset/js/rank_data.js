const score = [100000, 100, 75, 60, 45, 35, 25, 20, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0];

const teams = {
  '2017': [
    '黑人问号.jpg',
    '水能载舟',
    'CE使我快乐',
    '复苏',
    '我们吓成一团了',
    'TAT',
    '头文件',
    '人生已经如此的艰难',
    '我需要治疗',
    '终结者',
    '不存在的',
    'tvcr',
    '极值点',
    '瞎搞',
  ],
  '2018': [
    '趣味时光',        // 1
    '小黄鸡咕咕咕',
    '啊，队友呢？！',   // 3
    '比宇宙更远的地方', // 4
    '除了AC',
    '从不刷题队',      // 6
    '“”',
    '梦中做自己',
    '菜里别加鎕',     // 9
    '点击输入队名',
    '稽不择名',       // 11
    '彩笔队',
    '怪兽防卫团',     // 13
  ],
  '2019': [
    '趣味时光', // 1
    '未定群名',
    '打不赢电脑',
    '无限大の梦',
    '某人征婚',
    '试炼者',
    '肉夹馍',
    'CE：从爆零开始的ACM生活',
    '很抱歉，该队名已被删除',
    '萌新求带',
    '根据相关法规，队名不予显示',
    'AC 怪',
    '我裂开了',
    '将来我一定比你聪明比你强', // 14
  ],
  '2020': [
    '苍响',
    '试炼者',
    '我不知道.png',
    '仰望星空',
    '未闻WA',
    '从爆零开始的ACM生活',
    '将来我一定比你聪明比你强',
    '大吉大利，今晚吃 mian();',
    '奔跑的小菜鸡',
    '铲车人',
    '辉夜大小姐想让我AC',
    '火锅队',
    '合法字符串',
    '路人队伍的养成方法',
    '我们不会起名',
    '地址过低',
    '周末早上请不要训练',
    '普通攻击是WA而且触发TLE还能RE的弟弟你喜欢吗',
    '从前往后做',
    '神奈川冲浪里', // 20
  ],
};

const trainingRanklist = {
  '2020': [
    ['07-12', 2, 16, 11, 1, 10, 6, 12, 7, 15, 19, 5, 4, 8, 14, 3, 20, 9, 13, 17, 18],
    ['07-13', 1, 9, 4, 2, 11, 3, 16, 8, 10, 12, 6, 19, 7, 5, 17, 13, 20, 15, 18, 14],
    ['07-18', 1, 9, 11, 12, 2, 19, 5, 10, 3, 4, 8, 7, 16, 6, 15, 13, 20, 17, 18, 14],
    ['07-20', 1, 3, 9, 2, 8, 6, 12, 11, 7, 4, 19, 5, 10, 16, 15, 20, 13, 17, 14, 18],
    ['07-23', 2, 8, 3, 11, 6, 7, 10, 4, 16, 9, 5, 13, 19, 15, 14, 12, 17, 18, 1, 20],
    // last three should get 0 points, but team 18 got 1 point
    ['07-25', 1, 4, 9, 2, 16, 5, 8, 3, 11, 13, 19, 12, 20, 10, 17, 7, 15, 6, 18, 14],
    ['07-27', 4, 1, 3, 2, 10, 6, 9, 5, 7, 11, 16, 8, 12, 19, 13, 15, 14, 17, 20, 18]
  ],
  '2019': [
    ['08-06', 3, 1, 2, 4, 10, 6, 8, 13, 9, 14, 5, 11, 7, 12],
    ['08-08', 1, 3, 2, 6, 13, 11, 4, 8, 10, 7, 14, 9, 5, 12],
    ['08-10', 1, 2, 8, 6, 13, 3, 9, 14, 4, 5, 7, 12, 10, 11],
    ['08-13', 2, 3, 13, 1, 8, 4, 6, 11, 10, 5, 7, 14, 9, 12],
    ['08-15', 1, 2, 3, 4, 5, 6, 10, 13, 8, 14, 11, 7, 12, 9],
    ['08-17', 1, 2, 5, 3, 4, 13, 10, 6, 14, 8, 11, 9, 7, 12],
    ['08-18', 3, 1, 5, 4, 2, 13, 8, 6, 12, 14, 11, 10, 9, 7],
    ['08-20', 3, 4, 1, 10, 13, 2, 6, 12, 14, 9, 7, 11, 5, 8],
    ['08-22', 1, 3, 2, 4, 10, 14, 5, 6, 13, 9, 11, 8, 12, 7],
    ['08-27', 1, 3, 2, 6, 10, 11, 8, 4, 14, 5, 13, 7, 9, 12],
    ['08-29', 3, 1, 4, 13, 10, 2, 6, 8, 5, 11, 7, 14, 9, 12],
    ['09-07', 1, 5, 3, 6, 13, 10, 8, 14, 9, 11, 12, 7, 4, 2],
  ],
  '2018': [
    ['08-02', 2, 1, 4, 6, 9, 8, 3, 5, 10, 11, 7, 13, 12],
    ['08-04', 3, 2, 9, 8, 4, 5, 6, 11, 10, 13, 7, 12, 1],
    ['08-06', 1, 4, 2, 6, 3, 8, 5, 9, 10, 11, 13, 7, 12],
    ['08-09', 1, 5, 4, 9, 6, 10, 2, 3, 7, 13, 8, 11, 12],
    ['08-11', 4, 2, 10, 1, 5, 7, 8, 13, 3, 11, 6, 9, 12],
    ['08-13', 4, 1, 5, 2, 6, 3, 9, 10, 8, 7, 13, 11, 12],
    ['08-16', 4, 1, 5, 7, 8, 10, 9, 11, 2, 6, 3, 13, 12],
    ['08-19', 1, 4, 9, 6, 3, 7, 8, 5, 2, 11, 10, 13, 12],
    ['08-21', 2, 1, 5, 4, 8, 9, 10, 11, 3, 6, 7, 13, 12],
    ['08-23', 1, 5, 2, 4, 6, 8, 3, 10, 7, 9, 11, 13, 12],
    ['08-25', 1, 4, 10, 6, 2, 9, 5, 11, 8, 3, 7, 13, 12],
    ['08-27', 1, 2, 3, 8, 4, 5, 10, 6, 9, 7, 11, 13, 12],
    ['08-30', 1, 5, 4, 2, 8, 9, 3, 6, 10, 7, 11, 13, 12],
  ],
  '2017': [
    ['07-25', 1, 9, 6, 3, 2, 4, 8, 7, 10, 5, 12, 13, 11, 14],
    ['07-27', 1, 9, 2, 6, 4, 8, 7, 3, 10, 11, 12, 13, 5, 14],
    ['08-01', 1, 6, 9, 4, 10, 8, 3, 13, 7, 2, 12, 5, 11, 14],
    ['08-03', 4, 1, 7, 6, 2, 3, 9, 13, 12, 8, 10, 11, 5, 14],
    ['08-05', 1, 9, 3, 6, 7, 8, 2, 12, 10, 13, 11, 5, 14, 4],
    ['08-08', 1, 9, 8, 7, 2, 4, 12, 3, 10, 6, 13, 14, 5, 11],
    ['08-10', 1, 9, 7, 2, 4, 3, 12, 8, 13, 5, 6, 10, 11, 14],
    ['08-12', 9, 1, 8, 6, 4, 7, 3, 13, 2, 10, 5, 12, 14, 11],
    ['08-15', 1, 4, 8, 2, 9, 6, 3, 10, 13, 7, 11, 5, 12, 14],
    ['08-17', 1, 4, 3, 9, 8, 2, 7, 6, 12, 13, 11, 5, 14, 10],
    ['08-19', 9, 2, 6, 4, 8, 1, 10, 3, 13, 7, 11, 12, 5, 14],
    ['08-22', 1, 2, 6, 4, 8, 9, 10, 13, 3, 12, 7, 5, 11, 14],
    ['08-24', 1, 6, 9, 4, 2, 3, 12, 13, 7, 8, 10, 5, 11, 14],
    ['09-09', 6, 9, 3, 1, 13, 8, 7, 10, 12, 2, 11, 4, 5, 14],
    ['09-10', 1, 2, 9, 6, 8, 7, 3, 10, 4, 12, 13, 11, 5, 14],
    ['09-16', 1, 9, 3, 4, 2, 7, 6, 12, 10, 8, 13, 11, 5, 14],
    ['09-17', 3, 6, 4, 9, 8, 2, 1, 12, 13, 10, 7, 11, 5, 14],
  ],
};
