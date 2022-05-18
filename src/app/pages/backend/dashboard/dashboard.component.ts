import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // สร้างตัวแปรเพื่อรับค่าจาก api
  dataProduct:any = []

  constructor( public api:ProductService) { }

  ngOnInit(): void {
    // เรียก API
    // => ( arrow function หมายถึง return แบบไม่ต้องพิมพ์)
    this.api.getProducts().subscribe((data:{}) => {
      console.log(data)
      this.dataProduct = data;
    })
  }

}
