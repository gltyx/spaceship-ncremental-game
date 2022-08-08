/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Unlock spaceships": "解锁太空船",
    "Unlock unmanned spacecraft": "解锁无人飞船",
    "Upgrade solar panels": "升级太阳能电池板",
    "Upgrade spaceship": "升级飞船",
    "Warning! Resetting your data does in fact RESET YOUR DATA.": "警告！重置您的数据实际上会重置您的数据。",
    "Worker upgrades": "工人升级",
    "Workers": "工人",
    "You can build spaceships here.": "你可以在这里建造飞船。",
    "You can refine your resources here.": "您可以在此处优化您的资源。",
    "Build a Dyson sphere": "建立一个戴森球",
    "Build a factory": "建厂",
    "Build a research center": "建立研究中心",
    "Build a shipyard": "建造造船厂",
    "Build a spaceport": "建造太空港",
    "Build asteroid mining complex": "建造小行星采矿综合体",
    "Build more solar panels.": "建造更多的太阳能电池板。",
    "Build solar panels": "建造太阳能电池板",
    "Construct spaceship": "建造飞船",
    "Factory": "工厂",
    "Galaxy Overview": "银河概述",
    "Here you can buy workers who mine resources for you.": "在这里，您可以购买为您开采资源的工人。",
    "Here you can research powerful items.": "在这里您可以研究强大的物品。",
    "Home planet upgrades": "家园星球升级",
    "Mine resources!": "我的资源！",
    "Planet Overview": "星球概览",
    "Purchase a Worker!": "购买工人！",
    "Purchase Max Workers!": "购买 Max Workers！",
    "Q: The resources say NaN after I opened the game, what do I do? A: Reset your data": "Q：打开游戏后资源显示为NaN，我该怎么办？答：重置您的数据",
    "Research": "研究",
    "Reset data": "重置数据",
    "Save data": "保存数据",
    "Sell resources!": "卖资源！",
    "Settings/FAQ": "设置/常见问题",
    "Shipyard": "船厂",
    "Shipyard Construction": "造船厂建设",
    "Solar panel upgrades": "太阳能电池板升级",
    "Spaceport": "太空港",
    "Spaceport Construction": "太空港建设",
    "Spaceship Incremental Game": "太空船增量游戏",
    "System colonization": "星系殖民化",
    "System Construction": "星系建设",
    "System Overview": "星系总览",
    "The next level of the spaceport, where you can build large amounts of spaceships quicker.": "太空港的下一层，您可以在这里更快地建造大量飞船。",
    "This is your home galaxy.": "这是你的家乡银河。",
    "This is your home planet.": "这是你的母星。",
    "This is your home system. Manual mining and worker housing space is multiplied by\n                    the amount of planets you've colonized.": "这是您的母星系。手动采矿和工人住房空间乘以\n您已殖民的行星数量。",
    "Unlock asteroid miners": "解锁小行星矿工",
    "Unlock Dyson sphere": "解锁戴森球",
    "Unlock factory": "解锁工厂",
    "Unlock FLT drive": "解锁 FLT 驱动器",
    "Unlock shipyard": "解锁造船厂",
    "Unlock solar panels": "解锁太阳能电池板",
    "Unlock spaceport": "解锁太空港",
    "Sell all resources!": "出售全部资源！",
    "Build asteroid miner": "建造小行星矿",
    "Build battleship": "建造战列舰",
    "Build fighter": "建造战斗机",
    "Planet\n                Overview": "星球\n                概览",
    "System\n                Overview": "星系\n                概览",
    "Galaxy\n                Overview": "星系\n                概览",
    "Upgrade solar\n                    panels": "升级太阳能板",
    "Here you can save your data or read the FAQ (even though nobody's asked any\n                questions yet)": "在这里您可以保存您的数据或阅读常见问题解答（即使还没有人提出任何\n 问题）",
    "Resource sell rate upgrades": "资源出售率升级",
    "Settings/Information": "设置/信息",
    "Telescope upgrades": "望远镜升级",
    "This is your home system. Manual mining and worker housing space is multiplied by\n                the amount of planets you've colonized.": "这是您的母星系。 手动采矿和工人住房空间乘以\n您已殖民的行星数量。",
    "Unlock fuel refinery": "解锁炼油厂",
    "Unlock telescope": "解锁望远镜",
    "You can manufacture more advanced resources here.": "您可以在这里制造更高级的资源。",
    "Credits!": "学分！",
    "Hi, I'm Bobby, a violinist in high school who's interested in computer science.": "大家好，我是 Bobby，一位对计算机科学感兴趣的高中小提琴手。",
    "Information": "信息",
    "Launch rocket!": "发射火箭！",
    "About me": "关于我",
    "Alpha v1.3.1": "Alpha v1.3.1",
    "Art + lead developer: Bobby": "艺术 + 首席开发人员：Bobby",
    "Build a fuel refinery": "建造燃料精炼厂",
    "Build a telescope": "建造望远镜",
    "Build orbital telescope": "建造轨道望远镜",
    "Build space station": "建造空间站",
    "(mostly) Made by Bobby M 2022 (check settings/information for full credits). All art assets created by me.": "（大部分）由 Bobby M 2022 制作（检查设置/信息以获得完整学分）。 我创建的所有艺术资产。",
    "(my badly drawn portrait)": "（我画得很糟糕的肖像）",
    "Off": "关闭",
    "On": "打开",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "FAQ": "常见问题",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Workers: ": "工人：",
    "Colonize planet ": "殖民星球 ",
    "Resources: ": "资源：",
    "Solar panels: ": "太阳能板：",
    "Factory power: ": "工厂电力：",
    "Energy: ": "能源：",
    "Research points: ": "研究点：",
    "Raise resource sell price to": "将资源售价提高至",
    "Raise\n                resource price rate to ": "将\n资源价格比率提高到",
    "Money: ": "金钱：",
    "Refined resources: ": "精炼资源：",
    "Colonize\n                planet ": "殖民\n                星球 ",
    "Your solar panel level is ": "你的太阳能板等级是 ",
    "Your solar panel space level is ": "你的太阳能板空间等级是 ",
    "Your refinery level is ": "你的精炼等级是 ",
    "Your factory level is ": "你的工厂等级是 ",
    "Your telescope level is ": "你的望远镜等级是 ",
    "Your worker housing level is ": "您的工人住房等级是 ",
    "Planets controlled: ": "行星控制：",
    "Refinery power: ": "精炼效率：",
    "Rocket fuel: ": "火箭燃料：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "\n                refined resources": "\n                精炼资源",
    "\n                Refined\n                Resources": "\n                精炼\n                资源",
    "\n                resources": "\n                资源",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Sell (.+) of resources$/, '出售 $1 资源'],
    [/^Costs (.+)\n                research.$/, '成本 $1\n                研究。'],
    [/^Your workers are level (.+) and each worker produces (.+) resources per second. Upgrade worker cost (.+) money.$/, '您的工人是 $1 级，每个工人每秒生产 $2 资源。 升级工人需要 $3 金钱。'],
    [/^Purchase (.+) Workers!$/, '购买 $1 工人！'],
    [/^Your factory level is (.+). Upgrade factory cost (.+) money and (.+) resources.$/, '您的工厂等级为 $1。升级工厂需要 $2 金钱和 $3 资源。'],
    [/^Your research center is level (.+) and you get (.+) research points every second. Upgrade research center (.+) money.$/, '你的研究中心是 $1 级，你每秒获得 $2 个研究点。 升级研究中心 $3 金钱。'],
    [/^Your resource click level is (.+) and you get (.+) resources per click. Upgrade resource click cost (.+) money.$/, '您的资源点击级别为 $1，每次点击可获得 $2 个资源。 升级资源点击需要 $3 钱。'],
    [/^Your solar panel level is (.+). Upgrade solar panels cost (.+) money and (.+) refined resources.$/, '你的太阳能电池板等级为 $1。升级太阳能电池板需要 $2 钱和 $3 精炼资源。'],
    [/^Your solar panel space level is (.+). Upgrade solar panels space costs (.+) resources.$/, '您的太阳能电池板空间等级为 $1。升级太阳能电池板空间需要 $2 资源。'],
    [/^Your worker housing level is (.+). Upgrade worker housing cost (.+) money and (.+) resources.$/, '您的工人住房等级为 $1。升级工人住房需要 $2 金钱和 $3 资源。'],
    [/^(.+) Refined\n(.+)Resources$/, '$1 精炼\n$2资源'],
    [/^Costs (.+) rocket\n                fuel.$/, '成本 $1 火箭\n 燃料。'],
    [/^Your workers are level (.+) and each worker produces (.+) resources per second.$/, '您的工人是 $1 级，每个工人每秒生产 $ 资源。'],
    [/^Costs (.+) research.$/, '成本 $1 研究.'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Next upgrade will give (.+) resources per click.$/, '下次升级每次点击将提供 $1 个资源。'],
    [/^Next upgrade will make factory produce (.+) refined resources per second.$/, '下一次升级将使工厂每秒生产 $1 精炼资源。'],
    [/^Next upgrade will make refinery produce (.+) rocket fuel per second.$/, '下一次升级将使炼油厂每秒生产 $1 枚火箭燃料。'],
    [/^Next upgrade will make solar panels produce (.+) energy per second.$/, '下一次升级将使太阳能电池板每秒产生 $1 能源。'],
    [/^Next upgrade will make stelescope produce (.+) research points per second.$/, '下一次升级将使望远镜每秒产生 $1 个研究点。'],
    [/^Next upgrade will make the research center produce (.+) research points per second.$/, '下一次升级将使研究中心每秒产生 $1 个研究点。'],
    [/^Next upgrade will make worker housing house (.+) workers.$/, '下一次升级将使工人住房容纳 $1 名工人。'],
    [/^Next upgrade will make workers produce (.+) resources per second.$/, '下一次升级将使工人每秒生产 $1 个资源。'],
    [/^Next upgrade will make you have (.+) solar panel space.$/, '下一次升级将使您拥有 $1 个太阳能电池板空间。'],
    [/^Upgrade factory cost (.+) money and (.+) resources.$/, '升级工厂花费 $1 金钱和 $2 资源。'],
    [/^Upgrade refinery cost (.+) money and (.+) refined resources.$/, '升级精炼厂花费 $1 金钱和 $2 精炼资源。'],
    [/^Upgrade research center (.+) money.$/, '升级研究中心需要 $1 钱。'],
    [/^Upgrade resource click cost (.+) money.$/, '升级资源点击需要 $1 钱。'],
    [/^Upgrade solar panels cost (.+) money and (.+) refined resources.$/, '升级太阳能电池板花费 $1 金钱和 $2精炼资源。'],
    [/^Upgrade solar panels space costs (.+) resources.$/, '升级太阳能电池板空间需要 $1 资源。'],
    [/^Upgrade telescope cost (.+) money and (.+) refined resources.$/, '升级望远镜花费 $1 金钱和 $2 精炼资源。'],
    [/^Upgrade worker cost (.+) money.$/, '升级工人需要 $1 金钱。'],
    [/^Upgrade worker housing cost (.+) money and (.+) resources.$/, '升级工人住房需要 $1 金钱和 $2 资源。'],
    [/^Your research center is level (.+) and you get (.+) research points every second.$/, '你的研究中心是 $1 级，你每秒获得 $2 研究点。'],
    [/^Your resource click level is (.+) and you get (.+) resources per click.$/, '您的资源点击级别为 $1，每次点击可获得 $2 个资源。'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Resources$/, '$1 资源'],
    [/^([\d\.,]+) Refined Resources$/, '$1 精炼资源'],
    [/^([\d\.,]+) refined resources$/, '$1 精炼资源'],
    [/^([\d\.,]+) Rocket Fuel$/, '$1 火箭燃料'],
    [/^([\d\.,]+) resources$/, '$1 资源'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) money$/, '成本：$1 金钱'],
    [/^Cost: (.+)\n(.+)money$/, '成本：$1\n$2金钱'],
    [/^Cost: (.+)\n(.+)Money$/, '成本：$1\n$2金钱'],
    [/^Cost:\n(.+)money and (.+) refined resources.$/, '成本：\n$1金钱 和 $2 精炼资源。'],
    [/^Cost:\n(.+)Money$/, '成本：\n$1金钱'],
    [/^Cost: (.+) Money$/, '成本：$1 金钱'],
    [/^Cost: (.+) energy$/, '成本：$1 能源'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);