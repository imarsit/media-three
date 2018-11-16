module.exports = {
	// 模版标识
	name: 'example',
	// 模版引擎
	engine: 'pug',

	// 页面
	pages: [
		{
			name: '首页',
			// 路径
			path: '/',
			// 预览图
			thumbnail: 'home.png',
		},
		{
			name: '案例详情',
			// 路径
			path: '/cases_show',
			// 预览图
			thumbnail: 'cases_show.png',
		},
		{
			name: '经典案例',
			// 路径
			path: '/cases',
			// 预览图
			thumbnail: 'cases.png',
		},
		{
			name: '新闻详情',
			// 路径
			path: '/news_show',
			// 预览图
			thumbnail: 'news_show.png',
		},
		{
			name: '联系我们',
			// 路径
			path: '/contact',
			// 预览图
			thumbnail: 'contact.png',
		},
		{
			name: '新闻中心',
			// 路径
			path: '/news',
			// 预览图
			thumbnail: 'news.png',
		},
		{
			name: '服务客户',
			// 路径
			path: '/customer',
			// 预览图
			thumbnail: 'customer.png',
		},
		{
			name: '服务范围',
			// 路径
			path: '/service',
			// 预览图
			thumbnail: 'service.png',
		},
		{
			name: '关于我们',
			// 路径
			path: '/about',
			// 预览图
			thumbnail: 'about.png',
		}
	]
}
