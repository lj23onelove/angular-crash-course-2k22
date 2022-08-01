import { Component } from '@angular/core';
import {IProduct} from "./models/product";
import {products as data} from "./data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-course-2022';

  products: IProduct[] = data;
}
