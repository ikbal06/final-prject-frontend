import { Injectable } from '@angular/core';
import{HttpClient}from "@angular/common/http"
import { Observable } from 'rxjs';
import { Product } from '../components/models/product';
import { listResponseModel } from '../components/models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44320/api/products/getall"
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<listResponseModel<Product>>{
    return this.httpClient.get<listResponseModel<Product>>(this.apiUrl) 
  }
}