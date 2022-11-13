import { IProduct } from './../../../../models/product.model';
import { IDashboardReports } from './../../../../models/dashboard-reports.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/user.model';
@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})

export class TableInfoComponent implements OnInit {
  @Input() type: "recent_sales" | "top_selling" | "products" | "users" | undefined;
  @Input() data: IDashboardReports | undefined;
  @Input() products: IProduct[] | undefined;
  @Input() users: IUser[] | undefined;
  @Output() notifyEditProductToGrandParent = new EventEmitter();
  @Output() notifyCreateProductToGrandParent = new EventEmitter();
  selectedProduct: IProduct | undefined;

  constructor() { }

  ngOnInit(): void { }

  handleSelectProduct(product: IProduct) {
    this.selectedProduct = product;
  }

  handleEditProduct(product: IProduct) {
    this.notifyEditProductToGrandParent.emit(product);
  }

  handleDeleteProduct(product: IProduct) {
    this.notifyCreateProductToGrandParent.emit(product.id);
    /* window.location.reload(); */
  }

}
