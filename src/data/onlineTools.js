const categories = {
    c1: '前端工具',
    c2: '常用工具',
    c3: '其他工具',
};
const tags = {
    t1: 'CSS工具',
    t2: '生成器',
    t3: '头像',
    t4: '图床',
};
export const onlineTools = [
    {
        name: 'cssmatic',
        imgSrc: 'https://www.cssmatic.com/img/cssmatic-logo.svg',
        imgAlt: 'www.cssmatic.com',
        link: 'https://www.cssmatic.com/box-shadow?ref=kolosek.com',
        desc: '一个CSS工具网站，提供多种实用效果代码生成，如阴影,渐变色生成',
        tags: [tags.t1],
        categories: [categories.c1, categories.c2],
    },
    {
        name: '哈希头像生成器',
        imgSrc: 'https://img2.imgtp.com/2024/02/13/yqahgTlq.png',
        imgAlt: '',
        link: 'http://www.atoolbox.net/Tool.php?Id=1038',
        desc: '',
        tags: [tags.t2, tags.t3],
        categories: [categories.c3],
    },
    // 图床类
    {
        name: '薄荷图床',
        imgSrc: '',
        imgAlt: '',
        link: 'https://zixiaoyun.com/',
        desc: ' 免费版链接有效期为 3天，单个文件最大 5MB，单次可批量上传 10个，免费版不支持上传二维码图片。会员版链接长期有效。单个文件最大5MB，单次可批量上传10个，国内备案牌照公司运营，支持上传超多格式的文件外链工具，我们致力于将外链变成简单的事',
        tags: [tags.t4],
        categories: [categories.c3],
    },
    {
        name: 'imgtp图床',
        imgSrc: '',
        imgAlt: '',
        link: 'https://imgtp.com/',
        desc: '最大可上传 6.00 MB 的图片，单次同时可选择 10 张。免费且不压缩图片画质的公共图床平台',
        tags: [tags.t4],
        categories: [categories.c3],
    },
    {
        name: 'SM.MS图床',
        imgSrc: '',
        imgAlt: '',
        link: 'https://smms.app/',
        desc: '最大可上传 5.00 MB 的图片，单次同时可选择 10 张。知名idc xtom旗下的产品，包括v.ps , sb.sb , u.sb的域名持有者但比较可惜的sm.ms 在中国大陆无法访问，但可以选择备用域名',
        tags: [tags.t4],
        categories: [categories.c3],
    },
    {
        name: 'MJJ.TODAY图床',
        imgSrc: '',
        imgAlt: '',
        link: 'https://mjj.today/',
        desc: '目前免注册 最大支持10 MB,有大陆优化线路,使用联通（4837）与大陆用户连接,长期霸榜搜索引擎前列',
        tags: [tags.t4],
        categories: [categories.c3],
    },
];
