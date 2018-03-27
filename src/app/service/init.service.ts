import {Inject, Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {CookiesService} from './cookies.service';
import {environment} from '../../environments/environment';


@Injectable()
export class InitService {
  private headers = new Headers({
    'Content-Type': 'application/json; charset=UTF-8',
    'x-access-token': this._cookie.getCookie('i')
  });
  uri = environment.production ? 'http://oauth.counect.com/' : '/';
  // 'http://oauth.counect.com/';

  constructor(private http: Http,
              private _cookie: CookiesService) {
  }
  getInit(): Promise<any> {
    const uri = `${this.uri}api/init?num=`+Math.random();
    return this.http
      .get(uri, {headers: this.headers})
      .toPromise();
  }
  // 通过Appid获取mcode
  getMcode(): Promise<any> {
    const uri = `${this.uri}api/mkfpage/mcodeByAppid`;
    console.log(this.uri);
    console.log(this.headers);
    return this.http.post(uri, {headers: this.headers})
    .toPromise();
  }
// 获取酒店信息模板
  getAddr(mcode): Promise<any> {
    const body = {
      'data': {
        'mcode': mcode
      }
    };
    const uri = `${this.uri}api/mkfpage/address`;
    return this.http
    .post(uri, JSON.stringify(body), {headers: this.headers})
    .toPromise();
  }
  
 // 获取卡号信息
  getCard(): Promise<any> {
    const uri = `${this.uri}api/card/info`;
    return this.http
      .get(uri, {headers: this.headers})
      .toPromise();
  }
  // 获取钩哒外链信息
  getLinks(mcode): Promise<any> {
    const body = {
      'data': {
        'mcode': mcode,
      }
    };
    const uri = `${this.uri}api/mkfpage/app`;
    return this.http
      .post(uri, JSON.stringify(body), {headers: this.headers})
      .toPromise();
  }
  // 获取个人历史订单
  getOrderHistory(cardno:any, page: number): Promise<any> {
    const body = {
      "data":{
          "page": page,
          "pageSize": 15,
          "step": "start",
          "cardno": cardno,
      }
  }
    const uri = `${this.uri}api/card/order/search`;
    return this.http
    .post(uri, JSON.stringify(body), {headers:this.headers})
    .toPromise();
  }
  // 获取个人历史订单详情
  getOrdernumDetailNew(ordernum: string): Promise<any> {
    const body = {
      "data": {
        "ordernum": ordernum
      },
    }
    const uri = `${this.uri}api/card/order/detail`;
    // console.log(ordernum);
    return this.http
    .post(uri, JSON.stringify(body), {headers: this.headers})
    .toPromise();
  }


  // 之前的接口 酒店信息等
  // getAddr(appid): Promise<any> {
  //   const body = {
  //     'data': {
  //       'appid': appid,
  //     },
  //     'sign': '1234'
  //   };
  //   const uri = `${this.uri}api/kfpage/addr`;
  //   return this.http
  //     .post(uri, JSON.stringify(body), {headers: this.headers})
  //     .toPromise();
  // }
  // getHotel(appid): Promise<any> {
  //   const body = {
  //     'data': {
  //       'appid': appid,
  //     },
  //     'sign': '1234'
  //   };
  //   const uri = `${this.uri}api/kfpage/sellers`;
  //   return this.http
  //     .post(uri, JSON.stringify(body), {headers: this.headers})
  //     .toPromise();
  // }
  // getLinks(appid): Promise<any> {
  //   const body = {
  //     'data': {
  //       'appid': appid,
  //     },
  //     'sign': '1234'
  //   };
  //   const uri = `${this.uri}api/kfpage/links`;
  //   return this.http
  //     .post(uri, JSON.stringify(body), {headers: this.headers})
  //     .toPromise();
  // }
  // 获取历史订单信息
   getShoppingHistory(cardno:any, page: number): Promise<any> {
    const uri = `${this.uri}api/card/order?cardno=${cardno}&page=${page}&pageSize=10`;
    // console.log(cardno);
    return this.http
    .get(uri, {headers:this.headers})
    .toPromise();
  }

  // 查询个人信息
  getUserInfo(cardno: string): Promise<any> {
    const uri = `${this.uri}api/card/query?cardno=${cardno}`;
    // console.log(cardno);
    // const uri = `${this.uri}api/cardno/query?cardno=1010000092738941`;
    return this.http
    .get(uri, {headers: this.headers})
    .toPromise();
  }
  // 更新个人信息
  getUpdateInfo(name: string, gender: number, tel: string): Promise<any> {
    const body = {
      'data': {
        'name': name,
        'pic': '图片',
        'gender':gender,
        'tel': tel
      },
      'sign':'1234'
    }
    // console.log(body);
    const uri = `${this.uri}api/card/update`;
    return this.http
    .post(uri, JSON.stringify(body), {headers: this.headers})
    .toPromise();
  }

  // 请求每一个订单号下的订单详情
  getOrdernumDetail(ordernum: string): Promise<any> {
    const uri = `${this.uri}api/card/detail?ordernum=${ordernum}`;
    // console.log(ordernum);
    return this.http
    .get(uri, {headers: this.headers})
    .toPromise();
  }
}
