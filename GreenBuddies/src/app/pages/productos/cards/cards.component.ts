import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  ngOnInit(): void {
  }
  
  @Input() dataEntrante: IProduct | undefined;

    constructor() { }

}
