import { IProduct } from './../../../../models/product.model';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit, OnChanges {
  @Input() product: IProduct | undefined;
  @Output() editProductEvent = new EventEmitter<IProduct>();
  @Output() createProductEvent = new EventEmitter<IProduct>();
  @Input() type: "edit" | "create" | "" = "";
  @Input() id: string = "formC";
  error: string | undefined;

  constructor() { }

  ngOnInit(): void { };

  ngOnChanges(): void { }

  editProduct(product: IProduct) {
    this.editProductEvent.emit(product);
  }

  handleCloseBtn() {
    window.location.reload();
  }

  handleNewProduct(product: IProduct) {
    if (product.nombre && product.stock && product.precio_con_descuento || product.precio_sin_descuento) {
      console.log(`Desde edit-form.component${product}`);
      this.createProductEvent.emit(product);
      window.location.reload();
    } else {
      this.error = "Los campos con * son obligatorios";
      setTimeout(() => {
        this.error = undefined;
      }, 2500);
    }
  }

}
