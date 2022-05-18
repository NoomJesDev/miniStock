import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // API Url
  apiURL = "https://www.itgenius.co.th/sandbox_api/ministockapi/public/api/";

  constructor(private http:HttpClient) { }

  // Headers
  httpOptions = {
    header:new HttpHeaders({
      // บอกให้ Header ส่งข้อมูลระหว่างกันแบบ json / xml
      'Content-Type':'application/jsons'
    })
  }

  //  อ่านข้อมูล Products โดยใช้ Observable
 getProducts(): Observable<ProductModel>{
   return this.http.get<ProductModel>(this.apiURL+'products')
 }
}
