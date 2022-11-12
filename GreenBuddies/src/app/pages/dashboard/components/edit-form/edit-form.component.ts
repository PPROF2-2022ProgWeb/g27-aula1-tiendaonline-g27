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
  constructor() { }

  ngOnInit(): void { };

  ngOnChanges(): void { }

  editProduct(product: IProduct) {
    this.editProductEvent.emit(product);
  }

  handleCloseBtn() {
    window.location.reload();
  }

}
