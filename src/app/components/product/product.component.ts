import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;

  productTitle = 'Product #23';
  details = false;

  constructor() { }

  ngOnInit(): void {
  }

}
