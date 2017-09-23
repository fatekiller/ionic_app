import { Injectable } from '@angular/core';
import { CommonHttpService } from "./commonHttpService";
import { Apis } from "./Apis";
import { TopicDetail } from "../models/TopicDetail";
import { Const } from "./VALUES";

@Injectable()
export class PostService {
    constructor(public commonService: CommonHttpService) {

    }
    getPost(page, topicId) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        paraList.push({ name: 'topicId', value: topicId });
        if (Const.user) {
            paraList.push({ name: 'accessSecret', value: Const.user.secret });
            paraList.push({ name: 'accessToken', value: Const.user.token });
        }
        let promise = this.commonService.commonPost(Apis.getTopicDetail, paraList).then((result) => { return result as TopicDetail });
        return promise;
    }
}