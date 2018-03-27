import {Component, OnInit} from '@angular/core';
import {InitService} from '../../service/init.service';
import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';

@Component({
  selector: 'app-coubuy',
  templateUrl: './coubuy.component.html',
  styleUrls: ['./coubuy.component.scss']
})
export class CoubuyComponent implements OnInit {
  machine = {
    mcode: '',
    appid: '',
    client: '',
    aux: '',
    sn: '',
  };
  card = {
    cardno: '',
    mqttpswd: '',
    namount: 0,
    red_packet: 0,
  };
  room: any = {
    update_time: '',
    storename: '',
    logo: '',
    address_phone: '',
    mobile: '',
    address_name: '',
    storeaddr: '',
    description: ''
  };
  // 暂时用不上
  // hotel = {
  //   name: '',
  //   tel: '',
  //   logo: '',
  // };
  history = {
    ordernum: '',
    status: '',
    client: '',
    amount: '',
    create_time: '',
    count: ''
  };
  links = [];
  linksCeshi: any;
  // cardNum: string;
  linkArr = [];
  linksArr = [];
  constructor(private _init: InitService) {
  }

  ngOnInit() {
      this._init.getInit().then(res => {
        this.machine = res.json().result;
        // console.log(res.json().result);
        // console.log(this.machine);
        // 获取卡信息
        this._init.getCard().then(res2 => {
          this.card = res2.json().result;
          // console.log(this.card);
          // this.cardNum = res2.json().result.cardno;
        });
        // 获取酒店信息
        this._init.getAddr(this.machine.mcode).then(res4 => {
          this.room = res4.json().result;
          // console.log(this.room);
        })
        // 获取钩哒外链信息
        this._init.getLinks(this.machine.mcode).then(res6 => {
          this.links = res6.json().result;
          // console.log(this.links);
          // 返回一个带有update_time多余属性的对象。先切掉多余对象。
          for(var key in this.links){
            if (key == 'update_time') {
              delete this.links[key];
              }
            }
            // console.log(this.links);
            // 装入数组
            for (var i in this.links) {
                this.linkArr.push(this.links[i]); 
            }
            // console.log(this.linkArr);
            // 因为数组里面是封装的是字符串，切掉""这个。
            if (this.linkArr) {
              for (var j in this.linkArr) {
                this.linksArr[j] = JSON.parse(this.linkArr[j]+'');
                // console.log(this.linksArr);
              }
            }
        })
      });
  }
}
