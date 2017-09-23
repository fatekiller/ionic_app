export class Apis {
  constructor() {

  }
  private static baseUrl: string = "http://localhost:8100/mobcent/app/web/index.php?r="

  public static login: string = Apis.baseUrl + 'user/login'

  public static getTopicList: string = Apis.baseUrl + 'forum/topiclist'

  public static getForumList: string = Apis.baseUrl + 'forum/forumlist'

  public static getTopicDetail: string = Apis.baseUrl + 'forum/postlist'
}
