import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InitService } from '../../service/init.service';
@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
  routeUrl: any;
  detailProduct = [];
  detailShopping = [];
  amount: number;
  ordernumber: number;
  isShowing: Boolean = false;
  type: number;
  symbol: String;
  no3: any;
  constructor(private location: Location,
              private route: ActivatedRoute,
              private _init: InitService) {
   }
  ngOnInit() {
    this.getOrderNumber();
  }
  toBackPrev() {
    this.location.back();
  }
  toShow() {
    if (this.isShowing === false) {
      this.isShowing = true;
    } else {
      this.isShowing = false;
    }
  }
  // 封装拿订单号方法
  getOrderNumber() {
         // 拿到路由地址上的卡号信息
     this.route.params.subscribe((data: any) => {
      this.routeUrl = data.ordernum;
      // console.log(this.routeUrl);
      this._init.getOrdernumDetailNew(this.routeUrl).then(res => {
        // console.log(res.json());
        this.no3 = res.json().result.no3;
        this.type = res.json().result.type;
        // console.log(this.type);
        if (this.type == 0) {
          this.symbol = "-";
        }else {
          this.symbol = "+";
        }
        // console.log(this.symbol);
        this.detailProduct = res.json().result.wl;
        this.detailShopping = res.json().result.item;
        // console.log(this.detailShopping);
        // console.log(this.detailProduct);
        this.amount = res.json().result.amount;
        this.ordernumber = res.json().result.ordernum;
        // console.log(this.amount);
      })
    });
  }
}
