import {Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isActive_1: Boolean = false;
  isActive_2: Boolean = false;
  isActive_3: Boolean = false;
  constructor() {}

  ngOnInit() {
    // 默认激活
    this.isActived(0);
  }
  isActived(i: number) {
    if (i === 0) {
      this.isActive_1 = true;
      this.isActive_2 = false;
      this.isActive_3 = false;
    } else if (i === 1) {
      this.isActive_1 = false;
      this.isActive_2 = true;
      this.isActive_3 = false;
    } else if ( i === 2) {
      this.isActive_1 = false;
      this.isActive_2 = false;
      this.isActive_3 = true;
    }
  }
}
