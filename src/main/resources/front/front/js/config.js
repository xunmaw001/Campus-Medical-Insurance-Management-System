
var projectName = '校园医疗保险管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '保险信息',
	url: './pages/baoxianxinxi/list.html'
}, 

{
	name: '公告信息',
	url: './pages/news/list.html'
},
{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springboot18525/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除","报销到账","消费"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","修改","删除"],"menu":"充值记录","menuJump":"列表","tableName":"chongzhijilu"}],"menu":"充值记录管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除","报表"],"menu":"信息档案","menuJump":"列表","tableName":"xinxidangan"}],"menu":"信息档案管理"},{"child":[{"appFrontIcon":"cuIcon-skin","buttons":["新增","查看","修改","删除"],"menu":"保险信息","menuJump":"列表","tableName":"baoxianxinxi"}],"menu":"保险信息管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","修改","删除","审核"],"menu":"参保记录","menuJump":"列表","tableName":"canbaojilu"}],"menu":"参保记录管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","删除","审核"],"menu":"停保请求","menuJump":"列表","tableName":"tingbaoqingqiu"}],"menu":"停保请求管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","修改","删除","审核"],"menu":"续保请求","menuJump":"列表","tableName":"xubaoqingqiu"}],"menu":"续保请求管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","修改","删除","打印","导出","审核"],"menu":"报销记录","menuJump":"列表","tableName":"baoxiaojilu"}],"menu":"报销记录管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改","删除"],"menu":"报销到账","menuJump":"列表","tableName":"baoxiaodaozhang"}],"menu":"报销到账管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","修改","删除"],"menu":"消费记录","menuJump":"列表","tableName":"xiaofeijilu"}],"menu":"消费记录管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["新增","查看","修改","删除"],"menu":"学生提醒","menuJump":"列表","tableName":"xueshengtixing"}],"menu":"学生提醒管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"留言反馈","tableName":"messages"}],"menu":"留言反馈"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告信息","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","参保申请"],"menu":"保险信息列表","menuJump":"列表","tableName":"baoxianxinxi"}],"menu":"保险信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","充值"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["查看","支付"],"menu":"充值记录","menuJump":"列表","tableName":"chongzhijilu"}],"menu":"充值记录管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改"],"menu":"信息档案","menuJump":"列表","tableName":"xinxidangan"}],"menu":"信息档案管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","停保请求","续保请求","报销申请"],"menu":"参保记录","menuJump":"列表","tableName":"canbaojilu"}],"menu":"参保记录管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看"],"menu":"停保请求","menuJump":"列表","tableName":"tingbaoqingqiu"}],"menu":"停保请求管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看"],"menu":"续保请求","menuJump":"列表","tableName":"xubaoqingqiu"}],"menu":"续保请求管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","打印","导出"],"menu":"报销记录","menuJump":"列表","tableName":"baoxiaojilu"}],"menu":"报销记录管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看"],"menu":"报销到账","menuJump":"列表","tableName":"baoxiaodaozhang"}],"menu":"报销到账管理"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看"],"menu":"消费记录","menuJump":"列表","tableName":"xiaofeijilu"}],"menu":"消费记录管理"},{"child":[{"appFrontIcon":"cuIcon-qrcode","buttons":["查看"],"menu":"学生提醒","menuJump":"列表","tableName":"xueshengtixing"}],"menu":"学生提醒管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-medal","buttons":["查看","参保申请"],"menu":"保险信息列表","menuJump":"列表","tableName":"baoxianxinxi"}],"menu":"保险信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
