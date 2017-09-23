import { Injectable } from '@angular/core';
import { CommonHttpService } from "./commonHttpService";
import { Apis } from "./Apis";
import { Const } from "./VALUES";


@Injectable()
export class TopicService {
    constructor(public commonService: CommonHttpService) {

    }

    private getTopic(paraList) {
        if (Const.user) {
            paraList.push({ name: 'accessSecret', value: Const.user.secret });
            paraList.push({ name: 'accessToken', value: Const.user.token });
        }
        let promise = this.commonService.commonPost(Apis.getTopicList, paraList).then((result) => { return { sum: result.total_num, list: result.list } });
        return promise;
    }

    getHotTopic(page) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        return this.getTopic(paraList);
    }

    getNewTopics = function (page) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        paraList.push({ name: 'sortby', value: 'new' });
        return this.getTopic(paraList);
    }



    getTopicByBoard(boardId, page) {
        let paraList: Array<any> = new Array<any>();
        paraList.push({ name: 'page', value: page });
        paraList.push({ name: 'pageSize', value: '10' });
        paraList.push({ name: 'boardId', value: boardId });
        return this.getTopic(paraList);
    }
}