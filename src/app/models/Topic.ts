export class Topic {
    board_id: number//板块id
    board_name: string //板块名称
    topic_id: number//帖子id
    type: string//帖子类型
    title: string//标题 "搜狐面试体验极差，什么玩意啊",
    user_id: number//作者id 113099,
    user_nick_name: string//作者昵称 "徐州易",
    userAvatar: string//头像id "http://bbs.uestc.edu.cn/uc_server/avatar.php?uid=113099&size=middle",
    last_reply_date: any //最新回复时间 "1505485215000",
    vote: number//是否投票贴 0,
    hot: number//是否热帖 0,
    hits: number//点击数 2187,
    replies: number//回复数量 76,
    essence: number// 0,
    top: number//是否置顶 0,
    status: number// 32,
    subject: string// "搜狐今天现场面，面试官一直玩手机？？  玩着手机及问  ",
    pic_path: string//图片路径 "",
    ratio: string //"1",
    gender: number//性别 0,
    userTitle: string//用户组 "泥鳅 (Lv.4)",
    recommendAdd: number//点赞数 14,
    special: number// 0,
    isHasRecommendAdd: number//当前用户是否点赞 0,
    imageList: Array<any> // [],
    sourceWebUrl: string// "http://bbs.uestc.edu.cn/forum.php?mod=viewthread&tid=1683473",
}